/** @format */

import { applyMiddleware, createStore } from "redux"
import {thunk} from "redux-thunk" // Corrected import of thunk
import { rootReducer } from "./Reducer/reducer"

export const store = createStore(rootReducer, applyMiddleware(thunk))
