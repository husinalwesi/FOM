import { createReducer, on } from "@ngrx/store";
import { loadNews, getVisitedNews, getFahesVisitedNews } from "./news.action";
import { NewsState } from "../app.state";

export const initialState: NewsState = {
    news: [],
    visitedNews: [],
    fahesVisitedNews: []
}

export const newsReducer = createReducer(
    initialState,

    on(loadNews, (state, content) => {

        return {
            ...state,
            news: content.news,
        }
    }),

    on(getVisitedNews, (state, content) => {
        if (typeof window !== "undefined")
            localStorage.setItem('visitedLinks', JSON.stringify(content.news));
        return {
            ...state,
            visitedNews: content.news,
        }
    }),

    on(getFahesVisitedNews, (state, content) => {
        if (typeof window !== "undefined")
            localStorage.setItem('fahesVisitedLinks', JSON.stringify(content.news));
        return {
            ...state,
            fahesVisitedNews: content.news,
        }
    }),



);