The _**Transform**_ panel provides a suite of graph-based data operators to transform data. This means that GraphXR delivers essential data operations within the graph space that have traditionally been performed in Excel (Pivot Table, Formula), relational databases (Join, Where, Group By, Formula), or big data environments such as MapReduce or Spark (Map, Reduce, Filter, Group By, Function). The ability to view the results immediately in GraphXR makes modeling data on the fly both more visual and more intuitive.

![](/06_00_01_TransformPanel720.png)

Graph-based operators in the _**Transform**_ panel are:

*   _**f(x)**_ (i.e. _function_), to calculate values based on one or more existing properties and write the results back to the source nodes or edges.
    
*   _**Extract**_, to generate nodes and edges belonging to new or existing categories and relationships, based on one or more source properties.
    
*   _**Aggregate**_, to gather properties from a node's neighboring nodes or edges, optionally perform a function on those values, and write the result back to the origin node.
    
*   _**Merge**_, to merge nodes sharing matched properties into a single node.
    
*   _**Link**_, to connect nodes that share matched property values.
    
*   _**Shortcut**_, to create a new relationship between nodes that share a common neighbor.
    
*   _**Connector**_, to access APIs for third party applications that can inject additional data or transform existing data.

The _**Connector**_ is only available in GraphXR Enterprise edition.