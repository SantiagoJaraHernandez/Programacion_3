import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

//configuración de enrutamiento
const routes:Routes = [
  {path:'', redirectTo:'/tareas', pathMatch:'full'},
  {path:'equipos', component:EquiposComponent},
  {path:'actividades', component:ActividadesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquiposComponent,
    ActividadesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
