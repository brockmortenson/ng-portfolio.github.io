export interface Button {
    imageSrc: string;
    hasBorder: boolean;
    url: string;
    name: string;
}

export class Buttons {
    public buttons: Array<Button>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.buttons = [
            {
              imageSrc: 'https://vectorified.com/images/email-icon-white-transparent-35.png',
              hasBorder: false,
              url: 'mailto:246szdkrc@mozmail.com',
              name: '<email-me/>',
            },
            {
              imageSrc: 'https://icon-library.com/images/linkedin-icon-png-transparent-background/linkedin-icon-png-transparent-background-8.jpg',
              hasBorder: true,
              url: 'https://www.linkedin.com/in/brock-mortenson-webdev/',
              name: '<linkedin/>',
            },
            {
              imageSrc: 'https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png',
              hasBorder: false,
              url: 'https://github.com/brockmortenson',
              name: '<github/>',
            },
        ]
    }
}