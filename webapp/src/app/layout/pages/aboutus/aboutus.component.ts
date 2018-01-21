import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //social Media
    window.alert = function() {};
    let defaultCSS = document.getElementById('bootstrap-css');

    function changeCSS(css) {
      if (css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="' + css + '" type="text/css" />');
      else $('head > link').filter(':first').replaceWith(defaultCSS);
    }
    $(document).ready(function() {
      let iframe_height = parseInt(""+$('html').height());
      window.parent.postMessage(iframe_height, 'http://bootsnipp.com');
    });
  }

}
