import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    private url = "https://formsubmit.co/ajax/"
    private reciever = 'e78b0a812c363a3f547cc9d1efcc048c';

    constructor(private http: HttpClient) { }

    sendEmail(name: string, surename: string, subject: string, email: string, message: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        const body = {
            name: name,
            surename: surename,
            subject: subject,
            email: email,
            message: message
        };
        return this.http.post(this.url+this.reciever, body, { headers });
    }
}
