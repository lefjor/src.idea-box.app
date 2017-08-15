// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyAdtqf6iHjXNc_GVMXmTKBeg60BQqHVNik",
    authDomain: "idea-box-f3b21.firebaseapp.com",
    databaseURL: "https://idea-box-f3b21.firebaseio.com",
    projectId: "idea-box-f3b21",
    storageBucket: "idea-box-f3b21.appspot.com",
    messagingSenderId: "621492012579"
  }
};
