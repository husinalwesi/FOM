import { createReducer, on } from "@ngrx/store";
import { beginLogin, loadFailure, loadSuccess, storeToken } from "./user.action";

export interface UserState {
    userData: any;
    token: string | null;
    error: any;
    status: String;
}


export const initialState: UserState = {
    userData: {},
    error: '',
    token: null,
    status: 'pending'
}

export const userReducer = createReducer(
    initialState,
    on(beginLogin, (state) => ({
        ...state,
        status: 'loading'
    })),

    on(loadSuccess, (state, content) => ({
        ...state,
        userData: content,
        error: null,
        status: 'success'
    })),

    on(loadFailure, (state, content) => ({
        ...state,
        error: content.error,
        status: 'error'
    })),

    on(storeToken, (state, content) => ({
        ...state,
        token: content.token
    })),

);