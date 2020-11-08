import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('send', [
      state('send', style({
        opacity: 0,
        transform: 'translateX(200px)'
      })),
      transition('void => send', [
        animate('0.5s')
      ]),
    ]),
    trigger('thanks', [
      state('thanks', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => thanks', [
        animate('0.5s cubic-bezier(.55,.51,.32,1)')
      ]),
    ])
  ]
})
export class ContactComponent{

  constructor() { }

  public _email: string = null;
  public _message: string = null;
  private sended = false;

  send() {
    if (!this.isEmailValid || !this.isMessageValid || this.isSended) { return; }
    this._email = null;
    this._message = null;
    this.sended = true;
  }

  get isEmailValid()
  {
    return new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$').test(this._email);
  }

  get isMessageValid()
  {
    return this._message.length > 0;
  }

  get isSended() {
    return this.sended;
  }

}
