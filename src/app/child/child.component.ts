import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentMessage : string | undefined 
  @Output() childEvent =new EventEmitter<string>();
  message : string =""
  sendMessage(message:string){
    this.childEvent.emit(message)
    this.message=""
  }
}
