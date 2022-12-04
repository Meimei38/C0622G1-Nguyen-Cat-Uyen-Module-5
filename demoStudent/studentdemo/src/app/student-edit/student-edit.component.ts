import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Class} from "../model/class";
import Swal from "sweetalert2";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(private studentService: StudentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  studentForm: FormGroup;
  studentId: number |undefined;
  classList: Class[]|undefined;

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['id'];


    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.studentForm = new FormGroup(
        {
          name: new FormControl(data.name),
          gender: new FormControl(data.gender),
          dateOfBirth: new FormControl(data.dateOfBirth),
          email: new FormControl(data.email),
          address: new FormControl(data.address),
          class: new FormControl(data.class),
        }
      )
      console.log(this.studentForm.value);
    })

    this.studentService.findAllClass().subscribe(list => {
      this.classList = list;
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK');
    })


  }


  compare(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  update(studentId: number) {
   const student = this.studentForm.value;
    this.studentService.updateStudent(studentId, student).subscribe(()=> {
      Swal.fire({
        icon: 'success',
        title: 'Successfully edited!',
        text: 'Student: ' + student.name,
      });
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('student/list');
    })

  }
}
