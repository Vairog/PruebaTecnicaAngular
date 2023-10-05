import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DetailsHeroComponent } from './components/details-hero/details-hero.component';
import { ListHeroComponent } from './components/list-hero/list-hero.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

import { HeroService } from './services/hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    AddHeroComponent,
    DetailsHeroComponent,
    ListHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
