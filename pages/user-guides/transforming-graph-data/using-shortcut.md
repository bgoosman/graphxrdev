The _Shortcut_ transform connects two nodes that share a common neighbor with a new edge, and in the process creates a new relationship. The source pattern remains, but it can be hidden or deleted. This enables you to simplify a graph without merging nodes.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537617/06_06_00_ShortcutPattern.png?api=v2)

Generally, for the pattern:

_(Category A)→\[Relationship 1\]→(Category B)→\[Relationship 2\]→(Category C)_

a new shortcut pattern is created:

_(Category A)→\[New Relationship3\]→(Category C)_, where:

*   Categories _A_, _B_, and _C_ contain nodes that share a common neighbor,
    
*   _\[Relationship1\]_ and _\[Relationship2\]_ contain edges of the two relationships, and
    
*   _\[Relationship3\]_ contains edges of the new shortcut relationship. If desired, you can select one or more properties from the center category _(Category B)_ to be added to the new _\[Relationship3\]_.  
    You can also transform the property values using a preset (or _custom_) _**Input Formula**_.
    

## Preset formulas for properties of a Shortcut relationship

|     |     |     |
| --- | --- | --- |
| **Preset** | **Function** | **Format** |
| _custom_ | Editable format | (centerNodePropValues) => _.join(centerNodePropValues,"_") |
| _take first_ | Copies the first value of another property | (centerNodePropValues) => \_.size(centerNodePropValues) > 0 ? centerNodePropValues\[0\] : null |
| _count_ | Calculates a value based on number of connections. | (centerNodePropValues) => \_.size(centerNodePropValues) |
| _sum_ | Sums the values of the selected property. | (centerNodePropValues) => \_.sumBy(centerNodePropValues,d => Number(d) \| 0) |
| _average_ | Averages the values of the selected property. | (centerNodePropValues) => _.sumBy(centerNodePropValues,d => Number(d) \| 0)/(_.size(centerNodePropValues) > 0 ? \_.size(neighborPropValues) : 1) |
| _range_ | Finds the lowest and highest value of the selected property. | (centerNodePropValues) => `${_.maxBy(centerNodePropValues, d => Number(d) \| 0)} - ${_.minBy(centerNodePropValues, d => Number(d) \| 0)}` |
| _max_ | Finds the maximum value of the selected property. | (centerNodePropValues) => \_.maxBy(centerNodePropValues, d => Number(d) \| 0) |
| _min_ | Finds the minimum value of the selected property. | (centerNodePropValues) => \_.minBy(centerNodePropValues, d => Number(d) \| 0) |

Editing a preset moves it to the _custom_ item, where you can test or run the edited formula.

## Creating a Shortcut

Using the graph pattern for photo assets illustrated above as a basic example, we can use a shortcut pattern to connect _Authors_ (i.e. photographers) directly to the _Locations_ where they took an _Image_ through a new WORKED\_AT relationship.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537617/06_06_01_ShortcutPhotos720.png?api=v2)

For a hands-on tutorial using a larger dataset, see [How to GraphXR: Shortcut](https://kineviz.atlassian.net/wiki/spaces/TES/pages/1029111867/6.+Shortcut).

**To create a Shortcut:**

1.  Open the _**Transform**_ panel and _**Shortcut**_ tab.
    
2.  Now enter the following details in the _**Shortcut**_ panel:  
    • _**R1**_ (Relationship 1) select _CREATED_. For _**(B) (Center Category)**_, select _Photos._  
    • **B** (Center Category), select _Photos_.  
    • _**R2**_ (Relationship 2), select _TAKEN\_AT_.  
    • _**R3**_ (Relationship 3, i.e. the new shortcut relationship), enter _WORKED\_AT_.
    
3.  If desired, you can copy properties from the central category (_Photos_) to the new (_WORKED\_AT)_ relationship, and transform the property values using an _**Input Formula**_.  
    We’ll compute an average rating for the photos taken at each location, and add it as a new _averageRating_ property of the _WORKED\_AT_ relationship.  
    • Select the _Rating_ property from the dropdown menu to add it to the _**Selected Property**_ list.  
    • Enter a _**New Property Name**_ (_averageRating_).  
    • In _**Input Formula**_, select _average_, and edit the input formula to:
    
    ```
    (Rating) => .sumBy(Rating,d => Number(d) || 0)/(.size(Rating) > 0 ? _.size(Rating) : 1)
    ```
    
    • Check the _**Directional Edge**_ and _**Count Links**_ checkboxes. _**Count Links**_ adds an automatic _count_ property to the new relationship which may not always be meaningful. In this example though, it represents the number of photos at a location taken by the connected author.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537617/06_06_02_ShortcutEnterDetails1320.png?api=v2)
4.  Click _**Run**_. Processing messages display below the _**Run**_ button indicating success or errors.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537617/06_06_03_ShortcutRunMessage720.png?api=v2)
    
    The new shortcut pattern has now been created and added to the graph. Note that the source pattern with its _Photos_ nodes are still present in the graph space.
    
5.  To view the shortcut graph, click the _Photos_ category on the legend to select its nodes.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537617/06_06_04_ShortcutNewEdges720.png?api=v2)
6.  Then either click the _**Hide Selected**_ icon to hide all the _Photos_ nodes, or press the _**Delete**_ icon (or _**del**_ or _**backspace)**_ to delete them from the graph.  
    We now see only _Author_ and _Location_ nodes connected by the new _WORKED\_AT_ edges.  
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537617/06_06_05_ShortcutOnly720.png?api=v2)

To see added properties, you can display an info panel or quick info rollover for one of the new edges, or display a table of the edges for the new relationship (e.g. _WORKED\_AT_).