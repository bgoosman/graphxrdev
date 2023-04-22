Geometric layouts let you display all nodes or selected nodes in a _**Line**_, **Grid**, _**Circle**_, _**Spiral**_, or _**Cube**_, ordered by one of the property values in the data. The edges between nodes continue to be displayed, so that connections in the graph data can still be seen.

![](/08_03_01_GeomLayout1320.png)

The nodes in a geometric layout are pinned. The _**Release**_ button is provided to return all visible nodes to the default force-directed layout.

In addition, you can:

*   _**Distribute**_ selected nodes in an X, Y, or Z direction ordered by a property value. This is useful for grouping data by date and time or other numerical or categorical property values.
    
    ![](/08_03_02_GeomDistributeDates.png)
    
*   _**Align**_ nodes along the virtual _**X**_, _**Y**_, and _**Z**_ axes of the project space.
    
*   _**Rotate**_, _**Scale**_, and _**Shift**_ nodes in the project space by specified amounts. This provides fine control of layouts that help you craft compelling visualizations.
    
    ![](/08_03_03_GeomRotateAlign.png)
*   Create hierarchical _**Ring**_ or _**Tree**_ layouts of specified depth around selected nodes.
    
    ![](/08_03_04_GeomRings.png)
    
    You can combine layouts in a variety of ways. For example, the layout above uses a _**Grid**_ layout for one of the categories of nodes (_Location_), and then applies a _**Ring**_ layout to the nodes of a different category (_Photos_) which are connected by one edge to the nodes in the grid.
    

Layouts generally can't be reverted easily, so make a habit of saving _**Snapshots**_ of your layout as you work. You can save any layout as a _**Snapshot**_ or data _**View**_.

![](/08_03_05_GeomSnapshot.png)

## Applying a geometric layout

You can apply one of five automatic geometric layouts, either to all the data or a selection. In the example layout above, nodes for each category are displayed in a different geometry.

**To apply a geometric layout:**

1.  Open the _**Layout**_ panel's _**Geometric**_ tab.
    
2.  Select nodes to lay out using any method. Often, you'll want to select all the nodes of a given category or tag using the legend. If no nodes are selected, the layout will be applied to all the data.
    
3.  Now click the _**Line**_, _**Grid**_, _**Circle**_, _**Spiral**_, or _**Cube**_ button to display the data in that layout.
    
    ![](/08_03_06_Layouts720.png)

With the layout selected, you can move the nodes as a group, and you can further adjust the orientation, size, and position using _**Rotate**_, _**Scale**_, and _**Shift**_ layout controls.

Whether or not any data are selected, the _**Release**_ layout button returns the entire graph to a force layout and releases any pinned nodes. This action cannot be undone. To avoid losing useful layouts by mistake save _**Snapshots**_ of your data (and download your snapshot archive regularly).

## Ordering the nodes in a geometric layout by a property value

One of the property values available in a data selection can be used to order the nodes in a geometric layout.

**To order a geometric layout by a property value:**

1.  Select nodes to be ordered, for example, using the legend to select all nodes of a given category.
    
2.  In the _**Layout**_ section, click the _**Order by property**_ checkbox to display its _**Category**_ and _**Property**_ dropdown menus.
    
3.  Select the category and property name you want.
    
4.  Click the _**Ascend**_ or _**Descend**_ checkbox to display the nodes in either ascending or descending order.
    
5.  Click the geometric layout you want (i.e. _**Line**_, _**Circle**_, _**Spiral**_, _**Grid**_, or **Cube**.)
    
    ![](/08_03_07_OrderBy720.png)

## Distributing nodes by a property value

The _**Distribution**_ option lets you use one of the property values available in a selection to group the nodes and distribute those groups in the project space in _**X**_, _**Y**_, or _**Z**_ directions. With _**Distribution**_, you can group data quickly by date or by another numerical or categorical property available in your data. This helps you highlight patterns quickly and makes it easier to select groups of nodes for further inspection, labeling, and analysis.

**To distribute nodes by a property value:**

1.  Select nodes to to be grouped and distributed, for example, using the legend to select all nodes of a given category.
    
2.  Click the _**Spread Out**_ checkbox to enter a scale _**Range**_ by which the groups of nodes will be distributed in the graph space.
    
3.  Click the _**Distribution**_ option's _**Order by property**_ checkbox to display _**Category**_ and _**Property**_ dropdown menus.
    
4.  Select the category and property you want.
    
5.  Click the _**Ascend**_ or _**Descend**_ checkbox to display the distributed groups in either ascending or descending order.
    
6.  Click either _**Number**_, _**Date**_, or _**Categorical**_ checkboxes, depending on the value of the property you selected.
    
7.  Now click the _**X**_, _**Y**_, or _**Z**_ button to group and distribute the selected data. In the example, we've chosen to group _Photos_ nodes by their _Ratings_ property values(1 to 5), and distribute the groups on an **X** axis.
    
    ![](/08_03_08_GeomDistRatings.png)
    
    When the selected data is grouped and distributed, it is also pinned in the graph space. So if the distribution isn't quite what you want, simply press the _**Release**_ icon (or use _**Ctrl+P**_) to start over.
    

You can further adjust distributed groups using _**Rotate**_, _**Scale**_, and _**Shift**_ layout controls.

## Aligning nodes

The _**Align**_ option projects the selected (or all) nodes onto the remaining axes. This is useful for organizing and separating data into various kinds of groupings.

![](/08_03_09_Align1320.png)

For example, click _**X**_ to project nodes to the _Y_ and _Z_ axes. If you click two of the buttons, for example, **X** and **Z**, the nodes are projected onto the _Y_ axis, in a line.

If you click all three buttons, the nodes are stacked on top of one another at the origin viewpoint. While they are still selected, you can click one of the _**Layout**_ options to unstack them.

In the example below _Location_ nodes, and distributed _Photo_ nodes grouped by _Rating_ were all projected onto an X axis (and the _Location_ nodes moved up using _Ctrl+5-drag_ or _spacebar+drag)._

![](/08_03_10_AlignExample.png)

## Using the Rotate, Scale, and Shift layout controls

You can move the nodes in a layout as a group, and you can further adjust the orientation, size, and position using _**Rotate**_, _**Scale**_, and _**Shift**_ layout controls. You can select any group of nodes. If no data are selected, the controls operate on all the data.

![](/08_03_11_ShiftScale720.png)

You can:

*   _**Rotate**_ separately along the X, Y, or Zaxes, for fine-tuned control of 3D orientation. Enter a number of degrees to rotate the layout (either a positive or negative value), then click _**Rotate X**_, _**Rotate Y**_, or _**Rotate Z**_ buttons.
    
*   _**Scale**_ a selection (or the entire layout). You can either expand or contract the scale, and choose to scale along X, Y, and/or Z axes as well. Enter a _**Scale**_ factor, select axes using the checkboxes, then click _**Expand**_ or _**Contract**_. For example, you can expand the scale for data displayed in a line, and contract the scale for other data displayed in circles or grids.
    
*   _**Shift**_ data on the X, Y, or Z axis to separate selected data visually in the graph space. Enter a _**Shift**_ factor (either a positive or negative value) and click _**X**_, _**Y**_, or _**Z**_.
    

## Using Ring or Tree hierarchical layouts

The _**Ring**_ or _**Tree**_ hierarchical layouts let you select a node (or nodes) as central points and arrange neighboring nodes according to the number of edges away they are from the centers.

![](/08_03_12a_EgoForce.png)

Ring or tree hierarchies can greatly aid visualization when combined with another geometric layout, such as the following _**Grid**_ layout:

![](/08_03_12a_EgoGrid.png)

They are also useful for geospatial display since the rings or trees persist when central data nodes with lat-long coordinates are dropped onto the map.

![](/08_03_12a_EgoMap.png)

You can:

*   Set the _**Ego Depth**_ of the hierarchy (i.e. the number hops from the selected central nodes to include). The default depth of 100 will typically include all the data since a depth of 100 connections will cover most graphs. For example, with an _**Ego depth**_ of 3, nodes NOT selected as centers AND three edges away are included. Nodes further away remain in the original force layout.
    
*   Set the relative _**Length**_ of the connecting edges. The default length of 0.4 is suitable for many graphs.
    
*   Order the data in rings or trees by a property value.
    
*   Orient rings or trees using _**Left**_, _**Right**_, _**Up**_ or _**Down**_ checkboxes.
    

![](/08_03_12_EgoStart960.png)

**To display a hierarchical ring layout:**

1.  Select nodes of primary interest as your center nodes. In this example from a contact tracing dataset, we select all _Infected\_Person_ nodes, laid out in a grid ordered by the number of connections for each node.
    
    ![](/08_03_12b_EgoSelectCentral1320.png)
2.  Now scroll down to the _**Scale**_ option and click the _**Expand**_ button several times to expand the grid layout. This makes room to arrange first- and second- level contacts in rings around the central nodes.
    
    ![](/08_03_11_ShiftScale720.png)
3.  With the central _Infected\_Person_ nodes still selected, click the _**Ring**_ button.  
    With the default _**Ego depth**_ of 100, nodes NOT selected as centers AND 100 edges away are displayed in concentric rings around the central nodes.
    
    ![](/08_03_12c_EgoRings1320.png)
4.  You can adjust the display further using **Left**, **Right**, **Up**, or **Down** checkboxes. Click one of the checkboxes, then click _**Rings**_ to rotate or reflect the connected rings.
    

**To display a hierarchical tree layout:**

1.  Select nodes of primary interest as your central nodes. In this example from a contact tracing dataset, we select all _Infected\_Person_ nodes, laid out in a grid ordered by the number of connections for each node.
    
    ![](/08_03_12b_EgoSelectCentral1320.png)
2.  Scroll down to the _**Scale**_ option and click the _**Expand**_ button several times to expand the grid. This makes room to arrange first- and second- level contacts in trees connected to the central nodes.
    
3.  With _Infected\_Person_ nodes still selected, click _**Trees**_ to see a tree layout for nodes the default 100 edges away from the selected nodes.
    
    ![](/08_03_12d_EgoTrees1320.png)
4.  You can adjust the layout further using **Left**, **Right**, **Up**, or **Down** checkboxes.  
    Click one of the checkboxes (for example, _**Right**_), then with your central nodes selected, click _**Trees**_ to see the layout to the left of the central nodes.
    
    Now click the _**Up**_ checkbox and click _**Trees**_ again. The tree layouts now appear above the central nodes, rather than to the left of them.
    

To share a static image of a layout, you can click the _**Take Screenshot**_ icon in the toolbar. It downloads a .png screenshot of the project space that includes just the data and the legend (not the toolbar, panel menu, panel or any other UI elements).

## Creating a Quick Layout from the Toolbar

The _**Quick Layout**_ toolbar icon displays a menu that lets you quickly apply and modify pre-set geometric layouts to all or part of your data.

![](/08_03_13_QuickLayoutStart.png)

You can use the menu to:

*   Apply a _**Line**_, _**Grid**_, _**Cube**_, _**Circle**_, _**Spiral**_, or _**Spring**_ layout to any selection of nodes.
    
*   Apply a _**Ring**_ or _**Tree**_ hierarchical layout. You can select central nodes, but it is not required. If you apply the layout to all the data, GraphXR will determine the nodes most likely to be central. For simpler graph patterns, selecting central nodes first may not make a difference.
    
*   _**Expand**_ or _**Contract**_ the layout of any selection of nodes.
    

The _**Quick Layout**_ menu does not enable ordering nodes in a geometric layout by property value.  
It also does not include _**Shift**_ or _**Rotate**_ controls, but you can reposition selected nodes using navigation controls (e.g _**left-click drag**_ to shift or _**right-click drag**_ to rotate.)

**To create a Quick Layout:**

1.  Select nodes using any selection method and click the _**Quick Layout**_ toolbar icon to display the quick layout menu.
    
2.  Select one of the quick layout options (for example _**Line**_).
    
3.  With the nodes still selected, you can click _**Expand**_ or _**Contract**_ on the menu to adjust the size of the layout.
    
    ![](/08_03_14_QuickLayoutExpand.png)
    
    If you need to make room for hierarchical rings or trees in an initial geometric layout, adjust the layout first, then apply the additional hierarchical layout.
    
4.  With the nodes still selected, choose _**Ring**_ or _**Tree.**_
    
    ![](/08_03_14_QuickLayoutRings.png)
    

Selecting _**Expand**_ or _**Contract**_ in the above ring layout expands only the selected central nodes, not the rings.