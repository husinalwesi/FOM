import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotComponent } from './chat-bot.component';

@NgModule({
  declarations: [
    ChatBotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ChatBotComponent]
})
export class ChatBotModule { }
