import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent {
  Hero: any = {
    name: '',
    race: '',
    alignment: '',
    combat: '',
    occupation: ''
  };


  addForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    race: new FormControl(null, [Validators.required]),
    alignment: new FormControl(null, [Validators.required])
  });

  constructor(private heroService: HeroService, private router: Router){
  }

  addHero() {
    if (!this.addForm.valid) {
      return;
    }
    const data = {
      name: this.Hero.name,
      race: this.Hero.race,
      alignment: this.Hero.alignment,
      combat: this.Hero.combat,
      occupation: this.Hero.occupation
    };
  }
}
