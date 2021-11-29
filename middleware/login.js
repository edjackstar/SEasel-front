export default ({ store, redirect }) => {
  if (store.getters['user/getRefreshToken'] !== null) {
    if(store.getters['user/getTokenData'].role==="ADMIN")
      return redirect('/admin/music_schools')
    else
      return redirect('/')
  }
}