import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
;
  get(url: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    return this.http.get<any>(`${environment.apiUrl + url}`, { headers: headers })
  }

  post(url: string, body: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    let serializedForm = JSON.stringify(body)
    return this.http.post<any>(`${environment.apiUrl + url}`, serializedForm, { headers: headers })
  }
}
