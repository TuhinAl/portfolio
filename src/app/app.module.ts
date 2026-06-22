import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { ResumeComponent } from './components/resume/resumeComp'; // Ensure this path is correct

import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResumeComponent
  ],
  imports: [
    // IonicModule.forRoot(),
    BrowserModule,
    IonicModule, // Uncomment and add the correct import if needed
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }