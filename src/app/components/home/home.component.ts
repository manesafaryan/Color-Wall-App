import { Component, ViewChild } from '@angular/core';
import { WallComponent } from '../wall/wall.component';
import { WallFormData } from '../wallbuilder/wallbuilder.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(WallComponent, { static: false })
  wallComponent!: WallComponent;

  handleWallData(data: WallFormData) {
    this.wallComponent.generateWall(data);
  }
}
