import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular/main';
import { GridThumbnailCellComponent } from './grid-thumbnail-cell/grid-thumbnail-cell.component';
import { GridToolbarComponent } from './grid-toolbar/grid-toolbar.component';

const gridComponents = [
  GridThumbnailCellComponent,
];

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents(gridComponents)
  ],
  declarations: [
    GridThumbnailCellComponent,
    GridToolbarComponent
  ],
  exports: [
    AgGridModule,
    GridToolbarComponent,
  ]
})
export class GridModule { }
