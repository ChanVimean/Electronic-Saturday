import axios from "axios"

const fetchAPI = async () => {
  const response = await axios("https://friday-json.onrender.com/product")
  return response.data;
}

export default fetchAPI