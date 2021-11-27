export default ({ store, redirect }) => {
  if (store.getters['user/getRefreshToken'] !== null) {
    return redirect('/admin/music_schools')
    if(store.getters['user/getTokenData'].role==="ADMIN")
      return redirect('/admin/music_schools')
    else
      return redirect('/')
  }
}