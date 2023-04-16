Use _**Tag**_ to create a label for any selection of nodes. This lets you group any set of nodes you consider related in some way. To create a tag, you must first select nodes, then use the _**Tag**_ icon in the context menu to show the _**ManagerTags**_ dialog. You can then:

*   Create a tag (i.e. tag the selected nodes).
    
*   Add (or remove) selected nodes to an existing tag.
    
*   Use _**Save Tags As Property**_ to add the temporary property _\_graphxrtags_ to all currently tagged nodes. When a tag is deleted, the property is removed from its tagged nodes.
    
*   Use _**Clean Nodes Tags**_ to delete all the tags on selected nodes.
    

Tags appear in the legend under _**Tag**_, labeled with a color, name, number of nodes with that tag, and number that are currently selected. GraphXR automatically assigns a color for each tag. In the graph, a tagged node receives a small label listing its tag names.

![](/04_05_01_TagOverview.png)

You can add more than one tag to a node.

### Creating a new tag

**To create a tag:**

1.  Select one or more nodes using any selection method.
    
2.  In the context menu, click the _**Tag**_ icon to display the _**Manager Tags**_ dialog. Existing tag names are displayed along with the number of tagged nodes for each.
    
    ![](/04_05_02_TagManager.png)
3.  Enter a unique name for the tag in the textbook and click _**Add Tag**_.  
    The new tag name is displayed above the textbox. In the graph, the tag label appears on the selected nodes.
    
    ![](/04_05_03_TagManagerDone.png)
4.  Click the **X** at the top right to dismiss the _**Manager Tags**_ dialog.  
    In the graph, the tagged nodes are still selected.
    
5.  Click _**Tag**_ in the legend to see the new tag on the list.
    
    ![](/04_05_04_TagNodeLegend.png)
    
    The tag name is displayed, along with its number of nodes. You can use this to check that you've tagged the expected number of nodes.
    

In the legend, tags are listed in order of the number of nodes in the tag.

### Adding or removing a tag

**To add or remove a tag:**

1.  Select a group of nodes using any selection method.
    
2.  Click the _**Tag**_ icon to display the _**Manager Tags**_ dialog.
    
3.  Locate a tag name and either:  
    Click the _**+**_ icon on the tag label to **add** the tag to the selected nodes.  
    OR  
    Click the _**\-**_ icon on the tag label to **remove** the tag from the selected nodes.
    
    ![](/04_05_03_TagManagerDone.png)
    
    The number of tagged nodes for that tag is immediately updated. If the tag has been removed from all nodes, the tag name disappears from the dialog.
    
4.  Click the **X** at the top right to dismiss the _**Manager Tags**_ dialog.
    

### Cleaning all tags from selected nodes

You can remove all the tags from any selection of nodes in one step, rather than having to select nodes with specific tags and then delete the tags individually.

**To clean tags from selected nodes:**

1.  Select a group of nodes using any selection method.
    
2.  In the context menu, click _**Tag**_ to display the _**Manager Tags**_ dialog.
    
3.  Click _**Clean Nodes Tags**_.
    
    ![](/04_05_03_TagManagerDone.png)
    
    • All of the tags applied to those nodes are removed.
    
    • In the graph, the tag label disappears from the selected nodes.  
    • In the _**Manager Tags**_ dialog and in the legend, the total number of nodes for each tag is updated. If no nodes remain, the tag is deleted.
    

### Saving tags as a temporary property

Optionally, you can click _**Save Tags As Property**_ to add the temporary property _\_graphxrtags_ to all currently tagged nodes.

When a tag is deleted, the _\_graphxrtags_ property is removed from its previously tagged nodes.

**To save tag names as a temporary property:**

1.  Select any node to display the _**Tag**_ icon, and click to display the _**Manager Tags**_ dialog.
    
2.  Click _**Save Tags As Property**_.
    
    ![](/04_05_05_TagManagerSaveTags.png)
    
    A message displays indicating success, and the _\_graphxrtags_ property is added to all tagged nodes, with the tag name as its property value.  
    For a node with more than one tag, the value is a list of tag names separated by colons.
    
3.  Click the **X** at the upper right to dismiss the _**Manager Tags**_ dialog.
    
4.  To view the temporary _\_graphxrtags_ property and its values you can:  
    • Display an an information window (_**Ctrl**_+_**I**_) or quick info rollover:
    
    • Open a _**Table**_ for a group of selected nodes.
    
    ![](/04_05_06_TagPropertyInfoTable.png)