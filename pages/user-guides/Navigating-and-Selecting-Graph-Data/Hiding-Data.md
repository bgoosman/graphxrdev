Hiding nodes temporarily can be useful for focusing on subsets of graph data that you may want to work with further, or clear from the graph. You can:

*   Use _**Hide Selection**_ to hide selected nodes temporarily, and _**Show hidden nodes**_ to restore hidden nodes.
    
*   Deselect the _**Visible**_ checkbox for a category or relationship to temporarily hide nodes of a category or edges of a relationship.
    
*   Select the _**Exclude**_ checkbox for any property of a category or relationship to temporarily exclude it from the data.
    

## Using Hide Selection and Show Hidden Nodes

The _**Hide selection**_ and _**Show hidden nodes**_ icons appear next to each other in the context menu. _**Hide Selection**_ appears only when nodes are selected Once you hide nodes, the _**Show hidden nodes**_ icon appears. Click it to restore all the hidden nodes and edges to the graph, update the total counts in the legend lists, and de-select the data.

**To hide nodes:**

1.  Select nodes using any selection method.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536566/04_04_01_HideSelected.png?api=v2)
2.  Click the _**Hide Selection**_ icon in the context toolbar.  
    The selected nodes (and any connected edges) are hidden. Hidden nodes, edges, etc. are subtracted from the lists in the legend.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536566/04_04_02_ShowHidden.png?api=v2)
    
3.  You can keep selecting and hiding data and these are added to whatever has already been hidden. The _**Hide Selection**_ icon appears only when one or more nodes are selected.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536566/04_04_03_HideUnHide.png?api=v2)

**To restore hidden nodes:**

*   Click the _**Show hidden nodes**_ icon in the context toolbar.  
    All hidden nodes are restored, and the number of restored nodes, edges, etc. are added back to the lists in the legend.
    

## Using Leaf Trimming

Leaf trimming (_**Ctrl**+**L**_) is a keyboard command which temporarily hides (or restores) nodes in a selection which are either unconnected or connected by only one edge. _**Ctrl**+**L**_ is a toggle control.

**To use leaf trimming:**

1.  Select nodes using any method. If no selection is made leaf trimming operates on all the data.
    
2.  Press _**Ctrl + L**_ once to hide the trimmed nodes.  
    The _**Show hidden nodes**_ icon appears, if no other nodes had already been hidden.
    
3.  Press _**Ctrl +L**_ again to restore the trimmed nodes.
    

[Collections](https://kineviz.atlassian.net/wiki/spaces/~5fb2d973d670b8006e5d6cbd/pages/1719536902/Using+Collections) (using the _**Collect Nodes** / **Explode Collections** icons_) provide expanded functionality to group and inspect nodes connected by a single relationship. This was previously provided by leaf trimming and _GXRSuper\__ nodes.

## Hiding data by Category or Relationship

By default, nodes and edges in the graph are visible. You can hide all data for a category or relationship temporarily by clicking the _**Visible**_ checkbox for an entity in the _**Category**_ or _**Relationship**_ tab of the _**Project**_ panel.

*   For a _category_, all its nodes as well as the connected edges disappear from the view, and both the category name and the name of its relationships disappear from the list in the legend.
    
*   For a _relationship_, all its edges disappear from the graph space, and the relationship name disappears from the list in the legend. Nodes connected to the edges remain in the graph space.
    

**To hide data by Category or Relationship:**

1.  Open the _**Project**_ panel and _**Category**_ (or _**Relationship**_) tab.
    
2.  Click a category or relationship label to select it.
    
3.  Un-check the _**Visible**_ checkbox.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536566/04_04_04_HideCat1.png?api=v2)
    
    The nodes (or edges) for the selected category or relationship disappear from the graph space. To display data for the entity again, simply click its _**Visible**_ checkbox.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536566/04_04_05_HideCat2.png?api=v2)

## Excluding Property data

You can exclude any property for a category or relationship temporarily by clicking its _**Exclude**_ checkbox in the _**Category**_ or _**Relationship**_ tab of the _**Project**_ panel.

**To exclude a property of a category or relationship:**

1.  Open the _**Project**_ panel and _**Category**_ (or _**Relationship**_) tab.
    
2.  Click a category or relationship label to select it.
    
3.  Locate one or more properties you want to exclude, and click the _**Exclude**_ checkbox(es).
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536566/04_04_06_ExcludeProp.png?api=v2)
    
    Excluded properties no longer appear in information panels or tables.