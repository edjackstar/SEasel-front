export default ({ store, redirect }) => {
  if (store.getters['user/getAccessToken'] === null) {
    return redirect('/login')
  } else {
    if(store.getters['user/getTokenData'].role!=="ADMIN")
      return redirect('/students')
  }
}