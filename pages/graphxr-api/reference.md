### Properties

- [\_version](#_version)

### Methods

- [animate](#animate)
- [captionNodesByProperties](#captionnodesbyproperties)
- [colorNodesByProperty](#colornodesbyproperty)
- [dispatchGraphDataUpdate](#dispatchgraphdataupdate)
- [edges](#edges)
- [flyToCenter](#flytocenter)
- [flyToPosition](#flytoposition)
- [getCategoryConfig](#getcategoryconfig)
- [graph](#graph)
- [neo4j](#neo4j)
- [newGraph](#newgraph)
- [nodes](#nodes)
- [onGraphDataUpdate](#ongraphdataupdate)
- [randomGraph](#randomgraph)
- [setAutoShowImage](#setautoshowimage)
- [setCameraOptions](#setcameraoptions)
- [setCameraRotating](#setcamerarotating)
- [setEdgeScale](#setedgescale)
- [setFullscreen](#setfullscreen)
- [sizeNodesByProperty](#sizenodesbyproperty)
- [sleep](#sleep)
- [triggerForceLayout](#triggerforcelayout)

## Properties

### \_version

• **\_version**: `string`

#### Defined in

[GxrApi/index.ts:35](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-35)

## Methods

### animate

▸ **animate**(): `AnimationBuilder`<`Omit`<[`GxrApi`](GxrApi.md), ``"animate"``\>\>

Create an async chain of API calls. Call `.animate()` to start the chain, and `.run()` to execute it.

**`Example`**

```js
await gxr
  .animate()
  .graph()
  .clear()
  .generate()
  .property("age", () => Math.random() * 200)
  .nodes({ properties: { age: (value) => value > 50 } })
  .select()
  .sleep(1000)
  .nodes({ styles: { selected: true } })
  .tap(console.log)
  .hide()
  .sleep(1000)
  .show()
  .sleep(1500)
  .run();
```

#### Returns

`AnimationBuilder`<`Omit`<[`GxrApi`](GxrApi.md), ``"animate"``\>\>

#### Defined in

[GxrApi/index.ts:60](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-60)

___

### captionNodesByProperties

▸ **captionNodesByProperties**(`options`): `Promise`<`unknown`\>

**`Example`**

```js
gxr.captionNodesByProperties({category: "Person", properties: ["name", "age"]});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CaptionNodesByProperties` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[GxrApi/index.ts:121](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-121)

___

### colorNodesByProperty

▸ **colorNodesByProperty**(`options`): `void`

**`Example`**

```js
gxr.colorNodesByProperty('age');
gxr.colorNodesByProperty({property: 'age'});
gxr.colorNodesByProperty({property: 'age', scale: 'BuGn'});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ColorNodesByPropertyOptions` |

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:131](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-131)

___

### dispatchGraphDataUpdate

▸ **dispatchGraphDataUpdate**(): `void`

**`Example`**

```js
gxr.dispatchGraphDataUpdate();
```

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:253](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-253)

___

### edges

▸ **edges**(): `default`

**`Example`**

```js
gxr.edges().forEach(console.log);
gxr.edges().property('since', 2023);
gxr.edges().property('since', () => Math.random() * 3000);
gxr.edges().style('width', 10)
gxr.edges({relationship: 'LINKS'}).style('width', 10);
gxr.edges({properties: {since: 2023}}).style('width', 10);
```

#### Returns

`default`

#### Defined in

[GxrApi/index.ts:194](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-194)

___

### flyToCenter

▸ **flyToCenter**(`nodeIds?`, `offset?`, `options?`): `Promise`<`Vector3`\>

Fly the camera to the center of a slice of nodes, optionally with an offset, optionally with a custom duration or tween function

**`Example`**

```js
flyToCenter();
flyToCenter(gxr.nodes().slice(0, 10).ids())
flyToCenter(gxr.nodes().slice(0, 10).ids(), -3, { duration: 0 }););
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeIds?` | `string`[] |
| `offset?` | `number` |
| `options?` | `TweenPositionOptions` |

#### Returns

`Promise`<`Vector3`\>

#### Defined in

[GxrApi/index.ts:72](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-72)

___

### flyToPosition

▸ **flyToPosition**(`position`, `offset?`, `options?`): `Promise`<`Vector3`\>

Fly the camera to a position, optionally with an offset, optionally with a custom duration or tween function

**`Example`**

```js
const position = gxr.nodes({name: "Flo"}).at(0).position;
gxr.flyToPosition(position); // no offset
gxr.flyToPosition(position, -3); // with an offset
gxr.flyToPosition(position, 0, { duration: 0 }); // instantly
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |
| `offset?` | `number` |
| `options?` | `TweenPositionOptions` |

#### Returns

`Promise`<`Vector3`\>

#### Defined in

[GxrApi/index.ts:85](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-85)

___

### getCategoryConfig

▸ **getCategoryConfig**(`category`): `CategoryConfig`

**`Example`**

```js
gxr.getCategoryConfig('Person');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | `string` |

#### Returns

`CategoryConfig`

#### Defined in

[GxrApi/index.ts:113](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-113)

___

### graph

▸ **graph**(): `default`

**`Example`**

```js
// Add a node with id "A"
gxr.graph().add("A");

// Select nodes in shortest path from A -> B, including A and B
gxr.graph().shortestPath("A", "B").nodes().select()

// Generate a random graph, run degree algorithm, and then run ego layout for a duration of 1 second.
await gxr
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

#### Returns

`default`

#### Defined in

[GxrApi/index.ts:169](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-169)

___

### neo4j

▸ **neo4j**(`query`, `options?`): `void`

**`Example`**

```js
// Add result of a cypher query to the graph
gxr.neo4j("MATCH (n) RETURN n LIMIT 10");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options?` | `Neo4jOptions` |

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:229](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-229)

___

### newGraph

▸ **newGraph**(): `default`

**`Example`**

```js
gxr.newGraph().add("A").add("B").add("C").add("A", "B").add("B", "C").add("C", "A");
```

#### Returns

`default`

#### Defined in

[GxrApi/index.ts:202](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-202)

___

### nodes

▸ **nodes**(): `default`

**`Example`**

```js
gxr.nodes().forEach(console.log);
gxr.nodes().property('age', 24);
gxr.nodes().property('age', () => Math.random() * 100);
gxr.nodes({category: "Person"}).style('selected', true);
gxr.nodes({properties: {age: 24}}).style('selected', true);
gxr.nodes({properties: {age: (age) => age > 24}}).style('selected', true);

#### Returns

`default`

#### Defined in

[GxrApi/index.ts:181](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-181)

___

### onGraphDataUpdate

▸ **onGraphDataUpdate**(`callback`): `void`

**`Example`**

```js
gxr.onGraphDataUpdate(() => console.log("Graph data updated"));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:261](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-261)

___

### randomGraph

▸ **randomGraph**(`options?`): `default`

**`Example`**

```js
gxr.randomGraph()
gxr.randomGraph({nodeCount: 100, edgeCount: 200, categories: ["Person", "Company"], relationships: ["WORKS_FOR", "KNOWS"]});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `MakeRandomGraphOptions` |

#### Returns

`default`

#### Defined in

[GxrApi/index.ts:211](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-211)

___

### setAutoShowImage

▸ **setAutoShowImage**(`value`): `boolean`

**`Example`**

```js
gxr.setAutoShowImage(true);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[GxrApi/index.ts:237](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-237)

___

### setCameraOptions

▸ **setCameraOptions**(`options`): `void`

**`Example`**

```js
gxr.setCameraOptions({
  hideAxes: true,
  rotating: true,
  speed: 0.5,
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CameraOptions` |

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:105](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-105)

___

### setCameraRotating

▸ **setCameraRotating**(`isRotating`): `void`

**`Example`**

```js
gxr.setCameraRotating(true);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRotating` | `boolean` |

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:93](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-93)

___

### setEdgeScale

▸ **setEdgeScale**(`value`): `number`

**`Example`**

```js
gxr.setEdgeScale(0.5);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[GxrApi/index.ts:245](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-245)

___

### setFullscreen

▸ **setFullscreen**(`value`): `boolean`

**`Example`**

```js
gxr.setFullscreen(true);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[GxrApi/index.ts:277](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-277)

___

### sizeNodesByProperty

▸ **sizeNodesByProperty**(`options`): `Promise`<`unknown`\>

**`Example`**

```js
gxr.sizeNodesByProperty({category: "Person", property: 'age'});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SizeNodesByProperty` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[GxrApi/index.ts:139](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-139)

___

### sleep

▸ **sleep**(`ms`): `Promise`<`number`\>

**`Example`**

```js
await gxr.sleep(1000);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

[GxrApi/index.ts:269](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-269)

___

### triggerForceLayout

▸ **triggerForceLayout**(): `void`

**`Example`**

```js
// Run force layout
gxr.triggerForceLayout();
```

#### Returns

`void`

#### Defined in

[GxrApi/index.ts:220](https://bitbucket.org/kineviz/graph/src/d13c3cf76/web/libs/GxrApi/index.ts#lines-220)
