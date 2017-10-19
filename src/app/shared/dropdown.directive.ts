import {OnInit, Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropdownDirective implements OnInit {
  @HostBinding('class.open') dropdownOpen: boolean;

  ngOnInit() {
    this.dropdownOpen = false;
  }

  @HostListener('click') toggleOpen() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}