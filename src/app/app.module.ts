import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoldDirective } from './Directives/bold.directive';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { ErrorMessageDirective } from './Directives/error-message.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    PageNotFoundComponent,
    BoldDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ErrorMessageDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
