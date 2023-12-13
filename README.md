## Mock API
To run App
`npm start`

To Test 
`npm test` 

My Approach: 

1. I used components so that they could be easily reusable and would help identity any errors quicker
2. I have used hooks to manage the state 
3. Props are passed to each component to grab the data 
4. Dynamic rendering if the db.json were to change my app can handle that 
5. I have added some tests too as tests help identity bugs 
6. Responsive design so it can be used on smaller and larger screens
7. Accessiblity measures - added aria labels

if this was handling large amounts of data i would:
1. use typescript 
2. use promises and async operations

Please install the npm dependencies `npm install` and start project `npm start`, this in turn will generate the mocked data and host the API on port 3000 by default.

To get the details of the quote please use the following endpoint:

http://localhost:3000/quote

Likewise, to get all available addons please use:

http://localhost:3000/addons

Full documentation is supplied here: https://github.com/typicode/json-server.