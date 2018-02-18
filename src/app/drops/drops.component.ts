import { Component, OnInit } from '@angular/core';
import { Drop } from '../drop';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.css']
})
export class DropsComponent implements OnInit {

  drops = Drop[new Drop()];

  constructor(private dropService: DropService) { }

  ngOnInit() {
    this.getDrops();
  }

  getDrops(): void {
    this.dropService.getDrops()
      .subscribe(drops => this.drops = drops);
  }

}
