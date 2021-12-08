export const CAT_START = 'CAT_START';
export const CAT_SUCCESS = 'CAT_SUCCESS';
export const CAT_FAILURE = 'CAT_FAILURE';

export const catStart = () => {
    return ({type: CAT_START});
};
export const catSuccess = (person) => {
    return ({type: CAT_SUCCESS, payload: person});
};
export const catFailure = (error) => {
    return ({type: CAT_FAILURE, payload: error});
};