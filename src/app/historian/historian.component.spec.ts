import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorianComponent } from './historian.component';

describe('HistorianComponent', () => {
  let component: HistorianComponent;
  let fixture: ComponentFixture<HistorianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
