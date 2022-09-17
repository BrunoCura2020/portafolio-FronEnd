import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  lugar: string = '';
  puesto: string = '';
  descripcion: string = '';
  inicio: string = '';
  fin: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit():void{}

  onCreate(): void {
    const expe = new Experiencia(this.lugar, this.puesto, this.descripcion,  this.inicio, this.fin);
    this.sExperiencia.save(expe).subscribe(
      data =>{
        this.exitoModal();
        this.router.navigate(['']);
      }, err => {
        this.errorModal();
        this.router.navigate(['']);
      }
    )
  }

  errorModal(){
    Swal.fire({
    icon: 'error',
    title: 'Error al querer añadir.',
    timer: 1800
    });
  }

  exitoModal(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Experiencia añadida',
      showConfirmButton: false,
      timer: 1800
    });
  }

}
