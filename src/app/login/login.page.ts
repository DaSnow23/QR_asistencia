import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit, AfterViewInit {
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // este anima el titulo dado que usa su ID
    const title = document.querySelector('#title');
    if (title) {
      this.animationCtrl
        .create()
        .addElement(title)
        .duration(2000)
        .fromTo('transform', 'translateX(-100px)', 'translateX(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }

    // anima por class="form-element" donde definimos por ejemplo ion-item
    const formElements = document.querySelectorAll('.form-element');
    formElements.forEach((el, index) => {
      this.animationCtrl
        .create()
        .addElement(el)
        .duration(2000)
        .delay(index * 200) 
        .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    });
  }
}

  