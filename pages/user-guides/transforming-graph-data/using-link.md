The _**Link**_ transform connects nodes with equivalent property values through edges of a new or existing relationship. Properties can be linked even if the property names differ, which is especially useful for combining data from different sources. _**Link**_ can also be used to explicitly draw a connection among nodes within a data set.

Examples use the open-source dataset for the HBO series Game of Thrones. For a hands-on exercise, see our [How to GraphXR](https://helpcenter.kineviz.com/learning-center/HC/how-to-graphxr) tutorials.

For example, the Game of Thrones _Characters.csv_ file includes the _characterName_ property, while the _Lines.csv_ file includes the _speaker_ property. Although named differently, the two properties have matching values, that is, the name of the character in the show. We can use those properties to create a relationship between lines of dialog and the character that spoke it.

If a property is missing, or the values do not match, a link will not be created. This can result in nodes remaining unconnected. To correct this, you can select and inspect the unconnected nodes and if appropriate, edit the property values.

**To Link nodes by property value:**

1.  To operate on the entire data set, deselect all the data.
    
2.  In the _**Transform**_ panel, open the _**Link**_ tab.
    
3.  In this example, we’ll link characters to the lines they spoke. Select or enter the following details:  
    • _**Source Category**_: select _Characters_  
    • _**Create Relationship**_: enter _SPOKE_  
    • _**Target Category**_: select _Lines_  
    • _**Source Property**_: select _characterName_  
    • _**Target Property**_: select _speaker_
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537575/06_05_01_Link1320.png?api=v2)
4.  Click _**Run**_. Error and completion messages will appear below the _**Run**_ button.  
    The new SPOKE relationship appears in the legend, and _Character_ nodes now have new directional SPOKE edges connected to the respective _Lines_ nodes.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537575/06_05_02_LinkLines1320.png?api=v2)

For easier visualization, the data for each category are arranged using [Geometric](../working-with-layouts/using-geomtric-layouts.md) layouts.