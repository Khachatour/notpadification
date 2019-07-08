# Notpadification

A note saving application to write, read, update and delete notes stored in GitHub gists.

### Development

```js
npm run dev // to start a dev server
```

### About the application

At first user signs in with OAuth2 using github auth api.

After the initial sign in, there is so any list at first, there could be initial gist getter function but it is not implemented in here. There is a possibility to `save` aka `create` a new gist and `delete` that gist also. After creation there is a possibility to `edit` and `delete` notes aka contents of the gist. My gist usage architecture is the following:

- Create only one gist as a notepad
- Create notes as a files in a gist aka notepad with title as a filename and content as actual note

API layer is implemented with `fetch` with proper `whatwg-fetch` polyfill. ApiFactory is a abstracted library to ease the use of API, you can find code duplication in form of `{Authentication}` header for gists manipulation, I didn't refactored that section to remove duplication.

Main logic goes into `./main/index.js` which is the actual application, later if there will be any kind of splitting of logic, there can be `shared` directory which will contain shared component logic.

There is no any kind of state management library used, if there will be a need to use any kind of library to manage the sate, I think I would choose Redux for the sake of simplicity, I consider Redux to have a lot of boilerplate but the simplicity is there. But as for now `hooks` and `context` can be more than enough.

### Components:

InitialNote - a component for `add`
Note - a component for mapping github gists, this component contains the storing of inpuit data like title, and note enhancing with validations
Button - regular button component, it is laking more API definitions, like `tabIndex` and so.
Input - component for inputing and checking `isUnique` character input
Conditional - a component for conditionally render UI

### Tech choices:

React - UI library
Parcel - module bundler
Flow - static type checking
Prettier - code formatter
Eslint - linter
SASS - CSS preprocessor

React can be complex sometimes but mainly the mental model of components is pretty simple, with the latest `hooks` API reasoning about functional components became pretty powerful and interesting. It allows us to solve pretty complex UI problems with pretty simple model, it's just components right?

Parcel is a very simple out-of-the-box solution for module bundling, but it is really powerfull also, it allows us to use very powerful plugin system, but mainly everythin is out-of-the-box.

Prettier and Eslint are the duo which is closing the debate over code styling haha :)

Flow was pretty good, until recently. The resources to support flow is getting less and less. I've chosen Flow because I am very familiar with it, but for the large project I would go with TypeScript definitely.

I have really enjoyed this task, I have 2,5 years of experience, I know it is not much, but it was really zipped even gzipped lol :)
The mission of DISQO is really inspiring, it would be an honor for to join your team, I am sure I will reall really really fast and be helpful for your mission, and be a good teammate :) Thank you very much, this was a pleasure :)
