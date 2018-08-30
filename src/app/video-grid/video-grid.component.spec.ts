import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGridComponent } from './video-grid.component';
import { GridModule } from '../modules/grid/grid.module';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';

describe('VideoGridComponent', () => {
  let component: VideoGridComponent;
  let fixture: ComponentFixture<VideoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGridComponent ],
      imports: [GridModule, CoreModule, SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
