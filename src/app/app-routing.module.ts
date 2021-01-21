import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamesListComponent } from './exames-list/exames-list.component';
import { CreateExamesComponent } from './create-exames/create-exames.component';
import { UpdateExamesComponent } from './update-exames/update-exames.component';
import { ExamesDetalhesComponent } from './exames-detalhes/exames-detalhes.component';

const routes: Routes = [
  {path: '', redirectTo: 'exames', pathMatch: 'full'},
  {path: 'exames', component: ExamesListComponent},
  {path: 'add', component: CreateExamesComponent},
  {path: 'update/:id', component: UpdateExamesComponent},
  {path: 'detalhes/:id', component: ExamesDetalhesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
