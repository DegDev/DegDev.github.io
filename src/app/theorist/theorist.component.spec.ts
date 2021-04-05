import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoristComponent } from './theorist.component';

describe('TheoristComponent', () => {
  let component: TheoristComponent;
  let fixture: ComponentFixture<TheoristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
