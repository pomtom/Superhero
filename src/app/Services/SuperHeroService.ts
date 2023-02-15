import { Injectable } from '@angular/core'
import { Superhero } from '../Models/SuperHero'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SuperHeroService {

    baseuri: string = 'http://localhost:3000/';
    constructor(private _http: HttpClient) {

    }

    GetAllSuperHeros(): Observable<Superhero[]> {
        return this._http.get<Superhero[]>(this.baseuri + 'superheros');
    }

    SaveSuperHero(superhero: Superhero): Observable<Superhero> {
        return this._http.post<Superhero>(this.baseuri + 'superheros', superhero);
    }
}