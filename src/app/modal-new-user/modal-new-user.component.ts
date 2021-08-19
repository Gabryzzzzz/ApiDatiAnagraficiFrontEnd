import { Component, OnInit, Output,EventEmitter, } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
// import { EventEmitter } from 'stream';
import { convertCompilerOptionsFromJson } from 'typescript';
import { Dati } from '../interfaces/dati-anagrafici';
import { HttpService } from '../services/http.services';

@Component({
  selector: 'app-modal-new-user',
  templateUrl: './modal-new-user.component.html',
  styleUrls: ['./modal-new-user.component.scss']
})
export class ModalNewUser implements OnInit{

  @Output() onClose = new EventEmitter();

  data : Dati = {
    nome : 'prova',
    cognome : 'prova',
    codiceFiscale : 'prova',
    dataDiNascita :  new Date()
  }

  constructor(
    public activeModal: NgbActiveModal,
    private modal: BsModalService,
    private httpService: HttpService) {}
  ngOnInit(): void {
  }

  adduser(){
    this.httpService.post('Dati/AddDati', this.data).subscribe(res => {
      if (res.isSuccess = true){
        this.onClose.emit()
        this.closeModal()
      }
    })
    console.log('added')
  }

  closeModal(){
    console.log('closed')
    this.onClose.emit()
  }
}
