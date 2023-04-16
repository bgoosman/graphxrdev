You can pull data directly from a Neo4j graph database connected to a GraphXR project. The data will include its current schema, that is, its defined categories, relationships, and properties. You can pull data in the following ways:

*   Enter and run a Cypher query in the _**Cypher**_ tab of the _**Query**_ panel.
    
    ![](/02_03_01_CypherQuery720.png)
*   Use the search bar to enter a full text keyword search of indexed node properties and pull the resulting nodes from the database.
    
    ![](/01_04_11a_SearchDBGraph.png)
*   Pull nodes or edges 25 at a time by selecting a category or relationship in the respective tab in the _**Project**_ panel and clicking _**Pull**_.
    
*   Use _**Expand**_ in the context toolbar to pull data connected by specified relationships to selected nodes in the graph.
    

GraphXR also includes the [Visual Query Builder](../using-graphxr-extensions/using-visual-query-builder) extension for no-code Cypher queries using visual building blocks. This lets you access Cypher’s most commonly used pattern matching capabilities without needing to learn Cypher code.

![](/02_03_02_VQB720.png)

## Import using a Cypher query

Cypher is a query language for graph data developed in tandem with Neo4j. It has become a standard for querying graph databases. Basically, a Cypher query returns graph data that match a specified graph pattern. Cypher also includes complex selection, transformation, and graph database maintenance functions.

For information about Neo4j and the Cypher query language, refer to Neo4j’s [For Beginners - Cypher Query language](https://neo4j.com/developer/cypher/) and the [Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/introduction/).

In GraphXR, the _**Cypher**_ tab of the _**Query**_ panel lets you:

*   Enter a Cypher query and click the _play_ icon on the right to run it.
    
*   Save a query by clicking the _**+**_ (plus) icon. The saved query appears on a drop down menu.
    
*   Run a saved query by selecting it on the drop down and clicking the _play_ icon.
    
    ![](/02_03_03_CypherQuery520.png)

All GraphXR projects include a basic query that pulls the first 100 connected nodes from the database:

```
MATCH (n)-[r]-(m) RETURN * LIMIT 100
```

This query will **MATCH** any pattern of nodes **n** and **m** connected by any relationship **r**, and **RETURN** the first **100** found. The **LIMIT** is set because this query will likely return a large amount of data.

You can also limit the number of returns in the _**Maximum return records allowed**_ text box.

A more specific, but still very basic query for categories and relationships of interest is the following query for Game of Thrones data with the pattern _(Characters)-\[belongs\_to\]-(House)_:

```
MATCH (c:Characters)-[r:belongs_to]-(h:House) RETURN *
```

This query will **MATCH** any pattern of _Characters_ and _House_ nodes connected by a _belongs\_to_ relationship and **RETURN** all the matching graph patterns. The variables **c**, **r**, and **h** are used here to simplify further query specifications.

**To import data using a Cypher query:**

1.  Click the _**Query**_ panel icon. It opens with the _**Cypher**_ tab displayed.
    
2.  Either enter a Cypher query or select a saved query using the drop down arrow.
    
3.  Click the _**Load Inner Relationship**_ checkbox to include the relationships between the nodes pulled by a query.
    
4.  Click the _play_ icon to query the connected database.  
    The data appear in the graph space as nodes and their connecting edges.
    
    ![](/02_03_04_CypherQueryRun.png)
    
5.  Click the _**+**_ (plus) icon to save a new query or to save one that you've edited.
    

## Pull data by full-text keyword search

You can use the search field at the top right corner of the graph space to import data using full-text keyword search. The icon at the right of the search field lets you toggle between _**Searching from Database**_ or _**Searching from Graph**_, to search the data already in the graph space.

To search a Neo4j database, the search terms must first be indexed in the database. To review and edit search terms, click the _**Config Search Index**_ icon to the right of the database icon.

**To configure the search index:**

1.  Click the gear icon next to the search bar to display the the _**Database Text Search Index Configuration**_ dialog.
    
    ![](/02_03_05a_SearchConfigIcon.png)
    
    The dialog lists the categories in the connected database, and their properties.
    
    ![](/02_03_05b_SearchConfig.png)
2.  Click _**Refresh Property**_ to make sure all the properties in the database are listed.
    
3.  Select properties you want to index. You can either  
    Click the _**All Category Properties**_ checkbox to select all properties.  
    OR  
    Click checkboxes to index selected properties.
    
4.  Click _**Submit Index Task**_ to index the database search terms.  
    A message displays indicating that the indexing task was successful.
    
5.  Click the **X** at the upper right to close the dialog.
    

**To pull data using full-text keyword search:**

1.  Enter one or more search terms in the search bar at the top left corner of the graph space, and press return. You can search for exact indexed property values or partial text strings.
    
    *   Use asterisks **\*** to define a search for partial property values (e.g. **Jo\*** for **Jo**hn, **Jo**nathan, **Jo**sephine). Position asterisks to search for values that start with, end with, or contain the specified string (e.g. **\*Jo**, **Jo\***, or **\*Jo\***).
        
    *   Terms separated by a _**space**_ use OR logic. Nodes with indexed property values matching any one of the terms will be returned. (e.g. **Inspector Sergeant** for nodes that include an exact property value of **Inspector** OR **Sergeant**).
        
    *   Terms separated by the word _**AND**_ return only nodes with indexed property values that match all terms. (e.g. **Inspector AND D\*** for nodes with an exact property value of **Inspector**, and a property value that starts with **D** (case-insensitive).  
        Search results are listed beneath the search bar for each category.  
        Nodes matching the search keyword appear below the search field, listed by category in alphabetical order.
        
        ![](/02_03_05c_KeywordSearch.png)
2.  Click the arrow to the left of a category to view individual nodes. If more than five nodes are returned for a category, use the arrow selector at the right to navigate through the list and locate nodes you want to import.
    
    ![](/02_03_05d_ImportSearchedNodes.png)
3.  Click a list item to add the node to the graph space.  
    OR  
    Click the _**+**_ icon to the right of the category label to import all the matching nodes of that category.  
    **TIP:** When you add data, the nodes remain selected in the graph space until you add more data. If you want to immediately remove the data you just imported, press delete while the nodes are still selected.
    
4.  Click the _**x**_ in the search bar to clear the search and return to the graph space.
    

**Searching from the graph vs Searching from the database**  
Once data are imported, you can click the toggle to the right of the search bar to switch to a search of the graph. Searching imported data in the graph can help quickly narrow down a search, since matching nodes are actively highlighted as you enter search terms.

However, a graph search works differently than a database search in the following ways:

*   Partial text is entered without asterisks.
    
*   AND logic is not recognized. (Any space between search terms is still recognized as OR logic.)
    

![](/02_03_05e_SearchGraphNote.png)

## Pull data by Category or Relationship

You can pull 25 nodes at a time from a category or relationship that appears in the _**Category**_ or _**Relationship**_ tab of the _**Project**_ panel.

This may be useful for initial data exploration; however a query provides more control of sampling.

**To pull data by Category:**

1.  Click the _**Project**_ panel icon and _**Category**_ tab.
    
2.  Click one of the _**Category**_ items to select it.
    
3.  Click _**Pull**_ to pull 25 nodes associated with that category, and any edges that connect the nodes.
    
    ![](/02_03_06_PullCategory720.png)
4.  For added samples, click again, as many times as you want.
    

**To pull data by Relationship:**

1.  Click the _**Project**_ panel icon and _**Relationship**_ tab.
    
2.  Click one of the _**Relationship**_ items to select it.
    
3.  Click _**Pull**_ to pull 25 edges associated with that relationship, the connected nodes, and all the other edges connected to those nodes.
    
    ![](/02_03_07_PullRelationship1320.png)
4.  For added samples, click again, as many times as you want.
    

## Pull data using Expand

The _**Expand**_ icon in the context toolbar menu lets you pull additional data which is connected to a selected node or group of nodes in the project the graph space.

**To pull data using Expand:**

1.  Select one or more nodes in the graph space, then click the _**Expand**_ icon to display the _**Expand with relationships**_ dialog.
    
    ![](/02_03_08_ExpandSelect1320.png)
2.  Click the checkbox next to a relationship name to pull nodes and edges connected by that relationship.  
    OR  
    Click _**All**_ to pull nodes and edges with all relationships to the selected nodes. To limit the number of nodes, enter a number in the _**Limit**_ field.
    
3.  Set additional options for expanding the graph:
    
    ![](/02_03_09_ExpandDialog720.png)
    
    \- Click the _**Only among selected nodes**_ checkbox to expand relationships only for the selected nodes.  
    \- Specify _**Directional**_ relationships using the dropdown menu. You can choose All directions, only nodes connected by relationships _**From**_ the selected nodes, _**To**_ the selected nodes, or only those with a _**Bidirectional**_ relationship.  
    \- Increase _**Repeat relationship times**_, which automatically repeats the expand operation, enabling you to pull in the limit of 1000 edges repeatedly.
    
4.  Click the _**Expand**_ button.
    
    ![](/02_03_10_ExpandSpecified720.png)
    
    An _**Expand Next Page**_ dialog indicates the number of items successfully expanded. You can  
    \- Click _**Expand More**_ to pull the next 1000 connected items. This lets you pull in all the data in the database that have the specified connections without needing to return to the _**Expand with relationships**_ dialog.  
    \- Click _**Cancel**_ (or simply click the **X** at the upper right) to close the dialog.
    
    ![](/02_03_11_ExpandMore720.png)
    
    Additional nodes and their relationships are pulled into the graph. In the example below, _**All**_ relationships were selected, and additional nodes with edges connected to the selected _**Character**_ and _**House**_ nodes were pulled from the Neo4j database. Once no additional nodes are connected to the selected nodes by the specified relationships, a message displays that all relationships are expanded.
    
    ![](/02_03_12_ExpandResult1320.png)