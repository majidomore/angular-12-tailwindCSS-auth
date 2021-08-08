import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { LandingComponent } from './common/landing/landing.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdminComponent,
    NotFoundComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
