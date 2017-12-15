import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfocardComponent implements OnInit {
  @Input() info: any;

  constructor() { }

  ngOnInit() {
  }

}
