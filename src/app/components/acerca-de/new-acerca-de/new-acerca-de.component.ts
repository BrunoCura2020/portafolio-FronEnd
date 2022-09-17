import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-acerca-de',
  templateUrl: './new-acerca-de.component.html',
  styleUrls: ['./new-acerca-de.component.css']
})
export class NewAcercaDeComponent implements OnInit {
  descripcion: string;

  constructor(private sAcercaDe: AcercaDeService, private router: Router) { }

  ngOnInit():void{}

  onCreate(): void {
    const acercaDe = new AcercaDe(this.descripcion);
    this.sAcercaDe.save(acercaDe).subscribe(
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
    title: 'Error al querer modificar.',
    timer: 1800
    });
  }

  exitoModal(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Infomación añadida',
      showConfirmButton: false,
      timer: 1800
    });
  }
}


