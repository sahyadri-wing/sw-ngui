import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwConfimDialogConfig } from './sw-confim-dialog-config';
import { Subject, Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SwConfirmDialogService {
  private dialogRef: any;
  private readonly _afterClosed = new Subject<any | undefined>();
  constructor(public dialog: MatDialog) { }
  show(swConfimDialogConfig: SwConfimDialogConfig) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, swConfimDialogConfig);
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this._afterClosed.next(result);
      this._afterClosed.complete();
    });
  }
  close(): Observable<any | undefined> {
    return this._afterClosed.asObservable();
  }
}
