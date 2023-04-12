GraphXR’s Visual Query Builder Extension provides no-code visual building blocks to create and run a valid _**Cypher Query**_ that returns nodes and edges from a Neo4j graph database connected to your GraphXR project. You connect blocks representing categories, relationships, and property values to form the graph pattern you want, and Visual Query Builder automatically generates a valid Cypher query and lets you run it.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_01_VQBMovie1320.png?api=v2)

Once a query has returned data, _**In-Memory Search**_ is available to find and select patterns in data already in the project’s graph space.

Although you can enter and run any Cypher query in GraphXR’s _**Query**_ panel, building competence in Cypher can be time-consuming. With Visual Query Builder, you can start using Cypher’s most useful graph pattern-matching functions right away, and this lets you explore your graph data much more quickly and easily.

If you’re new to Neo4j, you can [download Neo4j Desktop](https://neo4j.com/download/) and [follow the steps](https://neo4j.com/blog/graphxr-graph-app-neo4j-desktop/) to add GraphXR as a graph app onto Neo4j.

## About Cypher and pattern matching

Cypher, developed by Neo4j, is a powerful query language for selecting, presenting, and transforming graph data, and for managing the database. Visual Query Builder focuses on Cypher’s capability to match patterns and return data as nodes and edges. This type of Cypher query is generally structured as follows:

|     |     |
| --- | --- |
| **MATCH** **(a:Category) - \[b: RELATIONSHIP\] -> (c:Category) …etc.** | Match (i.e., find) specified graph patterns, usually based on category labels and relationship labels and directions. Multiple MATCH statements can be used to query for branched patterns. _**Note:** Property values can be specified in a MATCH statement; typically a WHERE cause is used instead._ |
| **WHERE** **a.PropertyName1 = Value AND …etc.** | Qualifiers based on property values in the specified nodes and edges. To match values, Visual Query Builder provides _**Equals**_, _**Greater Than**_, _**Less Than**_, _**Like**_, or _**In**_ operators. |
| **RETURN \* LIMIT 25** | Return matching nodes and edges, optionally limiting the number of nodes returned. |

The following basic Cypher queries on the Neo4j open source Movie database finds patterns where one _Person_ has _ACTED\_IN_ a _Movie_, and returns the first 200 found:

```
MATCH (a:Person)-[b:ACTED_IN]-(c:Movie) RETURN * LIMIT 200
```

In Visual Query Builder the pattern is built using _Person_ and _Movie_ _**Category**_ blocks connected through sockets to an _ACTED\_IN **Relationship**_ block:

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_02_VQBMovieCypher720.png?api=v2)

If we want only _Person_ nodes whose _name_ property value includes “Tom”, we simply add a **WHERE** statement to specify that the value includes that text string. Any additional property values that exist in the matched categories, such as those for gender, age, and so on, can also be specified.

```
MATCH (a:Person)-[b:ACTED_IN]-(e:Movie) MATCH (a:Person)-[d:DIRECTED]-(e:Movie) WHERE a.name =~ ".Tom." RETURN * LIMIT 25
```

In Visual Query Builder, a pattern with specified property values includes one or more _**Property**_ blocks, each connected to the appropriate _**Category**_ block through property sockets, as shown below:

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_03_VQBMovieCypherProps720.png?api=v2)

Once you start using Visual Query Builder, you may be interested in learning how to extend or modify queries using additional Cypher capabilities not provided in Visual Query Builder. These include specifying ranges of values, returning property data as tables or lists, merging or parsing data, creating new nodes and edges, and managing and tuning query performance. Extensive learning resources for Cypher are freely available from Neo4j, and include: 

*   [Cypher Classroom training](https://neo4j.com/events/world/training/)
    
*   [Cypher Online training](https://neo4j.com/graphacademy/online-training/introduction-to-neo4j-40/)
    
*   [Hands-on in Sandbox guides](https://neo4j.com/sandbox/?ref=developer-cypher) (use command `:play cypher`)
    

Note also that you can copy Visual Queries to the clipboard, then edit and run them through GraphXR’s _**Query**_ panel and _**Cypher**_ tab.

## Building a visual Cypher query

Visual Query Builder provides a workspace and building blocks where you can build and run a Cypher query (or an In-Memory Search) for graph patterns based on categories, relationships, and their properties. You can:

*   Build and run a Cypher query:
    
    *   Click a _**Category**_, _**Relationship**_, or _**Property**_ building block to add it to the workspace, select its available specifications, and connect the building blocks using the provided sockets.  
        You can query for patterns in just one category of nodes, or one that links any number of categories and directed relationships.
        
    *   Click the _**Cypher Query**_ block at any time to see the query being built. In its _**Limit**_ field, you can edit the number of nodes to return. When the query id built, click its run arrow to run the query.
        
    *   Modify an existing query.
        
*   Use _**In Memory Search**_ to find and highlight subgraphs in the returned data.
    
*   Export and import visual queries as JSON files.
    

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_04_VQBInterface1320.png?api=v2)

We’ll build visual queries on the Neo4j _Movies_ database, which is available through the GraphXR demo project _VQB Movies_. It includes _Person_, _Movie_, and _Distributor_ categories, linked by relationships including _ACTED\_IN_, _DIRECTED_, _REVIEWED_, and so on.

To explore the Movie data, you can log in, go to the _**Project**_ panel and _**Data**_ tab, and load a saved data view.

A simple pattern is one that looks for specific nodes of only one category. The following example shows a query for _Person_ nodes whose _name_ property includes “Tom”.

**To build a visual query on a single category:**

1.  Log in to GraphXR, and click to open the _VQB Movies_ Demo project.
    
2.  In the _**Projects**_ panel and _**Extensions**_ tab select _**Visual Query Builder**_ from the dropdown menu.
    
3.  Click the _**Cypher Query**_ block to add it to the workspace and view the query as it’s being built.  
    **NOTE:** You can add the _**Cypher Query**_ block at any time.
    
4.  Click a _**Category**_ block to add it to the workspace, click its settings icon, and select the _Person_ label. We’re going to query for a specific name, so click its _name_ property and click _**OK**_.
    
5.  Now click to add a _**Property**_ bock. We’ll use it to specify the _name_ of a person we want (e.g. “Tom”). Click and drag to connect its socket to the _name_ socket on the _Person_ block.
    
6.  On the _**Property**_ block, select _**Like**_ from the dropdown menu, and enter _Tom._
    
7.  Click the run arrow on the _**Cypher Query**_ block.  
    The four matching _Person_ nodes are returned to the graph space.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_05_VQBPersonOnly1320.png?api=v2)

A more complicated pattern can specify several categories and their properties, as well as relationships of interest. The following example shows a query for _Person_ nodes with a _name_ that includes “Tom”, who _ACTED\_IN_ a _Movie_ _released_ after 1990.

**To build a visual query for category and relationship patterns:**

1.  Open Visual Query Builder, and click the _**Cypher Query**_ block to add it to the workspace and view the query as it’s being built.  
    **NOTE:** You can add the _**Cypher Query**_ block at any time.
    
2.  Click two category blocks and a relationship block to add them to the workspace.
    
3.  Click the settings icons on the category blocks and set them as follows:  
    \- _Person_, with the _name_ property selected, then click _**OK**_.  
    \- _Movie_, with the _released_ property selected, then click _**OK**._  
    **NOTE:** If you are starting from the previous simple query, just add one more category block.
    
4.  Click the settings icon on the relationship block, and set it to _ACTED\_IN_.
    
5.  Click and drag between the white sockets to connect the category and relationship blocks as shown below:
    
6.  Click to add two _**Property**_ blocks, and click and drag to connect their property sockets as follows:  
    \- To the _name_ socket on the _Person_ category block (if not already connected). Then select _**Like**_ from the dropdown menu and enter _Tom_.  
    \- To the _released_ socket on the _Movie_ category block. Then select _**Greater than**_ from the dropdown menu, and enter _1990._
    
7.  Click the run icon on the Cypher query block.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_06_VQBPersonMovie1320.png?api=v2)

If the query does not load, or returns unexpected results, see [Troubleshooting](#Troubleshooting).

## Saving and sharing a Visual Query

You can save and share a visual query by exporting (or importing) it as a .JSON file. When you re-enter a project after exiting, you can then re-load the visual query into Visual Query Builder. This also lets you share a visual query with another user.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_17_SaveExport960.png?api=v2)

_**To save a visual query:**_

1.  Click the _**Export**_ icon in the building blocks list above the _**Category**_ building block.
    
2.  A .JSON file is exported to your system’s Downloads, and appears along the bottom of your Chrome browser.
    

_**To import a visual query:**_

1.  Open the Visual Query Builder, and in the building blocks panel, click the _**Import**_ icon at the top left above the _**Category**_ building block.
    
2.  Navigate to the .JSON file (typically, in your Downloads), select it and click _**Open**_ to import it to the workspace.
    

You can click the document icon at the lower right of the _**Cypher Query**_ block to copy the Cypher query to the clipboard. Unlike .JSON export, this copies the Cypher query but does not preserve the visual building blocks. This can still be useful if you want to edit or extend a query quickly in GraphXR. From the clipboard, you can paste the query (Ctrl+V)into GraphXR’s _**Query>Cypher**_ panel. Click the plus ![(plus)](https://kineviz.atlassian.net/wiki/s/-852311106/6452/c59125bb5c2388a529366d586bf89888dfb47dce/_/images/icons/emoticons/add.png) icon to save the query before you edit it further.

## Editing a Visual Query

Once you’ve built and run a visual query you can continue to add and connect more building blocks, or remove blocks by dragging them to the _**Trash**_ can icon at the lower right. The query in the _**Cypher Query**_ block will be updated with the new specifications.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_07_VQBClearQuery960R.png?api=v2)

To delete an entire query and start over with an empty workspace, click the _**Clear**_ icon located to the right of the _**Export**_ icon at the top of the building blocks panel.

## Using In Memory Search

Once graph data have been returned to GraphXR, you can also find and select subgraphs. Simply build (or re-use) a visual query and use the _**In Memory Search**_ block, instead of the _**Cypher Query**_ block. The following examples use graph databases developed by Kineviz for social media research.

Subgraphs can be single nodes, as in this query for any User with a _screen\_name_ like “Jeff”…

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_08_InMemoryJeffs720R.png?api=v2)

… or connected nodes, as in this query for influential Users connected through a specific RETWEETED relationship:

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_09_InMemorySelectAll720R.png?api=v2)

The nodes returned to the search list are labeled with the caption you set in the GraphXR _**Project>Category**_ panel. This may be (but isn’t necessarily) the property name you used in the query pattern. You can change the caption at any time, which can be useful for searching for additional property values in the returned data.

In the following example a node for each county in the United States has been imported to the GraphXR project space. We can build a query for the counties in a particular state as follows

**To run an In-Memory Search:**

1.  In this example a node for each county in the United States has been imported to the GraphXR project space. We can build a query for the counties in a particular state as follows:
    
2.  Click the _**In-Memory Search**_ block to add it to the workspace. Increase the value in the _**Limit**_ field to return more than the default 5 subgraphs.
    
3.  Click the **run** arrow at the top right of the block.  
    A list of matching nodes is displayed.
    
4.  Click an item on the list to select the node or pattern in the graph space. Or, click _**Select All**_ to select all the patterns on the list.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_10_InMemoryCounties720R.png?api=v2)
    
    With the data selected, other GraphXR functions can be used. For example, you can _**Tag**_ a selection, or use _**Inverse**_ to select and then temporarily _**Hide**_ or _**Delete**_ all the other data.
    

## Visual Queries for Twitter Research

Additional example visual queries have been built on data collected for the Kineviz research project _Elections 2020_. In addition to Twitter _Users_, this Neo4j graph database includes their _Tweets_ and the _Media_ tweeted. _RETWEETED_ relationships were created between _Users_ for several months of the 2020 US election cycle. Additional properties generated using machine learning include _User_ properties such as gender, age, race, language used, and the probability that the user is a bot, as well as Tweet properties such as flags for fake news and hate speech.

Key examples are illustrated below. Visit our [Visual Query Builder video](https://kineviz.atlassian.net/wiki/spaces/TES/pages/1387495503/Visual+Query+Builder%3A+No-code+Cypher+Queries) to see the examples in action.

### **Query on Influential Twitter Users**

This query is for influential Twitter users who are probably bots and who have retweeted to other influential users in a particular month.

*   In the Neo4j graph data connection is through relationships of the form _RETWEETED\_YYYY\_MM_.
    
*   Influential bot users are those with a _followers\_count_ property value greater than 20,000 and a _boto\_prob_ (i.e. calculated probability) of 0.90 or greater.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_11_TwitterChain960R.png?api=v2)

### **Query for a branched pattern - Users who send Video Tweets**

This query builds on our query for influential bot-like users, but specifies only those who have sent videos along with their tweets. The pattern available in the graph database requires that we also query for _Tweet_ nodes and connected _Media_ nodes. This can be done by adding another MATCH statement to the query.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_12_TwitterBranch960R.png?api=v2)

### **Query for a looped pattern - Users retweeting in a loop.**

We can query for a fairly simple pattern in which a chain of _Users_ retweeting to one another within the same month loops back to the first _User_. In GraphXR we can set the _boto\_prob_ property as the caption for _User_ nodes, to see if this kind of circular messaging appears to be especially bot-like.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_13_TwitterLoop960R.png?api=v2)

You can modify the query at any time by selecting properties from the _**Category**_ blocks and adding _**Property**_ selectors. This lets you quickly explore and then refine your queries to focus on specific data. For example, the above query could be modified to return only influential users, or users who have sent messages that include specific types of content.

### **Query for linkage between nodes**

Since graph data is often used to model complex connections (for example between people or ideas, time series, or spatial patterns), it can be interesting focus on chains of connected nodes. We can query for such a pattern by setting a _**length**_ in the settings of a _**Relationship**_ block.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_14_TwitterRelLengthSelector960R.png?api=v2)

The _**length**_ setting provides a dropdown menu and text boxes for entering a number:

*   _**equal**_. Enter a whole number. Returns nodes connected via up to that number of the specified edge. (e.g. enter '3' to return nodes with 1, 2, or 3 of the specified connections).
    
*   _**greater than**_. Enter a whole number. Returns nodes with that number or greater of connections via the specified edge. (e.g. enter '3' to return nodes with 3 or more of the specified connections)
    
*   _**between**_ - Two text boxes appear. Enter the lower and higher number to return nodes with that range of the specified edges. (e.g. enter 2-5 to return nodes with 2, 3, 4, or 5 of the specified edge.)
    

On the Twitter data, we could query for _Users_ who retweeted to one another during September 2020 (i.e., with the relationship _RETWEETED\_2020\_09)_ and are 3 to 5 hops to other _Users_ via that relationship.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_15_TwitterRelBetween960R.png?api=v2)

The Cypher query now includes the length in the MATCH statement as a property of the relationship, as follows: MATCH (a:User)-\[b:RETWEETED\_2020\_09\*3..5\]->(c:User)

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538510/10_01_16_TwitterRelQuery1080R.png?api=v2)

## Visual Query Builder Quick Reference

|     |     |
| --- | --- |
| **To…** | **Action** |
| Add a block to the workspace. | Click the block. |
| Move a block. | Click and drag. |
| Connect a block. | Click a socket and drag the line to another socket. |
| Disconnect a block. | Click the socket a line is connected TO, and drag the line off. |
| Delete a block or query. | Click and drag to the Trash can. |
| Clear the workspace of all blocks and queries. | Click the _**Clear**_ (brush) icon at the upper left side of the block selector panel. |
| Set a _**Category**_ or _**Relationship**_ label. | Click the settings icon on the _**Category**_ or _**Relationship**_ block and select a label. |
| Set a _**Relationship**_ direction. | Click the settings icon on a _**Relationship**_ block, click the _**Advanced**_ dropdown, then the _**Select Direction**_ menu and select _**Right**_. |
| Specify a _**Property**_ value. | Click the dropdown menu on the _**Property**_ block to select an operator (_**Equals**_, _**Greater Than**_, _**Less Than**_, _**Like**_, or _**In**_) and enter the value in the text box. |
| Run a visual Cypher query. | Click the **run** arrow on the _**Cypher Query**_ block. |
| Run an In-Memory Search | After running a visual query in the workspace, click the _**In-Memory Search**_ block and its **run** arrow. |
| Export a visual query. | Click the _**Export**_ icon at the top left of the block selector panel. |
| Import a visual query. | Click the _**Import**_ icon at the top left of the block selector panel, navigate to the .JSON file and click to open. |
| Zoom in or out on the workspace. | Use the mouse wheel. |
| Reposition the entire visual query. | Click on the workspace and drag. |
| Dismiss the block selector panel. | Click the X icon at the upper right of the panel. |
| Display Visual Query Builder as a split screen or a full screen. | Click the _**Split Screen**_ or _**Full Screen**_ icon at the upper right of the _**Extensions**_ panel. While building a query, you can click the split screen or full screen icons at any time to expand the workspace. |
| Display Visual Query Builder in a separate window. | Click the _**Airplane**_ icon at the upper right of the _**Extensions**_ panel. The query you are building will persist, and will also persist if you close the separate window and re-open Visual Query Builder in the _**Extensions**_ panel. |

## Troubleshooting Visual Queries

|     |     |
| --- | --- |
| **Issue** | **Possible Resolution** |
| An error message indicates that a connection to the server was not established. | Most likely, the Cypher query is not well-formed. Check that you’ve actually connected the blocks, entered valid property values, and that the query has a valid number for the LIMIT. |
| The query loads but does not return any results. | If a query does not return results, but you know that matching data exist in the database, verify that entries for property values are spelled correctly, and that you have chosen the correct **Property** operator:<br><br>**• Greater Than** and **Less Than** operators accept only numerical values<br><br>**• Like** accepts text strings.<br><br>**• Equals** and **In** accepts either text strings or numerical values. The values will be matched exactly. **Equals** accepts a single value. For **In**, you can enter a list of comma-separated values (no leading space, no quotes). Spaces after a comma are ignored (i.e. _right,left,up,down_ returns the same results as _right, left, up, down_). |

While you can specify many patterns using Visual Query Builder, some Cypher pattern matching functionality is not currently implemented, including:

*   Using OR (|) syntax in MATCH or WHERE statements.
    
*   The _path_ variable in a MATCH statement that refers to an entire pattern. In Cypher, this lets you refer to a complex set of connections as a single entity, and then apply property specifications to filter only those paths that qualify.
    
*   Ranges of values in a WHERE statement (for example: a.property > 100 < 1000). Currently there is one socket for each property value, for which one operator can be selected.
    

To run any valid Cypher query in GraphXR, you can enter it in the _**Cypher**_ tab of the _**Query**_ panel. Note however, that query capabilities such as CREATE or MERGE are only available if the correct user privileges are set in Neo4j.