import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { ResumeComponent } from './home/resume/resume.component';
import { SliderDetailsComponent } from './shared/components/slider-details/slider-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    FrontpageComponent,
    SliderComponent,
    ResumeComponent,
    SliderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
