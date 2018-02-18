import { Component, OnInit, Input } from '@angular/core';
import { Drop } from '../drop';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-drop-detail',
  templateUrl: './drop-detail.component.html',
  styleUrls: ['./drop-detail.component.css']
})
export class DropDetailComponent implements OnInit {

  @Input() drop: Drop;

  constructor(
    private route: ActivatedRoute,
    private dropService: DropService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dropService.getDrop(id).subscribe(drop => this.drop = drop);
  }

  goBack(): void {
    this.location.back();
  }

}
