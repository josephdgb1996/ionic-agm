
## Integrando angular google maps a ionic v3
    https://angular-maps.com/guides/getting-started/
    
### Instalando Ionic :

```bash
$ sudo npm install -g ionic
$ sudo ionic start nombre blank
$ cd nombre
```

Instalando angular map:

```bash
$ inpm install @agm/core --save
```

Importamos en el app module de la pagina en la cual vamos a usar el mapa \

```
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
//Angular maps framework
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    AgmCoreModule.forRoot({apiKey: 'KEY'})
  ],
})
export class HomePageModule {}


```
Editamos el html
```
    <h1>{{ title }}</h1>
    <agm-map [latitude]="lat" [longitude]="lng">
        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
```
  Ahora editamos el css
  
  ```
  page-home {
    agm-map {
        height: 300px;
      }
}
```


