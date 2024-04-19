import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipos } from './equipos';
import { EQUIPO } from './proyectoEquipos.json';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor() { }
  getEquipos():Observable<Equipos[]>{
    return of(Equipos);
  }
}
