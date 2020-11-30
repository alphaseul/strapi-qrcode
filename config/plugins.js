module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: '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',
    },
    settings: {
      defaultFrom: 'agence@alphasow.fr',
      defaultReplyTo: 'agence@alphasow.fr',
    },
  },
  // ...
});
module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAJHZLNDH7PX3SHEMQ'),
      secretAccessKey: env('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'),
      region: env('UE (Paris) eu-west-3'),
      params: {
        Bucket: env('my-project-strapi-image'),
      },
    },
  },
});
