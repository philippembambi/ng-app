import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.html',
  styleUrls: ['./hello-world.css']
})
export class HelloWorldComponent {
  @Input() name: string = 'Phil';
}
