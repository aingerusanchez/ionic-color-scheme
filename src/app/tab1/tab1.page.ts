import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  colors: string[];
  color: string;
  sizes: string[];
  size: string;
  fillTypes: string[];
  fill: string;
  disabled = false;
  rounded = false;
  darkMode = false;

  constructor() {
    this.colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'];
    this.color = this.colors[0];
    this.sizes = ['small', 'default', 'large'];
    this.size = this.sizes[1];
    this.fillTypes = ['solid', 'outline', 'clear'];
    this.fill = this.fillTypes[0];
  }

  changeTheme() {
    document.body.classList.toggle('dark', this.darkMode);
  }

}
