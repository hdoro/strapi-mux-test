## Repository for testing strapi-plugin-mux-video-uploader

1. `cd strapi-plugin-mux-video-uploader && yarn install && yarn dev`
1. In a separate terminal: `cd strapi-test-project && yarn install && yarn dev`
1. Open strapi and start developing

**Note:** you'll need to restart the strapi-test-project server after making changes to the plugin. [Strapi's documentation on hot module reloading of plugins](https://docs.strapi.io/dev-docs/plugins/development/create-a-plugin#servers-and-hot-reloading) is lacking and we couldn't make it work.

## How it works

We configure the test project to use the local plugin via `strapi-test-project/config/plugins.js`. There, we point to the relative path of the plugin's dist directory, which is updated by its own `dev` script.
