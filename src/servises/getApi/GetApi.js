import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "19534260-87f0ecad02a26142ab72e3ef2";

const getPhoto = async (search, page = 1) => {
  return axios
    .get(
      `${BASE_URL}/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
export default getPhoto;
