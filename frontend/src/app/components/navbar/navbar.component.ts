import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class NavbarComponent implements OnInit {

  constructor(
    private messageService: MessageService,  
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  deleteProduct(){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + 'Ipeleng?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'success', summary: 'Rejected', detail: 'You have rejected', life: 3000})
      }
    })
  }

  

    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }
}
