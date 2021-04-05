import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCriticComponent } from './art-critic.component';

describe('ArtCriticComponent', () => {
  let component: ArtCriticComponent;
  let fixture: ComponentFixture<ArtCriticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCriticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCriticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
