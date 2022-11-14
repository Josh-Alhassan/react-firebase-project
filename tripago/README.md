# Fetching Data and UseEffect

## New Project (Tripago) and Json-server

+ <code>json-server</code> allows is tp replicate a database using a JSON file locally in a project.

+ JSON server wraps a jason file with API and end points that we can then use to fetch and interact with that data.

### Installing Json-server
<code>$ npm install -g json-server </code>

We can run JSON server so that it watches the json file and wraps it with some API endpoint that we can use to fetch that data.

Hint: *Open a new terminal*

<code>$jason-server --watch ./data/db.json</code>

*"--watch"* flag tells json-server to watch a file for changes so that if more data is added it will pick up on that change.