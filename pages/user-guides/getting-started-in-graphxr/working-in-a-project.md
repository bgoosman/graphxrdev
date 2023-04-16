A GraphXR project represents a 3-dimensional, functionally infinite space that includes the full capability to navigate, edit, and visualize graph data. When you first open a project, its space is empty. You can:

*   [Import](../importing-saving-and-exporting-graph-data/importing-saving-and-exporting-graph-data) data by drag and drop, data mapping, or query.
    
*   Navigate, inspect, search, select, filter, add and delete, and edit data.
    
*   Create, refine, or extend a graph data model directly in GraphXR.
    
*   Run widely used graph [algorithms](../running-graph-algorithms) such as _**Path Finding**_ and _**Centrality**_.
    
*   Intuitively visualize data in the 3D space using:
    
    *   Customized [layouts](../working-with-layouts/using-geometric-layouts.md), including Parametric 2D or 3D scatter plots, Geometric _**Line**_, _**Circle**_, _**Grid**_, _**Cube**,_ and _**Spiral**_ layouts, Tree layouts, and more.
        
    *   [Filter](../navigating-and-selecting-graph-data/filtering-graph-data.md) or distribute nodes on date, time, and other numerical properties.
        
    *   [Geospatial maps](../using-geospatial-maps.md), for nodes with latitude and longitude properties.
        
*   [Save and share](../importing-saving-and-exporting-graph-data/saving-and-sharing-data-views.md) graph data to data _**Views**_, _**Snapshots**_, _**GXRF**_ or _**CSV**_ archives, or to a connected Neo4j database. You can also save and export a data mapping as a JSON file.
    

On the desktop, a set of menus and controls provide the tools you’ll need to work with graph data:

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_01_Orientation1320.png?api=v2)

*   A _**Main Menu**_ along the left vertical edge of the project space, to open panels for importing, transforming, and displaying data.
    
*   A _**Search**_ bar at the top left, to perform full-text search on either indexed data in a connected Neo4j database, or data in the project space.
    
*   A _**Legend**_, along the top right side of the space, to select nodes by category, tag, or property, and edges by relationship.
    
*   A context _**Toolbar**_, along the bottom of the space, to display the tools available to use on the data currently present and/or selected in the graph space.
    
*   A set of _**GUI Navigation**_ controls, at the bottom right, to enable 3D navigation within the graph space. GraphXR can also be used with WebX-connected virtual reality (VR); these controls let you emulate the VR experience to some degree on the desktop.
    

## Main menu

The **Main menu** on the left edge of the graph space gives access to menu panels. Most panels are further divided into tabs. Simply click an icon to display its panel.

Mouse over an icon to display its label, or click the _**Main menu**_ icon at the top left to show or hide the icon labels.

The _**Main**_ menu panels are:

*   _**Project**_ panel, to review graph entities, set preferences, import and export data, and access extensions.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_02_ProjectPanel720.png?api=v2)
    
    Tabs include:
    
    *   _**Category**_ and _**Relationship**_ tabs, to enable you to pull specific nodes or edges from the database and set preferences for their display in the graph space.
        
    *   _**Settings**_ tab, to control the size scale, display mode, and captioning of nodes and edges, to set _**2D Mode**_, show or hide the _**Snapshot**_ dialog, switch to a different _**Neo4j Database**_, and modify the project _**UI Configuration**_.
        
    *   _**Data**_ tab, to import data in standard formats such as CSV and GXRF, save data as a CSV archive, GXRF, or Neo4j database, and to save GXRF data views to the server.
        
    *   _**Extensions**_ tab, to access standard or custom extensions which may be available.
        
*   _**Query**_ panel, to enter and save Cypher queries on a Neo4j database, and to run queries on a SQL database, CSV file, or a JSON or Gremlin environment. The _**SQL**_ and _**CSV**_ tabs include the _**Mapping Editor**_ to create mappings that transform data in a flat CSV file or SQL table into a specified graph model.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_03_QueryPanel720.png?api=v2)
*   _**Transform**_ panel, to transform graph data directly in GraphXR.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_04_TransformPanel720.png?api=v2)
    
    This powerful suite of data operators includes:
    
    *   _**f(x)**_, to execute functions similar to formulas in Excel and SQL, and functions in MapReduce frameworks. Use this to run mathematical formulas that transform one column of data to another, or that change data from one format to another.
        
    *   _**Extract**_, to extract properties from existing nodes into new nodes and relationships, creating a new category and relationship in the process.
        
    *   _**Aggregate**_, to collect properties from a starting node's neighboring edges and nodes, apply a calculation, and write the result back to the starting node as a property.
        
    *   _**Merge**_, to combine two nodes with matching properties into a single node.
        
    *   _**Link**_, to connect nodes with the same property values. This can be used to bring two different data sets together, and also to draw explicit connections among nodes of the same type.
        
    *   _**Shortcut**_, to connect two nodes that share a common neighbor with a new link. You can use this to simplify the graph.
        
    *   _**Connector**_, to provide access to external applications for enhancing or transforming data.
        
*   _**Table**_ panel, to view data by _Category_ or _Relationship_ in a searchable tabular format. _**Enhanced Tables**_ let you rename categories and relationships on the fly, select, sort, edit, reformat, and then export the data in the edited table.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_05_TablePanel720.png?api=v2)
*   _**Layout**_ panel, to apply _**Force**_, _**Parametric**_,_**Geometric**_, and _**Tree**_ layouts to all or part of your data.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_06_LayoutPanel720.png?api=v2)
*   _**Filter**_ panel, to filter data by _Node_ or _Edge_ properties using multiple composable filters.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_07_FilterPanel720.png?api=v2)
*   _**Algorithm**_ panel, to run _**Path Finding**_, _**Centrality**_, and _**Community Detection**_ graph algorithms and add the result to nodes or edges as a property value.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_08_AlgorithmPanel720.png?api=v2)
*   _**Map**_ panel, to work with geospatial data on a world map. Nodes with latitude and longitude coordinates are automatically dropped onto the map.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_09_MapPanel720.png?api=v2)

Additional functions provided at bottom left of the project space are:

*   _**Logout**_, to log out of GraphXR_**.**_
    
*   _**Home**_, to return to the Projects page.
    
*   _**Shortcut**_, to display keyboard and mouse shortcuts available for efficient navigation and data selection on the desktop. For details, see [Shortcut Keys Reference](../navigating-and-selecting-graph-data/shortcut-keys-reference.md).
    
*   _**About**_, for GraphXR version information.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_10_ShortcutKey240.png?api=v2)

## Search Bar

The search bar at the top left lets you perform full-text search on the indexed property data in a connected Neo4j database, and import the resulting nodes to the graph. You can also search the data already in the graph instead. Indexed properties are set using the _**Search Index Configuration**_ dialog.

Search results are listed by category below the search bar. Click a single node or a group of nodes in the search results to import the data from the database, or to select nodes from the search results which are already in the project space.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_11a_SearchDBGraph.png?api=v2)

## Legend

A legend at the top right corner of the project space lets you review and select data by _**Category**_, _**Relationship**_, _**Tag**_, or _**Property**_.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_11_Legend_Category720.png?api=v2)

Select _**Category**_, _**Tag**_, or _**Property**_ to display a list of categories, tags, or properties present in the data, and the number of currently selected and total nodes of each. Likewise, select _**Relationship**_ to display a list of the relationships in the data, and the number of currently selected and total edges for each. When you display categories and relationships at the same time, the relationships are listed below the categories. You can:

*   Monitor how many nodes of each category, tag, property (or edges of each relationship) are currently selected. Adding or subtracting from a selection immediately updates the numbers.
    
*   Click a list item to select all the nodes for a category, tag, or property, or all the edges for a relationship. Use _ctrl-left click_ to select multiple items.
    
*   Click the colored line or dot next to a list item to select a different color for a relationship, tag, or property, or choose an icon for a category.
    

For details on selecting colors and icons, see [Selecting Colors and Labels](../navigating-and-selecting-graph-data/shortcut-keys-reference.md).

## Context Toolbar

The context toolbar at the bottom edge of the graph space displays icons for actions available for the data currently present and/or selected in the graph space.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_12_ContextToolbarLabeled_15.png?api=v2)

Some tools are available only when you select more than one node or edge, and some only when you select a single node or a node that has an associated url and weblink property.

*   Before you load any data, the context menu items are:
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_13_ContextNoData1080.png?api=v2)
    *   _**Add Node**_. Displays a dialog to define and add a single node.
        
    *   _**Quick Info**_. Toggles between turning on and off _**Quick Info**_ rollovers for nodes and edges.
        
    *   _**Disable/Enable Force Layout.**_ Toggles between turning on and off a force directed physics layout.
        
*   Once you load or create at least one node, more tool icons appear.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_14_ContextWithData1440.png?api=v2)
    *   _**Select Visible Nodes**_. Selects all nodes currently visible in the graph space (i.e. those not hidden using _**Hide Selection**_ or by de-selecting the _**Visible**_ checkbox for a category or relationship in the **Project** panel).
        
    *   _**Take Screenshot.**_ Takes a _.png_ screenshot of the graph space including the legend, but excluding an open panel, toolbar and GUI navigation controls.
        
    *   _**Center To**_. Zooms in on the center of the graph data if no nodes are selected, or the center of a group of selected nodes, or a single selected node.
        
    *   _**Fly Out**_. Zooms out to display all the graph data centered in the project space.
        
    *   _**Collect Nodes.**_ Collects nodes connected to selected nodes by only one edge, and places them in special collection nodes. The information panel for a collection lists the included nodes, and enables you to remove or add back nodes.
        
    *   _**Explode Collections.**_ Deletes selected collection nodes and restores the included nodes to the graph space.
        
    *   _**Quick Layout.**_ Displays a menu to lay out selected data in basic _**Line**_, _**Grid**_, _**Cube**_, _**Circle**_, _**Spiral**_, or _**Spring**_ layouts, and to create a hierarchical _**Tree**_ or _**Ring**_ layout around selected nodes.
        
    *   _**Add Node**_. Displays a dialog to define and add a single node.
        
    *   _**Add Edge**_. Displays a dialog to add edges between selected nodes, either with an existing relationship or by creating a new one.
        
    *   _**Clear**_. Removes all data from the graph space.
        
    *   _**Pin**_ or _**Release**_. Toggles between pinning nodes to a location in the space, or releasing nodes from being pinned. The badge on the icon shows how many nodes are currently pinned.
        
    *   _**Quick Info**_. Toggles between turning on or off _**Quick Info**_ rollovers for nodes and edges.
        
    *   _**Disable/Enable Force Layout**_. Toggles between turning on and off force directed physics layout.
        
*   When you select any _**set of nodes**_, you see additional icons that operate on selected data:
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_15_ContextSelHidden1440.png?api=v2)
    *   _**Information.**_ Opens an information window for the most recently selected single node or edge which shows detailed information about a node's Properties and Neighbors or a relationship’s Properties. If desired, you can add properties and their values in this window.
        
    *   _**Tag**_. Opens the _**Create Tag**_ dialog to tag any set of selected nodes.
        
    *   _**Delete.**_ Deletes selected nodes and edges.
        
    *   _**Expand**_. Opens the _**Expand with relationships**_ dialog to pull additional nodes from the database which are connected to the selected nodes. You can select any or all of the relationships that connect the nodes.
        
    *   _**Trace Neighbor**_. Displays a slider above the toolbar to display nodes connected through the number of steps you choose.
        
    *   _**Inverse**_. Selects all nodes not currently selected. The badge at the upper right of the icon shows how many nodes are currently selected.
        
    *   _**Un-Hide Selection.**_ Displays after you select and hide nodes. It restores all hidden nodes and edges to the graph space and de-selects them.
        
    *   _**Hide Selection**_. Hides selected nodes and edges temporarily.
        
*   When you select a _**single node**_, you see additional icons:
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_16_ContextSingle1440.png?api=v2)
    *   _**Image**_ and _**WebLink.**_ These two icons appear if an image and/or url is attached to a node. Select a node and click _**Image**_ to display a small image in the graph space close to its node, and click again to hide the image. Click _**WebLink**_ to open a browser window to a linked image or webpage_**.**_
        
    *   _**Information**_. Opens a floating information pane for a selected single node or edge. Its _**Properties**_ tab lists the properties of the node or edge. If desired, you can add properties and edit property values in this window. Its _**Neighbors**_ tab displays a count of nodes connected to the selected node through one edge, and a live graphic of the nodes and edges.
        
        ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_17_ContextProps1344.png?api=v2)
        

You can right-click to display a floating, scrollable context menu of the tools available for your current selection.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_18_ContextRtClickMenu1320.png?api=v2)

## GUI Navigation Controls

The GUI navigation panel at the bottom right of the graph space provides simulated Virtual Reality (VR) controls for use on the desktop.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_18_GUINavControlsLabeled720.png?api=v2)

*   Click and hold the upper arrows to _**Move Right**_, _**Move Left**_, _**Move Up**_, or _**Move Down**_. Click the central circle to **Reset** the view to the center point of the data (similar to the _**Center To**_ toolbar icon).
    
*   Click and hold the middle joystick-like controls to _**Rotate Left**_ or _**Rotate Right**_.
    
*   Click and hold the lower arrow controls to zoom **In** or **Out**.
    

Keyboard and mouse shortcuts are also available for navigation controls. Click the _**Shortcut**_ icon at the lower left edge of the project space to display a reference panel.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534082/01_04_19_ShortcutKey240%20copy.png?api=v2)