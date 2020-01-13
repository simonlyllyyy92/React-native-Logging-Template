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

after log out it will navigate back to the sign in
