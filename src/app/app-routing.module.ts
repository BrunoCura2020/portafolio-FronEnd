import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { NewAcercaDeComponent } from './components/acerca-de/new-acerca-de/new-acerca-de.component';
import { EditeducacionComponent } from './components/educacion/edit-educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/new-educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto/new-proyecto.component';

const routes: Routes = [
	{path:'', component: HomeComponent},
	{path:'login', component: LoginComponent},
	{path:'nuevaexp', component: NewExperienciaComponent},
	{path:'editexp/:id', component: EditExperienciaComponent},
	{path:'nuevaedu', component: NeweducacionComponent},
	{path:'editedu/:id', component: EditeducacionComponent},
	{path:'nuevopro', component: NewProyectoComponent},
	{path:'editpro/:id', component: EditProyectoComponent},
	{path:'nuevoAcer', component: NewAcercaDeComponent},
	{path:'editAcer/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
