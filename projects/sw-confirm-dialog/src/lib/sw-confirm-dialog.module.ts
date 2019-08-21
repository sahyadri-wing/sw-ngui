import { NgModule, ModuleWithProviders } from '@angular/core';
import { SwConfirmDialogComponent } from './sw-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { SwConfirmDialogService } from './sw-confirm-dialog.service';


@NgModule({
  declarations: [SwConfirmDialogComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [SwConfirmDialogComponent, ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SwConfirmDialogModule {
  // public static forRoot(): ModuleWithProviders {

  //   return {
  //     ngModule: SwConfirmDialogModule,
  //     providers: [
  //       SwConfirmDialogService
  //     ]
  //   };
  // }
}
