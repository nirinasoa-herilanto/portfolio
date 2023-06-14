This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## "portfolio"

A portfolio and discovery/learning of the new futures of Next.js 13 with the app directory.

You will find many features that will be implemented in the future. So don't hesitate to let a feedback or mail me at [nirinasoa herilanto](mailto:nirinasoa.herilanto@gmail.com) That could help me to improve my understanding of these features.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project organisation

On this project, I store project files outside the `app` directories and keeps it only for routing. For more details, you could visit the docs on [Project organisation](https://nextjs.org/docs/app/building-your-application/routing/colocation#store-project-files-outside-of-app)

## Styling reference

On this project, I use `tailwind CSS & Postcss`. Here are the color reference used on the project:

```
  on the background [body]: bg-slate-50 dark:bg-slate-950
  on the title [h1]: text-blue-600 dark:text-yellow-600
  on the paragraph [p]: text-slate-950 dark:text-slate-400
```

NB: `dark:---`allow us to enable dark mode in our project. Notice, if you use dark mode, `dark:---` only work on class or exactly `className`.

```
  // for example

  <p className="text-slate-950 dark:text-slate-400">I'm a full-stack developer</p>
```

## Environnement variables

Here are the environnement variables that the apps requires:

```
NEXT_PUBLIC_PAGINATED_PER_PAGE=6
NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000 // or the production endpoints `https://nirinasoa-herilanto.vercel.app`
```

## API Reference

By default, the endpoints is the current deployment link of the project `https://nirinasoa-herilanto.vercel.app/` or if we are in local development `localhost:3000/`.

### Retrieves all skills

#### GET request: /api/skills

- responses:

```
{
  "data": [
    {
      "_id": "skill-1",
      "skill_name": "HTML & CSS",
      "rating": 3.5
    },
    {
      "_id": "skill-2",
      "skill_name": "Javascript",
      "rating": 3.5
    },
    {
      "_id": "skill-3",
      "skill_name": "Typescript",
      "rating": 2.5
    },
    {
      "_id": "skill-4",
      "skill_name": "React JS",
      "rating": 3.5
    },
    {
      "_id": "skill-5",
      "skill_name": "Apollo Graphql",
      "rating": 3
    },
    {
      "_id": "skill-6",
      "skill_name": "Node JS & Express",
      "rating": 3.5
    },
    {
      "_id": "skill-7",
      "skill_name": "Flask & SQLAlchemy (ORM)",
      "rating": 3.5
    }
  ],
  "results": 7
}

```

### Retrieves all formations

#### GET request: /api/formations

- responses:

```
{
  "data": [
    {
      "_id": "formation-1",
      "formation_name": "Full-stack web developer nanodegree (scholarship)",
      "description": "An program offered by ALX-T and Udacity. In this program, I learned about: how to work with relational database (SQL) with PostgreSQL as database and data modelization for web apps by building CRUD applications using SQLAlchemy, migrations. How to develop an API with Flask & SQLAlchemy, handle error, API testing, TDD, and how to document an API or project. User permission & authorization (RBAC system). Docker & Kubernetes, and how to deploy the Flask app in AWS EKS. and much more.",
      "tech_stacks": [
        "Flask",
        "SQLAlchemy",
        "SQLAlchemy ORM",
        "Auth0",
        "Docker & Kubernetes",
        ".etc"
      ],
      "formation_type": "Online formation in Udacity",
      "is_completed": true,
      "reward_link": "https://www.udemy.com/certificate/UC-6ebb0518-737c-48bd-9477-d025a71384eb/",
      "started_at": "July 2022",
      "end_at": "October 2022"
    },
    {
      "_id": "formation-2",
      "formation_name": "Bachelor's degree in computer science",
      "description": "",
      "tech_stacks": [],
      "formation_type": "University study at Ecole Supérieure Professionnelle en Informatique et Commerce (ESPIC)",
      "is_completed": true,
      "reward_link": "",
      "started_at": "March 2021",
      "end_at": "December 2022"
    }
  ],
  "results": 2
}

```

### Retrieves all certifications

#### GET request: /api/certifications

- responses:

```
{
  "data": [
    {
      "_id": "formation-1",
      "certification_name": "React - The Complete Guide (incl Hooks, React Router, Redux)",
      "description": "On this course, I learn and deep dive in React JS (an javascript library) including more features arround this technologie. Within instructor is Maximilian Schwarzmüller | Academind",
      "tech_stacks": [
        "React jS",
        "Next JS",
        "React with Typescript",
        "Redux",
        ".etc"
      ],
      "certification_type": "Online formation in Udemy",
      "is_completed": false,
      "certification_link": "",
      "certified_at": ""
    },
    {
      "_id": "formation-2",
      "certification_name": "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
      "description": "On this course, I learn and deep dive in Node JS, Express, MongoDB, including how to build an API RESTfull and, how to work effectively with NoSQL data. Within intsuctor is Jonas Schemdtmann",
      "tech_stacks": ["Node JS", "Express", "Mongo DB", ".etc"],
      "certification_type": "Online formation in Udemy",
      "is_completed": true,
      "certification_link": "https://www.udemy.com/certificate/UC-8af00478-5ed1-4aa1-919d-deb0544b7136/",
      "certified_at": "mars 2023"
    },
    {
      "_id": "formation-3",
      "certification_name": "The Complete JavaScript Course 2022: From Zero to Expert!",
      "description": "On this course, I learn javascript language, the new features on this language, OOP with classes and inheritance, tooling, etc. Within intsuctor is Jonas Schmedtmann",
      "tech_stacks": ["Javascript", "OOP", "ES6", "MVC Architecture", ".etc"],
      "certification_type": "Online formation in Udemy",
      "is_completed": true,
      "certification_link": "https://www.udemy.com/certificate/UC-6ebb0518-737c-48bd-9477-d025a71384eb/",
      "certified_at": "August 2022"
    }
  ],
  "results": 3
}

```

### Retrieves all projects

By default the response are paginate per 6, but you could update it as your need by updating the value the config file:

```
NEXT_PUBLIC_PAGINATED_PER_PAGE= your new paginated number
```

#### GET request: /api/projects

- responses:

```
{
  "data": [
    {
      "_id": "project-1",
      "project_title": "Portfolio",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "This is an project and also my portfolio of learning the new features of Next JS 13 with 'app/' directory",
      "tech_stacks": ["Next JS", "Typescript", "Tailwind CSS"],
      "repo_link": "https://github.com/nirinasoa-herilanto/portfolio",
      "link": "https://nirinasoa-herilanto.vercel.app/",
      "is_completed": false,
      "started_at": "June 2023",
      "end_at": "",
      "slug": "portfolio"
    },
    {
      "_id": "project-2",
      "project_title": "Simple React App",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "'Simple React App' is a small application with React, typescript, React context API, and Styled components for styling. On this app, we could find a dark/light mode and a simple rating component. NB: During the development of this project, I tried to follow much as possible the React convention, and for the purpose to keep everything reusable.",
      "tech_stacks": ["React JS", "Typescript", "Styled-component"],
      "repo_link": "https://github.com/nirinasoa-herilanto/Simple-react-app",
      "link": "",
      "is_completed": true,
      "started_at": "november 2022",
      "end_at": "June 2023",
      "slug": "simple-react-app"
    },
    {
      "_id": "project-3",
      "project_title": "Natours",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "Natours is an application for learning Node.JS, Express.JS, MongoDB, how to work effectively with NoSQL data, and how to build a RESTful API with that.",
      "tech_stacks": ["Node JS", "Express", "Mongo DB"],
      "repo_link": "https://github.com/nirinasoa-herilanto/natours",
      "link": "",
      "is_completed": true,
      "started_at": "January 2023",
      "end_at": "March 2023",
      "slug": "natours"
    },
    {
      "_id": "project-4",
      "project_title": "Simple Flask App",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "An project on my training at Udacity with the full-stack web developer nanodegree program. A part from that, I learn about deployement of an Flask app with some concept of learning Docker, Kubernetes, CI/CD pipeline, and deployed the application to Amazon EKS",
      "tech_stacks": ["Flask", "Docker", "AWS EKS", "CI/CD pipeline"],
      "repo_link": "https://github.com/nirinasoa-herilanto/cd0157-Server-Deployment-and-Containerization",
      "link": "",
      "is_completed": true,
      "started_at": "September 2022",
      "end_at": "October 2022",
      "slug": "simple-flask-app"
    },
    {
      "_id": "project-5",
      "project_title": "Coffee Shop",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "An project on Udacity Class, that we learn about authorization & permission using the RBAC Sytem with Auth0.",
      "tech_stacks": [
        "Flask",
        "SQLAlchemy",
        "SQLAlchemy ORM",
        "Postgresql",
        "RBAC System with Auth0"
      ],
      "repo_link": "https://github.com/nirinasoa-herilanto/Coffee-Shop",
      "link": "",
      "is_completed": true,
      "started_at": "September 2022",
      "end_at": "October 2022",
      "slug": "coffee-shop"
    },
    {
      "_id": "project-6",
      "project_title": "Trivia",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "An project on my training at Udacity with the full-stack web developer nanodegree program. A part from that, I learn how to build an RestFull API with Flask, how to write API testing using unittest, how to handle error, how to write an API & project documentation and much more.",
      "tech_stacks": [
        "Flask",
        "SQLAlchemy",
        "SQLAlchemy ORM",
        "RestFull API",
        "Error handling",
        "API testing",
        "API documentation",
        "Project documentation",
        "Postgresql"
      ],
      "repo_link": "https://github.com/nirinasoa-herilanto/Trivia",
      "link": "",
      "is_completed": true,
      "started_at": "September 2022",
      "end_at": "October 2022",
      "slug": "trivia"
    }
  ],
  "results": 9
}

```

#### GET request : /api/projects?page=2

- responses:

```
{
  "data": [
    {
      "_id": "project-7",
      "project_title": "Fyyur",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. This site lets you list new artists and venues, discover them, and list shows with artists as a venue owner. An project on my training at Udacity with the full-stack web developer nanodegree program. A part from that, I learn how to modelise our data and how to work with SQL using PostgreSQL as database.",
      "tech_stacks": [
        "Flask",
        "Flask WTF",
        "SQLAlchemy",
        "SQLAlchemy ORM",
        "data modelisation with SQL",
        "Postgresql"
      ],
      "repo_link": "https://github.com/nirinasoa-herilanto/Fyyur",
      "link": "",
      "is_completed": true,
      "started_at": "September 2022",
      "end_at": "October 2022",
      "slug": "fyyur"
    },
    {
      "_id": "project-8",
      "project_title": "University",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "University is a project for practical learning JAM STACK structure. I used Next.JS, Tailwind CSS, Firebase auth for user authentication, and STRAPI CMS that's available on my repository. STRAPI repository: https://github.com/nirinasoa-herilanto/University-CMS",
      "tech_stacks": [
        "Next JS",
        "Strapi CMS",
        "Firebase auth",
        "Tailwind CSS",
        "Typescript"
      ],
      "repo_link": "https://github.com/nirinasoa-herilanto/University",
      "link": "",
      "is_completed": true,
      "started_at": "September 2021",
      "end_at": "Mai 2022",
      "slug": "university"
    },
    {
      "_id": "project-9",
      "project_title": "Forkify",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "Forkify is an recipe application and an learning project on the modern javascript (Udemy - The complete javascript course 2022 by Jonas Schemdtmann)",
      "tech_stacks": [
        "Javascript",
        "MVC Architecture/Pattern",
        "Parcel bundler"
      ],
      "repo_link": "https://github.com/nirinasoa-herilanto/Forkify",
      "link": "",
      "is_completed": true,
      "started_at": "August 2022",
      "end_at": "August 2022",
      "slug": "forkify"
    }
  ],
  "results": 9
}

```

#### GET request, /api/projects/portfolio (dynamic route segment)

We could find a specific by project slug, for example, we want find data about the project `portfolio`.

- response:

```
{
  "data": {
  "_id": "project-1",
  "project_title": "Portfolio",
  "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
  "project_description": "This is an project and also my portfolio of learning the new features of Next JS 13 with 'app/' directory",
  "tech_stacks": [
  "Next JS",
  "Typescript",
  "Tailwind CSS"
  ],
  "repo_link": "https://github.com/nirinasoa-herilanto/portfolio",
  "link": "https://nirinasoa-herilanto.vercel.app/",
  "is_completed": false,
  "started_at": "June 2023",
  "end_at": "",
  "slug": "portfolio"
  }
  }
```

#### GET request, search an project by name: /api/projects/search?query="app"

we could search projects by adding to the query parameter `query=...` on the search route.

- responses:

```
{
  "data": [
    {
      "_id": "project-2",
      "project_title": "Simple React App",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "'Simple React App' is a small application with React, typescript, React context API, and Styled components for styling. On this app, we could find a dark/light mode and a simple rating component. NB: During the development of this project, I tried to follow much as possible the React convention, and for the purpose to keep everything reusable.",
      "tech_stacks": ["React JS", "Typescript", "Styled-component"],
      "repo_link": "https://github.com/nirinasoa-herilanto/Simple-react-app",
      "link": "",
      "is_completed": true,
      "started_at": "november 2022",
      "end_at": "June 2023",
      "slug": "simple-react-app"
    },
    {
      "_id": "project-4",
      "project_title": "Simple Flask App",
      "project_image": "https://res.cloudinary.com/nhr/image/upload/v1686490565/nhr-github.png",
      "project_description": "An project on my training at Udacity with the full-stack web developer nanodegree program. A part from that, I learn about deployement of an Flask app with some concept of learning Docker, Kubernetes, CI/CD pipeline, and deployed the application to Amazon EKS",
      "tech_stacks": ["Flask", "Docker", "AWS EKS", "CI/CD pipeline"],
      "repo_link": "https://github.com/nirinasoa-herilanto/cd0157-Server-Deployment-and-Containerization",
      "link": "",
      "is_completed": true,
      "started_at": "September 2022",
      "end_at": "October 2022",
      "slug": "simple-flask-app"
    }
  ],
  "results": 2
}

```

## Deployment

The project is available on this link [click here](https://nirinasoa-herilanto.vercel.app/) and deployed on Vercel.

## Author

Nirinasoa Herilanto
