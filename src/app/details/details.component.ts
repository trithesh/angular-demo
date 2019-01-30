import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { from, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  user$: Object;
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(prams => (this.user$ = prams.id));
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(data => (this.user$ = data));
  }
}
