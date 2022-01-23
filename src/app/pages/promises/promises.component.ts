import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    })
    // const promise = new Promise( (resolve, reject) => {
    //   if(false){
    //     resolve("Hello World");
    //   }else{
    //     reject('Ops Something went wrong');
    //   }
      
      
    // });

    // promise.then( (message) =>{
    //   console.log(message)
    // }).catch((err) =>{
    //   console.log(err);
    // });



  }

  getUsuarios(){

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then(  resp => resp.json())
      .then(  body => resolve(body.data));
    });


  }

}
