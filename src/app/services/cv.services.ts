import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CV } from '../models/cv.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private dataUrl = 'assets/data/cv.json';

  constructor(private http: HttpClient) {}

  getCV(): Observable<CV> {
    return this.http.get<CV>(this.dataUrl);
  }
}