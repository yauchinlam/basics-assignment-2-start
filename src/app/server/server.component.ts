import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  userName: string = "";
  constructor() { 
  }

  ngOnInit(): void {
  }

  deleteUsername()
  {
    this.userName = "";
  }

}
