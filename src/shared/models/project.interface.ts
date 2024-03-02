// Loom video requires embed

export class ProjectList {
    public projects: Array<Project>;

    constructor(args?: any) {
        Object.assign(this, args);

        this.projects = [
            {
                embed: '<iframe class="rounded-md" width="100%" height="225px" src="https://www.loom.com/embed/26ec29d830fa460cb3ef69568e457b3a?sid=9f2518d7-3ba5-4f3a-a881-37328715fefb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'SGGE Store',
                description: 'SGGE Store is a web application developed using React for the front-end, and Node.js with Express for the back-end, along with PostgreSQL as the database management system. The primary functionalities of the website include account management (creation and updates), integration with the FakeStoreAPI to retrieve product data, and search functionality to help users find items of interest. Additionally, the website offers features for managing shopping carts, allowing users to add items to their carts, save items for later, and proceed to checkout when ready to make a purchase. This comprehensive set of features provides users with a seamless e-commerce experience, enabling them to browse, shop, and manage their purchases efficiently.',
                projectType: ProjectType.Personal,
                readMore: false,
            },
            {
                embed: '<iframe class="rounded-md" width="100%" height="225px" src=https://www.loom.com/embed/2e63609cb614440781ea657ece9d406d?sid=850a251c-c343-4f28-812b-27280d774183 frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Employee Dashboard / Account Information Manager',
                description: 'Employee Dashboard - The first project is an enterprise-level application developed using Angular, .NET Core, and MongoDB. Its primary functionality revolves around enabling search operations within the client database. Users can perform searches using various criteria, allowing for flexible and customizable queries. Search inputs are matched against the database records, and matching results are displayed with the search terms highlighted in bold for clarity and ease of reference. Upon selecting a specific customer from the search results, users are seamlessly routed to the second project for further actions.',
                secondaryDescription: 'Account Information Manager - The second project, also built using Angular, .NET Core, and MongoDB, focuses on managing customer accounts. This application consumes the data sent from the setup client (Account Information Manager Setup). It serves as an intuitive and comprehensive platform for handling various aspects of customer accounts within the enterprise system. Through this application, users can efficiently manage customer information, update account details, track interactions, and perform other account-related tasks. Seamlessly integrated with the first project, users can transition from searching for a customer to managing their account seamlessly, ensuring a cohesive user experience across both applications.',
                projectType: ProjectType.Professional,
                readMore: false,
            },
            {
                embed: '<iframe class="rounded-md" width="100%" height="225px" src=https://www.loom.com/embed/e1d33e07715940b785be93da0f045713?sid=39103e54-8b54-45ce-bd73-d45d21bead2b frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Account Information Manager Setup',
                description: `Account Information Manager Setup is an enterprise-level setup client for the 'Account Information Manager' application shown in this list, developed using Angular, Gridstack, .NET Core, and MongoDB. It offers customizable features, allowing users to create draggable tiles with fields that can be reordered, renamed, and removed. Angular ensures a responsive interface, while .NET Core handles backend functionalities, and MongoDB manages data storage efficiently. The goal is to provide users with a flexible and intuitive experience tailored to their needs.`,
                projectType: ProjectType.Professional,
                readMore: false,
            },
            {
                embed: '<iframe class="rounded-md" width="100%" height="225px" src=https://www.loom.com/embed/8997498a74574f6c98d0b3d1ae0c5b67?sid=f835476f-dafc-4654-ab93-14adf1c7ba38 frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Consumer Setup',
                description: `Consumer Setup is an enterprise-level application developed using Angular, .NET Core, and MongoDB. It acts as the setup client for the 'Consumer Unsecured' application, offering customizable features for clients to enhance the lending experience for their users. With Angular for dynamic front-end interfaces, .NET Core for robust back-end functionalities, and MongoDB for scalable data storage, the project empowers clients to optimize their lending services, driving business growth through a tailored and user-centric approach.`,
                projectType: ProjectType.Professional,
                readMore: false,
            },
            {
                embed: '<iframe class="rounded-md" width="100%" height="225px" src=https://www.loom.com/embed/caf49234288946b78cf34b0290444325?sid=bf0fa7ad-18f1-4033-8168-d36109c35412 frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Consumer Unsecured',
                description: 'Consumer Unsecured is an enterprise-level application developed using Angular, .NET Core, and MongoDB serves as a consumer-facing lending platform. This application interacts with the setup client (Consumer Application Setup) to provide users with everything that was customized in the setup client. The primary objective of the application is to offer users a seamless lending experience. Leveraging Angular for the frontend, .NET Core for the backend, and MongoDB for data storage, the application ensures robustness, scalability, and flexibility. With its user-friendly interface and efficient data management capabilities, the lending application streamlines the borrowing process, making it convenient and hassle-free for users.',
                projectType: ProjectType.Professional,
                readMore: false,
            },
            {
                embed: '<iframe class="rounded-md" width="100%" height="225px" src=https://www.loom.com/embed/6ce3de54ac614a699d58d1f2d42c43f3?sid=d1a04e71-bc64-40fa-bd1e-37f29e53fa8f frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                name: 'Payment Calculator',
                description: 'Payment Calculator is an enterprise-level solution built using Angular, .NET Core, and MongoDB technologies. Its primary objective is to empower clients to generate, access, and modify potential loan offers for their clientele. These offers undergo meticulous calculations, leveraging data from credit bureaus to furnish precise information. Through a seamless interface, users can navigate and manipulate loan parameters, ensuring tailored offerings for their customers. The integration of Angular ensures a dynamic and intuitive user experience, while .NET Core and MongoDB facilitate robust backend functionality and data management. Overall, this product serves as a comprehensive platform for financial institutions to efficiently manage loan offerings while maintaining accuracy and compliance.',
                projectType: ProjectType.Professional,
                readMore: false,
            },
        ];
    }
}

export interface Project {
    embed: string;
    name: string;
    description: string;
    secondaryDescription?: string;
    projectType: ProjectType;
    readMore: boolean;
}

export enum ProjectType {
    Personal,
    Professional,
}