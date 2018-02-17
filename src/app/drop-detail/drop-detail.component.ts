import { Component, OnInit, Input } from '@angular/core';
import {Drop} from '../drop';

@Component({
  selector: 'app-drop-detail',
  templateUrl: './drop-detail.component.html',
  styleUrls: ['./drop-detail.component.css']
})
export class DropDetailComponent implements OnInit {

  @Input() drop: Drop;

  constructor() { }

  ngOnInit() {
  }

}
