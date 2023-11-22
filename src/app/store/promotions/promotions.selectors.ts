import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PromotionsState } from "../app.state";

export const selectData = createFeatureSelector<PromotionsState>('promotions')

export const selectPromotions = createSelector(selectData, (state: PromotionsState) => state.promotions)

export const selectVisitedPromotions = createSelector(selectData, (state: PromotionsState) => state.promotions.length > 0 ? state.promotions : (typeof window !== "undefined" ? JSON.parse(localStorage.getItem('visitedPromotions') || `{}`) : []))


