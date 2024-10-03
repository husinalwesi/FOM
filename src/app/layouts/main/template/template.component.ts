import { Component } from '@angular/core';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  constructor(private pageTransitionsService: PageTransitionsService) {
    this.pageTransitionsService.HideLoad();
  }

}
