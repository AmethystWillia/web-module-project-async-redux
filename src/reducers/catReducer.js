import { CAT_START, CAT_SUCCESS, CAT_FAILURE } from "../actions/catAction";

const initialState = {
    catPic: 'https://cdn2.thecatapi.com/images/alh.jpg',
    isFetching: false,
    error: '',
}

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case (CAT_START):
            return ({
                ...state,
                catPic: '',
                isFetching: true,
                error: '',
            });
        case (CAT_SUCCESS):
            return ({
                ...state,
                catPic: action.payload,
                isFetching: false,
                error: '',
            });
        case (CAT_FAILURE):
            return ({
                ...state,
                catPic: '',
                isFetching: false,
                error: action.payload,
            });
    };
};