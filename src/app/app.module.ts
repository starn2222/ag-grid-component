import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { GridModule } from './modules';
import { SharedModule } from './shared';
import { VideoGridComponent } from './video-grid/video-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGridComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
