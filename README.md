# React-native-Logging-Template

This is a mobile template of sign in and sign up

To run that

1. clone and run yarn install or npm install
2. expo start || npm start || yarn start

# React-native-Logging-Template

This is a mobile template of sign in and sign up

To run that

1. clone and run yarn install or npm install
2. expo start || npm start || yarn start

In this branch, include the facebook login method, i also add the finger print login method .

To do that, first we store the login token to signin reducer as well, and every time before sign in , it will check, whether there is token stored in reducer

if it does, then finger print login is enabled

For log out, this time we only clean up the token in local storage, but we keep the token stored in the reducer, this will bring a problem that every time we refresh the app, it will navigate to sign in even if we logged in with finger print, cause in resolveAuthScreen, we use token in async storage to decide whether we navigate to user info page or not.

so what i did is, every time it tries to get the user info, it also store the reducer token to the local storage, but it has to meet the if statement that the current facebook login info is empty, and fingerprint value is NOT empty, so that facebook log out will not failed or after common login for one time, the second time we login by facebook, it will directly store the token to async storage. and fackbook log out will failed.

anyway, this method let the userinfo always has user info when i navigate to that page. and finger print login will automatically login to the previous account. and when we logout and login with new account, it will store the new account token to the reducer. besides, if this is the first time that customer login, the finger print login will not be enabled which is good.

Next step, I delete the finger print login button, istead i put it at the componentDidMount, to automatically trigger finger print login if it has common logged in before.
