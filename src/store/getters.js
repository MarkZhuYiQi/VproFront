const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  // pagination
  currentPage: state => state.pagination.currentPage,
  pageSize: state => state.pagination.pageSize
}
export default getters
