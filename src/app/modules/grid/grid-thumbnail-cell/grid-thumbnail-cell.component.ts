import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-thumbnail-cell',
  templateUrl: './grid-thumbnail-cell.component.html'
})
export class GridThumbnailCellComponent {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }
}
