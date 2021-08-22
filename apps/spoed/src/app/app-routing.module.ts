import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaagComponent } from './maag/maag.component';
import { RouterModule,Routes } from '@angular/router';
import { ReceptenComponent } from './recepten/recepten.component';

import { NieuwsComponent } from './recept-toevoegen/nieuws.component';
import { OverComponent } from './nieuws/over.component';
import { AnderereceptComponent } from './recepten/andererecept/andererecept.component';
import { OpslaanmeldingComponent } from './opslaanmelding/opslaanmelding.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AntibioticComponent } from './antibiotic/antibiotic.component';

import { HomeComponent } from './home/home.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes: Routes = [
  {path: 'antibiotic', component : AntibioticComponent},
  {path: 'maag', component : MaagComponent},
  { path: '', component : HomeComponent, pathMatch: "full" },
   { path: 'recepttoevoegen', component : NieuwsComponent},
   { path: 'nieuw',  component : OverComponent},
   { path: 'andererecept', component:AnderereceptComponent },
   { path: 'recepten', component : ReceptenComponent},
   { path: 'opslaan', component : OpslaanmeldingComponent}
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes),
    CommonModule,
    MatFormFieldModule
  ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
