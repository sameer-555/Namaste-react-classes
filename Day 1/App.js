const heading = React.createElement("h1", {
    id: 'parent',
    zz: "no"
}, [
    React.createElement("div", {id: 'child1'},
    [React.createElement("h1", {}, "im am H1 tag"),
     React.createElement("h2", {}, "im am H2 tag")]),
    React.createElement("div", {id: 'child2'},
    [React.createElement("h1", {}, "im am H1 tag"),
    React.createElement("h2", {}, "im am H2 tag")])
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)