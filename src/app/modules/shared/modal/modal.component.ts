import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Room} from "../../lobby/Room";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() room?: Room;
  @Input() withInputField = false;
  @Input() buttonName = "";
  @Input() title = "";
  @Output() onButtonFired = new EventEmitter<string>();
  @Output() onCloseFired = new EventEmitter<boolean>();
  public value?: string;


  public emitButtonClicked(): void {
    this.onButtonFired.emit(this.value);
  }

  public emitClose(): void {
    this.onCloseFired.emit(true);
  }

}
