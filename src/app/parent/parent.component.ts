import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  message: string =""
  input : string=""
  receivedMessage: string = ""
  counter : number = 0
  @Input() childEvent: string | undefined;
  receiveMessage(child_message: string){
    this.receivedMessage="Nuovo messaggio da Figlio: "+child_message;
    alert(this.receivedMessage)
    this.message+="Figlio: "+child_message+"; ";
  }
  sendMessage(send_message: string){
    this.message+="Padre: "+send_message+"; ";
    this.counter++;
    this.input=""
  }
}
