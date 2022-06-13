import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-discoverComponent
import { discoverComponent } from '../components/discover.component';
//CORE_REFERENCE_IMPORT-feedCompComponent
import { feedCompComponent } from '../components/feedComp.component';
//CORE_REFERENCE_IMPORT-PostsComponent
import { PostsComponent } from '../components/Posts.component';
//CORE_REFERENCE_IMPORT-SearchComponent
import { SearchComponent } from '../components/Search.component';
//CORE_REFERENCE_IMPORT-DiscoverMoreComponent
import { DiscoverMoreComponent } from '../components/DiscoverMore.component';
//CORE_REFERENCE_IMPORT-left_profile_componentComponent
import { left_profile_componentComponent } from '../components/left_profile_component.component';
//CORE_REFERENCE_IMPORT-Base_layoutComponent
import { Base_layoutComponent } from '../components/Base_layout.component';
//CORE_REFERENCE_IMPORT-ToolbarComponent
import { ToolbarComponent } from '../components/Toolbar.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-discoverComponent
  discoverComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-feedCompComponent
  feedCompComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-PostsComponent
  PostsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-SearchComponent
  SearchComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-DiscoverMoreComponent
  DiscoverMoreComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-left_profile_componentComponent
  left_profile_componentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Base_layoutComponent
  Base_layoutComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ToolbarComponent
  ToolbarComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'baselayout', component: Base_layoutComponent },
  { path: '', redirectTo: 'baselayout', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
