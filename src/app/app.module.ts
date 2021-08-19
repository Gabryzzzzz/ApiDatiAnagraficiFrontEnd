import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule, NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TableDataComponent } from './table-data/table-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModalNewUser } from './modal-new-user/modal-new-user.component';
import { BsModalService } from 'ngx-bootstrap/modal'


@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    NavBarComponent,
    ModalNewUser
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [HttpClient, BsModalService, NgbActiveModal, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
