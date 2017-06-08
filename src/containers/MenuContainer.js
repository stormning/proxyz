import  Menu from '../components/layouts/Menu';
import {connectWithRouter} from '../components/Utils';
import * as Actions from '../actions/MenuActions'

export default connectWithRouter(Menu, {redirect: ['left', 'redirect']}, Actions);