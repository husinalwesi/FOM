import { createAction, props } from "@ngrx/store"

const BEGIN_LOGIN = '[user] begin login'
const LOAD_SUCCESS = '[user] login successful'
const LOAD_Failure = '[user] login failure'
const STORE_TOKEN = '[user] store token'

export const beginLogin = createAction(BEGIN_LOGIN)
export const loadSuccess = createAction(LOAD_SUCCESS, props<{ data: any }>())
export const loadFailure = createAction(LOAD_Failure, props<{ error: string }>())
export const storeToken = createAction(STORE_TOKEN, props<{ token: string }>())
