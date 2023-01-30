import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../domain/course';
import { CourseService } from '../../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-save',
  templateUrl: './course-save.component.html',
  styleUrls: ['./course-save.component.css']
})
export class CourseSaveComponent implements OnInit {

@Input() course:any
  public showMsg: boolean = false;
  public msg: string;
  public type: string;


  constructor(
    // public course: Course,
    public courseService: CourseService,
    private router: Router

  ) {
    this.msg = "";
    this.type = "";
  }

  ngOnInit(): void {
    this.course = new Course(0, '',0);
  }
  public save(){
    console.log(this.course);


    this.courseService.save(this.course).subscribe(data =>{
      this.router.navigate(['/course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Error en procedimiento';
      this.type = 'danger';

    });
  }

}
