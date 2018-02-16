// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCqdD_6K2t8okrCUSi0Xz0DJnr4jiWdacg',
    authDomain: 'ricardo-angular-shop.firebaseapp.com',
    databaseURL: 'https://ricardo-angular-shop.firebaseio.com',
    projectId: 'ricardo-angular-shop',
    storageBucket: 'ricardo-angular-shop.appspot.com',
    messagingSenderId: '816102345356'
  }
};
