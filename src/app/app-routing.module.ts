import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', loadChildren: () => import('./layouts/main/home-page/home-page.module').then((m) => m.HomePageModule) },
      { path: 'blogs', loadChildren: () => import('./layouts/main/blog-listing/blog-listing.module').then((m) => m.BlogListingModule) },

      { path: 'template', loadChildren: () => import('./layouts/main/template/template.module').then((m) => m.TemplateModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
