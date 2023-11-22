import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, from, map, catchError, of } from 'rxjs';
// import { MultimediaService } from 'src/app/services/apis/multimedia.service';
// import { loadNews } from './news.action';
// import { NewsState } from '../app.state';

@Injectable()
export class UserEffects {
    constructor(
        // private actions$: Actions,
        // private store: Store<NewsState>,
        // private multimediaService: MultimediaService,
    ) { }
    // Run this code when a loadNews action is dispatched
    // loadNews$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(loadNews),
    //         switchMap(() =>
    //             // Call the beginLogin method, convert it to an observable
    //             from(this.multimediaService.getUserByToken()).pipe(
    //                 // Take the returned value and return a new success action containing user data
    //                 map((user) => loadSuccess(user)),
    //                 catchError((error) => of(loadFailure(error)))
    //                 // Or... if it errors return a new failure action containing the error
    //             )
    //         )
    //     )
    // );

}
