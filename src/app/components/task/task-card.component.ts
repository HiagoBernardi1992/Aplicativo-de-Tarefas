import { Component, OnInit, Input } from "@angular/core";
import { TaskModel } from 'src/app/models/task.model';
import { Store } from '@ngrx/store';
import { TasksModel } from 'src/app/models/tasks.model';
import { Remove, Update } from 'src/app/actions/tasks.action';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent implements OnInit{
    @Input() task : TaskModel;
    closeResult: string;    
    public form : FormGroup;
    constructor(
        private store: Store<TasksModel>,
        private fb: FormBuilder,
        private modalService: NgbModal
    ){
      this.form = this.fb.group({
        title: ['', Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.required,
        ])],
        description :['', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(40),
          Validators.required,
        ])],
        dateExecute :['', Validators.compose([
          Validators.required,
        ])]
      });
    }
    ngOnInit(){

    }

    formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
  }
    async excluir(){
        this.store.dispatch(Remove(this.task));
    }

    async editar(){      
      const title = this.form.controls['title'].value;
      const description = this.form.controls['description'].value; 
      const dataFormato = this.form.controls['dateExecute'].value;
      let dateExecute = new Date(this.form.controls['dateExecute'].value);
      if(dateExecute < new Date())
        dateExecute = new Date();
      this.task.title = title;
      this.task.description = description;
      this.task.taskDate = dateExecute;
      this.store.dispatch(Update(this.task));
      this.form.reset();
      this.modalService.dismissAll();
    };

    abrirModal(content){
      // this.form.setValue({
      //   title: this.task.title,
      //   description: this.task.description,
      //   dateExecute: this.formatDate(this.task.taskDate)
      // });
      // this.form.updateValueAndValidity();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {            
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
}