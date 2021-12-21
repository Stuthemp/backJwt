import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlgsComponent } from './search-algs.component';

describe('SearchAlgsComponent', () => {
  let component: SearchAlgsComponent;
  let fixture: ComponentFixture<SearchAlgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAlgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
