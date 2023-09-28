import { createStore, applyMiddleware } from "redux"; //aqui importamos el mw thunk
import thunk from "redux-thunk"; //es un mw, es una fx que se ejecuta cuando se realiza una solicitud
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;