import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { ColorPicker } from "./color-picker/color-picker";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ColorPicker],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public bgColor = "white";

  updateColor(newColor:string){
    this.bgColor = newColor;
  }
}
