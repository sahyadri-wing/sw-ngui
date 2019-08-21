import { Component } from '@angular/core';
import { SwConfirmDialogService } from 'sw-confirm-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sw-ngui';
  constructor(private swConfirmDialog: SwConfirmDialogService) { }
  openDialog() {
    let message = 'Are you sure you want to save country?';
    const confirmationData = this.setConfirmationModalData(message);
    this.swConfirmDialog.show({
      width: '500px',
      panelClass: 'confirmation_modal',
      data: confirmationData
    })
    this.swConfirmDialog.close().subscribe(res => {
      console.log('res', res);

    })
  }
  private setConfirmationModalData(message: string) {
    const confirmationData = {};
    confirmationData['buttonAction'] = [];
    confirmationData['title'] = 'Confirmation';
    confirmationData['message'] = message;
    confirmationData['buttonName'] = ['Cancel', 'Confirm'];
    // confirmationData.buttonAction.push(this.confimationButtonAction(buyMembership));
    // confirmationData.buttonAction.push(this.cancelButtonAction());
    return confirmationData;
  }
}
