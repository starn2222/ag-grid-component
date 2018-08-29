import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  YoutubeService,
  ApiService,
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    YoutubeService,
    ApiService
  ]
})
export class CoreModule { }
