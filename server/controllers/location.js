const axios = require("axios");

async function location(req, res) {
  try{
    const citySended = req.params.city || ''
    const response = await axios.get(`http://ip-api.com/json/${citySended}`);
    res.status(200).json(response.data)
  }catch(err) {
    res.status(500).json({ message: "Error al conectar con el servidor" });
  }
}

module.exports = {
  location
}