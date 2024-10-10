import { Component } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  icons: any = [
    { name: "arrow", stroke: "", fill: "#802d3d" },
    { name: "filter", stroke: "", fill: "#802d3d" },
    { name: "star", stroke: "", fill: "#802d3d" },
    { name: "verify", stroke: "", fill: "#802d3d" },
    { name: "plus", stroke: "", fill: "#802d3d" },
    { name: "phone", stroke: "", fill: "#802d3d" },
    { name: "chat", stroke: "#802d3d", fill: "" },
    { name: "info", stroke: "", fill: "#802d3d" },
    { name: "map-marker", stroke: "", fill: "#802d3d" },
    { name: "phone-circle", stroke: "white", fill: "#802d3d" },
    { name: "website", stroke: "", fill: "#802d3d" },
    { name: "time", stroke: "", fill: "#802d3d" },
    { name: "x-temp", stroke: "", fill: "#802d3d" },
    { name: "dots", stroke: "", fill: "#802d3d" },
    { name: "heart", stroke: "", fill: "#802d3d" },
    { name: "comment", stroke: "", fill: "#802d3d" },
    { name: "share", stroke: "", fill: "#802d3d" },
    { name: "search-icon", stroke: "", fill: "#802d3d" },
    { name: "open-buffet", stroke: "", fill: "#802d3d" },
    { name: "test", stroke: "", fill: "#802d3d" }
  ];

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private metaTagsService: MetaTagsService
  ) {
    this.pageTransitionsService.HideLoad();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

}
