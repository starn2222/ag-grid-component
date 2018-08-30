import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { GridModule } from './modules';
import { SharedModule } from './shared';
import { VideoGridComponent } from './video-grid/video-grid.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GridModule,
        CoreModule,
        SharedModule,
      ],
      declarations: [
        AppComponent,
        VideoGridComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
