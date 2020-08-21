import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { EditingComponent } from './editing/editing.component';
import { PagingComponent } from './paging/paging.component';

const routes: Routes = [ { path: 'sorting', component: SortingComponent, data: { text: 'sorting' } }, { path: 'filtering', component: FilteringComponent, data: { text: 'Filtering' } }, { path: 'editing', component: EditingComponent, data: { text: 'Editing' } }, { path: 'paging', component: PagingComponent, data: { text: 'Paging' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
