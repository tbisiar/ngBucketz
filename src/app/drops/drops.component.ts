import { Component, OnInit } from '@angular/core';
import { Drop } from '../drop';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.css']
})
export class DropsComponent implements OnInit {

  selectedDrop: Drop;
  drops = Drop;

  constructor(private dropService: DropService) { }

  ngOnInit() {
    this.getDrops();
  }

  onSelect(drop: Drop): void {
    this.selectedDrop = drop;
  }

  getDrops(): void {
    this.dropService.getDrops()
      .subscribe(drops => this.drops = drops);
  }

}
