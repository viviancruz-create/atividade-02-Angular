import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hospedagem } from './hospedagem/hospedagem'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hospedagem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hospedagem');
}
