const pagination = {
  state: {
    currentPage: 1,
    pageSize: 30
  },

  mutations: {
    SET_PAGE: (state, page) => {
      state.currentPage = page
    },
    SET_PAGE_SIZE: (state, pageSize) => {
      state.pageSize = pageSize
    }
  },
  actions: {
    SetUserListCurrentPage({ commit }, { page }) {
      return new Promise((resolve, reject) => {
        commit('SET_PAGE', page)
        resolve()
      })
    },
    SetPageSize({ commit }, { pageSize }) {
      return new Promise((resolve, reject) => {
        commit('SET_PAGE_SIZE', pageSize)
        resolve()
      })
    }
  }
}
export default pagination
