import { Component } from '@angular/core';
import { MetaService } from '@ngx-meta-service-tool/seo';

@Component({
  selector: 'ngx-meta-service-tool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  constructor(private metaService: MetaService) {
    this.metaService.setMetaTags(
      'Bar Label en Bilbao, tortillas, pintxos, desayunos y mucho más',
      'El bar Label, ubicado en la calle Ávila de Bilbao es el referente de la zona para desayunar, comer un pintxo, disfrutar de una buena tortilla o pasar una buena tarde entre amigos degustando una buena copa.',
      'bar, label, tortillas, tortilla, bilbao, centro, athletic, gu gara, pintxo, pinchos, pintxo, pintxo, cafe, desayuno, copas, cumpleaños, celebraciones, copa, copas, amigos'
    );
  }
}
