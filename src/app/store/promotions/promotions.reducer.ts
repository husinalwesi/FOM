import { createReducer, on } from "@ngrx/store";
import { getvisitedPromotions, loadPromotions } from "./promotions.action";
import { PromotionsState } from "../app.state";

export const initialState: PromotionsState = {
    promotions: [],
    visitedPromotions: [],
}

export const promotionsReducer = createReducer(
    initialState,

    on(loadPromotions, (state, content) => {

        return {
            ...state,
            promotions: content.promotions,
        }
    }),

    on(getvisitedPromotions, (state, content) => {
        localStorage.setItem('visitedPromotions', JSON.stringify(content.promotions));
        return {
            ...state,
            visitedPromotions: content.promotions,
        }
    }),

);