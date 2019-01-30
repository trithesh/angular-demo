import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { from, Observable } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  demo = " pages";
  posts$: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPosts().subscribe(data => (this.posts$ = data));
  }
}
