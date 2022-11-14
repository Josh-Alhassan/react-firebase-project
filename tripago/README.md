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

## Why we need useEffect
In order to fetch API from our react application, we use a special hook called "useEffect".

Ideally, when we have the data from our fetch call, we store it in some state, so then we can use that state to circle through it and output a better template each different trips.

Once we update a state, it triggers a rerun of the component. When we update a state, the component is re-evaluated, meaning the component function reruns.

<code>useEffect</code> is a hook that allows us to perform some kind of component side effect. A side effect being some kind of code that we want to run in relation to the component, but not necesserily every time we re-evaluate the component.