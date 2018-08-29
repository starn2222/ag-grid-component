import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class YoutubeService {

  constructor(private apiService: ApiService) { }

  getSearchResult(): Observable<Video[]> {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const params = new HttpParams()
      .append('key', 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk')
      .append('maxResults', '50')
      .append('type', 'video')
      .append('part', 'snippet')
      .append('q', 'john');

    return this.apiService.get(url, params).pipe(
      map((res: any) => {
        return res.items.map((video) => {
          return {
            videoId: video.id.videoId,
            thumbnail: video.snippet.thumbnails.default.url,
            publishedAt: new Date(video.snippet.publishedAt),
            title: video.snippet.title,
            description: video.snippet.description,
          };
        });
      }),
    );
  }
}
