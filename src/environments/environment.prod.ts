export const environment = {
  production: true,
  COGNITO_AUTH_DOMAIN: 'https://pet-reviews.auth.us-east-1.amazoncognito.com',
  graphql_url: 'https://tct45ivzle.execute-api.ap-south-1.amazonaws.com/prod/graphql',
  petreviewsFilesBucket: 'https://pet-reviews-files-prod.s3.amazonaws.com/public/',
  applicationId: '5d2ef428bbfa6576b357d5d4',
  oauth: {
    // Domain name
    domain: 'pet-reviews.auth.us-east-1.amazoncognito.com',

    // Authorized scopes
    scope: ['email', 'profile', 'openid'],

    // Callback URL
    redirectSignIn: 'https://pet-reviews.herokuapp.com', // or 'exp://127.0.0.1:19000/--/', 'myapp://main/'

    // Sign out URL
    redirectSignOut: 'https://pet-reviews.herokuapp.com', // or 'exp://127.0.0.1:19000/--/', 'myapp://main/'

    // 'code' for Authorization code grant,
    // 'token' for Implicit grant
    // Note that REFRESH token will only be generated when the responseType is code
    responseType: 'code',

    // optional, for Cognito hosted ui specified options
    options: {
      // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
      AdvancedSecurityDataCollectionFlag: true
    },
  }
};
