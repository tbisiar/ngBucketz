import { Component, OnInit } from '@angular/core';
import { Drop } from '../drop';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  drops: Drop[] = [];

  constructor(private dropService: DropService) { }

  ngOnInit() {
    this.getDrops();
  }

  getDrops(): void {
    this.dropService.getDrops().subscribe(drops => this.drops = drops.slice(1, 5));
  }
}
