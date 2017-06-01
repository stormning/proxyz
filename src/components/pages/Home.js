import React, {Component} from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {Router, Link} from 'react-router-dom';


const Home = () => (
        <div>
            <h1>this is home</h1>
            go to <Link to="/dashboard">dashboard</Link>
        </div>
    )
;

export default Home;