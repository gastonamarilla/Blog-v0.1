import React, { Component } from 'react';
import PostList from "../components/PostList.js";
import Logo from "../components/Logo/Logo.js"
class Home extends Component {
render(){
return(
    <div>
        <header>
        <Logo/>
        <h3>Bienvenidos a mi blog</h3>
        </header>
        <PostList/>
    </div>
)
}
}
export default Home;