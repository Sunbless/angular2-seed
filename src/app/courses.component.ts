import { Component} from '@angular/core' 
import { CourseService } from './courses.service'


@Component({
    selector: 'courses',
    template: `
                <h2>Courses</h2>
                {{ title }}
                <ul>
                    <li  *ngFor= "let course of courses">
                        {{ course }}
                    </li>
                </ul>
                `,
    providers: [CourseService]

})

export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

}