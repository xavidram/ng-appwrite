import { Injectable, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as Appwrite from 'appwrite';

@Injectable({
    providedIn: 'root'
})
export class AppwriteService implements OnInit {

    public client: Appwrite;

    constructor() {
        this.client = new Appwrite();
        this.client.setEndpoint(environment.appwriteEndpoint).setProject(environment.appwriteProjectID);
    }

    ngOnInit() {
        
    }
    
}