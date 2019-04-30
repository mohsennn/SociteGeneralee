import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { urlConf } from "./../url.conf";
import { Compte } from "./../compte";
import { tap } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ "content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class CompteService {
  constructor(private http: HttpClient) {}

  getCompteList(): Observable<Compte[]> {
    return this.http
      .get<Compte[]>(urlConf.CompteUrl)
      .pipe(tap(comptes => console.log("fetched comptess")));
  }

  getCompte(id: number): Observable<Compte> {
    const url = `${urlConf.CompteByIdUrl}/${id}`;
    return this.http
      .get<Compte>(url)
      .pipe(tap(_ => console.log(`fetched compte id=${id}`)));
  }

  addCompte(compte): Observable<Compte> {
    return this.http
      .post<Compte>(urlConf.CompteAdd, compte, httpOptions)
      .pipe(
        tap((compte: Compte) =>
          console.log(`added compte with id =${compte._id}`)
        )
      );
  }

  updateProduct(id, compte): Observable<any> {
    const url = `${urlConf.CompteByIdUrl}/${id}`;
    return this.http
      .put(url, compte, httpOptions)
      .pipe(tap(_ => console.log(`updated compte id=${id}`)));
  }
}
