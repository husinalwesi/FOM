import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NewsState } from "../app.state";

export const selectData = createFeatureSelector<NewsState>('news')

export const selectNews = createSelector(selectData, (state: NewsState) => state.news)
export const selectVisitedNews = createSelector(selectData, (state: NewsState) => state.visitedNews.length > 0 ? state.visitedNews : (typeof window !== "undefined" ? JSON.parse(localStorage.getItem('visitedLinks') || `{}`) : []))

export const selectFahesVisitedNews = createSelector(selectData, (state: NewsState) => state.fahesVisitedNews.length > 0 ? state.fahesVisitedNews : (typeof window !== "undefined" ? JSON.parse(localStorage.getItem('fahesVisitedLinks') || `{}`) : []))

