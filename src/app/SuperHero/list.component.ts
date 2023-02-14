import { Component, OnInit } from '@angular/core';
import { Superhero } from '../Models/SuperHero';
import { SuperHeroService } from '../Services/SuperHeroService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class listComponent implements OnInit {

  superHeroList: Superhero[] = [];

  titleforlist = 'SuperHeroes';
  constructor(private _superheroService: SuperHeroService) {
  }

  ngOnInit(): void {
    this._superheroService.GetAllSuperHeros()
      .subscribe({
        next: (response) => {
          this.superHeroList = response;
          console.log(response);
        },
        error: (Response) => {
          console.log(Response);
        }
      })
  }

}
