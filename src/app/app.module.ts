import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HotkeysDialogComponent } from './hotkeys-dialog/hotkeys-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, MatButtonModule,
    MatCommonModule,
    BrowserAnimationsModule,
    MatDialogModule],
  declarations: [AppComponent, HelloComponent, HotkeysDialogComponent],
  bootstrap: [AppComponent],
  entryComponents: [HotkeysDialogComponent],
  providers: []
})
export class AppModule { }
