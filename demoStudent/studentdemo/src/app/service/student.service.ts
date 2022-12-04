import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from '../model/student';
import {Observable} from "rxjs";
import {Class} from "../model/class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) {
  }

  findAllStudents(studentName: string, classId: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL + 'students?name_like=' + studentName + '&class.id_like=' + classId);
  }

  findAllClass(): Observable<Class[]> {
    return this.http.get<Class[]>(this.URL + 'class');
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.URL + 'students', student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(this.URL + 'students/' + id);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.URL + 'students/' + id, student);
  }
  deleteStudent(id: number): Observable<Student>{
    return this.http.delete<Student>(this.URL + 'students/' + id);
  }
}
