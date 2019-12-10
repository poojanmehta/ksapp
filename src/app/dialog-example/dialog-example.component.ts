import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular//material";
import { LoginformComponent } from "../loginform/loginform.component";
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(private _dialog:MatDialog) { }

  ngOnInit() {
  }
  onClick(){
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "25%";
    this._dialog.open(LoginformComponent,_dialogConfig);
  }
}
