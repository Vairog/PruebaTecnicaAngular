import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './components/list-hero/list-hero.component';
import { DetailsHeroComponent } from './components/details-hero/details-hero.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

const routes: Routes = [
  { path: '', redirectTo: 'superheroe', pathMatch: 'full' },
  { path: 'superheroe', component: ListHeroComponent },
  { path: 'heroDetails', component: DetailsHeroComponent },
  { path: 'add', component: AddHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
