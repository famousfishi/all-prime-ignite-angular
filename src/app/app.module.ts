import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridOneComponent } from './components/grid-one/grid-one.component';
import { GridTwoComponent } from './components/grid-two/grid-two.component';
import { GridThreeComponent } from './components/grid-three/grid-three.component';
import { GridFourComponent } from './components/grid-four/grid-four.component';
import { RouterModule, Routes } from '@angular/router';
import { IgxGridModule, IgxCheckboxModule } from 'igniteui-angular';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { EditingComponent } from './editing/editing.component';
import { PagingComponent } from './paging/paging.component';

// export const routerConfig: Routes = [
//   {
//     path: 'grid-one',
//     component: PagingComponent
//   },
//   {
//     path: 'grid-two',
//     component: SortingComponent
//   }, {
//     path: 'grid-one',
//     component: FilteringComponent
//   }, {
//     path: 'grid-one',
//     component: EditingComponent
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    GridOneComponent,
    GridTwoComponent,
    GridThreeComponent,
    GridFourComponent,
    SortingComponent,
    FilteringComponent,
    EditingComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routerConfig, { useHash: false }),
    IgxGridModule,
    IgxCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
