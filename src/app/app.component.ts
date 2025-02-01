import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';//usar commonModule
// pra que funcione ngFor, ngIf entre otras

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],//usar commonModule apra que funcione ngFor, ngIf entre otras
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioGVasquez';
  task =['PrimeraTarea','SegundaTarea','TercerTarea','CuartaTarea',]
}
