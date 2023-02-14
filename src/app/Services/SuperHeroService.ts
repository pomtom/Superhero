import { Injectable } from '@angular/core'
import { Superhero } from '../Models/SuperHero'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SuperHeroService {

    baseuri: string = 'https://localhost:7226/';
    constructor(private _http: HttpClient) {

    }

    private listOfSuperHeros: Superhero[] = [
        {
            Id: 101,
            Name: 'Pramod',
            City: 'Shipley',
            Phone: '123654',
            BirthDate: new Date
        },
        {
            Id: 102,
            Name: 'Kinith',
            City: 'Leeds',
            Phone: '654859',
            BirthDate: new Date
        },
        {
            Id: 103,
            Name: 'Laxmi',
            City: 'York',
            Phone: '963258',
            BirthDate: new Date
        },
        {
            Id: 104,
            Name: 'Vijy',
            City: 'London',
            Phone: '852147',
            BirthDate: new Date
        },
    ]

    GetAllSuperHeros():Observable<Superhero[]> {
        return this._http.get<Superhero[]>(this.baseuri + 'api/Employee');
    }

    SaveSuperHero(superhero: Superhero) {
        this.listOfSuperHeros.push(superhero);
    }
}