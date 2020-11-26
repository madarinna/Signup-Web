# Selfie Frontend

This is the frontend of selfie app

## Getting Started

#### Installation

```bash
# Clone the repo to your localhost
git clone git@github.com:self-ie/selfie-frontend.git

# Install
yarn install
```

#### Commands

- To start development server

```bash
yarn dev
```

and open http://localhost:6678

- To create optimized production build

```bash
byarn build
```

- To start production server

```bash
yarn start
```

- To start storybook

```bash
yarn storybook
```

- To run the unit testing using Jest and React-testing


```bash
yarn jest
```

and open http://localhost:6006

## Next.js

Next.js is React frontend development framework that come prepacked with features

- Zero config
- SSR and SSG
- Image Optimization
- Typescript supported
- File-system Routing

#### Folder Structures

The folders are organized in the following structures

```
.
├── public/  					# Public assets
└── src/
    ├── components/ 	# All components
    ├── config/       # All configurations
    ├── containers/   # Containers that forms the pages
    ├── docs/         # Documentation
    └── pages/        # File-system routing 
    
```

#####  `/src/pages/` 

When a file is added to this folder it's automatically available as a route. Learn more about [File-based routing](https://nextjs.org/docs/routing/introduction).

```
# Examples
/src/pages/index.js → /
/src/pages/blog/index.js → /blog
/src/pages/blog/first-post.js` → /blog/first-post
/src/pages/blog/[id].js → /blog/:id (/blog/123)
```

##### `/src/pages/api` 

Not used. Learn more about [API routes](https://nextjs.org/docs/api-routes/introduction).

##### `/src/public` 

Used to serve static files, like images. Files inside `public` can then be referenced by your code starting from the base URL (`/`). Learn more about [Static file serving](https://nextjs.org/docs/basic-features/static-file-serving).

##### `/src/components/<Component>/*`

All components are placed under this folder.

```  
.
├── src/
│   ├── components/
│   │   ├── Button/                 # Button component
│   │   │   ├── index.tsx           # index file that reference the Button.tsx
│   │   │   ├── Button.tsx          # Main file of implementation
│   │   │   ├── Button.stories.tsx  # Story for Button component
│   │   │   └── Button.styles.tsx   # Styles for Button component
│   │   └── ... other components

```

## React

React is the framework for building UI component.

- Use only [Functional Component](https://reactjs.org/tutorial/tutorial.html#function-components)

- Use [React Hooks](https://reactjs.org/docs/hooks-intro.html) - useState, useEffect, useCallback

- Use [React Context](https://reactjs.org/docs/context.html)

## Material-UI

Material-UI is the implementation of [Material Design](https://material.io/design) in React components. 

#### Theme customization

We are using material-ui.com for theme with Devias Kit Pro Theme.

##### `src/config/theme/theme.jsx`

This is theme that will be used by `ThemeProvider`. See [createMuiTheme](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme)

##### `src/config/theme/palette.jsx`

This file defines all the colors used in the system. See [palette](https://material-ui.com/customization/palette/)

##### `src/config/theme/typography.jsx`

This file defines all the typography used in the system. See [typography](https://material-ui.com/customization/typography/)

##### `src/config/themes/overrides/overrides.jsx`

This file defines all the theme's overrides of MUI components. See [overrides](https://material-ui.com/customization/components/#global-theme-override)

##### `src/config/theme/props/props.jsx`

This file defines the overrides of MUI components' default props. See [default props](https://material-ui.com/customization/globals/#default-props)

#### Others

Other property that can be customized are:-

- [Spacing](https://material-ui.com/customization/spacing/)
- [Breakpoints](https://material-ui.com/customization/breakpoints/)
- [Density](https://material-ui.com/customization/density/)
- [z-index](https://material-ui.com/customization/z-index/)
- [Globals](https://material-ui.com/customization/globals/)

#### Default Theme Variables

Follow [this link](https://material-ui.com/customization/default-theme/) for all the available theme's variables and its default value.

## Component Driven Development

Learn more [Component Driven Development](https://www.componentdriven.org)

#### What are components?

Components are standardized, interchangeable building blocks of UIs. They encapsulate the appearance and function of UI pieces.

- Build one component at a time
- Combine components
- Assemble pages
- Integrate pages into your project

## Storybook

Storybook is a visual UI components explorer. [Learn more about storybook](https://www.learnstorybook.com)

Every component **must be** accompanied with a _story_ alongside the component file in the folder.

```
.
├── src/
│   └── components/
│       ├── Button/                 # Button component
│       │   ├── Button.tsx          # Main file of implementation
│       │   ├── Button.stories.tsx  # Story for Button component
│       │   └── ... other files
│       │
│       ├── ... other components
```

Reference

- [How to write a story?](https://storybook.js.org/docs/react/writing-stories/introduction)

## Configurations

#### webpack

Webpack can be configured in `next.config.js`

##### `config.resolve.alias`

Defined alias are

- `@` : `src/components`
- `config` : `src/config`

#### tsconfig.js

Typescript configuration

#### .babelrc

Not used

## Tech Stacks

- [Next.js](https://nextjs.org) 10.0.1 
- [Typescript](https://www.typescriptlang.org) 4.0.5
- [React](https://reactjs.org) 17.0.1
- [Material-UI](https://material-ui.com) 4.11.0
- [Storybook](https://storybook.js.org) 6.1