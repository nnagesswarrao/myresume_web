import { Routes } from '@angular/router';
import { ResumeLandingPageComponent } from './components/resume-landing-page/resume-landing-page.component';
import { LayoutComponent } from './layout-components/layout/layout.component';
import path from 'path';

export const routes: Routes = [

    { path: '', redirectTo: 'home/resume', pathMatch: 'full' },
    {
        path: 'home',  component: LayoutComponent,
        children: [
            { path: 'resume', component: ResumeLandingPageComponent }
        ]
    },


];


// ResumeLandingPageComponent