import { Component, OnInit } from '@angular/core';

import {Bug} from '../../model/bug';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {

  bug : Bug = new Bug();

  constructor() { }

  ngOnInit() {
  }

  public validateForm() : void {
    console.log("validateForm : not implemented yet");
  }

}
