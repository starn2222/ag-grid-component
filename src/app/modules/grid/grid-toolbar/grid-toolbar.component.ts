import { Component, OnInit, Input } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-grid-toolbar',
  templateUrl: './grid-toolbar.component.html',
  styleUrls: ['./grid-toolbar.component.scss']
})
export class GridToolbarComponent implements OnInit {
  @Input()
  set grid(grid: AgGridNg2) {
    timer(0).subscribe(() => this._grid = grid);
  }

  get grid(): AgGridNg2 {
    return this._grid;
  }

  private _grid: AgGridNg2;

  constructor() { }

  ngOnInit() {
  }

  get selectionEnabled(): boolean {
    return this.grid && !!this.grid.gridOptions.rowSelection;
  }

  selectionEnabledChange(event): void {
    this.grid.gridOptions.rowSelection = this.selectionEnabled ? undefined : 'multiple';
    this.grid.columnApi.setColumnVisible('selected', this.selectionEnabled);

    if (!this.selectionEnabled) {
      this.grid.api.deselectAll();
    }
  }
}
