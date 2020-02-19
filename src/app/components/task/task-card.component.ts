import { Component, OnInit, Input } from "@angular/core";
import { TaskModel } from 'src/app/models/task.model';
import { Store } from '@ngrx/store';
import { TasksModel } from 'src/app/models/tasks.model';
import { Remove } from 'src/app/actions/tasks.action';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent implements OnInit{
    @Input() task : TaskModel;
    closeResult: string;
    constructor(
        private store: Store<TasksModel>,
        private modalService: NgbModal
    ){}
    ngOnInit(){

    }
    async excluir(){
        this.store.dispatch(Remove(this.task));
    }

    async editar(){

    };

    abrirModal(content){
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