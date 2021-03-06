import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-selection-header',
  templateUrl: './grid-selection-header.component.html',
  styleUrls: ['./grid-selection-header.component.scss']
})
export class GridSelectionHeaderComponent {
  private params: any;

  agInit(params): void {
    this.params = params;
  }

  selectionChange(): void {
   if (this.allSelected) {
      this.params.api.deselectAll();
    } else {
      this.params.api.selectAll();
    }
  }

  get allSelected(): boolean {
    const totalRowsCount = this.params.api.rowModel.getRowCount();
    const selectedRowsCount = this.params.api.getSelectedRows().length;
    return totalRowsCount === selectedRowsCount;
  }
}
