## Repository for testing strapi-plugin-mux-video-uploader

1. `cd strapi-plugin-mux-video-uploader && yarn install && yarn dev`
1. In a separate terminal: `cd strapi-test-project && yarn install && yarn dev`
1. Open strapi and start developing

**Note:** you'll need to restart the strapi-test-project server after making changes to the plugin. [Strapi's documentation on hot module reloading of plugins](https://docs.strapi.io/dev-docs/plugins/development/create-a-plugin#servers-and-hot-reloading) is lacking and we couldn't make it work.

## Handling webhooks

Find a way of tunneling requests to your Strapi instance running on `http://localhost:1337` - it should be a service that supports GET requests and domain-level aliasing, like [ngrok](https://ngrok.com/) or [telebit](https://telebit.cloud). [smee](https://smee.io/) and similar alternatives don't work because they operate on a sub-path basis (e.g. `https://smee.io/BWLGc3BHYSm6RgsA`), which doesn't handle the different endpoints we need Mux to have access to.

With the tunneling domain & URL in hands (e.g. `https://felicious-sought-wasp.ngrok-free.app`), set Mux to send webhooks to it by using the Webhooks dashboard of the chosen environment. Also, temporarily update `BASE_URL` in `strapi-plugin-mux-video-uploader/server/utils/text-tracks.ts` to match the tunneling domain.

## How it works

We configure the test project to use the local plugin via `strapi-test-project/config/plugins.js`. There, we point to the relative path of the plugin's dist directory, which is updated by its own `dev` script.
