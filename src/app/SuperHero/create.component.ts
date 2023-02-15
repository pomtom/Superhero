import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Superhero } from '../Models/SuperHero';
import { SuperHeroService } from '../Services/SuperHeroService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class createComponent implements OnInit {
  
  totalNumberOfHeros:number = 0
  titleforCreate = 'Create SuperHero';
  newSuperHero: Superhero = {
    id: 0,
    Name: '',
    City: '',
    Phone: '',
    BirthDate: new Date()
  }

  constructor(
    private _superHeroService: SuperHeroService,
    private _router: Router) {


  }
  ngOnInit(): void {
    this.GetAllSuperHeros();
  }

  private GetAllSuperHeros() {
    this._superHeroService.GetAllSuperHeros()
      .subscribe({
        next: (response) => {
          this.totalNumberOfHeros = response.length;
          console.log(this.totalNumberOfHeros);
        },
        error: (Response) => {
        }
      });
  }

  SaveSuperHero(): void {
    this._superHeroService.SaveSuperHero(this.newSuperHero).subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (Response) => {
          console.log(Response);
        }

      });
    this._router.navigate(['list']);
  }
}

