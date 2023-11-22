export interface UserState {
    userData: any;
    token: string | null;
    error: any;
    status: String;
}

export interface NewsState {
    news: [];
    visitedNews: [],
    fahesVisitedNews: []
}

export interface PromotionsState {
    promotions: [];
    visitedPromotions: [],
    // fahesVisitedNews: []
}