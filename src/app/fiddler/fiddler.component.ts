import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiddler',
  templateUrl: './fiddler.component.html',
  styleUrls: ['./fiddler.component.css']
})
export class FiddlerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

}
