import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared/shared.module';

const routes: Routes = [
  {path: '', component: IndexComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [IndexComponent]
})
export class ProjectModule {
}
