import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentsService } from 'src/services/currents.service';

@Component({
  selector: 'about-me-component',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;
  public showSkills: boolean = false;

  public image = './assets/images/mongodb_logo.png';

  //mongodb
  // public image = 'https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png'
  
  //rxjs
  // public image = 'https://dwglogo.com/wp-content/uploads/2017/05/RxJS_logo.png'

  //ADO
  // public image = 'https://cdn.iconscout.com/icon/free/png-512/azure-devops-3628645-3029870.png'

  //blazor
  // public image = 'https://cdn0.iconfinder.com/data/icons/business-and-finance-440/1080/10_Blazor-512.png'

  //docker
  // public image = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png'

  //postgres
  // public image = 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-512.png'

  //tailwind
  // public image = 'https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-tailwind-css-512.png'

  //sass
  // public image = 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/sass-512.png'

  //css
  // public image = 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-1024.png'

  //html
  // public image = 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png'

  //ts
  // public image = 'https://www.nodejs-typescript-api.com/curso-gratis/ts.png'

  //js
  // public image = 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png'

  //node.js
  // public image = 'https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png'

  //.net core
  // public image = 'https://akademi.bilgeadam.com/wp-content/uploads/2021/01/dotnet-core-1.png'

  //c#
  // public image = 'https://static.cdnlogo.com/logos/c/68/c-sharp-800x800.png'

  //angular
  // public image = 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png'

  //react
  // public image = 'https://uploads-ssl.webflow.com/60a2acace1fd91aae61c497d/60ee04a3dee9b428a836325f_React_logo_logotype_emblem-p-3200.png'
  
  //git
  // public image = 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/git-13.png'

  private mobileSubscription: Subscription = new Subscription();

  constructor(private currentsService: CurrentsService) { }

  public ngOnInit() {
    this.mobileSubscription = this.currentsService.getIsMobile().subscribe((bool) => {
      this.isMobile = bool;
    });
  }

  public ngOnDestroy(): void {
    this.mobileSubscription.unsubscribe();
  }

  public toggleSkills(bool?: boolean): void {
    if (bool) {
      this.showSkills = false;
      return;
    }

    this.showSkills = !this.showSkills;
  }

}
