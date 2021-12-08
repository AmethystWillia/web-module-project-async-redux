// ---------- Imports ---------- //
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCat } from '../actions/catAction';

// ---------- Component ---------- //
const Cat = (props) => {
    const { catPic, isFetching, error } = props;
    const loadGif = 'https://aws1.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif'

    useEffect (() => {
        props.getCat();
    }, []);

    const handleClick = () => {
        props.getCat();
    };

    if (error) {
        return (
            <div>
                <h2>Oops! We got an error!</h2>
                <p>{error}</p>
            </div>
        );
    };

    if (isFetching) {
        return (
            <div>
                <h2>Grabbing a cat...</h2>
            </div>
        );
    };

    // Renders content
    return (
        <div>
            <h2>Generate a Cat!</h2>
            <img width='500' src={catPic}/>
            <button onClick={handleClick}>Get Cat!</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        catPic: state.catPic,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { getCat }) (Cat);