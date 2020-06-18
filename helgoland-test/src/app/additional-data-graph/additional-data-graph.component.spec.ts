import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDataGraphComponent } from './additional-data-graph.component';

describe('AdditionalDataGraphComponent', () => {
  let component: AdditionalDataGraphComponent;
  let fixture: ComponentFixture<AdditionalDataGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalDataGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDataGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
