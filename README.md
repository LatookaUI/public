# Latooka UI

A dark, responsive React workspace built with Vite, BlueprintJS, and React Router.

## Project structure

```text
src/
	assets/       Brand marks and app icons
	components/   Shared UI components, including navigation
	constants/    Route paths and navigation data
	context/      Reserved for shared React context as app-wide state is added
	hooks/        Reusable stateful logic
	layouts/      Shared app shell and navigation
	pages/        Route-level screens
	routes/       Route configuration
	services/     Domain calculations and application services
	styles/       Global and app-wide stylesheet entrypoints
	utils/        Small pure formatting and helper functions
	App.jsx       Router provider
	main.jsx      Browser entry point
```

## Routes

- `/` — Home (default)
- `/about` — About / resume draft
- `/portfolio` — Portfolio placeholder
- `/recipes` — Recipes placeholder
- `/tools/dough-calculator` — Dough calculator

The route base is configured through Vite’s `base` setting for GitHub Pages deployment. A `public/404.html` redirect restores deep links on GitHub Pages.

## Commands

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
