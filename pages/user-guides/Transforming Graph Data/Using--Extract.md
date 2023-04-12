The _**Extract**_ transform lets you generate nodes and edges belonging to new or existing categories and relationships, based on one or more source properties.

Examples use the open-source dataset for the HBO series Game of Thrones. For a hands-on exercise, see our [How to GraphXR](https://kineviz.atlassian.net/wiki/spaces/TES/pages/820445303/How+To+GraphXR) tutorials.

The _Characters.csv_ file tabulates information about each character in the series, the name and the house they belong to. Importing CSV file assigns all the data to a single default _Characters_ category, but we want to extract a separate _House_ category for the family each character belongs to.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537416/06_02_01_ExtractCSV720.png?api=v2)

We can extract a _houseName_ property from _Character_ nodes, and use it to create both a _House_ category and a new _BELONGS\_TO_ relationship linking _House_ nodes to the original _Characters_ nodes.

**To extract a new category and connecting relationships:**

1.  In the graph space, de-select the data to extract from the entire data set.  
    **NOTE:** If you select nodes, _**Extract**_ operates on only those elements. With nothing selected, transformations affect the whole graph.
    
2.  Open the _**Transform**_ panel and _**Extract**_ tab, and enter the following details:  
    • In the _**Extract From Category**_ menu, select _Characters_, which will appear as the _**Source Category.**_ If there is only one category in the graph, it is already entered as the _**Source Category**_, and the menu does not appear.  
    • In the _**New Relationship**_ textbox, enter _BELONGS\_TO_.  
    • In the _**New Category**_ textbox, enter _House_.  
    • In the _**Create Category From Property**_ area, select the _houseName_ property from the menu (or click the _**+**_ (plus) icon next to its name in the table below) to add it to the _**Selected Property**_ list.  
    **NOTE:** Properties in the source data are listed alphabetically in the scrollable list of properties. A sample of data displays below the property names, showing property values and data formats.
    
    The selected property name appears in the _**New Property Name**_ text box. Leave it unchanged for this example.
    
3.  Click the _**Key**_ checkbox to set _houseName_ as a key, so that a single node will be created for each unique value of _houseName_, rather than a separate one for every source node.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537416/06_02_02_Extract1320.png?api=v2)
    
    **NOTE:** If the property value is a list and not a single value, you can click the _**Split**_ checkbox to create a separate node for each value in the list. Otherwise, a single node will be created with only the first value in the list.
    
4.  Optionally, you can specify additional details for the extracted nodes:  
    • Click _**SkipEmpty**_ to extract the specified pattern only when the source property is present and its value is non-null. For example, the (_Character_)-\[_BELONGS\_TO_\]-(_House_) pattern would be created only for _Character_ nodes that include a _houseName_ property and value.  
    • Click _**Inherit Links**_ to copy any edges connected to the original category to the new extracted category. Our graph does not yet include any edges so we’ll leave it unchecked.
    
5.  Scroll down to the bottom of the panel and click _**Run**_.  
    A scrolling list below the _**Run**_ button displays errors and a completion message for the Extract.
    
    The legend now displays the new _House_ category, and the new _BELONGS\_TO_ relationship.  
    Extracted _House_ nodes appear in the graph space, connected to their respective _Character_ nodes by new _BELONGS\_TO_ edges.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537416/06_02_03_ExtractComplete1320.png?api=v2)
    

Since _**Skip Empty**_ was left unchecked, source nodes with no _houseName_ value are assigned to an unlabeled _House_ node, connected to their respective _Character_ nodes through _BELONGS\_TO_ edges. In the Property list, the _houseName_ property of the unlabeled _House_ node appears as “_not available”_.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537416/06_02_04_ExtractNull720.png?api=v2)