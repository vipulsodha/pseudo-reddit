# pseudo-reddit

Hosted  : [pseudo-reddit](http://vipulsodha.me/reddit)
API Docs : [api-docs](http://vipulsodha.me:3000/documentation)

**A simpler version of reddit with features such as :**
- Topic Posting
- Up and Down Voting


## To run
  - `npm install`
  - `npm run start`
  - By default it will run on localhost port 3000, you can set `env.PORT` and `env.HOST` to configure it
  - To build docker image: `docker build -t <TAG> .`
  
## Description
  - It uses inmemory datastructure to store all the post.
  - The in memory data structure is a AVL tree
  - Insertion `O(logn)`, update `O(logn)`
  - For api server it uses `Hapi.js` [hapi](https://hapijs.com/)
  - For api validation it uses `Joi` [joi](https://github.com/hapijs/joi)
  - For JS documentation it uses `JS doc`, and API documentation `Swagger`
