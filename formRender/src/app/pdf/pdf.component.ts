import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { 
    Formio.setApiUrl("http://localhost:3001"); 
  }


  ngOnInit(){
    
    Formio.createForm(document.getElementById('formio'), 'http://localhost:3001/pdfform')
   
  }

}
