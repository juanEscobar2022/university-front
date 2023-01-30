import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../domain/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers:[CourseService]
})
export class CourseListComponent implements OnInit, OnDestroy {
@Input() courses:any
  // public courses: Course[];

// public courses: Course[];
public subCourses : Subscription = new Subscription();
  constructor(
    public courseService: CourseService,
  // public courses: Array<Course>
  // public subCourses: Subscription,
  // public courses:Course


  ) {
    // this.courses = courses
  }
  ngOnDestroy(): void {
    this.subCourses.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
   this.subCourses = this.courseService.getAll().subscribe(data => {
    this.courses = data;
    console.log('+++++++++++++++++++++++++++++++++++++');

    console.log(this.courses);

  },(error)=>{
    console.log(error);
  });
  }
  // getProducts(){
  //   this.productService.getProducts().subscribe(data =>{
  //     console.log(data);
  //     this.processProductResponse(data);
  //   }, (error)=>{
  //         console.log(error);
  //   });
  // }
}
