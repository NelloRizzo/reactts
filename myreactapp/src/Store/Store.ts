import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./Counter"
import stringBuilderReducer from './StringBuilder'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        stringBuilder: stringBuilderReducer
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store