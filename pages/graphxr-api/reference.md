# GraphXR API Reference

## add

```js
await gxr().add("A") -> Node with id "A"
await gxr().add("A", "B") -> Edge
await gxr().add(["A", "B"]) -> Node[]
await gxr().add({ id: "A", category: "Person", properties: {name: "Flo"} }) -> Node
await gxr().add([{ id: "A", category: "Person", properties: {name: "Flo"} }]) -> Node[]
await gxr().add({ sourceId: "A", targetId: "B" }) -> Edge
await gxr().add([{ sourceId: "A", targetId: "B" }]) -> Edge[]
await gxr().add([{ source: {...}, edge: {...}, target: {...} }], {...}) -> Edge[] // mergeRelationships
await gxr().add({ name: "Flo" }, { category: "Person" }) -> Node
await gxr().add([{ name: "Flo" }], { category: "Person" }) -> Node[]
await gxr().add([{ name: "Flo" }]) -> Node[]
await gxr().add({ id: "A" }, { id: "B" }) -> Edge
await gxr().add({ id: "A" }, { id: "B" }, { relationship: "LINK" }) -> Edge with relationship "LINK"
```

## captionNodesByProperties

```js
await gxr().captionNodesByProperties({category: "Person", properties: ["name", "age"]});
```

## colorNodesByProperty

```js
await gxr().colorNodesByProperty('age');
await gxr().colorNodesByProperty({property: 'age'});
await gxr().colorNodesByProperty({property: 'age', scale: 'BuGn'});
```

## dispatchGraphDataUpdate

```js
await gxr().dispatchGraphDataUpdate();
```

## edges

```js
await gxr().edges().forEach(console.log);
await gxr().edges().property('since', 2023);
await gxr().edges().property('since', () => Math.random() * 3000);
await gxr().edges().style('width', 10)
await gxr().edges({relationship: 'LINKS'}).style('width', 10);
await gxr().edges({properties: {since: 2023}}).style('width', 10);
```

## flyToCenter

```js
await gxr().flyToCenter();
await gxr().flyToCenter(await gxr().nodes().slice(0, 10).ids())
await gxr().flyToCenter(await gxr().nodes().slice(0, 10).ids(), { duration: 0, offset: -3 }));
```

## flyToPosition

```js
const position = await gxr().nodes({name: "Flo"}).at(0).position;
await gxr().flyToPosition(position); // no offset
await gxr().flyToPosition(position, {offset: -3}); // with an offset
await gxr().flyToPosition(position, {duration: 0}); // instantly
```

## flyOut

```js
await gxr().flyOut();
```

## getCategoryConfig

```js
await gxr().getCategoryConfig('Person');
```

## getNode

```js
await gxr().getNode("A")
```

## graph

```js
// Add a node with id "A"
await gxr().graph().add("A");
// Select nodes in shortest path from A -> B, including A and B
await gxr().graph().shortestPath("A", "B").nodes().select()
// Generate a random graph, run degree algorithm, and then run ego layout for a duration of 1 second.
await gxr()
  .graph()
  .clear()
  .generate()
  .degree()
  .ego(
    {
      properties: { degree: (value) => value >= 3 },
      depth: 5,
      mode: "tree",
      orientation: "down",
      edgeLength: 0.5,
      sortByProperty: "degree",
    },
    { duration: 1000 }
  );
```

## makeGraph

```js
await gxr().makeGraph().add("A").add("B").add("C").add("A", "B").add("B", "C").add("C", "A");
```

## neo4j

```js
// Add result of a cypher query to the graph
await gxr().neo4j("MATCH (n) RETURN n LIMIT 10");
```

## onGraphDataUpdate

```js
await gxr().onGraphDataUpdate(() => console.log("Graph data updated"));
```

## randomGraph

```js
await gxr().randomGraph()
await gxr().randomGraph({nodeCount: 100, edgeCount: 200, categories: ["Person", "Company"], relationships: ["WORKS_FOR", "KNOWS"]});
```

## randomId

```js
await gxr().randomId() -> "lijfsleifjzlse";
```

## setAutoShowImage

```js
await gxr().setAutoShowImage(true);
```

## setCameraRotating

```js
await gxr().setCameraRotating(true);
```

## setCameraOptions

```js
await gxr().setCameraOptions({
  hideAxes: true,
  rotating: true,
  speed: 0.5,
});
```

## setEdgeScale

```js
await gxr().setEdgeScale(0.5);
```

## setFullscreen

```js
await gxr().setFullscreen(true);
```

## sizeNodesByProperty

```js
await gxr().sizeNodesByProperty({category: "Person", property: 'age'});
```

## setParametricAxesOptions

```js
await gxr().setParametricAxesOptions({
  showAxes: false,  
})
```

## setPinIconVisible

```js
await gxr().setPinIconVisible(false);
```

## setTheme

```js
await gxr().setTheme("light")
await gxr().setTheme("dark")
```

## sleep

```js
await gxr().sleep(1000);
```

## triggerForceLayout

```js
// Run force layout
await gxr().triggerForceLayout();
```

## traverse

```js
for (const {node, edge, depth} of await gxr().traverse({ startNodeId: "A", depth: 3 }})) { ... }
```

## vector

```js
await gxr().vector() -> Vector3 {x: 0, y: 0, z: 0}
await gxr().vector(1) -> undefined
await gxr().vector(1, 2) -> Vector2 {x: 1, y: 2}
await gxr().vector({x: 1, y: 2, z: 3}) -> Vector3 {x: 1, y: 2, z: 3}
await gxr().vector([1, 2, 3]) -> Vector3 {x: 1, y: 2, z: 3}
await gxr().vector(1, 2, 3) -> Vector3 {x: 1, y: 2, z: 3}
await gxr().vector({x: 1, y: 2, z: 3, w: 4}) -> Vector4 {x: 1, y: 2, z: 3, w: 4}
```

