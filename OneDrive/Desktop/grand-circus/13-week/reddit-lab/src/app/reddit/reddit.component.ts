import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
})
export class RedditComponent implements OnInit {
  posts = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((res: any) => {
      this.posts = res.data.children;
      console.log(res.data.children);
    });
  }
}
