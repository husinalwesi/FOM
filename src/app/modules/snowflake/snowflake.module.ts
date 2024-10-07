import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowflakeComponent } from './snowflake.component';



@NgModule({
  declarations: [
    SnowflakeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SnowflakeComponent]
})
export class SnowflakeModule { }
