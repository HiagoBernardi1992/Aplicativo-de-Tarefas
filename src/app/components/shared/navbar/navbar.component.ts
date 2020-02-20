import { Component, OnInit } from "@angular/core";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/models/task.model';
import { Store } from '@ngrx/store';
import { TasksModel } from 'src/app/models/tasks.model';
import { Add } from 'src/app/actions/tasks.action';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    closeResult: string;
    public form : FormGroup;
  
    constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private store: Store<TasksModel>
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

    abrirModal(content){
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
    }

    save(){
      const title = this.form.controls['title'].value;
      const description = this.form.controls['description'].value; 
      let dateExecute = new Date(this.form.controls['dateExecute'].value);
      if(dateExecute < new Date())
        dateExecute = new Date();
      const task = new TaskModel(title, description, dateExecute);
      this.store.dispatch(Add(task));
      this.form.reset();
      this.modalService.dismissAll();
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