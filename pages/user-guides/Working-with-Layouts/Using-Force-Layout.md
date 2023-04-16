A _**Force**_ directed layout is a rendering of a physics simulation in which each node pushes away from other nodes while edges pull the nodes together. There is no intrinsic meaning to node position or edge length in a force-directed layout. Rather, the rendering is designed to result in a graph that is visually pleasing and reasonably easy to navigate.

For more detailed information, see [Force-directed Graph Drawing](https://en.wikipedia.org/wiki/Force-directed_graph_drawing).

GraphXR uses a specific force-directed layout by default, but you can:

*   Adjust force layout parameters for the entire graph, and restore default settings.
    
*   Randomize node positions for all or part of the graph.
    
*   Temporarily disable force layout for all or part the graph.
    
*   _**Run**_ a brief force layout simulation for the entire graph.
    

## Adjusting Force layout parameters

The _**Force**_ tab of the _**Layout**_ panel provides a set of sliders to adjust default layout parameters for the entire graph.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537882/08_01_01_ForceLayout1320.png?api=v2)

You can adjust parameters as follows:

*   _**Link Strength**_. Adjusts how strongly the links (i.e. edges) pull the nodes together.
    
*   _**Link Distance**_. Adjusts the distance between nodes (i.e. edge length).
    
*   _**Gravity**_. Pulls the nodes toward the center of the graph space, that is, the point the view rotates around when nothing is selected.
    
*   _**Charge**_. Adjusts how strongly the nodes push away from one another.
    
*   _**Collision**_. Adjusts the degree to which nodes are allowed to overlap each other. This is especially useful in a 2D layout, to un-stack nodes projected on top of one another. When set all the way to the right, some overlap can still occur.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537882/08_01_02_ForceCollision1320.png?api=v2)
*   _**Z Compress**_. Compresses nodes on the Z axis to become a flatter, more 2D layout. To project a 3D view to near-2D, set the _**Z-Compress**_ slider all the way to the rightmost position. You will still be able to rotate the data in 3D.
    
*   Click the _**Restore Default Settings**_ button to restore the sliders to their default positions and re-render the default force layout for the selected graph.
    

Any pinned node is excluded from adjustment, and left where it was placed. This applies to nodes you’ve arranged manually in the project space, and to those pinned automatically using a geometric layout. To release pinned nodes, you must either use the _**Pin/Release**_ toolbar icon, or the _**Release**_ button in the _**Geometric**_ layout panel.

## Restricting layouts to 2D

When exploring high-dimensional data, 3D visualization provides a powerful advantage. However, you can work exclusively in 2D mode if desired. For example, a flat 2D project space can be needed to create and share views for reports of various kinds.

**To set the project space to 2D:**

*   In the _**Project**_ panel and _**Settings**_ tab, click the _**2D Mode**_ checkbox.
    
    *   Project data are now arranged on a flat plane, and the data cannot be rotated in 3D.
        
    *   Go to the the _**Force**_ layout tab to see that the _**Z-Compress**_ slider is no longer displayed.
        

Many [_**Geometric**_ layouts](../working-with-layouts/using-geomtric-layouts) translate well to a purely 2D layout: _**Line**_, _**Circle**_, _**Spiral**_, and _**Grid**_, and hierarchical _**Rings**_ or _**Trees**_.

## Randomizing node positions

In _Force_ layout, nodes are rendered in randomized positions. The _**Randomize Node Positions**_ button lets you render a different random arrangement either for selected data, or all data if no data are selected (except for pinned nodes).

**To randomize a force-directed layout:**

1.  Select nodes using any method.  
    **Note:** If none are selected, all node positions are randomized, except for any pinned nodes.
    
2.  Make sure that the label next to the icon reads _**Disable Force Layout**_. This means that force layout is currently enabled, and your selection will be randomized according to the current force layout parameters.
    
3.  ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537882/08_01_05_RandomizeForce1440.png?api=v2)
    
    Click the _**Randomize Node Positions**_ button to render a different random force layout for your selection.
    

## Disabling Force Layout

You can disable the force layout for all or part of the graph. This causes selected nodes to be rendered in a random, more compact arrangement that does not use a force-directed simulation. This can help you focus quickly on subgraphs of interest.

**To disable force layout and randomize node positions:**

1.  Select nodes using any method.
    
2.  Click the force layout icon. The text next to the icon should now read _**Enable Force Layout**_, which means that force layout is currently disabled.
    
3.  Click the _**Randomize Node Positions**_ button to display a different random order for your selection.  
    The selected data are randomized in a more compact layout, while the data not selected remains in force layout.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537882/08_01_06_DisableAndRandomize1440.png?api=v2)
    
    **NOTE:** If no data are selected, all node positions are randomized in a non-force layout, except for any pinned nodes.
    
4.  Click the icon next to _**Enable Force Layout**_ at any time to return the selected nodes to force-directed layout.
    

## Using Run and Stop

With force layout enabled, you can click _**Run**_ to run a brief (1- or 2- second) force layout simulation for the entire graph. Click _**Stop**_ to freeze the layout when you see a rendering you like.