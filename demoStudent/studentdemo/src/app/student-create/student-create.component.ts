import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Class} from "../model/class";
import {Student} from "../model/student";
import Swal from 'sweetalert2'
import { logging } from 'protractor';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;
  classList: Class[];
  student: Student;
  studentList: Student[];

  constructor(private studentService: StudentService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.studentService.findAllClass().subscribe(list => {
      this.classList = list;
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK');
    })


    this.studentService.findAllStudents('','').subscribe(data => {
      this.studentList = data;
      this.studentForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        gender: new FormControl(0),
        dateOfBirth: new FormControl(''),
        email: new FormControl(''),
        address: new FormControl(''),
        class: new FormControl(''),
      },{validators:this.checkName})
    })


  }

  checkName: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get("name");
    let result = null;
    this.studentList.forEach(value => {
      if (name.value === value.name) {
        result = {"nameUnique": true};
      }
    });

    return result;
  }
  submit() {
    this.student = this.studentForm.value;
    this.studentService.createStudent(this.student).subscribe(()=>{
      this.studentForm.reset();

    }, error => {
      console.log(error);
    },()=>{
      Swal.fire({
        title: 'Successfully added!',
        text: 'Student: ' + this.student.name,
      });
      this.router.navigateByUrl('/student/list');
    });
  }
}
