const axios = require("axios");
const { chain, groupBy } = require("lodash");
const getWeekDay = require("../utils/getWeekDay");
const { APP_ID, BASE_URL_WEATHER } = require("../config");
const current = require("./current");

async function forecast(req, res) {
  try {
    const citySended = req.params.city || ''
    const { data: { city } } = await axios.get(`http://ip-api.com/json/${citySended}`);
    const finalCity = citySended || city
    const {data} = await axios.get(`${BASE_URL_WEATHER}/data/2.5/forecast?q=${finalCity}&units=metric&appid=${APP_ID}`)
    const [today, ...list] = data?.list;
    const hash = {};
    const result = {
      temp: today.main.temp,
      temp_max: today.main.temp_max,
      temp_min: today.main.temp_min,
      city: data.city.name,
      weekDay: getWeekDay(today.dt),
      list: chain(list).map(element => ({...element, weekDay: getWeekDay(element.dt)})).filter(current => {
        let go = current.weekDay !== undefined && String(current.weekDay)
        let exists = !hash[go] || false;
        hash[go] = true;
        return exists;
      })
    }
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: "Error al conectar con el servidor" });
  }
}

module.exports = {
  forecast
}