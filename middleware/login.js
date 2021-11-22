export default ({ store, redirect }) => {
  if (store.getters['user/getRefreshToken'] !== null) {
    return redirect('/')
  }
}