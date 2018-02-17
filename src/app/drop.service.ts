import { Injectable } from '@angular/core';
import { Drop } from './drop';
import { DROPS } from './mock-drops';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService} from './message.service';

@Injectable()
export class DropService {

  constructor(private messageService: MessageService) { }

  getDrops(): Observable<Drop[]> {
    this.messageService.add('DropService: fetched drops');
    return of(DROPS);
  }

}
