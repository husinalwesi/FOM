import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveCardComponent } from './save-card.component';

const routes: Routes = [
  { path: '', component: SaveCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveCardRoutingModule { }
