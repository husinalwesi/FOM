import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration, ɵSharedStylesHost } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDomSharedStylesHostService } from "./services/custom-dom-shared-styles-host.service";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConfigInterceptor } from './core/helpers/httpconfig.interceptor';

import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import {
  MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService,
  MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent, ProtectedResourceScopes
} from '@azure/msal-angular';

import { msalConfig, loginRequest } from './auth-config';
import { FormsModule } from '@angular/forms';
// import { LoadingSpinnerModule } from './modules/loading-spinner/loading-spinner.module';
import { FullLoaderModule } from './modules/full-loader/full-loader.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from 'src/app/store/user/user.reducer';
import { UserEffects } from 'src/app/store/user/user.effects';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { newsReducer } from './store/news/news.reducer';
import { promotionsReducer } from './store/promotions/promotions.reducer';
import { ChatBotModule } from './modules/chat-bot/chat-bot.module';

import { UrlSerializer, UrlTree, UrlSegment, DefaultUrlSerializer } from '@angular/router';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { WidgetModule } from './modules/widget/widget.module';
import { TransferStateInterceptor } from './core/helpers/transfer-state.interceptor';

export class CustomUrlSerializer implements UrlSerializer {

  private dus = new DefaultUrlSerializer();

  parse(url: any): UrlTree {
    url = url
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
    // .replace(/#/g, '%23')
    // .replace(/%/g, '%25');
    return this.dus.parse(url);
  }

  serialize(tree: UrlTree): any {
    return this.dus.serialize(tree).replace(/%28/g, '(').replace(/%29/g, ')');
  }
}


/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
 * MSAL Angular will automatically retrieve tokens for resources
 * added to protectedResourceMap. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#get-tokens-for-web-api-calls
 */
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string | ProtectedResourceScopes> | null>();

  // protectedResourceMap.set(protectedResources.apiTodoList.endpoint, [
  //   {
  //     httpMethod: 'GET',
  //     scopes: [...protectedResources.apiTodoList.scopes.read]
  //   },
  //   {
  //     httpMethod: 'POST',
  //     scopes: [...protectedResources.apiTodoList.scopes.write]
  //   },
  //   {
  //     httpMethod: 'PUT',
  //     scopes: [...protectedResources.apiTodoList.scopes.write]
  //   },
  //   {
  //     httpMethod: 'DELETE',
  //     scopes: [...protectedResources.apiTodoList.scopes.write]
  //   }
  // ]);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap,
  };
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest
  };
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode() && environment.pwaEnabled,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: environment.languages.default
    }),
    StoreModule.forRoot({ user: userReducer, news: newsReducer, promotions: promotionsReducer }),
    EffectsModule.forRoot([UserEffects]),
    FormsModule,
    MsalModule,
    FullLoaderModule,
    LazyLoadImageModule,
    DashboardModule,
    ChatBotModule,
    HeaderModule,
    FooterModule,
    WidgetModule,
  ],
  providers: [
    { provide: UrlSerializer, useClass: CustomUrlSerializer },

    { provide: ɵSharedStylesHost, useClass: CustomDomSharedStylesHostService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransferStateInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    // provideClientHydration() just for devloper mode remove it in production mode
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
