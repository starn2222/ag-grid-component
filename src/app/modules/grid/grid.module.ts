import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';

import { GridSelectionHeaderComponent } from './grid-selection-header/grid-selection-header.component';
import { GridThumbnailCellComponent } from './grid-thumbnail-cell/grid-thumbnail-cell.component';
import { GridToolbarComponent } from './grid-toolbar/grid-toolbar.component';

const gridComponents = [
  GridThumbnailCellComponent,
  GridSelectionHeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents(gridComponents)
  ],
  declarations: [
    GridToolbarComponent,
    GridThumbnailCellComponent,
    GridSelectionHeaderComponent
  ],
  exports: [
    AgGridModule,
    GridToolbarComponent,
  ]
})
export class GridModule { }
