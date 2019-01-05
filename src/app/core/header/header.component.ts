import { Component } from '@angular/core';

import { StoreDataService } from '../../shared/store-data.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor (private storeData: StoreDataService,
                private authService: AuthService) {}

    onSaveData() {
        this.storeData.saveData()
            .subscribe(
                (response: any) => {
                    console.log(response);
                }
            )
    }

    onFetchData() {
        this.storeData.fetchData();
    }

    onLogOut() {
        this.authService.logOut();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}