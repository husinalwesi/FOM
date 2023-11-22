import { createAction, props } from "@ngrx/store"

const LOAD_NEWS = '[news] load news'
const VISITED_NEWS = '[news] visited news'
const VISITED_FAHES_NEWS = '[news] fahes visited news'

export const loadNews = createAction(LOAD_NEWS, props<{ news: [] }>())
export const getVisitedNews = createAction(VISITED_NEWS, props<{ news: any }>())
export const getFahesVisitedNews = createAction(VISITED_FAHES_NEWS, props<{ news: any }>())
