// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private processorData = new BehaviorSubject<any>(null);
  getData() {
    return this.processorData.asObservable();
  }
}
