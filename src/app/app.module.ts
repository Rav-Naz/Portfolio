import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { Lsoapp2Component } from './projects/lsoapp2/lsoapp2.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { TechnologiesComponent } from './landing-page/technologies/technologies.component';
import { ProjectsComponent } from './landing-page/projects/projects.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { AboutComponent } from './landing-page/about/about.component';
import { TileComponent } from './landing-page/technologies/tile/tile.component';

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
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
