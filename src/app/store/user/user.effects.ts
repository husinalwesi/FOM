import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserState } from '../app.state';
import { beginLogin, loadFailure, loadSuccess } from './user.action';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private store: Store<UserState>,
        private multimediaService: MultimediaService,
    ) { }

    // Run this code when a beginLogin action is dispatched
    beginLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(beginLogin),
            switchMap(() =>
                // Call the beginLogin method, convert it to an observable
                from(this.multimediaService.getUserByToken()).pipe(
                    // Take the returned value and return a new success action containing user data
                    map((user) => loadSuccess(user)),
                    catchError((error) => of(loadFailure(error)))
                    // Or... if it errors return a new failure action containing the error
                )
            )
        )
    );

    // Run this code when the addTodo or removeTodo action is dispatched
    // saveTodos$ = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             ofType(addTodo, removeTodo),
    //             withLatestFrom(this.store.select(selectAllTodos)),
    //             switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
    //         ),
    //     // Most effects dispatch another action, but this one is just a "fire and forget" effect
    //     { dispatch: false }
    // );
}
