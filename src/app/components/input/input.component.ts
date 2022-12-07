import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Output() onChange = new EventEmitter();

  input!: string;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(input: string) {
    this.onSubmit.emit(input);
  }

  handleChange(input: string) {
    this.onChange.emit(input);
  }
}
