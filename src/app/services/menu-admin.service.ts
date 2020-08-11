import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject,Observable } from 'rxjs';
import { MenuAdminModel } from '../models/menu-admin.model';

@Injectable({ providedIn: 'root' })
export class MenuAdminService implements OnDestroy {
    private unsubscribeAll = new Subject<void>();
    // objs = new Subject<any>();
    constructor(private db: AngularFireDatabase) {
        // this.db.list('menu-admin').valueChanges().subscribe((val) => {
        //     this.objs.next(val);
        // });
    }
    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
        console.log('>>> MenuAdminService destroy !');
    }
    getMenuAdmins(): Observable<any> {
        return this.db.list('menu-admin').valueChanges();
    }
}
