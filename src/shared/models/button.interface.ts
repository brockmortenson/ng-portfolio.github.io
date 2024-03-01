export interface Button {
    imageSrc: string;
    hasBorder: boolean;
    url: string;
    name: string;
    alt: string;
}

export class Buttons {
    public buttons: Array<Button>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.buttons = [
            {
              imageSrc: './assets/images/email-icon.png',
              hasBorder: false,
              url: 'mailto:246szdkrc@mozmail.com',
              name: '<email-me/>',
              alt: 'email',
            },
            {
              imageSrc: './assets/images/white-linkedin-icon.jpg',
              hasBorder: true,
              url: 'https://www.linkedin.com/in/brock-mortenson-webdev/',
              name: '<linkedin/>',
              alt: 'linkedin',
            },
            {
              imageSrc: './assets/images/github-icon-png-white.png',
              hasBorder: false,
              url: 'https://github.com/brockmortenson',
              name: '<github/>',
              alt: 'github',
            },
        ]
    }
}