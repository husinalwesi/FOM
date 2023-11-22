import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectData = createFeatureSelector<UserState>('user')

export const selectUserData = createSelector(selectData, (state: UserState) => state.userData)

export const selectError = createSelector(selectData, (state: UserState) => state.error)

export const selectStatus = createSelector(selectData, (state: UserState) => state.status)

export const selectToken = createSelector(selectData, (state: UserState) => state.token || (typeof window !== "undefined" ? localStorage.getItem('token') : null))  