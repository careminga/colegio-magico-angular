import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hechizo } from '../../models/hechizo.model';

// Servicio de acceso al API de hechizos
@Injectable({ providedIn: 'root' })
export class HechizoApiService {
  private readonly http = inject(HttpClient);
  private readonly url = '/api/hechizos';

  // 🔍 RETO 2: El Ojo que Todo lo Busca (GET)
  buscarPorTipo(tipo: string): Observable<Hechizo[]> {
    const params = new HttpParams().set('tipo', tipo);
    return this.http.get<Hechizo[]>(this.url, { params });
  }

  // ✍️ RETO 3: El Escriba del Grimorio (POST)
  crear(hechizo: Hechizo): Observable<string> {
    return this.http.post(this.url, hechizo, { responseType: 'text' });
  }
}