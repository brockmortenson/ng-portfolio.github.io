// HOW TO ADD A NEW SKILL ATTRIBUTE
// 1. Add new SkillAttribute object to the skillAttributes array 
// in the specific skill you want that attribute to show in.
// 2. Add the skillAttribute.name as a scss var in the 'graph-bar.component.scss' file.

export class SkillsList {
    public skills: Array<Skill>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.skills = [
            {
                imageSrc: './assets/images/angular-logo.png',
                name: 'Angular',
                color: '#bf38f5',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '100',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '5',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/react-logo.png',
                name: 'React',
                color: 'rgb(49 217 255)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '80',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '85',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/ts-icon.png',
                name: 'TypeScript',
                color: 'rgb(49 124 202)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '5',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/js-logo.png',
                name: 'JavaScript',
                color: 'rgb(247 220 0)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/RxJS_logo.png',
                name: 'RxJS',
                color: 'rgb(232 11 152)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/html-logo.webp',
                name: 'HTML',
                color: 'rgb(250 105 0)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '100',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '100',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '9',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/css-logo.jpg',
                name: 'CSS',
                color: 'rgb(30 157 231)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '85',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/tailwind-icon.png',
                name: 'Tailwind',
                color: 'rgb(0 0 0)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '9',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/sass-logo.png',
                name: 'Sass',
                color: 'rgb(200 102 153)',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '70',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '80',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/c-sharp-logo.png',
                name: 'C#',
                color: '#965497',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '70',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '75',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '6',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/dotnet-core-logo.png',
                name: '.NET Core',
                color: '#5b31eb',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '65',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '70',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '7',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/node-js-logo.webp',
                name: 'Node.js',
                color: '#46483e',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '65',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '60',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '7',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/postgresql-logo.png',
                name: 'PostgreSQL',
                color: '#32688f',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '55',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '45',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '5',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '6',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/mongodb_logo.png',
                name: 'MongoDB',
                color: '#4c9e36',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '55',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '65',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '7',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/blazor-logo.png',
                name: 'Blazor',
                color: '#513793',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '40',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '50',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '2',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '5',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/git-logo.png',
                name: 'Git',
                color: '#eb4a22',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '75',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '85',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/azure-devops-logo.webp',
                name: 'Azure DevOps',
                color: '#137bd4',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '65',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '60',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '8',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/docker-logo.png',
                name: 'Docker',
                color: '#1b6af0',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '35',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '45',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '5',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/visual-studio-logo.png',
                name: 'Visual Studio',
                color: '#6939af',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '65',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '85',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '9',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/vscode-logo.png',
                name: 'VS Code',
                color: '#117acc',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '95',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '100',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '6',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '10',
                        graphAsPercent: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/jest-logo.png',
                name: 'Jest',
                color: '#c84000',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '60',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Proficiency',
                        level: '75',
                        graphAsPercent: true,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                    },
                    {
                        name: 'Comfortability',
                        level: '8',
                        graphAsPercent: false,
                    },
                ],
            },
        ];
    }
}

export interface Skill {
    imageSrc: string;
    name: string;
    color: string;
    skillAttributes: Array<SkillAttribute>;
}

export interface SkillAttribute {
    name: string;
    level: string;
    graphAsPercent: boolean;
}