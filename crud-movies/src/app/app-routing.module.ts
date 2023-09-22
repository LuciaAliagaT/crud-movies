import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesService } from './services/movies.service';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: MoviesTableComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
