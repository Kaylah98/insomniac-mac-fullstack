import { Injectable, signal } from '@angular/core';
import { Alert } from '../models/alert-model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts = signal<Alert[]>([]);
  visible = signal<boolean>(false);

  // shows success message
  success(message: string, duration: number) {
    this.showAlert(message, duration);
  }

  // shows fail message
  fail(message: string, duration: number){
    this.showAlert(message, duration);
  }
  // updates alert
  private showAlert(message: string, duration?: number) {
    const id = Math.random().toString(36).substring(2, 15);
    const alert: Alert = { id, message, duration };
    this.alerts.update(alerts => [...alerts, alert]);
    this.visible.update(() => true);
    if (duration) {
      setTimeout(() => this.removeAlert(id), duration);
    }
  }

  // removes alert and changes visibility to false
  private removeAlert(id: string) {
    this.alerts.update(alerts => alerts.filter(alert => alert.id !== id));
    this.visible.update(() => false);
  }
}
