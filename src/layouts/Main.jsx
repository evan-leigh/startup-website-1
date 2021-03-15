import React from 'react';
import Header from './Header'

const Main = (props) => (
    <div id="main">
        <Header brandName="Brand Identity" itemOne="About" itemTwo="Services" itemThree="Case Studies" itemFour="FAQ"/>
        {props.children}
    </div>
);

export default Main;