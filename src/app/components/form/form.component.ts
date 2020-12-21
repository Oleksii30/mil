import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../interfaces/course.interface'
import { StudentsService } from '../../services/students/students.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form:FormGroup

  @Input() course:Course
  @Output() closePopup = new EventEmitter()

  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      number: new FormControl('', Validators.required)
    })
  }
  submit(){    
    if(this.form.valid){
      const student = {
        lenguage: this.course.lenguage,
        level: this.course.level,
        name: this.form.value.name,
        lastname:this.form.value.lastname,  
        email: this.form.value.email,
        phone:this.form.value.number  
      }
      this.studentsService.createStudent(student)
      this.closePopup.emit('close')
    }  

    this.form.reset()
  }

}
