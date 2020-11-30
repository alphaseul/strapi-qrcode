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
