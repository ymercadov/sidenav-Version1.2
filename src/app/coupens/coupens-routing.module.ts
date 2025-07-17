import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensListComponent } from './coupens-list/coupens-list.component';
import { CoupensComponent } from './coupens.component';

const routes: Routes = [
  {path:'create', component:CoupensComponent, data:{title: 'Create'}},
  {path:'list', component:CoupensListComponent, data:{title: 'List'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
