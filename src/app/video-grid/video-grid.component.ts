import { Component, OnInit } from '@angular/core';
import { GridOptions, GetContextMenuItemsParams } from 'ag-grid';

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
    this.gridOptions.getContextMenuItems = this.getContextMenuItems;
    this.gridOptions.columnDefs = [{
      checkboxSelection: true,
      field: 'selected',
      headerComponentFramework: GridSelectionHeaderComponent,
      width: 40,
    }, {
      headerName: '',
      field: 'thumbnail',
      cellRendererFramework: GridThumbnailCellComponent,
      width: 70,
    }, {
      headerName: 'Published On',
      field: 'publishedAt',
      cellRenderer: this.parseDate,
      width: 100
    }, {
      headerName: 'Video Title',
      field: 'title',
      cellRenderer: this.titleRenderer,
      width: 300
    }, {
      headerName: 'Description',
      field: 'description',
      width: 800
    }];
  }

  private getVideos(): void {
    this.youtubeService.getSearchResult().subscribe(videos => this.setGridData(videos));
  }

  private setGridData(data: any[]): void {
    this.rowData = data;
  }

  getContextMenuItems(params: GetContextMenuItemsParams) {
    const menuItems: any[] = [
      'copy',
      'copyWithHeaders',
      'paste',
    ];

    if (params.column.getColId() === 'title')  {
      const openVideoMenuItem = {
        name: 'Open in new tab',
        action: () => {
          const videoId = params.node.data.videoId;
          const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
          window.open(videoLink, '_blank');
        },
      };
      menuItems.unshift( openVideoMenuItem, 'separator');
    }

    return menuItems;
  }

  private titleRenderer(params): string {
    return `<a href="https://www.youtube.com/watch?v=${params.data.videoId}" target="_blank">${params.data.title}</a>`;
  }

  private parseDate(params): string {
    return params.value.getDate() + '/' +
      (params.value.getMonth() + 1) + '/' +
      params.value.getFullYear();
  }
}
