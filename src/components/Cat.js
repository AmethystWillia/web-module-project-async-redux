// ---------- Imports ---------- //
import React from 'react';
import { connect } from 'react-redux';
import { catStart } from '../actions/catAction';

// ---------- Component ---------- //
const Cat = (props) => {
    const { catPic, isFecthing, error } = props;
    // Renders content
    return (
        <div>
            <h2>Generate a Cat!</h2>
            <button>Is a Button</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        catPic: state.catPic,
        isFecthing: state.isFecthing,
        error: state.error,
    };
};

export default connect(mapStateToProps, { catStart }) (Cat);