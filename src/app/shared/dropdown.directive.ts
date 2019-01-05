import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor () { }
    
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') onClick () {
       this.isOpen = !this.isOpen;
    }
}