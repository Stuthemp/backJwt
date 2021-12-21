import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSortDescComponent } from './bubble-sort-desc.component';

describe('BubbleSortDescComponent', () => {
  let component: BubbleSortDescComponent;
  let fixture: ComponentFixture<BubbleSortDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleSortDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSortDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
