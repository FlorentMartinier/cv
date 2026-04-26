import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private cvData = new BehaviorSubject<any>(null);
  public cvData$ = this.cvData.asObservable();

  constructor(private http: HttpClient) {
    this.initLanguage();
  }

  private initLanguage() {
    // Détection de la langue du navigateur (ex: 'fr-FR' -> 'fr')
    const browserLang = navigator.language.split('-')[0];
    const lang = ['fr', 'en'].includes(browserLang) ? browserLang : 'en';
    this.loadLanguage(lang);
  }

  public loadLanguage(lang: string) {
    this.http.get(`./assets/data/cv-${lang}.json`).subscribe(data => {
      this.cvData.next(data);
    });
  }
}
