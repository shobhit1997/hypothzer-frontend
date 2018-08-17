import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationDataComponent } from './population-data.component';

describe('PopulationDataComponent', () => {
  let component: PopulationDataComponent;
  let fixture: ComponentFixture<PopulationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
