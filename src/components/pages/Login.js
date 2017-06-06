import React, {Component} from 'react';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import {FormControl, FormGroup, FormLabel} from 'material-ui/Form';
import {connectWithRouter} from '../Utils';

const LoginForm = ({name, pwd}) => (
    <FormControl>
        <FormGroup>
            <FormLabel htmlFor="name">
                用户名
            </FormLabel>
            <Input id="name" value={name}/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="pwd">
                密码
            </FormLabel>
            <Input id="pwd" value={pwd}/>
        </FormGroup>
    </FormControl>
);

export default connectWithRouter(LoginForm);
