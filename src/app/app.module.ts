import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { DropsComponent } from './drops/drops.component';
import { DropDetailComponent } from './drop-detail/drop-detail.component';
import { DropService } from './drop.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    DropsComponent,
    DropDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DropService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
