import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `<input type="text" name="txtName" [value]="name">
  <button type="submit"> Register </button>`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name : string="";
  constructor() { 
    this.name="Deepak";
  }

  ngOnInit(): void {
  }

}
