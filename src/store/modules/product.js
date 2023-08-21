import axios from "axios";

const product = {
  namespaced: true,
  state : {
    dataProducts: [],
    getproductid : []
  },
  getters: {
    getProducts: (state) => state.dataProducts,
  },
  actions: {
    async fetchProducts({
      commit
    }) {
      try {
        const data =
          await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search")
        commit('SET_PRODUCTS', data.data["products"]["data"])
      } catch (error) {
        alert('Ada Error');
        console.log(error);
      }
    },
    async fetchProductsid({commit }, slug) {
      try {
        const data =
          await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`)
        commit('SET_PRODUCTSid', data.data["products"]["data"])
      } catch (error) {
        alert('Ada Error');
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, product) {
      state.dataProducts = product
    },
    SET_PRODUCTSid(state, product) {
      state.getproductid = product
    },
  },
}

export default product