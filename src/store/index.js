import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { MODULE_NAME as modalAddModuleName, modalAddReducer } from './modalAdd/modalAdd';
import { MODULE_NAME as productsModuleName, productsReducer } from './products/products';
import { MODULE_NAME as favoriteModuleName, favoriteReducer } from './favorite/favorite';
import { MODULE_NAME as cartModuleName, cartReducer } from './cart/cart';


const rootReducer = combineReducers({
    [modalAddModuleName]: modalAddReducer,
    [productsModuleName]: productsReducer,
    [favoriteModuleName]: favoriteReducer,
    [cartModuleName]: cartReducer,
    form: formReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;