import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesHomeComponent } from './fahes-home.component';

const routes: Routes = [
    { path: '', component: FahesHomeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FahesHomeRoutingModule { }
