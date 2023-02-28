import wishlistImg from "../../assets/Wishlist.png"
import mockTwitterApiImg from "../../assets/Mock-Twitter_Api.png";
import cookSlackImg from "../../assets/CookSlack.png";
import cupcakeApiVid from "../../assets/cupcake-api.mp4";
import jeopardyVid from "../../assets/jeopardy.mp4";
import snackOrBoozeVid from "../../assets/snack-or-booze.mp4";
import whatsForDinnerVid from "../../assets/whats-for-dinner.mp4";


const projects = [
    {
        id: 1,
        title: "Wishlist",
        description: [
            "Created frontend with React and Material UI",
            "Designed and implemented a database schema with PostgresSQL",
            "Used Node.js and Express to implement a RESTful web service with various endpoints to support the application’s features from the server via CRUD operations and other HTTP requests.",
            "Performed authentication services and password security through hashing passwords with bcrypt",
            "Handled different error types from the client and server sides to ensure the application ran smoothly",
        ],
        stack: "JavaScript, React, Material UI, Node.js, Express, PostgreSQL, Postman Git, VSCode",
        gitHub: "https://github.com/PrimsCode/wishlist",
        link: 'https://wishlist-vrmv.onrender.com/',
        img: wishlistImg,
        video: null
    },
    {
        id: 2,
        title: "What's For Dinner?",
        description: [
            "A full-stack web application to help you plan your dinner menu with printable recipes and shopping lists.",
            "Utilized Bootstrap and Sass for the creation of the frontend design of the application",
            "Designed and implemented a database schema that interacts with external API from Spoonacular supported by SQLAlchemy and PostgreSQL",
            "Used Python and Flask to implement a RESTful web service with various endpoints to support the application’s features from the server via CRUD operations and other HTTP requests.",
            "Performed authentication services and password security through hashing with bcrypt for user login and information ",
            "Handled different error types from client and server sides to ensure the application running smoothly"
        ],
        stack: "JavaScript, Bootstrap, Sass, SQLAlchemy, PostgreSQL, Python, Flask, Insomnia, Git, VSCode",
        gitHub: "https://github.com/PrimsCode/whats-for-dinner",
        link: null,
        img: "https://blog.hubbado.com/content/images/size/w2000/2020/01/projectmanager.png",
        video: whatsForDinnerVid
    },
    {
        id: 3,
        title: "Cook Slack",
        description: [
            "Outlined tasks, data structures, and endpoints documentation for the project allowing transparency between the frontend team and backend team workflow.",
            "Implemented a RESTful Web Service with various endpoints following the basic CRUD operations as well as custom requests from the frontend team.",
            "Enforced SpringBoot, JPA, and Mapstruck to program controllers and services that handle HTTP requests, backend validation, logic, and data between the API and its database models.",
            "Resolved issues with application functionality through debugging in Postman, IntelliJ, and VSCode."
        ],
        stack: "JavaScript, Material UI, React, Java, SpringBoot, JPA, PostgreSQL, PGAdmin, Postman, Git, Eclipse, Intellij, Maven",
        gitHub: "https://github.com/PrimsCode/SlackStack",
        link: null,
        img: cookSlackImg,
        video: null,
    },
    {
        id: 4,
        title: "Mock Twitter Social Media API",
        description: [
            "Implemented a RESTful Web Service with various endpoints for creating, modifying, and transferring customizable user information, Twitter posts, and post relationships from the server via basic CRUD operations and other HTTP requests.",
            "Developed a database schema/ERD supported by PostgreSQL in PGAdmin in collaboration with other developers.",
            "Utilized SpringBoot and JPA to program controllers and services that handle HTTP requests, backend validation, logic, and convert data between the API and its database models",
            "Tested, troubleshot, and debugged API functionality in Postman and Intellij until project requirements were achieved."
        ],
        stack: "Java, SpringBoot, JPA, PostgreSQL, PGAdmin, Postman, Git, Eclipse, Intellij, Maven",
        gitHub: "https://github.com/PrimsCode/TwitType",
        link: null,
        img: mockTwitterApiImg,
        video: null,
    },
    // {
    //     id: 2,
    //     title: "React Jobly",
    //     description: [
    //         "Implemented a RESTful Web Service with various endpoints for creating, modifying, and transferring customizable user information, Twitter posts, and post relationships from the server via basic CRUD operations and other HTTP requests.",
    //         "Developed a database schema/ERD supported by PostgreSQL in PGAdmin in collaboration with other developers.",
    //         "Utilized SpringBoot and JPA to program controllers and services that handle HTTP requests, backend validation, logic, and convert data between the API and its database models",
    //         "Tested, troubleshot, and debugged API functionality in Postman and Intellij until project requirements were achieved."
    //     ],
    //     stack: "JavaScript, React, Material UI, Node J",
    //     gitHub: "https://github.com/PrimsCode/jobly-frontend",
    //     link: "https://github.com/PrimsCode/jobly-backend",
    //     img: mockTwitterApiImg,
    //     video: null,
    // },
    {
        id: 5,
        title: "Cupcake API",
        description: [
            "Utilized Python, Flask, and SQL Alchemy to program controllers and services that handle HTTP requests, backend validation, logic, and convert data between the API and its database models",
            "Implemented a RESTful Web Service with various endpoints for creating, modifying, and transferring customizable user information, Twitter posts, and post relationships from the server via basic CRUD operations and other HTTP requests.",
            "Developed a database schema/ERD supported by PostgreSQL using SQLAlchemy",
            "Created the frontend using JavaScript, HTML, and CSS to support the API",
            "Tested, troubleshot, and debugged API functionality in Insomnia and VSCode until project requirements were achieved."
        ],
        stack: "JavaScript, SQLAlchemy, PostgreSQL, Python, Flask, Insomnia, Git, VSCode, HTML, CSS",
        gitHub: "https://github.com/PrimsCode/cupcake-api",
        link: null,
        img: "https://blog.hubbado.com/content/images/size/w2000/2020/01/projectmanager.png",
        video: cupcakeApiVid,
    },
    {
        id: 6,
        title: "Snack Or Booze",
        description: [
            "Utilized Json-Server to handle backend data",
            "Developed the frontend using React, including transferring data from frontend to backend",
            "Tested, troubleshot, and debugged app functionality in Insomnia and VSCode until project requirements were achieved."
        ],
        stack: "React, JavaScript, Json-Server, VSCode",
        gitHub: "https://github.com/PrimsCode/assessment_9/",
        link: null,
        img: "https://blog.hubbado.com/content/images/size/w2000/2020/01/projectmanager.png",
        video: snackOrBoozeVid,
    },
    {
        id: 7,
        title: "Jeopardy Game",
        description: [
            "Developed the frontend using JavaScript and jquery",
            "Utilized AJAX to interact with external API to create game categories, questions, and answers"
        ],
        stack: "Html, CSS, JavaScript, jQuery, AJAX",
        gitHub: "https://github.com/PrimsCode/jeopardy_game",
        link: null,
        img: "https://blog.hubbado.com/content/images/size/w2000/2020/01/projectmanager.png",
        video: jeopardyVid,
    },
]

export default projects;