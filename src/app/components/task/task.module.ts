import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { TaskCardComponent } from './task-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TaskCardComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule
      ],

      exports: [
        TaskCardComponent
      ],

      providers: [],
      bootstrap: [TaskCardComponent]
})
export class TaskModule {}