Using color, icons, and adding captions makes it much easier to highlight patterns, select data for further analysis and transformation, and create compelling visualizations. Categories, relationships, property values, and tags are assigned colors automatically. At any time, you can:

*   Change the color assigned to a category, and the color assigned to a relationship, tag, or property value.
    
*   Change the icon applied to a category using a searchable icon library available in categories listed in the _**Legend**_. In the _**Settings**_ panel, the _**Icon Mode**_ menu enables you to select one of three global coloring modes.
    
*   Label nodes and edges with captions derived from a category’s property values.
    
*   Scale the size of the nodes of a category or edges of a relationship by a property value.
    

## Selecting a color

You can set a color for a category, relationship, tag, or property value using the list in the _**Legend**_. Clicking the colored dot next to any list item displays the _**Styling Setting**_ dialog, a combined color and icon picker with separate _**Color**_ and _**Icon**_ tabs.

You can also select a new color and icon for a category or a relationship color in the _**Project**_ panel’s _**Category**_ or _**Relationship**_ tab. Select a category (or relationship) and click its colored circle (or rectangle) to display the color and icon pickers.

**To select a color:**

1.  Go to the _**Legend**_ and click the _**Category**_, _**Relationship**_, _**Tag**_, or _**Property**_ tab.
    
2.  Locate the item in the list, or for a _**Property**_, select a property name from the dropdown menu and then locate the list item for one of its values.
    
3.  Click the colored dot or line at the right of the item to display a color picker.
    
4.  In the _**Styling Setting**_ dialog, click one of the pre-set colored dots, use the color palette to select the color of your choice, or enter the hex value for the color.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_01_SelectColor720.png?api=v2)
    
    The new color is applied immediately.
    
5.  Click the **X** at the upper right to close the dialog.
    

## Selecting a color scaled by a property value

You can assign a color scale or gradient for a category’s numerical or date property value using the list in the _**Legend**_.

**To set a color scale for a property:**

1.  Go to the _**Legend**_ and click the _**Property**_ tab.
    
2.  Select a property name from the dropdown menu. The menu includes the properties of all visible categories, in alphabetic order.
    
3.  Click the _**Use Scale Color**_ checkbox, and choose a color scale from the additional dropdown menu.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_02_SelectColorScale720.png?api=v2)
    
    In the example above, the _BuPu_ scale colors visible _Character_ nodes according to their _kills_ property value, on a gradient with a lowest value assigned a pale blue, and the highest a dark purple.
    

All nodes of the category are colored, whether selected or not. Hidden nodes are colored as soon as they are restored to the graph space.

## Selecting an icon

A category can include an icon as well as a color. You select an icon using the _**Legend**_ and _**Styling Setting**_ dialog, in the same way you select a color. You can search for an icon by name, or use the dropdown menu to select general types of icons.

Icons are colored with your current color choice and coloring mode.

To change the coloring mode for icons, go to the _**Project -> Settings**_ and _**Icon Mode**_ menu at the bottom of the panel.

**To select an icon for a Category:**

1.  Go to the _**Legend**_ and click the _**Category**_ tab.
    
2.  Locate the Category in the list (e.g. _Episode_) and click the colored dot at the right. This displays the _**Styling Setting**_ dialog, a combined color and icon picker.
    
3.  Click the _**Icon**_ tab to display the icon picker. To locate icons, you can  
    \- Search by name (e.g. “_home_”).
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_03_SearchIcon720.png?api=v2)
    
    \- Use the dropdown menu to display groups of similar icons.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_03_SelectIcon720.png?api=v2)
4.  Click to select an icon for the Category.  
    The new icon is applied to all the nodes of the Category, colored with your current color choice and mode, and the dialog closes.
    

## Applying captions to nodes or edges

In the _**Projects**_ panel and _**Category**_ or _**Relationship**_ tab you can select one or more properties of a category or relationship whose values will be used as captions. The caption for each property you select is displayed on a separate line. Captions appear when the node or edge is close enough to your virtual viewpoint, and disappear when you navigate further away.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_05_CaptionsIntro.png?api=v2)

Often a property will have just one value, but [_multi-line property values_](https://kineviz.atlassian.net/wiki/spaces/~5fb2d973d670b8006e5d6cbd/pages/1719537113/Adding+and+Deleting+Graph+Data) are also supported, and are displayed in captions. A property with more than one value will display each value on a separate line.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_06_CaptionsMultiLine.png?api=v2)

The _**Projects**_ panel and _**Settings**_ tab provides options to set the global display of captions:  

![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_07_CaptionsNEW.png?api=v2)

*   _**Alternate Caption Rendering**_ checkbox displays captions using an alternate rendering that may be more legible than the default rendering at very small text sizes. However, the number of captions which can be rendered at a time is limited.
    
*   _**Show Relationship Name**_ checkbox displays the relationship name on every edge.
    
*   _**Edge Width Scale**_ slider lets you adjust the global width of edges.
    
*   _**Caption Size Scale**_ slider lets you adjust the global text size of captions.
    
*   _**Node Caption Position**_ dropdown menu lets you adjust the position of captions on nodes. Position options are _Right_, _Top_ (left-aligned or centered), _Bottom_ (left-aligned or centered), and _Vertical_.
    

**To apply captions:**

1.  Go to the _**Project**_ panel and _**Category**_ or _**Relationship**_ tab.
    
2.  Click a Category or Relationship (e.g. _Episode_) to display its properties.
    
3.  Click the _**Caption**_ checkbox for the property to be used as a caption (e.g. _title_). The checkbox is available for any property.
    
    If you select more than one property, the caption displays **in the order you select the properties** in the _**Property Name**_ list. For example, a caption that includes the _Episode_’s property values for _season_, _episode_, and _title_ appears as follows:
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_08_CaptionsMultiple.png?api=v2)
    

## Scaling node size or edge width by a property value

You can select a property of a category or relationship whose value will be used to scale the size of its nodes or edges, respectively.

For example, using data for HBO’s Game of Thrones television series, the _season_ (e.g. season 1, 2, 3, etc.) property is selected to scale the size of the _Episode_ category of nodes. This results in progressively larger sizes for _Episode_ nodes associated with each new broadcast season.

The _**Node Size Scale**_ and _**Edge Width Scale**_ sliders in the _**Settings**_ tab determines the basic size of all nodes and edges, respectively. From there, nodes can receive increasing sizes, and edges increasing widths, scaled to the values of a selected property.

**To scale nodes or edges by a property value:**

1.  Go to the _**Project**_ panel and _**Category**_ or _**Relationship**_ tab.
    
2.  Select a category or relationship (for example, the _Episode_ category).
    
3.  For a category, click the _**Node Size**_ checkbox for the property to be used to scale node size (e.g. _numLines_).
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_09_NodeSize.png?api=v2)
    
    For a relationship, click the _**Bind Width**_ checkbox for the relationship property. For example, for the _spoke_ relationship, select the _numLines_ property. This will scale the width of _spoke_ edges according to the number of lines spoken by a character.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536132/03_02_10_NodeEdgeWidth.png?api=v2)

Although _**Node Size**_ or _**Bind Width**_ checkboxes are available for any property, a property with numerical values (rather than text) produces more obvious visual results.