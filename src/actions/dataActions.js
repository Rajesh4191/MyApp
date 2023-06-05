import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FILTER_DATA,
  LOAD_MORE
} from '../constants/actionTypes';

const API_URL = 'https://nifty-kare-32d12b.netlify.app/treemenu.json';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    axios
      .get(API_URL)
      .then((response) => {
        console.log("check response", response.data)
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_FAILURE,
          payload: error.message
        });
      });
  };
};

export const filterData = (query) => {
  return {
    type: FILTER_DATA,
    payload: query
  };
};

export const loadMore = () => {
  return {
    type: LOAD_MORE
  };
};
