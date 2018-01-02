const github  = require('octonode');
const CLIENT_ID = 'xxxxx';
const CLIENT_SECRET = 'xxxxx';

const client = github.client({
    id: CLIENT_ID,
    secret: CLIENT_SECRET
});

const ghsearch = client.search();

ghsearch.issues({
    q: 'code type:pr',
    sort: 'created',
    order: 'asc'
}, (data) => {
    console.log(data);
});