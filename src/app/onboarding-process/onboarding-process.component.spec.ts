import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingProcessComponent } from './onboarding-process.component';

describe('OnboardingProcessComponent', () => {
  let component: OnboardingProcessComponent;
  let fixture: ComponentFixture<OnboardingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
