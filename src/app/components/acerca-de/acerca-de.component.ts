import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca-de';
import { Persona } from 'src/app/model/persona.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "");
  
  acercaDe: AcercaDe[] = [];

  constructor(private sAcercaDe: AcercaDeService, private sPersona: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercaDe();
    this.cargarPersona();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarAcercaDe(): void{
    this.sAcercaDe.lista().subscribe(
      data => {
        this.acercaDe = data;
      }
    )
  }

  cargarPersona(): void{
    this.sPersona.getPersona().subscribe(data => {this.persona = data});
  }


  delete(id?: number){
    if(id != undefined){
      this.sAcercaDe.delete(id).subscribe(
        data => {
          this.cargarAcercaDe();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}


/* persona: Persona = new Persona("", "", "");
  acercaDe: AcercaDe = new AcercaDe("");
  constructor(public personaService: PersonaService, public acercaDeService: AcercaDeService) { }
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data}),
    this.acercaDeService.getAcercaDe.subscribe(data => {this.acercaDe = data})
  } */