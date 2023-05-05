import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { socialIconComponent } from './components/social-icon/social-icon.component';
import { navBarComponent } from './components/navBar/navBar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys-component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import{HttpClientModule} from '@angular/common/http'; //Importacion para conexion de front y back.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    socialIconComponent,
    navBarComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EstudiosComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
