import React from 'react';
import PropTypes from 'prop-types';


const PostItem = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );      
};

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    content:  PropTypes.string.isRequired

}; export default PostItem;