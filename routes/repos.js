var express = require('express');
var router = express.Router();
var config = require('config');

var GitHubApi = require('github');

var github = new GitHubApi();
github.authenticate({
    type: 'oauth',
    key: config.get('github.CLIENT_ID'),
    secret: config.get('github.CLIENT_SECRET'),
});

router.get('/:owner/:repo/branches', (req, res) => {
    github.repos.getBranches({
        repo: req.params.repo,
        owner: req.params.owner
    }, function (err, response) {
        if (err) {
            res.send(err);
        }
        res.send(JSON.stringify(response,undefined,2))
    })
});



module.exports = router;

