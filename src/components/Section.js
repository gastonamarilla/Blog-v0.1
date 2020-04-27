import React, { Component } from 'react';
import Background from '../images/Background.jpg';



var sectionStyle = {
    width: "200%",
    height: "500px",
    backgroundImage: "url(" + Background + ")"


};


class Section extends Component {
render(){
    return(
        <section style={sectionStyle}>
        </section>
    );
};
}export default Section;