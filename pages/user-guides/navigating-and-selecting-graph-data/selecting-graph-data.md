To select graph data you can:

*   Use mouse and/or keyboard hotkeys to select nodes or groups of nodes, and to add or subtract from your selection.
    
*   Use the _**Inverse**_ (**I** or **Shift**+**I**) toolbar icon to switch a selection to the nodes not currently selected.
    
*   Use the **Pin/Release** (_**Ctrl**_+_**P**_) toolbar icon to pin (or release) the position of selected nodes in the graph space.
    
*   Use the list items in the _**Legend**_ to select all nodes of one or more categories or tags, edges of a relationship, or to select nodes or edges that include one or more listed values of a property.
    
*   Use the _**Trace Neighbor**_ and _**Select Visible Nodes**_ toolbar icons to highlight and select a subgraph.
    

You can also [_**Filter**_](./filtering-graph-data) data by any numerical property, including date and time, latitude, or longitude.

## Selecting using Shortcuts

For selecting data on the desktop, the following keyboard and mouse shortcuts are provided.

| **Action** | **Shortcut Keys** | **Description** | **Function** |
| --- | --- | --- | --- |
| Select all nodes | _**Ctrl**_+_**A**_ | Select all nodes currently in the graph space. | Select |
| Deselect all nodes | _**Alt**_+_**A**_ (_**Option**_+_**A**_) or  <br>_**Double-click**_ empty space | Deselect all visible nodes. | Select |
| Select a node or nodes | _**Left mouse click**_ or  <br>_**Shift**_+_**Left mouse click**_ **drag** | Select one or more nodes. | Select |
| Add a node or nodes to a selection | _**Ctrl**_+_**Left mouse click**_ or  <br>_**Ctrl**_+_**Left mouse click**_ **drag** | Add one or more nodes to a selection. | Select |
| Subtract a node or nodes | _**Alt**_+_**Left mouse click**_ **or**  <br>_**Alt**_+_**Left mouse click**_ **drag** | Remove one or more nodes from a selection. | Select |
| Drag selection | _**Left mouse click**_ **drag** | Drag selected nodes and edges in the graph space. | Select |
| Invert selection | _**I**_ or _**Shift**_+_**I**_ | Toggle to select nodes not currently selected. | Select |
| Pin or Release | _**Ctrl**_+_**P**_ | Toggle to pin (or release pinning) of selected nodes to a location in the graph space. | Select & Navigate |
| Expand | _**Ctrl**_+_**X**_ | Pull nodes connected to selected nodes from the project’s Neo4j database. | Select & Import |
| Leaf Trimming | _**Ctrl**_+_**L**_ | Toggle to temporarily collapse into one node (or restore) the nodes in a selection that are connected by only one edge. | Select & Hide |
| Delete selection | _**del**_ or _**backspace**_ | Delete selected nodes and edges. | Select & Edit |
| Clear graph | _**Ctrl**_+_**Shift**_+_**C**_ | Remove all data from the graph space. | Edit |
| Undo | _**Ctrl**_+_**Z**_ | Immediately undo a _**Delete**_ or _**Clear**_ action. | Edit |

## Using Inverse

The _**Inverse**_ icon on the toolbar deselects currently selected nodes, and selects all the other visible nodes instead. It is often used along with [_**Hide /Unhide Selection**_](./hiding-data) to more effectively work with a complex graph by temporarily removing and then restoring some of its data.

*   Click _**Inverse**_ (_**I**_ or _**Shift**_+_**I**_) to select all the nodes not in the current selection.
    

You can use _**left mouse click**_ **drag** to move selected nodes in the project space.

## Pin or Release selected nodes

Pinning locks selected nodes to their current relative positions in the graph space. It is designed for use with the _**Force**_ layout, to provide finer control of the layout. Pinning also occurs automatically when you reposition nodes using the mouse, or apply specific geometric or geospatial layouts.

A Pin icon displays on all pinned nodes. While this can be useful, you can hide the icons using the _**Hide Pin Icon**_ checkbox in _**Project>Settings**_.

**To pin and release one or more nodes:**

1.  Select one or more nodes and click the _**Pin**_ icon on the context toolbar.
    
    ![](/04_02_01_PinStart520.png)
    
    The selected nodes will be pinned (in addition to any already pinned nodes).
    
    ![](/04_02_02_PinPinned520.png)
2.  To release, select one or more pinned nodes. The _**Pin**_ icon changes to _**Release**_.
    
    ![](/04_02_03_ReleaseSelect520.png)
3.  Click the _**Release**_ icon to release the selected pinned nodes and return them to the default force-directed layout.
    

GraphXR automatically pins nodes in the following situations:

*   A single selected node that you move to a new position is automatically pinned.
    
*   When selecting and arranging nodes geometrically using _**Geometric**_ layouts, the selected nodes become pinned to their new layout. Geometrically locked nodes remain pinned until you release (un-pin) them, or select the _Force_ geometry, which releases all pinned nodes.
    
*   Nodes with geospatial coordinates that you drop onto a map using the _**Map**_ panel are pinned according to their latitude/longitude coordinates and the 3D perspective you choose. Nodes pinned to a map are released when you select _**Hide Map**_.
    

## Selecting Nodes by Category, Tag, or Property value

For the data currently visible in the graph, you can use list items in the _**Legend**_ to select all nodes with any category or tag, all the edges of a relationship. You can also select any available property name to display and select one of its values.

List items display in a bubble that includes the label, the number of data points (node, edge, or value), and the number currently selected. The list is displayed in descending order of the amount of data: items with the most data appear at the top of a list.

**To select nodes using the Legend:**

1.  On the Legend, click the _**Category**_, _**Tag**_, or _**Property**_ tab to display the list of labels for that data.
    
2.  For a _**Category**_ or _**Tag**_, find the labeled item, and click to select all its data. Use _**ctrl+left click**_ to select more than one list item.
    
    ![](/04_02_04a_LegendSelectCat520.png)
    
    OR  
    For a _**Property**_, select the property name from the menu. A list of the values available for that property is displayed, along with the number of entities (node or edge) having the value for that property. Click a list item to select its data. Use _**ctrl+left click**_ to select more than one list item.
    
    ![](/04_02_04b_LegendSelectProps.png)

## Selecting Edges by Relationship

You can also use the list in the _**Legend**_ to select all the edges of one or more relationships.

**To select edges using the Legend:**

1.  On the Legend, click the _**Relationship**_ tab to display the list of relationships in the graph. Relationship labels are listed below categories (or properties), if the _**Category**_ (or _**Property**_) tab is also selected.
    
2.  Click the bubble for the relationship name to select all its edges. Use _**ctrl+left click**_ to select more than one relationship. In the example below we can highlight relationships between people who live at the same address (KNOWS\_LW), have a family connection (FAMILY\_REL), or have communicated by phone (KNOWS\_PHONE).
    
    ![](/04_02_05_LegendSelectRels.png)

## Select subgraphs with Trace Neighbor and Select Visible Nodes

The _**Trace Neighbor**_ tool enables you to highlight subgraphs in the data. You start from selected source nodes and highlight additional connected nodes a specific number of hops (or edges) away. You can select one or more source nodes in the graph space, or use the Legend lists to select nodes of one or more categories, or nodes with particular property values.

Using the _**Select Visible Nodes**_ tool you can select a highlighted subgraph for further investigation and use the _**Inverse**_ and _**Hide Selection**_ or _**Delete**_ tools to temporarily hide or delete data not in the subgraph.

When _**Trace Neighbor**_ is not invoked, _**Select Visible Nodes**_ selects all nodes in the graph, similar to the shortcut _**Ctrl**_+_**A**_.

**To isolate a subgraph using Trace Neighbor:**

1.  Select one or more nodes in the graph. In this example, in the _**Property**_ list in the _**Legend**_ we select nodes with specific surname property values attached to _Person_ nodes.
    
    ![](/04_02_06_Trace1.png)
2.  Click the _**Trace Neighbor**_ tool. A slider displays showing the number of connections or hops from the selected nodes that exist in the graph, and all the rest of the data is now dimmed (that is, not visible).
    
    ![](/04_02_06_Trace2.png)
3.  Use the slider to highlight the nodes and edges that number of hops away from the source nodes.
    
    ![](/04_02_06_Trace3.png)
4.  Click the _**Select Visible Nodes**_ toolbar icon to select the highlighted nodes.
    
    ![](/04_02_06_Trace4.png)
5.  Now save a _**Snapshot**_ so you can revert if needed.
    
6.  Isolate the selected subgraph for further exploration. Click _**Inverse**_ to select all the nodes that aren’t in the subgraph.
    
    ![](/04_02_06_Trace5.png)
7.  Click the _**Hide**_, or _**Delete**_ tools to remove those nodes.
    
    ![](/04_02_06_Trace6.png)
    
    To save the subgraph, you can _**Tag**_ your selection, take another snapshot, and export your snapshot archive.