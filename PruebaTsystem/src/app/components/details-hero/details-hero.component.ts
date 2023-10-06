import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-details-hero',
  templateUrl: './details-hero.component.html',
  styleUrls: ['./details-hero.component.scss']
})
export class DetailsHeroComponent implements OnInit {
  name: string = '';
  race: string = '';
  combat: string = '';
  occupation: string = '';
  data: any;
  hero: Hero = {
    name: '',
    race: '',
    combat: '',
    occupation: ''
  };

  addForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    race: new FormControl(null, [Validators.required]),
    combat: new FormControl(null, [Validators.required]),
    occupation: new FormControl(null, [Validators.required])
  });

  constructor(private heroService: HeroService, private router: Router){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data = this.heroService.sendedHero;
    console.log('this.data',this.data);

    this.name = this.data.name; 
    this.race = this.data.race;
    this.combat = this.data.combat;
    this.occupation = this.data.occupation;
    }

  editedHero(){
    this.hero.name = this.name; 
    this.hero.race = this.race;
    this.hero.combat = this.combat;
    this.hero.occupation = this.occupation;
    console.log("this.hero", this.hero);
    this.heroService.editHero(this.hero);
    this.router.navigateByUrl('/superheroe');
  }


}
