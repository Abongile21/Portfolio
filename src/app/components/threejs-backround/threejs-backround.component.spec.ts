import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsBackroundComponent } from './threejs-backround.component';

describe('ThreejsBackroundComponent', () => {
  let component: ThreejsBackroundComponent;
  let fixture: ComponentFixture<ThreejsBackroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreejsBackroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreejsBackroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
