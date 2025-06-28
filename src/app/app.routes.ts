import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Signup } from './components/signup/signup';
import { CoursePageComponent } from './components/course-page/course-page';
import { LandingPageComponent } from './components/landing-page/landing-page';
import { CourseDetail } from './components/course-detail/course-detail';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: Signup },
  { path: 'courses', component: CoursePageComponent },
  { path: 'course/:id', component: CourseDetail },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
