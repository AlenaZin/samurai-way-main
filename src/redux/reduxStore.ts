import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer, 
  usersPage: usersReducer,
  sidebar: sidebarReducer,
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store; 