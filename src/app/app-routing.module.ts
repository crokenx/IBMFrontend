import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './componentes/body/body.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HeaderComponent } from './componentes/header/header.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  {
    path: '**',
    component: FormularioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
