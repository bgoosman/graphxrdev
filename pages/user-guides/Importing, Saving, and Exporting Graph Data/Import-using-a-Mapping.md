GraphXR’s _**Mapping Editor**_ lets you map data in a single CSV file or SQL table to a graph pattern or model. You can map just the data you want; you need not import the entire table. The mapping queries the data of interest and converts it to graph data, assigning it to categories, properties, relationships, and key values you specify.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_01_MappingStart.png?api=v2)

You can:

*   Map a table column as a **static** Category or Relationship label, map additional columns as properties, and create nodes and edges according to properties set as key values.
    
*   Map the values within a table column as **dynamic** Category or Relationship labels. This maps unique values within the column to separate Categories (or Relationships) and creates nodes and edges accordingly. This can help you visualize changes in data that’s updated periodically.  
    To create a dynamic mapping, you enter a CSV column name in **curly braces { }** in the Mapping Editor’s _**Category Name**_ or _**Relationship Name**_ field. To make the labels more readable, additional text can be included both before and after the name (e.g. _Text_{Column Name}_MoreText_).
    

For example, the mapping shown above helps to visualize and work with photo assets by location and author, since separate categories are created for unique values found in _PlaceName_ and _Provider_ columns.

Separate _TAKEN\_BY_ relationships (e.g. _TAKEN\_BY\_Provider 1_, _TAKEN\_BY\_Provider 2_) are also defined for unique values in the _Provider_ column. Now each author’s connections to images is displayed in a separate color, which rapidly highlights authorship in the graph.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_02_GeoMapAuthorLoc1320.png?api=v2)

Once you create a mapping, you can:

*   Save, apply, and edit the mapping.
    
*   Export a saved mapping as a .JSON file. You can include this with the original data, and import to other GraphXR projects.
    

## Creating a CSV Mapping

We’ll start with an example CSV file that contains a table (with headers) of photographic images and associated metadata such as photographer, image ID, size, date taken, keywords and ratings, and location (place names and latitude-longitude).

![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_03_CSV720.png?api=v2)

Using static and dynamic mapping, we can design a mapping to connect location, ratings and authors of photographic images. We’ll create _Photos_, _Rating_, and _Author_ categories and map appropriate properties from the CSV as follows:

*   _Photos_ can include the _pkey_ (since we have one)_, photo ID number_, _name_, _url_, _image size_, _date taken_, _provider_, _copyright_, _place name_, _latitude_ and _longitude_, _state_, and _country_.
    
*   _Rating_ can include _Rating_.
    
*   _Author_ can include _Provider_.
    

We’ll also map dynamic relationships as:

*   _RATED\_AT\_{Rating}_ to connect _Image_ and _Rating_ nodes with edges labeled by _Rating_.
    
*   _TAKEN\_BY\_{Provider}_ to connect Image and Author nodes with edges labeled by _Provider_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_04_ImageRatingAuthor1320.png?api=v2)

Mapping data from a table in an SQL relational database uses the same mapping interface. The SQL query tab does include a _**Load Without Mapping**_ button to import the entire table you’ve specified. This isn’t needed for a CSV. To load an entire CSV file without mapping, simply drag and drop it on the graph space.

**To create a mapping:**

1.  The _**Mapping Editor**_ is only available once you have loaded a CSV file. In the _**Query**_ panel, open the _**CSV**_ tab, click _**Load CSV**_, navigate to your CSV file, and click _**Open**_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_05_LoadCSV720.png?api=v2)
    
    The file name and number of rows and columns are displayed next to the _**Load CSV**_ button. The contents of the file including its column headings are displayed in a data table, 10 records at a time. Below that are the controls to create, update and apply a mapping and to access saved mappings.  
    **NOTE:** _A mapping will apply to the CSV file that’s loaded. A mapping can also be applied to a different CSV file if the column headers and properties specified in the mapping are present._
    
2.  Scroll to the bottom of the panel, and click _**New.**_
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_06_CSVMapping720.png?api=v2)
3.  The _**Mapping Editor**_ window that displays is divided into left and right functional areas:  
    • On the left, you add categories and relationships, and save or export your mapping.  
    • On the right, you enter a _**Category Name**_ (or _**Relationship Name**_), inspect _**Sample Data**_ from the CSV, and specify the _**Properties**_ to be mapped from the CSV _**ColumnName**_ to a _**PropertyName**_ for the current category or relationship. You’ll first create categories, then add relationships. The first category, shown as a circular icon labeled _Category1_, is automatically created and selected.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_07_MappingEditor720.png?api=v2)
4.  On the right, in _**CategoryName**_, change the label to _Image_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_08_Cat1_Image.png?api=v2)
    
    _**NOTE:**_ _A standard naming convention for categories and relationships will make mappings and your graph data more readable. For example, capitalize category names (Image), and use upper case with words separated by underscore characters for relationship names (TAKEN\_AT)._
    
5.  Now add properties for the category. From the _**Sample Data**_ area, click the the **+** (plus) icon next to columns to be included as properties. Each column name appears in the _**Properties**_ list as you add it. A property will be named as in the CSV file, but you can enter a different name. If you add a property by mistake, simply click its trash can icon in the _**Remove**_ column.
    
6.  Click the _**AsKey**_ checkbox to set one or more properties as key values. In this example, we set the _pkey\_photo_ property as the key, ensuring that there will be only one node for each unique photo. Notice that you can set **AsKey** for more than one property, which provides flexibility in how you define unique entities in your mapping.
    
7.  Click the **+** (plus) icon again at the upper left to add a _Rating_ category. Click to add the _Rating_ column from the CSV as a property , and click to set it **AsKey** so that there will be a single node for each unique rating.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_09_Cat2_Rating.png?api=v2)
8.  Now click the **+** (plus) icon at the upper left to add the _Author_ category. Click to add the _Provider_ column as a property, rename it to _authorName_, and click _**AsKey**_ so that there will be a single node for each unique photographer.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_10_Cat3_Author.png?api=v2)
9.  Now add the directed dynamic relationships. Click the _**Add Edge**_ icon on the upper left and click the source category (_Image_). Then click the second, target category (_Rating_). The relationship appears as an arrow between the two categories. The default name is the combined names of the two categories (_Image\_Rating_). Since we want a dynamic relationship, edit _**Relationship Name**_ to _RATED\_AT\_{Rating}_. Optionally, properties can be added to the relationship, but here we don’t need to.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_11_DynamicRelRating.png?api=v2)
    
    **NOTE:** A name you enter in the curly braces must exactly match the column header name **in the CSV**. If the Mapping Editor can’t match the name (for example, because it is misspelled), the relationship will be created, but will be labeled “_undefined_”.
    
10.  Now click the _Image_ and then the _Author_ category icons to add a dynamic _TAKEN\_BY\_{Provider}_ relationship between the _Image_ and _Autho**r**_ categories.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_12_DynamicRelAuthor.png?api=v2)
11.  Click any category or relationship icon to review and make any changes.
    
12.  Click the _**Save As**_ icon in the _**Mapping Editor**_ window.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_13_SaveMapping1320.png?api=v2)
13.  In the dialog box, enter a name in the _**Save As**_ text field, and click _**OK.**_
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_14_SaveAsDialog.png?api=v2)
14.  The name appears in the _**Mapping**_ dropdown menu. Click _**Apply**_ to apply the mapping to the loaded file and import the mapped data.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_15_ApplyMapping.png?api=v2)
15.  GraphXR queries the CSV, maps the data, and loads it to the project space.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_16_MappingDone.png?api=v2)

## Editing a mapping

You can edit the mapping at any time and _**Save**_ it, or use _**Save As**_ to edit and save as a new mapping. A CSV will still be loaded, so during the editing process, a mapping can easily be edited and then re-applied.

**To edit a mapping:**

1.  Open the _**CSV**_ tab in the _**Query**_ panel, click _**Load CSV**_, navigate to the CSV file associated with the mapping, and click _**Open**_.
    
2.  Select the mapping you want to edit from the _**Mapping**_ dropdown menu and click _**Edit**_.
    
3.  Edit, add or delete categories, relationships, and their properties.
    
4.  Click either the _**Save As**_ icon to save your work as a new mapping, or the _**Save and Exit**_ icon to save to the existing mapping.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_17_SaveMapping1320.png?api=v2)

To exit the editor without saving changes, click the **X** at the upper right of the _**Mapping Editor**_ window.

## Exporting or Importing a mapping

You can export a mapping as a JSON file, and then re-import it whenever you want.

It is good practice to export mappings before you exit a project.

**To export a mapping as a JSON file:**

1.  Open the _**CSV**_ tab in the _**Query**_ panel, click _**Load CSV**_, navigate to the CSV file associated with the mapping, and click _**Open**_.
    
2.  Select the mapping in the dropdown menu, and click _**Edit**_ to open the _**Mapping Editor**_.
    
3.  Click the _**Export Schema**_ icon at the top left.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_18_ExportSchema1320.png?api=v2)
    
    A JSON file for the mapping is written to your local machine.
    

**To import a mapping saved as a JSON file:**

1.  Open the _**CSV**_ tab in the _**Query**_ panel, click _**Load CSV**_, navigate to the CSV file associated with the mapping, and click _**Open**_.
    
2.  Click _**Import**_, navigate to the JSON file, and click _**Open**_.  
    The mapping appears in the Mapping menu.
    
3.  Select the mapping and click _**Apply**_ to query the loaded CSV data.
    

If you choose a mapping that was not defined on the CSV file you loaded, the following message displays: "Mapping not compatible with the data."

## Deleting a mapping

You can delete any or all of the mappings for a given CSV.

**To delete a mapping:**

1.  Open the _**CSV**_ tab in the _**Query**_ panel, click _**Load CSV**_, navigate to the CSV file associated with the mapping, and click _**Open**_.
    
2.  Select the mapping you want to delete from the _**Mapping**_ menu and click _**Delete**_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719534690/02_02_19_DeleteMapping.png?api=v2)