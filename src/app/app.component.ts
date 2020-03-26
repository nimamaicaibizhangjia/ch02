import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
addArticle(title:HTMLAnchorElement,link:HTMLAppletElement):boolean{
  console.log(`Adding article title: ${title.value} and link :${link.value}`);
  return false;}
}
