import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.scss']
})
export class AppformComponent implements OnInit {

  formData = {
    field1: '',
    field2: null,
 
  };

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    this.http.post('/api/data', this.formData).subscribe(response => {
      console.log('Record created:', response);
    });
  }
}