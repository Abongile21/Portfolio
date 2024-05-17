import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringExperienceComponent } from './tutoring-experience.component';

describe('TutoringExperienceComponent', () => {
  let component: TutoringExperienceComponent;
  let fixture: ComponentFixture<TutoringExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutoringExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutoringExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
