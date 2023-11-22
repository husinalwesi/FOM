import { createAction, props } from "@ngrx/store"

const LOAD_PROMOTIONS = '[promotions] load promotions'
const VISITED_PROMOTIONS = '[promotions] visited promotions'

export const loadPromotions = createAction(LOAD_PROMOTIONS, props<{ promotions: [] }>())
export const getvisitedPromotions = createAction(VISITED_PROMOTIONS, props<{ promotions: any }>())
