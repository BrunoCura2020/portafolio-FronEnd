import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  acercaDe: AcercaDe = null;
  constructor(private sAcercaDe: AcercaDeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcercaDe.detail(id).subscribe(
      data => {
        this.acercaDe = data;
      }, err => {
        this.errorModal();
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcercaDe.update(id, this.acercaDe).subscribe(
      data => {
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
      title: 'Actualización exitosa',
      showConfirmButton: false,
      timer: 1800
    });
  }
}



