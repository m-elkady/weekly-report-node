const github = require('octonode');
const _ = require('lodash');

const CLIENT_ACCESS_TOKEN = '244e6c43ff04c8d7e240bcc9d8ce18b25247cf1d';

const client = github.client(CLIENT_ACCESS_TOKEN);

const tajawalSearch = client.search();

const prsSearch = (users = [], dateRange = {}, status = 'open') => {
    const usersStr = getUsers(users);
    const dateStr = getDateRange(dateRange);

    tajawalSearch.issues({
        q: `org:tajawal type:pr is:${status} ${usersStr} ${dateStr}`,
        sort: 'created',
        order: 'asc'
    }, (err, data) => {
        console.log(err);
        console.log(data);
    });
};
// role: author | assignee | reviewed-by | review-requested | commenter | mentions
const getUsers = (users, role = 'author') => {
    let usersStr = '';
    for (let i = 0; i < users.length; i += 1) {
        usersStr += `${role}:${users[i]} `;
    }
    return usersStr;
};

// type: created | merged | updated
const getDateRange = (dateRange, type = 'created') => {
    let dateStr = '';
    const from = _.get(dateRange, 'from', '');
    const to = _.get(dateRange, 'to', '');
    if (!_.isEmpty(from) && !_.isEmpty(to)) {
        dateStr = `${type}:${from}..${to}`;
    } else if (!_.isEmpty(from)) {
        dateStr = `${type}:>=${from}`;
    } else if (!_.isEmpty(to)) {
        dateStr = `${type}:<=${to}`;
    }
    return dateStr;
};

prsSearch(['mohammedelkady', 'ibrahim-sakr'], { from: '2018-01-01', to: '2018-01-30' }, 'open');