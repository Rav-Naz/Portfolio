import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { Lsoapp2Component } from './projects/lsoapp2/lsoapp2.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { TechnologiesComponent } from './landing-page/technologies/technologies.component';
import { ProjectsComponent } from './landing-page/projects/projects.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { AboutComponent } from './landing-page/about/about.component';
import { TileComponent } from './landing-page/technologies/tile/tile.component';
import { ProjectComponent } from './landing-page/projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Lsoapp2Component,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    TechnologiesComponent,
    WelcomeComponent,
    TileComponent,
    ProjectComponent,
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
