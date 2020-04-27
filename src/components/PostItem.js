import React from 'react';
import PropTypes from 'prop-types';


const PostItem = props => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );      
};

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    content:  PropTypes.string.isRequired

}; export default PostItem;