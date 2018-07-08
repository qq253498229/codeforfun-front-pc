import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ProfileComponent]
})
export class SystemModule {
}
