import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ASSETS } from '../../app.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly logoPath = ASSETS.IMAGES + 'logo.png';
}
