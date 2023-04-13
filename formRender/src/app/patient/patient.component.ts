import { Component, OnInit } from '@angular/core';
import { Formio } from 'angular-formio';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  
   constructor() { Formio.setApiUrl("http://localhost:3001"); 
} 
ngOnInit() { 
  Formio.createForm(document.getElementById('formio'), 'http://localhost:3001/patientfitnessform')
  .then(function (form) { 
    form.on('submit', function (submission: any)
     { 
      console.log('form submitted', submission)
     });
     });
     }
}