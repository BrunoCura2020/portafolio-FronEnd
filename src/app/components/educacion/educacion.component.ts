import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  
  constructor(private sEducacion: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data => {
      this.educacion = data
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.exitoModal();
          this.cargarEducacion();
        }, err => {
          this.errorModal();
        }
      );
    }
  }

  errorModal(){
    Swal.fire({
    icon: 'error',
    title: 'Error al querer eliminarr.',
    timer: 1800
    });
  }

  exitoModal(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Educación eliminada',
      showConfirmButton: false,
      timer: 1800
    });
  }
}
