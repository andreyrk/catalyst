import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss']
})

export class CoursesPage {
  courses: any[] = []
  courseFiles: string[] = [ 
    "assets/courses/artes.json", 
    "assets/courses/atualidades.json", 
    "assets/courses/biologia.json",
    "assets/courses/espanhol.json",
    "assets/courses/filosofia.json",
    "assets/courses/fisica.json",
    "assets/courses/geografia.json",
    "assets/courses/historia.json",
    "assets/courses/ingles.json",
    "assets/courses/literatura.json",
    "assets/courses/matematica_basica.json",
    "assets/courses/matematica.json",
    "assets/courses/portugues.json",
    "assets/courses/quimica.json",
    "assets/courses/redacao.json",
    "assets/courses/sociologia.json",
  ]

  constructor() {
    for (let path of this.courseFiles) {
      fetch(path).then(
        (result) => {
          result.json().then((course) => {
            this.courses.push(course)
          });
        }
      );
    }
  }

  toggle(target: any) {
    target.expanded = !target.expanded;
  }
}
