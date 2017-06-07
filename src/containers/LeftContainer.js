import  Left from '../components/layouts/Left';
import {connectWithRouter} from '../components/Utils';
import * as Actions from '../actions/LeftActions'

export default connectWithRouter(Left, {redirect: ['left', 'redirect']}, Actions);