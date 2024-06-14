import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnboardingProcessComponent } from './onboarding-process/onboarding-process.component';
import { OnboardingResourcesComponent } from './onboarding-resources/onboarding-resources.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { LearningScheduleComponent } from './learning-schedule/learning-schedule.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Real Guide',
        component: HomeComponent,
    },
    {
        path: 'about',
        title: 'About RealPage',
        component: AboutComponent,
    },
    {
        path: 'onboarding-process',
        title: 'Onboarding Process',
        component: OnboardingProcessComponent,
    },
    {
        path: 'onboarding-resources',
        title: 'Onboarding Resources',
        component: OnboardingResourcesComponent,
    },
    {
        path: 'learning-resources',
        title: 'Learning Resources',
        component: LearningResourcesComponent,
    },
    {
        path: 'learning-schedule',
        title: 'Learning Schedule',
        component: LearningScheduleComponent,
    },
    {
        path:"**",
        component: NotfoundComponent
    }
];
