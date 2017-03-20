import Vue from 'vue'

Vue.filter('durationToTime', value => {
  let min = Number.parseInt(value / (60 * 1000), 10) + ''
  let seconds = Number.parseInt((value / 1000) % 60, 10) + ''
  min = min.length === 1 ? ('0' + min) : min
  seconds = seconds.length === 1 ? ('0' + seconds) : seconds
  return min + ':' + seconds
})

Vue.filter('playCount', value => {
  value += ''
  if (value.length >= 6) {
    return value.substr(0, value.length - 4) + '万'
  }
  return value
})

Vue.filter('unix2Time', time => {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return year + '-' + month + '-' + day
})

Vue.filter('splitTags', tags => {
  if (typeof tags === 'object') {
    return tags.join('/')
  }
  return ''
})

Vue.filter('timeToStr', time => {
  let min = Number.parseInt(time / 60, 10) + ''
  let seconds = Number.parseInt(time % 60, 10) + ''
  min = min.length === 1 ? ('0' + min) : min
  seconds = seconds.length === 1 ? ('0' + seconds) : seconds
  return min + ':' + seconds
})
