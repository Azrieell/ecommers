import { createStore } from "vuex";
import auth from "./modules/auth";
import product from "./modules/product"
import categori from "./modules/categori";
import brand from "./modules/brand";
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    // donatur,
    // clients,
    // transaksi,
    // users,
    // berita,
    // product,
    // kategori,
    // surah,
    auth,
    product,
    categori,
    brand,
  },
});

export default store;