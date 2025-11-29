// footer-service.ts

// move footer down 

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  
  footerBottom = signal<string>("-500px");

    moveFooterDown(num: number){
        this.footerBottom.set(num + "px");
      
    }
}
