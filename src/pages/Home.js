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
            <div className>
                <input/>
                <img src={require("../images/icons/iconfinder_icon-111-search_314478.png")} alt="Search"/>
            </div>
        <PostList/>
    </div>
)
}
}
export default Home;