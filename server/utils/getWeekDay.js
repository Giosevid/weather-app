function getWeekDay(date) {
  return new Date(date * 1000).toLocaleString('en-US', {weekday: 'long'})
}

module.exports = getWeekDay;