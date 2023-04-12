_Merge_ lets you combine nodes of a single category, or edges of a single relationship based on a property value. This is useful for quickly simplifying a graph.

Examples use the open-source dataset for the HBO series Game of Thrones. For a hands-on exercise, see our [How to GraphXR](https://kineviz.atlassian.net/wiki/spaces/TES/pages/820445303/How+To+GraphXR) tutorials.

Using Game of Thrones data, we can use the _seasonEpisode_ property in the _Lines_ category to combine all of the lines spoken on a single episode into a single _Lines_ node connected to its _Episodes_ node.

**To combine nodes using Merge:**

1.  Deselect all the data to operate on all the data.
    
2.  Open the _**Transform**_ panel and _**Merge**_ tab.
    
3.  Click _**Category**_ and select the _Lines_ category from the dropdown menu.
    
4.  In the _**Select key properties**_ dropdown (or scrollable list), select the _seasonEpisode_ property.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537535/06_04_01_Merge1320.png?api=v2)
    
    **NOTE:** The resulting merged node will preserve only one of the values for each property from its source nodes. In most cases, these properties should be cleared by checking the _**Clear Unselected Properties**_ checkbox before running the merge.
    
5.  Click _**Run.**_  
    Error and progress messages are displayed beneath the _**Run**_ button.  
    The graph is now far simpler. Instead of a few thousand nodes, the _Lines_ category now includes only 73 nodes, the number of episodes in the series.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537535/06_04_02_MergeDone1320.png?api=v2)