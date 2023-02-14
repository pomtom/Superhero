import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Superhero } from '../Models/SuperHero';
import { SuperHeroService } from '../Services/SuperHeroService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class createComponent {
  titleforCreate = 'Create SuperHero';
  newSuperHero: Superhero = {
    Id: 0,
    Name: '',
    City: '',
    Phone: '',
    BirthDate: new Date()
  }

  constructor(
    private _superHeroService: SuperHeroService,
    private _router: Router) {


  }

  SaveSuperHero(): void {
    console.log(this.newSuperHero);
    this._superHeroService.SaveSuperHero(this.newSuperHero);
    this._router.navigate(['list']);
  }
}

