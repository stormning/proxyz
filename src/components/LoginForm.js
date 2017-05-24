import React, {Component} from 'react';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import {FormControl, FormGroup, FormLabel} from 'material-ui/Form';

class LoginForm extends Component {
    state = {
        name: '',
        pwd: ''
    };
    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        return (
            <FormControl>
                <FormGroup>
                    <FormLabel htmlFor="name">
                        用户名
                    </FormLabel>
                    <Input id="name" value={this.state.name} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="pwd">
                        密码
                    </FormLabel>
                    <Input id="pwd" value={this.state.pwd} onChange={this.handleChange}/>
                </FormGroup>
            </FormControl>
        )
    }
}

export default LoginForm;
