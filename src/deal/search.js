export default{
  single: function (data) {
    let list = []
    let result = {count: data.result.songCount}
    if (data.result.songCount > 0) {
      for (let item of data.result.songs) {
        let singer = ''
        let {
          name,
          mp3Url,
          duration,
          album: {
            name: albumName
          }
        } = item
        for (let item of item.artists) {
          singer += item.name + ' '
        }
        list.push({name, mp3Url, duration, albumName, singer})
      }
      result = {list, count: data.result.songCount}
    }
    return result
  },
  singer: function (data) {
    let list = []
    let result = {count: data.result.artistCount}
    if (data.result.artistCount > 0) {
      for (let item of data.result.artists) {
        let {
          img1v1Url: src,
          name
        } = item
        if (item.alias.length !== 0) {
          name += '(' + item.alias.join(',') + ')'
        }
        list.push({src, name})
      }
      result = {list, count: data.result.artistCount}
    }
    return result
  },
  ablum: function (data) {
    let list = []
    let result = {count: data.result.albumCount}
    if (data.result.albumCount > 0) {
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
        list.push({src, name, singer})
      }
      result = {list, count: data.result.albumCount}
    }
    return result
  },
  songlist: function (data) {
    let list = []
    let result = {count: data.result.playlistCount}
    if (data.result.playlistCount > 0) {
      for (let item of data.result.playlists) {
        let {
          name,
          trackCount: count,
          coverImgUrl: src,
          creator: {
            nickname
          }
        } = item
        list.push({src, name, count, nickname})
      }
      result = {list, count: data.result.playlistCount}
    }
    return result
  },
  user: function (data) {
    let list = []
    let result = {count: data.result.userprofileCount}
    if (data.result.userprofileCount > 0) {
      for (let item of data.result.userprofiles) {
        let {
          nickname,
          avatarUrl: src,
          gender,
          signature
        } = item
        list.push({src, nickname, gender, signature})
      }
      result = {list, count: data.result.userprofileCount}
    }
    return result
  }
}
