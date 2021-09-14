import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  courseClass: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.courseClass = this.router.getCurrentNavigation().extras.state.courseClass;
        this.courseClass.videoData = Array();
        for (let video of this.courseClass.videos) {
          fetch('https://youtube.com/oembed?format=json&url=youtube.com/watch?v=' + video).then(res => res.json()).then(data => {
            this.courseClass.videoData.push(data);
          });
        }
      }
    });
  }

  open(id: string) {
    window.open('https://www.youtube.com/watch?v=' + id);
  }

  thumbnail(id: string) {
    return 'https://i.ytimg.com/vi/' + id + '/mqdefault.jpg';
  }

  ngOnInit() {

  }
}
