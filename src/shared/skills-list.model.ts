export class SkillsList {
    public skills: Array<Skill>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.skills = [
            {
                imageSrc: './assets/images/angular-logo.webp',
                name: 'Angular',
                mastery: '90',
                advancedProficiency: '100',
                experience: '3',
                enjoyment: '10',
            },
            {
                imageSrc: './assets/images/react-logo.png',
                name: 'React',
                mastery: '75',
                advancedProficiency: '80',
                experience: '2',
                enjoyment: '8',
            },
            {
                imageSrc: './assets/images/ts-icon.png',
                name: 'TypeScript',
                mastery: '80',
                advancedProficiency: '95',
                experience: '3',
                enjoyment: '10',
            },
            {
                imageSrc: './assets/images/js-logo.png',
                name: 'JavaScript',
                mastery: '80',
                advancedProficiency: '95',
                experience: '4',
                enjoyment: '7',
            },
            {
                imageSrc: './assets/images/RxJS_logo.png',
                name: 'RxJS',
                mastery: '90',
                advancedProficiency: '95',
                experience: '3',
                enjoyment: '10',
            },
            {
                imageSrc: './assets/images/html-logo.webp',
                name: 'HTML',
                mastery: '100',
                advancedProficiency: '10',
                experience: '4',
                enjoyment: '9',
            },
            {
                imageSrc: './assets/images/css-logo.jpg',
                name: 'CSS',
                mastery: '85',
                advancedProficiency: '95',
                experience: '4',
                enjoyment: '8',
            },
            {
                imageSrc: './assets/images/tailwind-icon.png',
                name: 'Tailwind',
                mastery: '90',
                advancedProficiency: '95',
                experience: '3',
                enjoyment: '9',
            },
            {
                imageSrc: './assets/images/sass-logo.png',
                name: 'Sass',
                mastery: '70',
                advancedProficiency: '80',
                experience: '3',
                enjoyment: '8',
            },
            {
                imageSrc: './assets/images/c-sharp-logo.png',
                name: 'C#',
                mastery: '50',
                advancedProficiency: '65',
                experience: '3',
                enjoyment: '7',
            },
            {
                imageSrc: './assets/images/dotnet-core-logo.png',
                name: '.NET Core',
                mastery: '55',
                advancedProficiency: '55',
                experience: '3',
                enjoyment: '7',
            },
            {
                imageSrc: './assets/images/node-js-logo.webp',
                name: 'Node.js',
                mastery: '45',
                advancedProficiency: '60',
                experience: '2',
                enjoyment: '6',
            },
            {
                imageSrc: './assets/images/postgresql-logo.png',
                name: 'PostgreSQL',
                mastery: '35',
                advancedProficiency: '45',
                experience: '2',
                enjoyment: '5',
            },
            {
                imageSrc: './assets/images/mongodb_logo.png',
                name: 'MongoDB',
                mastery: '50',
                advancedProficiency: '55',
                experience: '3',
                enjoyment: '6',
            },
            {
                imageSrc: './assets/images/blazor-logo.png',
                name: 'Blazor',
                mastery: '30',
                advancedProficiency: '40',
                experience: '1',
                enjoyment: '7',
            },
            {
                imageSrc: './assets/images/git-logo.png',
                name: 'Git',
                mastery: '75',
                advancedProficiency: '85',
                experience: '4',
                enjoyment: '5',
            },
            {
                imageSrc: './assets/images/azure-devops-logo.webp',
                name: 'Azure DevOps',
                mastery: '45',
                advancedProficiency: '60',
                experience: '3',
                enjoyment: '7',
            },
            {
                imageSrc: './assets/images/docker-logo.png',
                name: 'Docker',
                mastery: '25',
                advancedProficiency: '35',
                experience: '3',
                enjoyment: '3',
            },
            {
                imageSrc: './assets/images/visual-studio-logo.png',
                name: 'Visual Studio',
                mastery: '65',
                advancedProficiency: '85',
                experience: '3',
                enjoyment: '3',
            },
            {
                imageSrc: './assets/images/vscode-logo.png',
                name: 'VS Code',
                mastery: '95',
                advancedProficiency: '100',
                experience: '4',
                enjoyment: '10',
            },
            {
                imageSrc: './assets/images/jest-logo.png',
                name: 'Jest',
                mastery: '40',
                advancedProficiency: '55',
                experience: '2',
                enjoyment: '6',
            },
        ];
    }
}

export interface Skill {
    imageSrc: string;
    name: string;
    mastery: string;
    advancedProficiency: string;
    experience: string;
    enjoyment: string;
}