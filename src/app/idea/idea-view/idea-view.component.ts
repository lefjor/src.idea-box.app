import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

import { Idea } from "../../model/idea";
import { Reaction } from "../../model/reaction";
import { IdeaStoreService } from "../../service/idea-store.service";
import { AuthService } from "../../service/auth.service";
import { ReactionService } from "../../service/reaction.service";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-idea-view",
  templateUrl: "./idea-view.component.html",
  styleUrls: ["./idea-view.component.scss"]
})
export class IdeaViewComponent implements OnInit {
  @Input() idea: Idea;
  @Input() linkEnabled: boolean;

  userEmail: string;
  alreadyLiked: boolean = false;
  likeNumber: number = 0;
  reactionKey: string;
  modificationAuthorized: boolean = false;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private ideaStoreService: IdeaStoreService,
    private authService: AuthService,
    private reactionService: ReactionService
  ) {}

  ngOnInit() {
    this.authService.authState$.subscribe(() => {
      this.userEmail = this.authService.getEmail();
      if (this.userEmail === this.idea.userId) {
        this.modificationAuthorized = true;
      }
      this.reactionService
        .getAllReactions("thumbsup", this.idea.key)
        .subscribe((reactions: Reaction[]) => {
          this.likeNumber = 0;
          this.reactionKey = "";
          this.alreadyLiked = false;
          reactions.forEach((reaction: Reaction) => {
            this.likeNumber++;
            if (reaction.mail === this.userEmail) {
              this.alreadyLiked = true;
              this.reactionKey = reaction.key;
            }
          });
        });
    });
  }

  public open(content): void {
    this.modalService.open(content);
  }

  public deleteIdea(): void {
    this.ideaStoreService
      .deleteIdea(this.idea.key)
      .then(() => {
        if (!environment.production) {
          console.log("Delete idea : OK");
        }
      })
      .catch(error => {
        if (!environment.production) {
          console.log(error);
        }
      });
  }

  public thumbsUp(): void {
    if (!environment.production) {
      console.log("Idea key : ", this.idea.key);
      console.log("User id : ", this.userEmail);
    }
    if (!this.alreadyLiked) {
      this.reactionService.addReaction(this.idea.key, this.userEmail);
    } else {
      this.reactionService.deleteReaction(this.idea.key, this.reactionKey);
    }
  }
}
