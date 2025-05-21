import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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


