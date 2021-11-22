export default ({ store, redirect }) => {
  if (store.getters['user/getAccessToken'] === null) {
    return redirect('/login')
  }
}