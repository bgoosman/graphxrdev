You can import data in _.CSV_, _.JSON_, GraphXR's _.graphxr_ and _.graphxrsnapshots_, and many other data formats by drag and drop. Simply locate the file on your system, then drag and drop it anywhere in the project graph space.

In the _**Project**_ panel and _**Data**_ tab you can also click _**Import**_ (for _.graphxrsnapshots_, _.CSV_, _.JSON_, etc. files), or _**Load GXRF**_ (for _.graphxr_ files), then navigate to the file and click to load the data.

![](/02_01_01_ProjectDataLoad720.png)

## Importing tabular data by drag and drop

When you import data that has no defined graph schema, such as a flat .CSV file, each row is imported as a node of a single default category.

For example, the following spreadsheet can be dropped onto the project space. It's a travel log with three columns headed _date_, _from\_country_, and _to\_country_ .

*   A node representing a single travel event is created for each row. All the nodes are assigned a single category labeled with the name of the file (i.e. _COVID-19 Travel Log - Sheet1)_.
    
    ![](/02_01_02_ImportCSVCovid1080.png)
*   The column headings in the file are assigned as property names: _date_, _from\_country_, and _to\_country_, and property values are transferred for the respective nodes. In the _**Table**_ panel, you can inspect the imported nodes and their property values.
    
    ![](/02_01_03_CSVImportMapping1080.png)

Starting with unconnected nodes, you can create connected graph data using GraphXR's navigation, selection, and transformation tools. In particular, the _**Transform**_ panel provides powerful ways to create and/or simplify categories and properties as well as relationships.

## Importing graph data by drag and drop

When you import **graph data** by drag and drop, such as graph data from a _.JSON_ file, ._graphxr_ file, or GraphXR Snapshot archive (_.graphxrsnapshots_ file), the categories, relationships, and their properties are included. The data also retains the 3D layout, position in the graph space, and view perspective it had when it was saved.

Unlike importing ._CSV_ or _.JSON_ files, importing graph data from GraphXR ( _.graphxr_ files, _.graphxrsnapshots_ archives, or data _Views)_ clears any data that may already be in the project space. To save data you want to retain, first go to the _**Project=>Data**_ tab and choose _**Save GXRF**_ or _**Save CSV**_, or _**Save to Neo4j**_, if saving to a connected database is wanted.

When a _.graphxrsnapshots_ snapshot archive is dropped on the graph space, the **Snapshots** window appears. Existing data if any is replaced with one of the snapshot views.

**To select a snapshot view:**

1.  Click the arrow on the left edge of the **Snapshots** window to expand the snapshot archive and locate the snapshot you want.
    
    ![](/02_01_04_SnapshotStart720.png)
2.  Click the snapshot's **cloud** icon to import the data view.  
    For example, the geometric layout of graph data from the Game of Thrones demo shown below was saved as a snapshot, which can now be imported into any other GraphXR project.
    
    ![](/02_01_05_SnapshotEnd720.png)