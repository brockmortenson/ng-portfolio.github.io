// Loom video requires embed

export class ProjectList {
    public projects: Array<Project>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.projects = [
            {
                embed: '<iframe class="rounded-md" width="auto" height="auto" src="https://www.loom.com/embed/26ec29d830fa460cb3ef69568e457b3a?sid=9f2518d7-3ba5-4f3a-a881-37328715fefb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'SGGE Store',
                description: '',
                projectType: ProjectType.Personal,
            },
            {
                embed: '<iframe class="rounded-md" width="auto" height="auto" src=https://www.loom.com/embed/2e63609cb614440781ea657ece9d406d?sid=850a251c-c343-4f28-812b-27280d774183 frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Employee Dashboard / Account Information Manager',
                description: '',
                projectType: ProjectType.Professional,
            },
            {
                embed: '<iframe class="rounded-md" width="auto" height="auto" src=https://www.loom.com/embed/e1d33e07715940b785be93da0f045713?sid=39103e54-8b54-45ce-bd73-d45d21bead2b frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Account Information Manager Setup',
                description: '',
                projectType: ProjectType.Professional,
            },
            {
                embed: '<iframe class="rounded-md" width="auto" height="auto" src=https://www.loom.com/embed/8997498a74574f6c98d0b3d1ae0c5b67?sid=f835476f-dafc-4654-ab93-14adf1c7ba38 frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Consumer Setup',
                description: '',
                projectType: ProjectType.Professional,
            },
            {
                embed: '<iframe class="rounded-md" width="auto" height="auto" src=https://www.loom.com/embed/caf49234288946b78cf34b0290444325?sid=bf0fa7ad-18f1-4033-8168-d36109c35412 frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Consumer Unsecured',
                description: '',
                projectType: ProjectType.Professional,
            },
            {
                embed: '<iframe class="rounded-md" width="auto" height="auto" src=https://www.loom.com/embed/6ce3de54ac614a699d58d1f2d42c43f3?sid=d1a04e71-bc64-40fa-bd1e-37f29e53fa8f frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Payment Calculator',
                description: '',
                projectType: ProjectType.Professional,
            },
        ];
    }
}

export interface Project {
    embed: string;
    name: string;
    description: string;
    projectType: ProjectType;
}

export enum ProjectType {
    Personal,
    Professional,
}