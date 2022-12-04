import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from '../model/student';
import {Class} from "../model/class";
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  className: string;


  constructor(private studentService: StudentService,
              private router: Router) {
  }
  studentNameDelete: string;
  studentIdDelete: number;
  studentList: Student[];
  classList: Class[];
  studentNameSearch: string = '';
  classSearch: string = '';

  page: number =1;
  count: number = 3;

  ngOnInit(): void {
    this.studentService.findAllStudents(this.studentNameSearch, this.classSearch).subscribe(list => {
      this.studentList = list;
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK');
    })
    this.studentService.findAllClass().subscribe(list => {
      this.classList = list;
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK');
    })
  }


  search() {
    this.ngOnInit();
  }


  infoDelete(name: string, id: number, className: string) {
    this.studentIdDelete = id;
    this.studentNameDelete=name;
    this.className = className;

    console.log(this.studentIdDelete);
    console.log(this.studentNameDelete);
    console.log(this.className);


  }

  delete(studentIdDelete: number, studentNameDelete: string) {
    this.page =1;
    this.studentService.deleteStudent(studentIdDelete).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Successfully deleted!',
        text: 'Student: ' + studentNameDelete,
      });
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK');
    })

  }
}
