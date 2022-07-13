import reducer from './Compontent/Redux/reducer/Mainreducer';
import { configureStore } from '@reduxjs/toolkit';
const store=configureStore({
    reducer
}
    );
export default store;