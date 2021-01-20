import axios from "axios";
import React, { useState } from "react";
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19534260-87f0ecad02a26142ab72e3ef2';

const initialState = {
  images: [],
  page: 1,
  search: "",
};


const getPhoto = async (search, page) => {
    const result = await axios.get(${BASE_URL}/?image_type=photo&orientation=horizontal&q=${ search } & page=${ page } & per_page=12 & key=${ API_KEY }`).then(response => this.setState({ articles: response.data.hits }));;
  setState((prev) => ({...prev image:[...prev.images, ...result]}));
}
console


