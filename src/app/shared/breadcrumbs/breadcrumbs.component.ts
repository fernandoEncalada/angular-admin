import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  public titleSubs$: Subscription;

  constructor(private router: Router) { 

   this.titleSubs$ =  this.getArgumentsRoute()    
        .subscribe( ({title}) => {
          this.title = title;
          document.title = `Admin - ${title}`;
  });
    
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getArgumentsRoute() {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd ) => event.snapshot.data),
      );

  }



}
