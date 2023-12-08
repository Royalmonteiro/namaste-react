const container=React.createElement("div",{id:"container"},[
React.createElement("div",{id:"child1"},[
    React.createElement("h1",{id:"title"},"heading 1"),
    React.createElement("h2",{id:"title2"},"heading 2")]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"title"},"heading 1"),
        React.createElement("h2",{id:"title2"},"heading 2")])])


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(container)