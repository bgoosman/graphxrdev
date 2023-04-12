Grove + GraphXR is designed to support development of customer-facing (read-only) dashboards, as well as collaborative (code-sharing) notebooks for data discovery and analytics. It is an authoring and publishing environment that runs in the browser with GraphXR.

For developers, Grove leverages [functional JavaScript](https://observablehq.com/@anjana/functional-javascript-first-steps) and open-source visualization packages such as [D3](https://d3js.org), [Vega-Lite](https://vega.github.io/vega-lite/), [Plotly](https://plotly.com/), and [Observable Plot](https://observablehq.com/@observablehq/introducing-observable-plot) to delve deeper into high-dimensional data. A Grove API is available to provide access to specific GraphXR functions and communication that are needed to load, transform, and display graph data.

To jump-start exploration and development, the Grove Demo project includes example notebooks that general users can access and that developers can use to learn from, copy, and craft their own notebooks. Examples demonstrate Grove basics such as:

*   Connecting graph data + local CSV/JSON files to your Grove notebook.
    
*   Using the Grove API to filter large datasets
    
*   Using open-source infographic libraries
    
*   Building Interactive search tables
    

Tutorials available in the Grove demo project use sample sets of publicly available data. You may eventually copy-and-paste the code you see in this tutorial into your own Grove notebook to practice. Reach out to [info@kineviz.com](mailto:info@kineviz.com) if you have any questions.

## Grove Demo Quick Tour

Grove is available in any GraphXR project. However, the Grove Demo project includes example notebooks we can use for a quick tour of key Grove functions and capabilities.

### Opening a Grove notebook

**To open a Grove demo notebook:**

1.  Log in to GraphXR and open the _Grove Demo_ project.
    
2.  Go to the _**Projects**_ panel and _**Extensions**_ tab, and select _**Grove**_ from the dropdown menu.
    
3.  Click the _**Panels**_ icon (ctrl+Alt+P) at the upper right to see demo Notebooks.
    
    Click the _**Overview**_ or _**Share**_ tabs to see notebooks available in the demo, either in tile or list view.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_01_GroveNotebookPanel1320.png?api=v2)
4.  Click to select a demo notebook. (e.g. _Map_, entitled _Geospatial Analysis_), and dismiss the _**Notebooks**_ panel. The selected notebook displays in the split screen. To use more of the screen you can click the _**Full Screen**_ icon at the upper right to use the entire screen, or the _**Airplane**_ icon to display the notebook in a separate window.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_02_GroveTourMap1320.png?api=v2)

### Navigating the notebook

A Grove notebook consists of cells of Observable-inflected javascript code. The code does not have to execute in the order it appears. Instead, cells that display results or require user interaction can be placed at the top, and other processing code can be organized in cells below, often in an Appendix.

The simple _Map_ notebook above loads geospatial data for counties, and displays the data on a map, colored by region. A _**Load Counties**_ button appears below the map.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_03_GroveCells1320.png?api=v2)

*   Roll over the small circles at the far right margin to see names of the cells in the notebook. Clicking a circle takes you to the code cell. In this notebook, a GraphXR API call is used, and Vegalite and D3 javascript packages provide data parsing and geospatial mapping.
    
*   Title bars located at the top of the window provide information about the project and the open notebook, ways to navigate Grove functions and to edit the code. **NOTE:** The top bar is divided into two, depending on the size of your browser window.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_05_MoreMenu720.png?api=v2)
    

#### Title bar functions

Depending on the width of your browser you see one or two title bars at the top that display:

*   The notebook name.
    
*   Browser _**history**_ icon. Click to display a list of the notebooks you’ve opened recently.
    
*   A _**close**_ icon to close and exit the notebook.
    
*   Notebooks _**Panel**_ icon, to display notebooks available to the project.
    
*   _**Folder**_ icon, to navigate to the Grove project folder.
    
*   _**More**_ icon (three dots), for a dropdown menu of additional functions:
    
    *   _**Screen Shot**_, to take a screen shot of onscreen display.
        
    *   _**Print**_, to print the displayed results.
        
    *   _**Import Files**_, to browse and select data to be imported.
        
    *   _**Export All**_, to export the entire notebook and its data in a .zip file.
        
    *   _**Help**_, for a useful list of keyboard shortcuts for many notebook actions, organized under _**File actions**_, _**Editing Code**_, and _**Cell Shortcuts**_ headings.
        
    *   _**Safe mode,**_ a code-only view that lets you work with issues that could crash or hang the normal editor.
        
    *   _**Full screen,**_ to toggle between full screen and split screen mode.
        
    *   _**Settings**_, to set various project-wide settings such as auto-save frequency, default star and access permissions, and the code theme used.
        
*   Badges for the contributors to the notebook.
    
*   _**View code**_ and _**Edit code**_ icons. This displays the javascript code cells and makes them editable.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_05_ViewEditCode720.png?api=v2)

An additional title bar includes information and action icons for the notebook, including:

*   _**Version**_ icon. Click to display a _**Version Control**_ history for this notebook.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_07_VersionHistory720.png?api=v2)
*   _**Publish**_ (globe) icon. Click to display a _**Publish Settings**_ dialog where you can change the permission level for the notebook or unpublish it.
    
*   The latest published time
    
*   File _**attachments**_, and connected databases(available only in private notebooks).
    
*   The last publication time, folder location, and size of the notebook.
    

### Accessing shared notebooks

Once you share a notebook, it appears under the _**Share**_ tab in the Notebooks panel.

You can also access a shared notebook under the _**Grove Links**_ tab. This may be a more immediate way to explore a shared notebook.

**To open a Grove Link notebook:**

1.  Go to the GraphXR _**Projects**_ panel and _**Grove Links**_ tab.
    
2.  Click the airplane icon next to the Notebook name (e.g. _Import NYERSDA csv_).
    
    The notebook opens in a separate window.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_20_GroveLinks720.png?api=v2)
3.  Click the _**Load Data**_ button in the example notebook, which loads selected csv data to the GraphXR graph space.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719538791/11_01_21_GroveLinks720.png?api=v2)
    
    If desired, you can review the code in the example notebook, or make a copy of this notebook.