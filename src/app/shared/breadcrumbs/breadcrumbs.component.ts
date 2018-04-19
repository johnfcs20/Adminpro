import { Component, OnInit } from '@angular/core';
import { MetaDefinition, Meta, Title } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
// declare function init_plugins();
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})



  export class BreadcrumbsComponent implements OnInit {
    label = '';

    constructor( private router: Router,
                  public title: Title,
                  public meta: Meta) {
      this.getDataRoute().subscribe(data => {
        this.label = data.titulo;
        this.title.setTitle(this.label);

        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag(metaTag);
      });
    }

    getDataRoute() {
      return this.router.events
       .filter( evento => evento instanceof ActivationEnd )
       .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
      .map((evento: ActivationEnd) => evento.snapshot.data );
    }

    ngOnInit() {
      // init_plugins();
    }

  }

