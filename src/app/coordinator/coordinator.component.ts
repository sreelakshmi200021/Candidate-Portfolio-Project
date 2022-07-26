import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {
    searchTerm = '';
    students: stud[] = [];
    term = '';
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.http.get<stud[]>('./assets/students.json')
        .subscribe((data: stud[]) => {
          this.students = data;
        });
    }
  
  }
  interface stud {
    id:number;
    name: string;
    contact: number;
    batch: number;
    degree:string;
    disability:string;
    year:number;
    work:string;
    sign:string;
    swot:string;
  }