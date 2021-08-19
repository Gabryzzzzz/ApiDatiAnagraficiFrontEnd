import { Component, Input, OnInit, EventEmitter, } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalNewUser } from '../modal-new-user/modal-new-user.component';
import {  BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
import { HttpService } from '../services/http.services';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  constructor(private modalService: BsModalService, private httpService: HttpService) { }

  ngOnInit(): void {
  }

  openModal(){
    const modalOptions: ModalOptions = {
      keyboard: false,
      backdrop: false,
      class: 'app-modal modal-lg'
    }
    this.modalRef = this.modalService.show(ModalNewUser, modalOptions)
    this.modalRef.content.onClose.subscribe(() => {
      this.modalService.hide()
      this.getData()
    });


  }

  getData(){

  }

  closeModal(){

  }
}
