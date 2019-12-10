import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<LoginformComponent>) { }
 myName: String;
 email: String;
 gender: String;
  ngOnInit() {
  }
  onCancel(){
    this._dialogRef.close();
  }
}
