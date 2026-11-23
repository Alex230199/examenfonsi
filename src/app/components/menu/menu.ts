import { Component } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink} from '@angular/router';
import { PistaService } from 'C:\Users\alejandromiguel.barr\Desktop\examenfonsi\src\app\components';
@Component({
  imports: [MatToolbarModule,
    RouterLink,
  ],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {}
