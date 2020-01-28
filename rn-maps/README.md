# React-native-Logging-Template

This is a mobile template of sign in and sign up

To run that

1. clone and run yarn install or npm install
2. expo start || npm start || yarn start

this is the V3 template of sign in and sign up which is the final version

in this version, first we add sign up and sign in failed action to avoid loading icon keep showing when action failed

second, we clear up the input value every time we attempt to sign in or sign up

third, we created an user info screen, after sign in successfully, it will navigate to userinfo screen.

next, we add another api call, to get the home page with required token in the header, and we get the user info from the database (here is the user's email address)

Then we add some icon and styling for password and email input.

the following functions that are added are log out

in order to log out we change from storing token into reducer to storing token by asyncstorage (saga and reducer)

after log out it will navigate back to the sign in,

what's more, I added a new function for both signin and sign up, for now, to make sure that if there is login token stored in the local storage, it will redirect to userinfo screen, so we don't have to sign in every time when we refresh.

then in order to add redux-persist into this template, i created a new screen called counter, everytime, we click store to store the number to the redux and next time when i refresh, it will show me the current number stored in the redux store.

PS: one thing need to pay attention, is that, in react native, the storing engine we used is asyncstorage, this template can also become a redux persist template.

I made some updates for token persist, by creating a new ResolveAuthScreen and put it as the default root screen. we can judge whether we have a token in the localstorage. if it does, we direct to home screen, if it doesn't it weill direct to signin screen

in order to provide some proper alert, I add a new storage folder called generalAlert and created 2 different action for show and dismiss alert. After that, i created a new component called generalAlert in which i used Overlay as alert component, inside this generalAlert file, in order to better control the icon style later, i created a seperate tabBarIcon component. Finally, I rendered this generalAlert component in the App.js file and put it under the persist gate, contains the <App> tag. Cause in the generalAlert file, we put everything as child component at the bottom. So here we put everything that involves in our navigation under this general alert. As a result, every page can use this alert.
