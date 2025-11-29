import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Insomniac-Mac');
}
