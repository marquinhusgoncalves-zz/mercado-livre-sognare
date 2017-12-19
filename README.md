This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Dependencies

NODE >= 6

## Available Scripts

In the project directory, you can run:

### `yarn`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    components/
      header/
        header.jsx
      main/
        main.jsx
      product/
        product.jsx
      product-item/
        product-item.jsx
      product-list/
        product-list.jsx
      product-not-found/
        product-not-found.jsx
      search-bar/
        search-bar.jsx
    styles/
      _button.scss
      _global.scss
      _header.scss
      _product-item.scss
      _product-list.scss
      _product.scss
      _reset.scss
      _search-bar.scss
      _variables.scss
    App.css
    App.js
    App.test.js
    index.css
    index.js
    ml.png
```