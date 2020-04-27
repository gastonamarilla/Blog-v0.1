import React, { Component } from 'react';
import logo_blog from "../images/logo_blog.png";
class Home extends Component {
render(){
return(
    <div>
        <header>
        <img src={logo_blog} alt="logo_blog"/>
        </header>
    </div>
)
}
}
export default Home;