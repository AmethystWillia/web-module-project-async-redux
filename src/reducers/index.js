import { CAT_START, CAT_SUCCESS, CAT_FAILURE } from "../actions/catAction";

const initialState = {
  person: 'https://cdn2.thecatapi.com/images/alh.jpg',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(CAT_START):
      return ({
        ...state,
        person: {},
        isFetching: true,
        error: '',
      });
    case(CAT_SUCCESS):
      return ({
        ...state,
        person: action.payload,
        isFetching: false,
        error: '',
      });
    case(CAT_FAILURE):
      return ({
        ...state,
        person: {},
        isFetching: false,
        error: action.payload,
      });
    default:
      return state;
  }
};