import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from '../sw-confim-dialog-config';

@Component({
  selector: 'sw-confim-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() { }
  submit(btnName: string, index): void {
    this.dialogRef.close(btnName);
    // const selfRef = this;
    // //console.log ('this.data.buttonAction', this.data.buttonAction);
    // this.data.buttonAction.forEach(action => {
    //   if (action.buttonName === btnName) {
    //     const subscription = action.clickHandler.subscribe({
    //       next(num) {
    //         //console.log (num);
    //         setTimeout(() => {
    //           selfRef.close(subscription);
    //         }, 500);
    //       },
    //       error() {
    //         //console.log ('error');
    //         // selfRef.dialogRef.close();
    //       },
    //       complete() {
    //         //console.log ('Finished sequence');
    //         // subscription.unsubscribe();
    //       }
    //     });
    //     // const res = action.webCall.subscribe(action.successHandler());
    //     // res.
    //   }
    // });
  }
  close(subscription?: Subscription) {
    // //console.log ('subscription', subscription);
    if (subscription) {
      subscription.unsubscribe();
    }
    this.dialogRef.close();
  }
}
