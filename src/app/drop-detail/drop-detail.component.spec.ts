import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDetailComponent } from './drop-detail.component';

describe('DropDetailComponent', () => {
  let component: DropDetailComponent;
  let fixture: ComponentFixture<DropDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
