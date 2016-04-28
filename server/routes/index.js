var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

router.get('/*', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
})
// ^^^ this helps us when we need go to the route directly once the page has been refreshed (as in localhost:3000/hillary). That way we won't get a "Can't GET" error. We'll get some console errors, to fix, load map files it's asking for, not a big deal though.

module.exports = router;
