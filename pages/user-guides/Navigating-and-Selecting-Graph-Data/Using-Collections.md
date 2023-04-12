GraphXR’s _**Collect Nodes / Explode Collections**_ toolbar icons create special _collection_ nodes that contain nodes of a given category that all have the same relationship to another node. This provides a way to simplify a graph quickly and to work with subsets of related data.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_07_Collections.png?api=v2)

When you select data and click the _**Collect Nodes**_ icon:

*   Temporary _collection categories_ are created based on the selected nodes and their relationships.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_08_CollectionProperties.png?api=v2)
    *   Collection categories are named _Collection\__ plus the name of the category of nodes included (for example _Collection\_Character, Collection\_Death, etc.)._
        
    *   The new collection categories appear in the _**Category**_ legend. In the legend, the number of collection nodes of each type is listed, along with the number currently selected.
        
        The automatic properties created for each collection category and shown in the _**Projects**_\>_**Category**_ tab and its _**Table**_ are:
        
        *   _collection._ A boolean set to true.
            
        *   _count._ The number of nodes in the collection.
            
        *   _label_. The label on each collection node, which includes its category label and the count (e.g. Image (43)).
            
        *   _of._ The category label of the nodes in the collection (e.g. _Photos_, _Character_, etc.).
            
*   Individual _collection nodes_ are indicated by four circles displayed inside a node.
    
    *   Each collection node contains the nodes of a category and relationship that are either unconnected or all connected to another node by a single relationship type.
        
    *   The edges between the collection and its connected node(s) are collapsed into one. The relationship names (if any) remain the same, but the direction is reversed.
        
    *   The collection node’s information window shows the category and the number of nodes in the collection, and displays a list of the individual nodes in the collection.
        
    *   Properties set as captions in the original node category appear in the information window. If no captions have been set, the node ID displays.  
        At any time you can change the properties displayed in a collection’s information panel. Go to _**Projects>Category**_, then click the collected category and the _**Caption**_ checkbox for each property you want displayed.
        
        ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_09_CollectionsCaptions.png?api=v2)

**To create collections:**

1.  Select nodes of interest using any method.  
    For clarity we’ll use a simple graph of _Photo_ nodes connected by a single relationship to _Location_ nodes. We’ve distributed the data according to photo ratings, but now we want to collect photos by location. So we’ll select all the _Photo_ nodes.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_10_CollectionPhotos1.png?api=v2)
2.  Click the _**Collect Nodes**_ icon in the toolbar.  
    \- Nodes of a single category connected by zero or one edge to another node are collected into separate collection nodes, and disappear from the graph.  
    \- The new collection category (_Collection\_Photos_) appears in the _**Category**_ legend.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_11_CollectionPhotos2.png?api=v2)

**To inspect and edit a collection:**

1.  Click to select a collection node and display its information panel (right click and select _**Information**_, or click the _**Information**_ icon in the toolbar). A list of the nodes in the collection is displayed.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_12_CollectionPhotos3.png?api=v2)
2.  You can now:  
    \- Click the _**minus**_ (**\-** ) icon in the information panel to remove a node from a collection. The removed node and its edge appears outside the collection You can de-select the collection node and click _**Collect Nodes**_ again to add the removed node back to the collection if desired.  
    \- Select additional data (for example, after adding new data to the graph) and click _**Collect Nodes**_ to add eligible nodes to your collections.
    

**To explode a collection:**

1.  Select one or more collection nodes using any method, or deselect all data to explode all collections.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_13_CollectionPhotos4.png?api=v2)
2.  Click the _**Explode Collections**_ toolbar icon.  
    All nodes in the selected collections are returned to the graph and those collection nodes are deleted. Note that the nodes are returned to the distributed positions they were in before being collected.  
    A collection category is removed if all its collection nodes have been exploded.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536902/04_04_14_CollectionPhotos5.png?api=v2)

_**Collect Nodes** / **Explode Collections**_ replaces previous _GXRSuper\__ nodes. Basic leaf trimming is still available using the _**Ctrl+L**_ hotkey.