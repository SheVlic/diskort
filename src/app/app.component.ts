import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diskort';
  XActiveButton = 'work1'; // текущая вкладка

  switchX(navButton: string) {
    this.XActiveButton = navButton;
  }
}


