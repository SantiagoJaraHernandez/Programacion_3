import { Component, OnInit } from '@angular/core';
import { Equipos } from './equipos';
import { EquiposService } from './equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit{
  tareas: Equipos[];
  equipos: Equipos[];
  
  constructor(private equipoService: EquiposService){}
  
  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(
      equipos => this.equipos = equipos
    );
  }
}
