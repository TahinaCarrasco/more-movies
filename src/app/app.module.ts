import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Validator } from 'class-validator';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ConfigService } from './resources/config.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
    Validator,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
