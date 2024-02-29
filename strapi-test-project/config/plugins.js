module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },

  "mux-video-uploader": {
    enabled: true,
    resolve: "../strapi-plugin-mux-video-uploader/dist",
  },
});
