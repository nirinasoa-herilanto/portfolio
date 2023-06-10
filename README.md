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

## Deployement

The project is available on this link [click here](https://nirinasoa-herilanto.vercel.app/) and deployed on Vercel.

## Author

Nirinasoa Herilanto
