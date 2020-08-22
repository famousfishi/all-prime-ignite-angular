import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule, IgxCheckboxModule, IgxHierarchicalGridModule } from 'igniteui-angular';

import { PagingHierarchyComponent } from './paging-hierarchy/paging-hierarchy.component';
import { FilteringHierarchyComponent } from './filtering-hierarchy/filtering-hierarchy.component';
import { EditingHierarchyComponent } from './editing-hierarchy/editing-hierarchy.component';
import { SortingHeirarchyComponent } from './sorting-heirarchy/sorting-heirarchy.component';

@NgModule({
  declarations: [
    AppComponent,
    PagingHierarchyComponent,
    FilteringHierarchyComponent,
    EditingHierarchyComponent,
    SortingHeirarchyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxHierarchicalGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
