import { Component, OnInit } from '@angular/core';
import { TaskModel } from './models/task.model';
import { TasksModel } from './models/tasks.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Add } from './actions/tasks.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  tasks$ : Observable<TaskModel[]>;
  constructor(
    private store: Store<TasksModel>
    ){ 
    this.tasks$ = store.pipe(select('tasks'));
  }

  ngOnInit(){
    let taskQualquer = new TaskModel(
      'Realizar Desafio', 'Realizar desafio proposto pelo itaú', new Date()
    );
    this.store.dispatch(Add(taskQualquer));
  }  
}
