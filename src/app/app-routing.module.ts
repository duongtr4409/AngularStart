import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"template-form", component: TemplateDrivenFormComponent},
  {path:"reactive-form", component: ReactiveFormComponent},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
