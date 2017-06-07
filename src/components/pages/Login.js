import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import Button from 'material-ui/Button';
import {FormControl, FormGroup, FormLabel, FormHelperText} from 'material-ui/Form';
import {connectWithRouter} from '../Utils';
import Divider from 'material-ui/Divider';

import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';

import {history} from '../../store';

import '../../../assets/css/layouts/base.scss';

const styleSheet = createStyleSheet('LoginForm', theme => ({
    header: {
        height: '200px',
        backgroundColor: '#2B98F0',
        display: 'flex',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontSize: '28px',
        lineHeight: '100px',
        fontWeight: 'blod',
    },
    paper: {
        width: '480px',
        marginTop: '-100px',
        alignSelf: 'center'
    },
    loginTop: {
        color: '#ccc',
        fontSize: '28px',
        textAlign: 'center',
        padding: '40px 20px 10px'
    },
    loginContainer: {
        padding: '0px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    input: {
        margin: theme.spacing.unit
    },
    loginBtn: {
        margin: '20px',
        backgroundColor: '#2B98F0',
        color: '#fff',
        alignSelf: 'flex-end'

    }
}));

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: false
    };

    handleNameChange = event => {
        this.setState({name: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value, error: false});
    };

    handleLogin = event => {
        history.push('/dashboard')
    };

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.appContainer}>
                <div className={classes.header}>
                    <div className={classes.headerTitle}>Proxy Z</div>
                </div>
                <Paper className={classes.paper}>
                    <div className={classes.loginTop}>登陆</div>
                    <div className={classes.loginContainer}>
                        <FormControl className={classes.input}>
                            <InputLabel htmlFor="email">
                                邮箱
                            </InputLabel>
                            <Input id="email" value={this.state.email} onChange={this.handleNameChange}/>
                        </FormControl>
                        <FormControl className={classes.input} error={this.state.error}>
                            <InputLabel htmlFor="name">
                                密码
                            </InputLabel>
                            <Input id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                            {this.state.error && <FormHelperText>用户名或密码错误</FormHelperText>}
                        </FormControl>
                    </div>
                    <Divider/>
                    <Button className={classes.loginBtn} onTouchTap={this.handleLogin}>登陆</Button>
                </Paper>
            </div>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connectWithRouter(withStyles(styleSheet)(LoginForm));
