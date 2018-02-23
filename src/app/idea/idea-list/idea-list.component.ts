import { Component, OnInit } from "@angular/core";
import { IdeaStoreService } from "../../service/idea-store.service";

import { Idea } from "../../model/idea";

import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-idea-list",
  templateUrl: "./idea-list.component.html",
  styleUrls: ["./idea-list.component.scss"]
})
export class IdeaListComponent implements OnInit {
  ideas: Observable<Idea[]>;

  constructor(private ideaStoreService: IdeaStoreService) {}

  ngOnInit() {
    this.ideas = this.ideaStoreService.ideas$;
    // this.ideaStoreService.ideas$.subscribe(ideas => {
    //   console.log(ideas);
    // });
  }
}
