import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  public previsualizacion:string;
  public archivos:any = [];
  nombre: string;
  descripcion: string;
  realizacion: string;
  imagen: string;

  constructor(private sProyecto: ProyectoService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.realizacion, this.imagen);
    this.sProyecto.save(proyecto).subscribe(
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
      title: 'Infomación añadida',
      showConfirmButton: false,
      timer: 1800
    });
  }

  capturarFile(event: any) {
    //Se encuentra en:
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      this.archivos.push(imagen);
      console.log(imagen);
    });
    console.log(this.archivos); 
    /* this.archivos.push(archivoCapturado); */
  }

  extraerBase64 = async($event: any) => new Promise((resolve, reject)=> {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const images = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({

          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch(e){
      return null;
    }
  });
}
