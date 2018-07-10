import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared/shared.module';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', component: ListComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    ListComponent,
    DetailComponent
  ]
})
export class UserModule {
}
