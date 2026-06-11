import axios from "axios";

const API = "https://6a2107e4b1d0aaf32b4e9ec3.mockapi.io/landing-content";

export const getLandingData = async () => {
  const response = await axios.get(API);
  return response.data;
};

 