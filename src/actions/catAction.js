import axios from "axios";

export const CAT_START = 'CAT_START';
export const CAT_SUCCESS = 'CAT_SUCCESS';
export const CAT_FAILURE = 'CAT_FAILURE';

export const getCat = () => {
    return (dispatch) => {
        dispatch({type: CAT_START});

        axios.get('https://thatcopy.pw/catapi/rest/')
        .then(resp => {
            dispatch({type: CAT_SUCCESS, payload: (resp.data.url)});
        })
        .catch(err => {
            dispatch({type: CAT_FAILURE, payload: (err)});
        });
    };
};

export const catStart = () => {
    return ({type: CAT_START});
};
export const catSuccess = (person) => {
    return ({type: CAT_SUCCESS, payload: person});
};
export const catFailure = (error) => {
    return ({type: CAT_FAILURE, payload: error});
};