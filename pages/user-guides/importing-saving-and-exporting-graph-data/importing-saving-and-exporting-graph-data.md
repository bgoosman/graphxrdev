When you enter a project’s graph space for the first time, it will be empty. GraphXR enables you to import and work with multiple data sources, and to do so in a shared environment. You can:

*   [Import data by drag and drop](./import-by-drag-and-drop). You can drag and drop .CSV or .JSON files, as well as GraphXR .GXRF files or a Snapshot archive. You can also use _**Import**_ or _**Load GXRF**_ buttons on the _**Data**_ tab in the _**Projects**_ panel to locate and select files for import.
    
*   Import data by querying a connected SQL database or .CSV file, and optionally use the [_**Mapping Editor**_](./import-using-a-mapping) to define a mapping to select and model data from a single table. GraphXR’s Query panel also supports queries on .JSON files as well as gremlin queries on a suitable connected database.
    
*   [Import from Neo4j](./import-from-neo4j) using a Cypher query, pulling by category or relationship, or by using the _**Expand**_ tool.
    
*   [Load a project’s data _**View**_](./saving-and-sharing-data-views), or access a shared view.
    

GraphXR extensions for data import available to all users include:

*   [Visual Query Builder](../using-graphxr-extensions/using-visual-query-builder), to construct no-code Cypher queries on a connected graph database. With Visual Query Builder, analysts can build many of the Cypher queries used for data exploration without having to learn any Cypher code.
    
*   [Grove](../using-graphxr-extensions/using-grove), a Javascript notebook application based on ObservableHQ that a developer can use to load data to a GraphXR project or a graph data repository. Open-source and custom Javascript can also be included in a Grove notebook to provide data visualization and analytics such as interactive charts, tables, and maps.
    

For Enterprise users, additional extensions can be provided for access to graph databases such as ArangoDB and RedisGraph, and various relational or composite databases.

Once loaded to the graph space, data can be saved at any point in the process of exploration and data transformation. A saved snapshot archive or set of data views will enable you to quickly recover previous graph states for further exploration, or to correct a mistake. You can:

*   [Save _**Snapshots**_](./saving-or-loading-snapshots) as you work, which creates a set of data views in memory. You can export your Snapshot library to an external .zip archive whenever you want, and re-load an archive by drag and drop.
    
*   [Save, and if desired, share data _**Views**_](./saving-and-sharing-data-views) to the server for a project.
    
*   [Export data](./exporting-data-as-a-gxrf-or-csv-archive) in a GXRF file, CSV .zip archive, or to a connected Neo4j database.
    

**IMPORTANT:** When you _**Clear**_ data, exit a project or log out of GraphXR, all its data is deleted from the graph space. Develop the habit of saving and/or exporting data whenever you come to a point you may want to re-visit.