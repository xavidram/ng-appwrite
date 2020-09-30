import { Injectable, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { AppwriteClient, AppwriteAccount } from '@ng-appwrite/angular-appwrite';

@Injectable()
export class AppwriteService implements OnInit {

    constructor(private client: AppwriteClient) {
    }

    ngOnInit() {
        
    }
    
}