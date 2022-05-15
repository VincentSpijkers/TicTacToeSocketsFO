import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Room} from "../../lobby/Room";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() room?: Room;
  @Input() withInputField = true;
  @Input() buttonName = "";
  @Input() title = "";
  @Output() onButtonFired = new EventEmitter<string>();
  @Output() onCloseFired = new EventEmitter<boolean>();
  public value?: string;

  constructor(private formBuilder: FormBuilder) {
  }

  public form = this.formBuilder.group({
    roomIdField: ['',{
      validators: [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1)
      ]
    }]
  })


  public emitButtonClicked(): void {
    this.onButtonFired.emit(this.form.value.roomIdField);
  }

  public emitClose(): void {
    this.onCloseFired.emit(true);
  }

}
