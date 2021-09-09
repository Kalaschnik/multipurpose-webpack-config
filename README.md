# My Multipurpose Webpack Config

## Feature Support

- Webpack 5
  - Dev Server
  - Top-Level await
  - Single Webpack Config for Dev and Production
    - If this should be splitted check [this video](https://www.youtube.com/watch?v=VR5y93CNzeA&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8&index=7)
  - Auto-switch mode to production when using `npm run build`
  - static assets sit in /public and get copied to dist on build (CRA style)
  - source-maps-enabled on dev
  - MiniCssExtractPlugin to a get a `main.css` in dist
- Babel (w/ `.babelrc`)
- CSS/SCSS/SASS (w/ `postcss.config.js` and `browserslistrc`)
- Boilerplate files
  - favicon.ico
  - site.webmanifest
  - apple/android icons

## Not Supported

- Chache Busting
  - makes no sense for smaller apps), and this also requires another webpack plugin:
- `HtmlWebpackPlugin`
  - generates the `index.html` and hooks-up hashed .js, .css files
-

## Resources

- https://www.youtube.com/watch?v=X1nxTjVDYdQ
- https://www.youtube.com/watch?v=SH6Y_MQzFVw
- https://www.youtube.com/watch?v=3On5Z0gjf4U&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8
