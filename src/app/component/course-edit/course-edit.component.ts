import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

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
  public edit(){
    console.log(this.course);


    this.courseService.edit(this.course).subscribe(data =>{
      this.router.navigate(['/course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Error en procedimiento';
      this.type = 'danger';

    });
  }

}
