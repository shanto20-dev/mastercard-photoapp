 # ! IMPORTANT: To run the app, run 'npm install' and then 'npm start' in your terminal !





# Summary of what has been developed:

- Per instructions, I created a photo-app. The app consists of two pages: (1) The homepage and (2) the Gallery view.

## Homepage
- The home page, upon mounting, calls upon the API to store the albums and users into its state
- The home page then displays a list of all the albums, the thumbnail of the first image of the album (or a placeholder image if no images present), and the relevant user information for the owner of the album
- Clicking on the "View" button for each album will bring you to the gallery view page for that album. This is done using React-Router-Dom
- The home page has an in-progress Filter feature - was not completed due to time constraints of the project (worked on last as a stretch goal)

## Gallery View
- The Gallery View page, upon mounting, will fetch the album and photo data based upon the URL params for the album's ID
- The Gallery View page displays the title of the album, the "current photo" selected in the preview, and the title of the current photo.
- The Gallery View has two buttons, previous and next photo, which change the "current photo" selected by manipulating the gallery's state
- The index of photos is aware of the "current photo" by passing it in as a prop - the current photo has an additional class in its CSS to highlight the border blue


# Important design decisions:

- Filter is incomplete because it was the last thing I tackled since it was a stretch goal
- I added in a few "if" statements to only render some components if the API was called and stored successfully - was running into a few loading issues if this weren't there
- I decided to store users as a hash object instead of an array so that one could more reliably key into the proper user that is associated with the album rather than an index in an array


# Given more time?

- If I were given more time, I would love to style this app more
- I would also fully build out the filter feature. I would change the homepage to only display results based on a .filter() of a certain variable. The filter box would set that variable to a certain user. If no user was selected, just run the homepage as is.\


# Problems?

- No real road-bumps or problems. I did have to take a break in the middle because of other interviewing processes going on, but I was able to jump right back into the action when I was done.

This was a fun challenge! Always love using React.
