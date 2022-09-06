import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombre: string;
  carrera: string;
  titulo: string;
  inicio: string;
  fin: string;

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit():void{}

  onCreate(): void {
    const educacion = new Educacion(this.nombre, this.carrera, this.titulo, this.inicio, this.fin);
    this.sEducacion.save(educacion).subscribe(
      data =>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    )
  }
}