const axios = require('axios');
const { APP_ID, BASE_URL_WEATHER } = require('../config');
const getWeekDay = require('../utils/getWeekDay');

async function current(req, res) {
  try {
    const citySended = req.params.city || ''
    const { data } = await axios.get(`http://ip-api.com/json/${citySended}`);
    const currentCity = req.params.city || data.city
    const response = await axios.get(`${BASE_URL_WEATHER}/data/2.5/weather?q=${currentCity}&${APP_ID}`)

    const result = {
      ...data,
      temp: response.data.main.temp,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
      weekDay: getWeekDay(response?.data?.dt),
      city: response.data.name
    }
    res.status(200).json(result)

  } catch (error) {
    res.status(200).json({ message: "Error en el servidor" })
  }
}

module.exports = {
  current
}