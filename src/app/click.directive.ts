import {
  Directive,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @Input('appClick') option: any;

  @HostListener('change', ['$event']) onChange($event) {

    ( < any > window).ga('send', 'event', this.option.category, this.option.action, {
      hitCallback: function () {

        console.log('Tracking is successful');

      }

    });

  }

  constructor() {}

}
