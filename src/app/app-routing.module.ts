import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagingHierarchyComponent } from './paging-hierarchy/paging-hierarchy.component';
import { FilteringHierarchyComponent } from './filtering-hierarchy/filtering-hierarchy.component';
import { EditingHierarchyComponent } from './editing-hierarchy/editing-hierarchy.component';
import { SortingHeirarchyComponent } from './sorting-heirarchy/sorting-heirarchy.component';

const routes: Routes = [
      { path: 'paging-hierarchy', component: PagingHierarchyComponent, data: { text: 'paging-hierarchy' } },
       { path: 'filtering-hierarchy', component: FilteringHierarchyComponent, data: { text: 'filtering-hierarchy' } },
        { path: 'editing-hierarchy', component: EditingHierarchyComponent, data: { text: 'editing-hierarchy' } },
         { path: 'sorting-heirarchy', component: SortingHeirarchyComponent, data: { text: 'sorting-heirarchy' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
