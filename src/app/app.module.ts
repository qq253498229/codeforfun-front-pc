import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';

/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './shared/index/index.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

registerLocaleData(zh);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', redirectTo: '/index', pathMatch: 'full'},
      {path: 'index', component: IndexComponent},
      {path: 'system', loadChildren: './modules/system/system.module#SystemModule'},
      {path: 'user', loadChildren: './modules/user/user.module#UserModule'},
      {path: 'project', loadChildren: './modules/project/project.module#ProjectModule'},
      {path: 'team', loadChildren: './modules/team/team.module#TeamModule'},
      {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
