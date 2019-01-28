import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    dataSubject: any;
    getState: any;
    constructor() {

        this.dataSubject = new BehaviorSubject('default message');
        this.getState = this.dataSubject.asObservable();

    }


    setState(data: any) {
        this.dataSubject.next(data);
        console.log('shared service', data);

    }

    // getState() {
    //     return this.dataSubject.asObservable();
    // }

}