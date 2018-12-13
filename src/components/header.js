import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';



export default function Header(props) {


if (props.what === true) {
    return (<InfoModal what={props.what}
        asdf={props.asdf}/>)
}

    // const loggedIn = this.props.what;


    return (
        


        <header>

<TopNav what={props.what}
            onClick={props.onClick}
            handleNewGame={props.handleNewGame}
            />

<h1>HOT or COLD</h1>

{/* 
            {loggedIn? (
            <InfoModal what={props.what}
            onClick={props.onClick}/>
            ):(
            <TopNav what={props.what}
            onClick={props.onClick}
            />)}
            <h1>HOT or COLD</h1> */}
        </header>
    );
};
