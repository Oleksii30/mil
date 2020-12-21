import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  resultOfStudentsAdding:any

  constructor(private http:HttpClient) { }

  createStudent(student){        
    this.http.post('https://mil-pasos.herokuapp.com/add-student', student).subscribe(result=>{
      this.resultOfStudentsAdding = result
      console.log('adding', result);      
    })
  }
}
