import Vue from 'vue'

Vue.filter('durationToTime', function (value) {
  let min = Number.parseInt(value / (60 * 1000), 10) + ''
  let seconds = Number.parseInt((value / 1000) % 60, 10) + ''
  min = min.length === 1 ? ('0' + min) : min
  seconds = seconds.length === 1 ? ('0' + seconds) : seconds
  return min + ':' + seconds
})

Vue.filter('playCount', function (value) {
  value += ''
  if (value.length >= 6) {
    return value.substr(0, value.length - 4) + '万'
  }
  return value
})
