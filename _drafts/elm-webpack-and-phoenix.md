https://github.com/elm-community/elm-webpack-loader
https://css-tricks.com/introduction-webpack-entry-output-loaders-plugins/
https://pragmaticstudio.com/blog/2017/05/12/elm-with-rails-5-1
https://medium.com/@waffleau/using-webpack-4-with-phoenix-1-3-8245b45179c0

https://github.com/elm-community/elm-webpack-loader

- Webpack doesn't build with any global values so we attach needed data to the window and access it in the js file that loads our elm app. (look into elm portals)
- Update source-directories in elm-package.json with the directories that hold elm files.
