import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { TaskCardComponent } from './task-card.component';

@NgModule({
    declarations: [
        TaskCardComponent
      ],
      imports: [
        BrowserModule
      ],

      exports: [
        TaskCardComponent
      ],

      providers: [],
      bootstrap: [TaskCardComponent]
})
export class TaskModule {}