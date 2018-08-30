import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';

import { Video, YoutubeService } from '../core';
import { GridThumbnailCellComponent, GridSelectionHeaderComponent } from '../modules/grid';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {
  gridOptions: GridOptions;
  rowData: Video[];

  constructor(private youtubeService: YoutubeService) {
    this.initGrid();
    this.getVideos();
  }

  ngOnInit() {
  }

  private initGrid(): void {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowHeight = 50;
    this.gridOptions.rowSelection = 'multiple';
    this.gridOptions.columnDefs = [{
      checkboxSelection: true,
      field: 'selected',
      headerComponentFramework: GridSelectionHeaderComponent,
    }, {
      headerName: '',
      field: 'thumbnail',
      cellRendererFramework: GridThumbnailCellComponent,
    }, {
      headerName: 'Published On',
      field: 'publishedAt',
      cellRenderer: this.parseDate,
    }, {
      headerName: 'Video Title',
      field: 'title',
      cellRenderer: this.titleRenderer,
    }, {
      headerName: 'Description',
      field: 'description',
    }];
  }

  private getVideos(): void {
    this.youtubeService.getSearchResult().subscribe(videos => this.setGridData(videos));
  }

  private setGridData(data: any[]): void {
    this.rowData = data;
  }

  public parseDate(params): string {
    return params.value.getDate() + '/' +
      (params.value.getMonth() + 1) + '/' +
      params.value.getFullYear();
  }

  public titleRenderer(params): string {
    return `<a href="https://www.youtube.com/watch?v=${params.data.videoId}" target="_blank">${params.value}</a`;
  }
}
