import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FILTER_DATA,
    LOAD_MORE
  } from '../constants/actionTypes';
  
  const initialState = {
    loading: false,
    error: null,
    data: [],
    filteredData: [],
    visibleData: [],
    page: 1,
    perPage: 10
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          filteredData: action.payload,
          visibleData: action.payload.slice(0, state.perPage),
          page: 1
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case FILTER_DATA:
        const filtered = state.data.filter((item) =>
          item.key.toLowerCase().includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          filteredData: filtered,
          visibleData: filtered.slice(0, state.perPage),
          page: 1
        };
      case LOAD_MORE:
        const nextPage = state.page + 1;
        const endIdx = state.perPage * nextPage;
        const newData = state.filteredData.slice(0, endIdx);
        return {
          ...state,
          visibleData: newData,
          page: nextPage
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  