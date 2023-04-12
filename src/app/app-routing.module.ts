import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditionComponent } from './edition/edition.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    title:'BDl - Home',
    data:{
      linkLabel:'Retour Home'
    }
  },
  {
    path:'edition',
    component:EditionComponent,
    title:'BDl - Edition',
    data:{
      linkLabel:'Edition'
    }
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
