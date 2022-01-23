import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icono: 'mdi mdi-gauge', 
      submenu: [
        { title: 'Main', url: '/'},
        { title: 'ProgessBar', url: 'progress'},
        { title: 'Charts', url: 'chart'},
        { title: 'Promises', url: 'promises'},
        { title: 'Rxjs', url: 'rxjs'}
      ]

    }
  ];

  constructor() { }
}
