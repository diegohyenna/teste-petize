import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  input!: string;
  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSearch(input: string) {
    this.onSubmit.emit(input);
  }

  handleChange(input: string) {
    this.input = input;
  }

  handleSubmit(input: string) {
    this.handleSearch(input);
  }
}
