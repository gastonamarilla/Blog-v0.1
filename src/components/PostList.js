import React, {Component} from 'react';
import PostItem from './PostItem';


class PostList extends Component {
    render(){
        return(
            <div>
                <PostItem
                title="Blog v0.2"
                content="Primer proyecto en react"              
                />
                <PostItem
                title="Hoy toca seguir con el proyecto"
                content="Agregar barras de comentarios "
                />
            </div>
        )
    }
} 
export default PostList;