import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from 'src/app/components/menu-item/menu-item.component';
import { MenuItemListComponent } from 'src/app/components/menu-item-list/menu-item-list.component';
import { MenuItemListTitleComponent } from 'src/app/components/menu-item-list-title/menu-item-list-title.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { PromotionItemModule } from '../promotion-item/promotion-item.module';
import { MenuItemOurStoryModule } from '../menu-item-our-story/menu-item-our-story.module';
// import { MenuItemTitleDescriptionImageModule } from '../menu-item-title-description-image/menu-item-title-description-image.module';
import { LangSwitcherModule } from '../lang-switcher/lang-switcher.module';
import { ModalModule } from '../modal/modal.module';
import { FaqSearchSectionModule } from '../faq-search-section/faq-search-section.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DirectivesModule } from '../directives/directives.module';
import { SearchHeaderModule } from '../search-header/search-header.module';
import { BtnOneModule } from '../btn-one/btn-one.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuItemComponent,
    MenuItemListComponent,
    MenuItemListTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SvgModule,
    TranslationModule,
    FormsModule,
    PromotionItemModule,
    MenuItemOurStoryModule,
    // MenuItemTitleDescriptionImageModule,
    LangSwitcherModule,
    ModalModule,
    // FaqSearchSectionModule,
    CheckboxModule,
    DirectivesModule,
    SearchHeaderModule,
    BtnOneModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
