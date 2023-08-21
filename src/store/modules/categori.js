import axios from "axios";

const categori = {
  namespaced: true,
  state : {
    dataCategori: [],
  },
  getters: {
    getCategori: (state) => state.dataCategori,
  },
  actions: {
    async fetchCategori({
      commit
    }) {
      try {
        const data =
          await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories")
        commit('SET_CATEGORI', data.data['data'])
      } catch (error) {
        alert('Ada Error');
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CATEGORI(state, categori) {
      state.dataCategori = categori
    },
  },
}

export default categori