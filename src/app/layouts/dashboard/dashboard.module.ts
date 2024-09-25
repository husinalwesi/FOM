import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { SideBarComponent } from './components/side-bar/side-bar.component';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { ContentComponent } from './components/content/content.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
// import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
// import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { SwitchButtonModule } from 'src/app/modules/switch-button/switch-button.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    DashboardComponent,
    // SideBarComponent,
    // NavBarComponent,
    // ContentComponent,
    // BreadcrumbComponent,
    // LanguageSwitcherComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SvgModule,
    SwitchButtonModule,
    TranslationModule,
    LazyLoadImageModule
  ]
})
export class DashboardModule { }
