import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convert-case';

  changed_text:string = '';
  isCopied:boolean = false;
  count:number = 0;

  constructor (private clipboard: Clipboard) {}

  doUpperCase(input_text_el: HTMLTextAreaElement) {
    this.changed_text = input_text_el.value.toUpperCase();
  }

  doLowerCase(input_text_el: HTMLTextAreaElement) {
    this.changed_text = input_text_el.value.toLowerCase();
  }

  doProperCase(input_text_el: HTMLTextAreaElement) {
    this.changed_text = input_text_el.value.replace(/(^\w)|(\s+\w)/g, letter => letter.toUpperCase());
    // let words = input_text_el.value.split(" ");
    // for (let i = 0; i < words.length; i++) {
    //   words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
    // }
    // this.changed_text = words.join(' ');
  }

  doSentenceCase(input_text_el: HTMLTextAreaElement) {
    this.changed_text = input_text_el.value.replace(/(^\w)|(\s*\.\s*\w)|(\s*\?\s*\w)|(\s*\!\s*\w)/g, letter => letter.toUpperCase());
    // var re = /\s*\.\s*/;
    // let words = input_text_el.value.split(re);
    // for (let i = 0; i < words.length; i++) {
    //   words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
    // }
    // this.changed_text = words.join('. ');
  }

  copyText(text_el: HTMLTextAreaElement) {
    this.clipboard.copy(text_el.value);
    this.isCopied = true;
    setTimeout ( () => {this.isCopied = false;}, 2000)
  }

  deleteText(text_el: HTMLTextAreaElement) {
    text_el.value = "";
  }

}
