export default{
  getList: function (data) {
    console.log(data)
    if (data.code !== 200) {
      return false
    }
    let {
      creator: {
        nickname,
        avatarUrl
      },
      trackCount,
      playCount,
      name,
      shareCount,
      commentCount,
      tracks,
      coverImgUrl,
      createTime,
      tags,
      subscribedCount,
      description
    } = data.result
    let list = []
    for (let item of tracks) {
      let {
        name,
        id,
        artists: [{name: singer}],
        album: {
          name: albumName
        },
        mp3Url,
        duration
      } = item
      list.push({name, id, singer, albumName, mp3Url, duration})
    }
    avatarUrl += '?param=40y40'
    coverImgUrl += '?param=200y200'
    return {nickname, avatarUrl, trackCount, playCount, name, shareCount, commentCount, coverImgUrl, createTime, tags, subscribedCount, description, list}
  }
}
