import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
})
export class AccordionItemComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() isOpen: boolean = false;

  @Output() setIsOpen = new EventEmitter<any>();

  clicked() {
    this.setIsOpen.emit();
  }
}
