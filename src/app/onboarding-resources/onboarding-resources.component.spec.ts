import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingResourcesComponent } from './onboarding-resources.component';

describe('OnboardingResourcesComponent', () => {
  let component: OnboardingResourcesComponent;
  let fixture: ComponentFixture<OnboardingResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
