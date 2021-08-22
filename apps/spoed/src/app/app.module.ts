import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { MaagComponent } from './maag/maag.component';
import { AntibioticComponent } from './antibiotic/antibiotic.component';
import {MatTreeModule} from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { ReceptenComponent } from './recepten/recepten.component';
import { NieuwsComponent } from './recept-toevoegen/nieuws.component';
import { OverComponent } from './nieuws/over.component';
import { AnderereceptComponent } from './recepten/andererecept/andererecept.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OpslaanmeldingComponent } from './opslaanmelding/opslaanmelding.component';
import {DataTablesModule} from 'angular-datatables';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [AppComponent,  MaagComponent, AntibioticComponent, HeaderComponent, ReceptenComponent, NieuwsComponent, OverComponent, AnderereceptComponent, OpslaanmeldingComponent, HomeComponent, FooterComponent, ],
  imports: [MatIconModule, ReactiveFormsModule, FormsModule, MatFormFieldModule,BrowserModule, BrowserAnimationsModule,
     AppRoutingModule,MatSliderModule, MatTreeModule,MatToolbarModule,
    MatButtonModule, MatListModule,MatTableModule, DataTablesModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
