import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import cartSlice from './slices/cartSlice'
import orderSlice from './slices/orderSlice'
import productSlice from './slices/productSlice'
import userSlice from './slices/userSlice'
import filterSlice from './slices/filterSlice'
import pageSlice from './slices/pageSlice'
import searchSlice from './slices/searchSlice'
import adminSlice from './slices/adminSlice'

const userReducer = userSlice
const userConfig = {
    key: 'user',
    storage,
}
const cartReducer = cartSlice
const cartConfig = {
    key: 'cart',
    storage,
}
const filterReducer = filterSlice
const filterConfig = {
    key: 'filter',
    storage,
}

const adminReducer = adminSlice
const adminConfig = {
    key: 'admin',
    storage,
}
const persistedUser = persistReducer(userConfig, userReducer)
const persistedCart = persistReducer(cartConfig, cartReducer)
const persistedFilter = persistReducer(filterConfig, filterReducer)
const persistedAdmin = persistReducer(adminConfig, adminReducer)





const store = configureStore({
    reducer: {
        user: persistedUser,
        cart: persistedCart,
        order: orderSlice,
        product: productSlice,
        filter: persistedFilter,
        pagination: pageSlice,
        search: searchSlice,
        admin: persistedAdmin
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

const persistor = persistStore(store)

const StoreProvider = ({ children }: any) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

