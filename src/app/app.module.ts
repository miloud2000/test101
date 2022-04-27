import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ExamplesModule } from './examples/examples.module';
import { PostannonceComponent } from './postannonce/postannonce.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationCompComponent } from './registration-comp/registration-comp.component';
import { LoginComponent } from './login/login.component';
import { AnnonceproposerComponent } from './annonceproposer/annonceproposer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PostannonceComponent,
    RegistrationCompComponent,
    LoginComponent,
    AnnonceproposerComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
