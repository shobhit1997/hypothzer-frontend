import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationDataDetailComponent } from './population-data-detail.component';

describe('PopulationDataDetailComponent', () => {
  let component: PopulationDataDetailComponent;
  let fixture: ComponentFixture<PopulationDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
