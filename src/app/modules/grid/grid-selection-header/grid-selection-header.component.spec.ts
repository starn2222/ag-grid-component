import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSelectionHeaderComponent } from './grid-selection-header.component';

describe('GridSelectionHeaderComponent', () => {
  let component: GridSelectionHeaderComponent;
  let fixture: ComponentFixture<GridSelectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSelectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSelectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
