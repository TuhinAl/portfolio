import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private students = [
    { id: 1, name: 'John Doe', age: 20, course: 'Mathematics' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'Physics' },
    { id: 3, name: 'Emily Johnson', age: 21, course: 'Chemistry' }
  ];

  constructor() { }




  getStudents(): Observable<{ id: number; name: string; age: number; course: string; }[]> {

    return of([
  
      { id: 1, name: 'John Doe', age: 20, course: 'Math' },
  
      { id: 2, name: 'Jane Doe', age: 22, course: 'Science' }
  
    ]);
  
  }
  
}