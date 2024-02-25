export class SkillsList {
    public skills: Array<Skill>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.skills = [
            {
                imageSrc: './assets/images/angular-logo.webp',
                name: 'Angular',
            },
            {
                imageSrc: './assets/images/react-logo.png',
                name: 'React',
            },
            {
                imageSrc: './assets/images/ts-icon.png',
                name: 'TypeScript',
            },
            {
                imageSrc: './assets/images/js-logo.png',
                name: 'JavaScript',
            },
            {
                imageSrc: './assets/images/RxJS_logo.png',
                name: 'RxJS',
            },
            {
                imageSrc: './assets/images/html-logo.png',
                name: 'HTML',
            },
            {
                imageSrc: './assets/images/css-logo.png',
                name: 'CSS',
            },
            {
                imageSrc: './assets/images/tailwind-icon.png',
                name: 'Tailwind',
            },
            {
                imageSrc: './assets/images/sass-logo.png',
                name: 'Sass',
            },
            {
                imageSrc: './assets/images/c-sharp-logo.png',
                name: 'C#',
            },
            {
                imageSrc: './assets/images/dotnet-core-logo.webp',
                name: '.NET Core',
            },
            {
                imageSrc: './assets/images/node-js-logo.webp',
                name: 'Node.js',
            },
            {
                imageSrc: './assets/images/postgresql-logo.png',
                name: 'PostgreSQL',
            },
            {
                imageSrc: './assets/images/mongodb_logo.png',
                name: 'MongoDB',
            },
            {
                imageSrc: './assets/images/blazor-logo.png',
                name: 'Blazor',
            },
            {
                imageSrc: './assets/images/git-logo.png',
                name: 'Git',
            },
            {
                imageSrc: './assets/images/azure-devops-logo.webp',
                name: 'Azure DevOps',
            },
            {
                imageSrc: './assets/images/docker_logo.webp',
                name: 'Docker',
            },
        ];
    }
}

export interface Skill {
    imageSrc: string;
    name: string;
}