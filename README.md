# ionic-turnjs
Ionic sample using "The page flip effect for HTML5" http://www.turnjs.com

> This is a implementation of Ionic 3 importing jQuery and TurnJS

# Requirements
- Ionic Framework https://ionicframework.com/
- jQuery >= 1.3 http://jquery.com/download/
- TurnJS http://www.turnjs.com/

# Instalation
## **Clone working verion**
```bash
git clone https://github.com/diegonobre/ionic-turnjs.git
cd ionic-turnjs
ionic serve -c
```

## **Create your own version**
### Create ionic project usign Ionic CLI
```bash
ionic start ionic-turnjs blank
```

### Add jQuery and TurnJS
- Copy jQuery and TurnJS libs to your `src/assets` folder
- Edit your `src/index.html` to add the above code before the `</head>` tag
 
```html
<!-- jquery required for turnjs -->
<script src="assets/js/jquery-1.12.4.min.js"></script>
<script src="assets/js/turn.min.js"></script>
```

### Replace `home.ts` with the above code
```js
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

declare var $:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    $("#flipbook").turn({
      width: '100%',
      height: this.platform.height() - 50,
      display: 'single',
      autoCenter: true
    });
  }
}
```

### Create your TurnJS view
```html
<ion-content>
  <div id="flipbook">
    <div class="cover"> Turn.js </div>
    <div class="page"> Page 1 </div>
    <div class="page"> Page 2 </div>
    <div class="page"> Page 3 </div>
    <div class="page"> Page 4 </div>
    <div class="cover"> The end </div>
  </div>
</ion-content>
```

### Add CSS to `home.scss`
```css
page-home {
  .cover {
    overflow:hidden;
    background-color: lightgray;
    border: solid 1px black;
  }
  .page {
    overflow:hidden;
    background-color: white;
    border: solid 1px gray;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
  }
}
```
