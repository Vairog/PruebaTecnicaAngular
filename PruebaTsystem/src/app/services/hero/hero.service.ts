import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ 
  providedIn: 'root'
})

export class HeroService{

  private heroes: Hero[] = [
    {
      id: 1, name: "Superman", race: "Kryptonian", combat: 95, occupation: "Superhero"},
    {
      id: 2, name: "Wonder Woman", race: "Amazonian", combat: 90, occupation: "Superhero"},
    {
      id: 3, name: "Spider-Man", race: "Human", combat: 75, occupation: "Superhero"},
    {
      id: 4, name: "Thor", race: "Asgardian", combat: 85, occupation: "God of Thunder"},
    {
      id: 5, name: "Black Widow", race: "Human", combat: 80, occupation: "Spy/Assassin"}
  ];

  data: Hero[] = [];

  constructor() {  
  }

  getHeroes() {
    this.data = this.heroes;
    return this.data;  
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }


}
