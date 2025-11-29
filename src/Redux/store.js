import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartReducer'

// new added code for making the content to be saved. if the user refresh the page it couldn't lose data from the cart

import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist"

const persistConfig = {
    key: "root", storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        Cart: persistedReducer
    }
})

export const persistor = persistStore(store);