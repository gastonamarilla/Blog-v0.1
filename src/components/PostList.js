import React, {Component} from 'react';
import PostItem from './PostItem';


class PostList extends Component {
    render(){
        return(
            <div>
                <PostItem
                    title = "Blog v0.1" 
                    content="Mi primer blog practicando con react"/>
            </div>
        )
    }
} 
export default PostList;