import React, { Component } from 'react';
import {Link} from  "react-router-dom";



class Header extends Component {
render(){
return(
    <header>
    <div>
        <h1>Hello</h1>
        <h1>---------------------------------------------------------</h1>
        <nav className="nav">
            <Link to= "/">Home </Link>
            <Link to= "/about">About </Link>
            <Link to= "/contact">Contact.</Link>
        </nav>
    </div>
    </header>
)
}
}
export default Header;