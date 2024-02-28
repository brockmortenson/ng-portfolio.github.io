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
                imageSrc: './assets/images/angular-logo.webp',
                name: 'Angular',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '100',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/react-logo.png',
                name: 'React',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '75',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '80',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '2',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/ts-icon.png',
                name: 'TypeScript',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '80',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/js-logo.png',
                name: 'JavaScript',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '80',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/RxJS_logo.png',
                name: 'RxJS',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/html-logo.webp',
                name: 'HTML',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '100',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '100',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '9',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/css-logo.jpg',
                name: 'CSS',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '85',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/tailwind-icon.png',
                name: 'Tailwind',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '90',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '95',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '9',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/sass-logo.png',
                name: 'Sass',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '70',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '80',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '8',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/c-sharp-logo.png',
                name: 'C#',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '50',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '65',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/dotnet-core-logo.png',
                name: '.NET Core',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '55',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '55',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/node-js-logo.webp',
                name: 'Node.js',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '45',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '60',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '2',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '6',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/postgresql-logo.png',
                name: 'PostgreSQL',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '35',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '45',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '2',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '5',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/mongodb_logo.png',
                name: 'MongoDB',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '50',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '55',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '6',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/blazor-logo.png',
                name: 'Blazor',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '30',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '40',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '1',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/git-logo.png',
                name: 'Git',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '75',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '85',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '5',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/azure-devops-logo.webp',
                name: 'Azure DevOps',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '45',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '60',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '7',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/docker-logo.png',
                name: 'Docker',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '25',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '35',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '3',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/visual-studio-logo.png',
                name: 'Visual Studio',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '65',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '85',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '3',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '3',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/vscode-logo.png',
                name: 'VS Code',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '95',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '100',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Exp. (yrs)',
                        level: '4',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '10',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
            {
                imageSrc: './assets/images/jest-logo.png',
                name: 'Jest',
                skillAttributes: [
                    {
                        name: 'Mastery',
                        level: '40',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    {
                        name: 'Proficiency',
                        level: '55',
                        graphAsPercent: true,
                        isYear: false,
                    },
                    // {
                    //     name: 'Ilsen',
                    //     level: '15',
                    //     graphAsPercent: true,
                    //     isYear: false,
                    // },
                    {
                        name: 'Exp. (yrs)',
                        level: '2',
                        graphAsPercent: false,
                        isYear: true,
                    },
                    {
                        name: 'Enjoyment',
                        level: '6',
                        graphAsPercent: false,
                        isYear: false,
                    },
                ],
            },
        ];
    }
}

export interface Skill {
    imageSrc: string;
    name: string;
    skillAttributes: Array<SkillAttribute>;
}

export interface SkillAttribute {
    name: string;
    level: string;
    graphAsPercent: boolean;
    isYear: boolean;
}