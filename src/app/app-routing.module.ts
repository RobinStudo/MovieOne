import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "films", component: ListComponent},
  {path: "film/:id", component: ShowComponent},
  {path: "a-propos", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
