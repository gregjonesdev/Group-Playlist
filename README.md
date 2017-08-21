#React Playlist

![react playlist](http://imgur.com/a/NrHpM)

##Summary

The objective of this assignment was to create a React application that posted user-entered data to a database and also displayed results from a fetch to the database. I organized the code into components and passed data from parent to child through props.

I really enjoyed styling this app. Since I used a background image, I used a bit of CSS trickery to display the font as white with a black outline to ensure it could be read against any background.

I used a bit of a heavy-handed solution to refreshing the database. In hindsight, I should fetch from App.js, pass the playlist as a prop to <Playlist />, and refresh it as a state variable.

This project helped me learn about props and state in React and how to use them to create a simple interactive application.
