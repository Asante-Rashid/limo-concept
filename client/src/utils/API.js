import axios from "axios";

export default {
  // Gets all books
  createCheckout: function() {
    return axios.post("/api/create-checkout-session");
  },
};
