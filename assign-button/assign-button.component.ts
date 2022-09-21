import { ValueConverter } from '@angular/compiler/src/render3/view/template';
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
    this.list.push(arr.value);//value = to get the array element
    arr.value=" ";// to clear the input bar for next entry
  }
  //this. point the given array [list]
  fun2(i ){
    this.list.splice(i,1)// this. used for to point given array list[]... splice methode used for to delete perticular element
  }

  
  constructor() { }

  ngOnInit() {
  }
}