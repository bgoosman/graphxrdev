Graph data is a way of expressing information in terms of entities and their connections. The ability to model connections, their direction, and their transitive connectedness (e.g. A, to B, to C, to D) provides new ways to view, use, and extend data. This explicit emphasis on patterns can quickly yield intuitive insights that are difficult if not impossible to discover in tables or hierarchical data structures.

![](/01_01_01_PathFinding.png)

## Anatomy of Graph Data

Graph data are composed of three elements: _nodes_, _edges_, and _properties_.

![](/01_01_02_NodesEdgesProperties.png)

_**Nodes**_ are entities, such as _people_ or _events_. Each node is represented in the graph space by a circle. In GraphXR, a node can display an icon, portrait image, or caption. All nodes of a given type comprise a _**Category**_.

_**Edges**_ are connections between nodes, such as TAKEN\_AT or PURCHASED\_BY, represented by a line connecting two nodes. All edges of a given type comprise a _**Relationship**_. Directed relationships such as PARENT\_OF have an arrow at one end, while directionless ones such as FRIENDS\_WITH do not.

In a labeled property graph, _**properties**_ are key-value pairs which are associated with nodes or edges. Properties include a key such as _**name**_ or _**location**_, and a value. Property values can be in the form of numbers, text, geospatial coordinates, date or time. Multiple values can be entered for a property of a node or edge.

Categories and relationships define _**patterns**_ by which nodes and edges connect to one another. Patterns can be explicitly viewed, analyzed, and transformed in GraphXR's virtual 3D graph space.

![](/01_01_03_NodesEdgesPattern.png)

## Graph Data Modeling

For graph data, the schema, or data model is both flexible and extensible. New categories, relationships, and properties can be added, and old ones re-defined in response to new data sources and new inquiries that arise as investigation and analysis goes forward.

Since data exploration and analysis is highly iterative, this is a powerful advantage. You can quickly re-cast data to look at existing data from different perspectives, and you can easily incorporate new data sources as you need them. GraphXR's transform functions let you map properties to new nodes and relationships, and reduce data complexity by aggregating or merging data in various ways.

![](/01_01_04_TransformPanel.png)

## Sources of Graph Data

GraphXR enables you to work with multiple data sources. You can:

*   Pull or query graph data from a Neo4j graph database connected to GraphXR, or load data exported in a variety of formats from other graph databases (or another GraphXR project). Data exported from a graph environment will include its defined categories, relationships, and properties.
    
*   [Import data](./importing-saving-and-exporting-graph-data/importing-saving-and-exporting-graph-data) in CSV, JSON, and many other formats simply by drag and drop. When you import data that has no associated graph schema, such as a flat CSV file, each row in the table is imported as a node of a single default category.
    
*   Query a CSV file or RDBMS table, and construct graph patterns from the tabular data using GraphXR's [_Mapping Editor_](./importing-saving-and-exporting-graph-data/import-using-a-mapping).
    
    ![](/01_01_05_Import_CSVMapping1080.png)