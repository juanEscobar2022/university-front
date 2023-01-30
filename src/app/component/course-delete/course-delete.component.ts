import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from '../../domain/course';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  @Input() course:any
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public id:any =[];
  constructor(
    public courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.msg = "";
    this.type = "";
    this.id = 0;
   }

   ngOnInit(): void {
    this.getById();
  }
  public getById(){
    this.activatedRoute.params.subscribe(params =>{
      this.id = +params['id'];
      console.log('+++++++++++++++++++++++++++++');

      console.log(this.id);

      this.courseService.getById(this.id).subscribe(data =>{
        this.course = data;
      }, error =>{
        console.log(error);

      });
    });

  }
  public delete(){
    console.log(this.course);
    this.courseService.delete(this.course.CourseID).subscribe(data =>{
      this.router.navigate(['/course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Error en procedimiento';
      this.type = 'danger';

    });
  }

}
