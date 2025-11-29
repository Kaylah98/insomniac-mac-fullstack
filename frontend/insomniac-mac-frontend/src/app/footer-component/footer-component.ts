import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FooterService } from '../services/footer-service';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {



  constructor(private renderer: Renderer2, private el: ElementRef, public footerService: FooterService) {

  }


}
