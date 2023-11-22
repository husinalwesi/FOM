import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '', component: ErrorComponent,
    children: [
      { path: '', redirectTo: '404', pathMatch: 'full' },
      { path: '404', loadChildren: () => import('./four-zero-four/four-zero-four.module').then((m) => m.FourZeroFourModule) },
      { path: '401', loadChildren: () => import('./four-zero-one/four-zero-one.module').then((m) => m.FourZeroOneModule) },
      { path: '503', loadChildren: () => import('./five-zero-three/five-zero-three.module').then((m) => m.FiveZeroThreeModule) },
      { path: '500', loadChildren: () => import('./five-zero-zero/five-zero-zero.module').then((m) => m.FiveZeroZeroModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
