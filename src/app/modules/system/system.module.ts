import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    SharedModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ProfileComponent]
})
export class SystemModule {
}
