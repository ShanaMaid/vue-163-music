let objectIsNull = (obj) => {
  for (let item in obj) {
    return !item
  }
  return true
}

export default{
  single: (data) => {
    let list = []
    let count = data.result.songCount
    if (count === 0) {
      return {list, count}
    }
    for (let item of data.result.songs) {
      let singer = ''
      let {
        name,
        mp3Url,
        duration,
        id,
        album: {
          name: albumName
        }
      } = item
      for (let item of item.artists) {
        singer += item.name + ' '
      }
      list.push({name, mp3Url, duration, id, albumName, singer})
    }
    return {list, count}
  },
  singer: (data) => {
    let list = []
    let count = data.result.artistCount
    if (count === 0) {
      return {list, count}
    }
    for (let item of data.result.artists) {
      let {
        img1v1Url: src,
        name
      } = item
      if (item.alias.length !== 0) {
        name += '(' + item.alias.join(',') + ')'
      }
      src += '?param=40y40'
      list.push({src, name})
    }
    return {list, count}
  },
  ablum: (data) => {
    let list = []
    let count = data.result.albumCount
    if (count === 0) {
      return {list, count}
    }
    for (let item of data.result.albums) {
      let {
        blurPicUrl: src,
        name
      } = item
      let singer = []
      for (let artist of item.artists) {
        singer.push(artist.name)
      }
      singer = singer.join(',')
      if (item.alias.length !== 0) {
        name += '(' + item.alias.join(',') + ')'
      }
      src += '?param=40y40'
      list.push({src, name, singer})
    }
    return {list, count}
  },
  songlist: (data) => {
    let list = []
    let count = data.result.playlistCount
    if (count === 0) {
      return {list, count}
    }
    for (let item of data.result.playlists) {
      let {
        name,
        trackCount: count,
        coverImgUrl: src,
        creator: {
          nickname
        }
      } = item
      src += '?param=40y40'
      list.push({src, name, count, nickname})
    }
    return {list, count}
  },
  user: (data) => {
    let list = []
    let count = data.result.userprofileCount
    if (count === 0) {
      return {list, count}
    }
    for (let item of data.result.userprofiles) {
      let {
        nickname,
        avatarUrl: src,
        gender,
        signature
      } = item
      src += '?param=40y40'
      list.push({src, nickname, gender, signature})
    }
    return {list, count}
  },
  station: (data) => {
    console.log(data)
    let station = []
    let list = []
    if (objectIsNull(data.result)) {
      return {list, count: 0}
    }
    let count = data.result.djprogramCount
    for (let item of data.result.djRadios) {
      let {
        picUrl: src,
        name,
        dj: {
          nickname
        }
      } = item
      station.push({src, nickname, name})
    }
    for (let item of data.result.djprograms) {
      let {
        coverUrl: src,
        name,
        listenerCount,
        mainSong: {
          mp3Url,
          id,
          artists: [{name: singer}]
        },
        duration,
        dj: {
          brand
        },
        serialNum
      } = item
      src += '?param=40y40'
      list.push({src, name, listenerCount, mp3Url, id, duration, brand, singer, serialNum})
    }
    return {station, list, count}
  },
  mv: (data) => {
    let list = []
    if (objectIsNull(data.result)) {
      return {list, count: 0}
    }
    let count = data.result.mvCount
    for (let item of data.result.mvs) {
      let {
        id,
        name,
        cover: src,
        artists: [{name: nickname}],
        playCount,
        duration
      } = item
      src += '?param=140y140'
      list.push({id, src, name, nickname, playCount, duration})
    }
    return {list, count}
  }
}
