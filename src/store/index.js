import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

const store = createStore(combineReducers({

    form: formReducer
}));

export default store;