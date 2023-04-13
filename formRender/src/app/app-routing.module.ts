import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PdfComponent } from './pdf/pdf.component';
import { AppformComponent } from './appform/appform.component';

const routes: Routes = [
  {path:'patientfitnessform',component:PatientComponent},
  {path:'pdfform',component:PdfComponent},
  {path:'appform',component:AppformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
