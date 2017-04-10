/**
 * Created by GilS on 01-Apr-17.
 */
import { NgModule } from '@angular/core';

import {ObservComponent} from "./observ.component";
import {BrowserModule} from "@angular/platform-browser/src/browser";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [HttpModule],
    exports: [ObservComponent],
    declarations: [ObservComponent],
    providers: [BrowserModule],
})
export class ObservModule { }
