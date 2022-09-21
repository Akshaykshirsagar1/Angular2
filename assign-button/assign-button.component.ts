import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-button',
  templateUrl: './assign-button.component.html',
  styleUrls: ['./assign-button.component.css']
})
export class AssignButtonComponent implements OnInit {
  user:string=" enter your name";
 
  list=[];
  fun1(arr){
    this.list.push(arr.value);
    arr.value=" "
  }
  fun2(ak ){
    this.list.splice(ak,1)
  }
  

  
  constructor() { }

  ngOnInit() {
    
  }

}
