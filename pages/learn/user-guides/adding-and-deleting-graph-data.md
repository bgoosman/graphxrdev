At any time you can create new nodes and edges in the project space. Since graph data is extensible, you can add nodes and edges of new as well as existing categories or relationships. You can:

* Add new nodes to the graph, using the _**Add Node**_ toolbar icon.
    
* Connect selected nodes using _**Add Edge**_ toolbar icon.
    
    ![](/05_01_01_AddIcons1344.png)

* Add new properties to a node or edge using _**Add Property**_ in its _**Information**_ window.
    
    ![](/05_01_02_AddProperties720.png)

To delete data from the graph space you can:

* Delete any data selection using the _**Delete**_ icon (_**del**_ or _**backspace**_).
    
* Delete all the data in the graph space using the _**Clear**_ icon (_**Ctrl**_+_**Shift**_+_**C**_).
    
    ![](/05_01_03_DeleteIcons1344.png)

## Adding a node

You can add new nodes directly in GraphXR, one at a time, using the _**Add Node**_ icon in the context menu.

For example, we notice that a Game of Thrones character owns pet dogs called Harry and Rufus. So far, the data set doesn't include anything about animal roles. For each pet, we can quickly add a node (and, for the first one, create a new _Pets_ category with initial properties such as the _name_, _owner_, _age_, _url image_, _species_, _breed_, and _colors_ of the pet).

In many situations, you only enter one value for a property. However, GraphXR does allow entry of multiple values for a single property which can be displayed as captions. Such multiple property values are displayed on separate lines.

**To add a node:**

1.  In the context menu, click the _**Add Node**_ icon to display the _**AddNode**_ dialog.
    
2.  Use the dropdown menu to select an existing category for the added node, or enter a new category name (e.g. _Pets_) and press return.
    
    ![](/05_01_04_AddCategory720.png)
3.  Enter one or more _**Property Names**_ for the category (e.g. _petName, etc._), and enter its corresponding _**Property Value**_ (e.g. _Harry_) or values (e.g. black and gray). To enter multiple values, enter the first value then press return to enter the next one, and so on.
    
    ![](/05_01_04_AddNodeDialog720.png)
    
    _OR_  
    In the list of properties for an existing category, enter a _Property Value_ if you have one, add any additional property names and their values, and click the minus (_\-_) icon for properties for which you have no value.  
    **NOTE:** The other nodes of an existing category will be updated with any new property names you add, but the values will be null. If you want to add values for a property you've added, you can inspect a _**Table**_ for missing values, and enter a value for another node using its _**Information**_ window (_**Ctrl**+**I**_). To enter values for multiple nodes at once, you can use _**f(x)**_ or _**Aggregate**_ transforms.
    
4.  Click _**Create**_ to create the node.  
    The new node appears in the graph space. A new category will appear in the _**Category**_ list in the legend. For an existing category, the total number of nodes is updated.
    
    ![](/05_01_06_AddedNode720.png)

## Adding edges

Using _**Add Edge**_, you can connect selected nodes to each other with edges of a new or existing directed relationship. To do this, you'll select nodes as the source, and then the nodes that are to be the target.

You can add properties and single or multiline property values to edges just as you can for nodes.

**To add edges to nodes:**

1.  Using any selection method, select one or more nodes that you want to connect to other nodes via a directed relationship.
    
2.  Click the _**Add Edge**_ icon, and in the _**Add Edge**_ dialog, either enter the name of a new relationship to be assigned to the new edges (e.g. _OWNED\_BY_) and press retur, or select an existing relationship from the dropdown menu.
    
    ![](/05_01_06_CreateRelationship720.png)
3.  Optionally, enter property names and their values for the relationship.
    
4.  Click _**as Source**_ to list the nodes that will be sources for new edges.
    
5.  Now select one or more target nodes for the edges and click _**as Target**_.
    
    ![](/05_01_07_CreateEdges720.png)
    
    If you've set the source and target backwards, click the _**Switch**_ button to reverse the two.
    
6.  Click _**Create**_.  
    New edges are created connecting the source nodes to the target nodes, with arrows showing the direction of the relationship. The total number of edges of that relationship is updated in the _**Relationship**_ list in the legend.
    
    ![](/05_01_08_NewEdges720.png)

## Editing a property value

You can edit any property value of a single node or edge in its _**Info**_ window. This might be useful if you need to correct errors, or add missing values to a very small amount of data.

**To edit a property value:**

1.  Select a single node or edge, and in the context menu, click the _**Info**_ icon to display its information window.
    
2.  In the list of properties, double click a property _**Value**_, and edit the value (or values) in the provided text field.
    
    ![](/05_01_09_EditProperty1080.png)
    
    The property value is updated as you enter it.
    
3.  Click elsewhere in the list to save the new property value.
    

## Adding new properties to a node or edge

You can add one or more new properties to a single node or edge using the _**Add Property**_ button in its _**Info**_ window. Adding properties and their values to one node or edge at a time in GraphXR is impractical for large amounts of data, but it can be useful for modeling and testing very small amounts of data, or for adding a small number of missing properties and their values.

For example, we can add a property for a _mobile_ number to the following _Customer_ node that includes _name_ and _aliases_ properties. Captions on the customer node are currently set to show the name and the aliases.

Once the mobile number property is added, we can go to the _Customer_ category in the _**Project**_ panel and _**Category**_ tab and select it as a caption instead (or in addition).

![](/05_01_10_MultiPropCaptions1080.png)

**To add a new property and property value:**

1.  Select a single node or edge, right click and select _**Information**_ to display its information window.
    
    ![](/05_01_11_AddMobileProp1080.png)
2.  Click the _**Add Property**_ button, and enter a _**Property Name**_ (_mobile_) and one or more _**Property Values**_ (a mobile number) in the provided text fields.
    
    ![](/05_01_12_AddMobileValue1080.png)
3.  Click _**Save**_ to save the new property and property value, or _**Cancel**_ to exit without saving.  
    The information window is updated with the new property and values.  
    Once the _mobile_ property is added, we can set it as the caption for _Customer_ nodes.
    
    ![](/05_01_13_AddPropDone1080.png)

## Deleting data from the graph space

Deleting data from the graph space is easily done. You can:

*   Delete any data selection using the _**Delete**_ icon (_**del**_ or _**backspace**_).
    
*   Delete all the data in the graph space using the _**Clear**_ icon (_**Ctrl**_+_**Shift**_+_**C**_).
    
    ![](/05_01_03_DeleteIcons1344.png)

You can use _**Ctrl**_+_**Z**_ to immediately undo a _**Delete**_ or _**Clear**_ action.

Deleting data in the graph space does not delete the data you pulled from a Neo4j database. The data model persists, and the _Categories_ and _Relationships_ tabs in the _Project_ panel still list your defined entity labels.

On the other hand, editing and transformations done in GraphXR will be lost unless you save data before deleting it. You can [save data back to Neo4j](./importing-saving-and-exporting-graph-data/saving-data-to-neo4j), save a [data View](./importing-saving-and-exporting-graph-data/saving-and-sharing-data-views) or [Snapshot](./importing-saving-and-exporting-graph-data/saving-or-loading-snapshots), or [export data](./importing-saving-and-exporting-graph-data/exporting-data-as-a-gxrf-or-csv-archive) in a variety of formats.