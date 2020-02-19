import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { TaskModule } from './components/task/task.module';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/tasks.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TaskModule,
    NgbModule,
    StoreModule.forRoot({
      tasks: taskReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
