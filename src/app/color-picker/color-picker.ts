import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.scss'
})
export class ColorPicker {
  @Output() color = new EventEmitter <string>();

  public changeColor(newColor:string){
    this.color.emit(newColor);
  }
}
