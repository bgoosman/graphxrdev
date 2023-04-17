## Installation and Administration

### Do the hardware and software requirements apply only to the server or also to clients?

The hardware and software requirements are for clients.

### Can user permissions be assigned? Who can view and edit?

Options for controlling permissions, editing, etc. include:

*   Users can be Admins, with the ability to control other users access to various connectors.
    
*   Users can share Projects, enabling full editing access, or share a View which is a read-only visualization
    
*   Permissions set up in the database will carry over to GraphXR
    

### What are project Extensions?

The Extensions tab displays plug-ins that extend GraphXR functionality in various ways. Kineviz has developed and released Extensions such as Visual Query Builder and Grove; other Extensions can be created by third party developers.

## Sharing Data and Views

### Can data and views be shared as read-only view with those who don't have a user profile?

Yes, you can share a View and set access privileges to it. The shared View can be sent as a link directly or embedded as an iframe. This lets you share selected data or publish it to the web.

### How does GraphXR enable someone who does not have database access to view queries?

A user with project-level access can run queries on a remote database. If you only want to show the results of a given query or set of queries, you would use a View.

## Importing, Querying, and Saving Data

### Which kinds of files can be imported or loaded into GraphXR?

Many kinds of files can be imported simply by drag and drop: .CSV, .JSON. Maltego .mgtx, Google Earth KML (for geolocated data), and GraphXR’s  .graphxr and .graphxrsnapshots files. Through the Query panel you can load graph data from a connected database using Cypher (e.g. for Neo4j), SQL (MySQL or MSSQL), and Gremlin. And you can load .CSV and .JSON files with or without querying and mapping the contents.

### Can I use GraphXR to connect to a MySQL Workbench on a local machine?

MySQL Workbench is a client. So you need to create and connect GraphXR to a MySQL server. You can use the connection details you use to connect MySQL Workbench to your MySQL server.

### Is there any standard or restriction on how to generate the database?

GraphXR lets you load data from a variety of databases into memory via queries; the database you query can be any size. There are some best practices that we recommend, however, and can walk through with you.

### How much information does the free version of GraphXR support?

The free version of GraphXR supports as much data as the Pro and Enterprise version. There is no hard limit imposed, just a hardware limit. We recommend keeping your graph under 10,000 nodes for best performance, however on a powerful machine you can load 100,000 plus. 

### Can I use the Neo4j community license for GraphXR. Any limitations?

Yes, you can use Neo4j’s community version (e.g. [Neo4j Desktop](https://neo4j.com/docs/desktop-manual/current/)). Limitations would be the hard limits (database size, etc.) set by Neo4j, plus any [native user roles](https://neo4j.com/docs/operations-manual/current/authentication-authorization/built-in-roles/#auth-built-in-roles-overview) available for editing in Neo4j’s community edition.

### Can you use GraphXR to pass information from Oracle to Neo4j?

If you have an Oracle database, you can pipe data directly from Oracle into GraphXR and then from GraphXR to Neo4j. So you can use GraphXR as a tool to pipe data from Oracle to Neo4j.

### Where can I run a Neo4J (Cypher) query to get only specific information?

The Query panel=> Cypher tab lets you enter and run a Cypher query on a Neo4j database. You can write the query to return a graph (nodes and relationships) to the project space. If you write a Cypher query that returns a number or table rather than a graph, the results are shown as a table. You can then transform the resulting table into a graph, with each row as a node.

You can also use the Visual Query Builder extension to craft and run a no-code Cypher query.  

###  Is added or modified information saved to Neo4j or only on the display?

Data loaded into GraphXR lives in memory, so any modifications to it will not be saved automatically back to the database. And when you exit a GraphXR project and open it again, the data will no longer be present. But a user CAN:

*   Write the contents of the graph to Neo4j if granted the appropriate admin privileges. This can be used to update or overwrite a connected DB as needed.
    
*   Save a data view as a GXRF file, or save Snapshots of the data, and then re-import it.
    

### How do I save data to the connected Neo4J database?

Under the Project panel=>Data tab, there is a "Save to Neo4j" button. This is the most seamless method, but data can also be saved as a .GXRF file, a view, or exported as CSVs, which can also be loaded into Neo4j.

### Can I execute a CREATE or DELETE Cypher query on a Neo4j database connected to GraphXR?

Yes, if permission to CREATE or DELETE data have been granted on the Neo4j DB. Otherwise, such a query will fail.

### Can an ETL job be run in GraphXR?

ETL (i.e. Extract from multiple data sources, Transform according to business rules, and Load to GraphXR) can be set up and run in GraphXR’s Grove Extension, a JavaScript/Observable notebook application currently in beta release.

### Where do the relationships listed in the “Expand” function come from?

For the data you select in GraphXR, _Expand_ shows relationships that exist in the connected graph database (e.g. Neo4j) for the selected categories. This is because _Expand_ queries the database for additional data.

### Where do the categories and relationships used for Pull in Project>Category come from?

Categories and relationships that exist in the connected Neo4j database are automatically displayed in the Project panel. _Pull_ queries the database for data of that category or relationship, 25 nodes or edges at a time.

## Data Modeling and Mapping in GraphXR

### How is MySQL information transformed into GraphXR's nodes and relationships?

The mapping editor in the Query panel => SQL tab enables you to define the logic for generating relationships for a table.

### Can I create one-to-many relationships between multiple CSVs without using Cypher?

Yes: import the CSV data into GraphXR as nodes. Then you can use GraphXR’s Add Edge tool to select source and target nodes and apply a new or existing relationship to the new edges that are created.

### Why do new categories and relationships persist in the Project panel after all their nodes and edges are deleted?

When you create new categories or relationships they are added to the existing GraphXR project schema, which persists (even if there are no data associated with it) until you exit the project and reload it. If your project was connected to a Neo4j database AND you wrote the new data types to it, the new entities will persist. Otherwise any “orphan” categories or relationships will be deleted.

### Can I save the new relationship generated by the Shortcut function onto a Neo4j database?

Yes, you can save new relationships (and categories) to Neo4j, if the database is set up to allow it. Neo4j validation can be set up to reject data of types that aren’t already defined. In that case, you’d need to change constraints on the DB side. A new relationship and its edges are simply added to the extensible graph data. Data collision wouldn’t happen because a new relationship (or category) has to have a unique name—one not already in use.

## Graph Data Rendering and Visualization

### Is the graph visualization rendered in the server or the browser?

Currently, it’s 100% in the browser.

### How are edge lengths computed in GraphXR?

Edge length is computed using [force layout](https://github.com/vasturiano/d3-force-3d). We don’t consider individual edge strength, so if a group of nodes has many connections between them, they will be relatively closer to each other.

### In the Force Layout tab, what does Link Strength, Link Distance, and Gravity mean? How are they used?

_Link Strength_, _Link Distance_, and _Gravity_ are parameters used in the [force-directed graph drawing](https://en.wikipedia.org/wiki/Force-directed_graph_drawing) algorithm, which is used to render the force-directed layout. This class of algorithms assign specific physical forces to the edges and nodes of a graph, such that edges are of similar length, connected nodes are attracted to one another, as few crossed edges are created as possible, and the distribution of nodes in 3D space is reasonably symmetric. Adjusting the parameters lets you change how the force layout is calculated: how spread out the nodes are, how long the edges are, and how compact the display becomes.

### How are URL images applied to nodes when the Show Avatar setting is enabled?

An attempt to load a URL image will occur when there is a property key of _\_photo_, _photo_, _avatar_, _image_, _picture_, or _icon_ and a property value starting with _http_, _https_, or _ftp_. Formats supported are _jpg_, _jpeg_, _png_, _gif_, and _bmp_. The image is displayed when the node is at a fixed virtual distance. A node further away than that receives the basic Category color and current icon overlay, if any.

### How can I make nodes appear highlighted from the center?

There’s not an internal glow or light source option. However, you can create that effect by choosing a light color for the relationship and showing the edge’s arrowheads. Select the color using the list in the legend, and in _Project>Settings_ make sure the _Hide Arrow_ checkbox is not selected.

### What is Ego Depth in the Geometric Layout options?

The Ego Depth layout lets you select a node (or nodes) as centers and arrange its neighbors in either ring or tree patterns according to their separation from the center. You set a Depth value (for example, 3) to disregard any node more than that many edges away from the center node.

### Does geo-location mapping support using a custom map server?

Yes. Go to _Map>Settings_ to display the _Map Settings_ dialog where you can add your own map server.

### Where are the views created in Project>Data saved? Is there any limitation on saving views?

Data _Views_ are saved to the GraphXR server (and from there, can be shared with another user of your project). _Save GXRF_, _Save CS_V, export _Snapshots_, and export for _Mappings_ saves files to your local system (for example, MacOS Downloads folder). Files saved locally display at the bottom of the Chrome browser window. You can save up to 10 data _Views_, and up to 10 _Snapshots_ in a downloaded _Snapshot_ archive.

## Navigating Graph Data

### How can I move an entire selection of nodes at once?

Select the data, hold down the “5” key and mouse drag. Many other [keyboard shortcuts](./user-guides/navigating-and-selecting-graph-data/shortcut-keys-reference) for navigating data in the graph space are also available.

## GraphXR with VR/XR

### What is the difference between 2D and XR?

XR requires a VR headset and a PC with a dedicated GPU. The 2D mode enables you to work with a 3D space that’s projected onto a 2D screen (desktop, laptop, etc.).

## Learning GraphXR

### Is there a course to learn Graphxr?

The "[How to GraphXR](https://helpcenter.kineviz.com/learning-center/HC/how-to-graphxr)" hands-on tutorial series provides an overview of how to use key GraphXR functionality. We also offer personalized training to our Enterprise users.

### Where can we find help or blogs to make our "visualizations"?

The GraphXR User Gallery and Blog contain many examples for reference. We are also happy to work directly with you to address your specific needs
