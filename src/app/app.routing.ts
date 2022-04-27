import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './examples/landing/landing.component';
import { PostannonceComponent } from './postannonce/postannonce.component';
import { LoginComponent } from './login/login.component';
import { RegistrationCompComponent } from './registration-comp/registration-comp.component';
import { AnnonceproposerComponent } from './annonceproposer/annonceproposer.component';


const routes: Routes =[
    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: 'acceuil',          component: LandingComponent },
    { path: 'postannonce',          component: PostannonceComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'registration',          component: RegistrationCompComponent },
    { path: 'annonceproposer',          component: AnnonceproposerComponent }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
