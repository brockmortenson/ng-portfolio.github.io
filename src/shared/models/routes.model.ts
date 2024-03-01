export class Routes {
    public home: Route;
    public aboutMe: Route;
    public projects: Route;
    public contact: Route;

    constructor(args?: any) {
        Object.assign(this, args);

        this.home = { name: '// home', url: '/home' };
        this.aboutMe = { name: '// about me', url: '/about-me' };
        this.projects = { name: '// projects', url: '/projects' };
        this.contact = { name: '// contact', url: '/contact' };
    }
}

interface Route {
    name: string;
    url: string;
}