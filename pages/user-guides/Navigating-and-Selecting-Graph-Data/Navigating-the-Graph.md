To navigate the graph on the desktop:

*   Use mouse and/or keyboard shortcuts to pan, rotate, and zoom in and out of the view, enter full screen mode, and display information windows.
    
*   Use the _**Center To**_ and _**Fly Out**_ toolbar icons to reposition your view of the graph.
    
*   Use full-text keyword search on properties of the graph data to search for nodes and center the graph on them.
    
*   Open a _**Table**_ to search for and center on one or more nodes or edges and optionally, select the data.
    

Navigation controls center on any selected data, or on all the data if no data are selected. You can simply left-click on a node or edge to select it. For the full range of available selection options, see [Selecting Graph Data](https://kineviz.atlassian.net/wiki/spaces/~5fb2d973d670b8006e5d6cbd/pages/1719536399/Selecting+Graph+Data).

## Using navigation shortcuts

You can use mouse and/or keyboard shortcuts to pan, rotate, and zoom in and out of the view, enter full screen mode, and display information windows.

You can also use the mouse to operate GraphXR’s GUI navigation controls.

The following table lists available desktop navigation shortcuts.

| **Action** | **Shortcut Keys** | **Description** | **Function** |
| --- | --- | --- | --- |
| Pan | _**Left mouse click**_ **drag** or  <br>_**1**_+_**Left mouse click**_ **drag** | Pan right, left, up or down. | Navigation |
| Zoom | _**mouse scroll**_ or  <br>_**2**_+_**left mouse click**_ **drag** | Drag up to zoom in, down to zoom out | Navigation |
| Fast Zoom | _**Ctrl+left mouse click**_ **drag** | Faster zoom: drag up to zoom in, down to zoom out |     |
| Rotate (Manual) | _**Right mouse click**_ **drag** or  <br>_**3**_+_**Left mouse click**_ **drag** | Rotate right, left, up or down, centered on a selection, or the center of all nodes. | Navigation |
| Rotate (Automatic) | _**Ctrl**_+_**O**_ | Toggle to rotate all data continuously around a selected center, or stop rotating. | Navigation |
| Stepwise Move | _**Arrow key click**_ (_right_, _left, up_, or _down_) | Move all the data a step right, left, up, or down. | Navigation |
| Reset view | _**Alt**_+_**Shift**_+_**R**_ | Reset entire view to the center of the graph. | Navigation |
| Show info | _**Ctr**l_+_**I**_ or  <br>_**double-left click**_ | Displays the information window for a selected node. | Information |
| Hide menu | _**Esc**_ | Hides a panel (i.e. Project, Table, etc.) or information window. | Information |
| Full Screen | _**Ctrl**_+_**F**_ | Enter full screen mode. Press _**Esc**_ to exit full screen. | Navigation |
| Center on a node | _**c+double-left click**_ | Selects a node, centers the graph on it, and displays its information window.  <br>_**NOTE:** Click the **Center To** toolbar icon to center the view on selected nodes._  <br>_Click the **Fly Out** toolbar icon to center all the data in the browser window._ |     |
| Show info | _**Ctr**l_+_**I**_ or  <br>_**double-left click**_ | Displays the information window for a selected node. | Information |

**To display** _**shortcut keys**_ **reference:**

*   In a project’s graph space, click the _**Shortcut Key**_ icon located at the lower left of the browser window.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536304/04_01_01_ShortcutKey.png?api=v2)

## Navigating with Fly Out and Center To

The _**Fly Out**_ and _**Center To**_ icons on the context toolbar let you reposition your view of the graph.

*   Click the _**Fly Out**_ icon to display all the graph data centered in your browser window. This is equivalent to clicking the _**Reset**_ circle in the GUI navigation controls.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536304/04_01_02_FlyOut720.png?api=v2)
*   Click the _**Center To**_ icon to zoom in to a view of the data centered on a selected node or nodes.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536304/04_01_03_CenterTo720.png?api=v2)

## Navigating using a keyword search

You can use full-text keyword search on properties of nodes in the graph to select and center the graph on one or more nodes.

**To locate a node using a keyword search:**

1.  Click the icon to the right of the search bar at the top of the graph space to toggle to _**Search From Graph**_.
    
2.  Enter a search term. For example, “win” to find a character named “Wind”.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536304/04_01_04_KeywordGraph720.png?api=v2)
    
    As you enter the term, all nodes with property values matching the search term are selected. A list by category and node of matching results appears below the search bar. The example search returned two matching Character nodes, one of which is the one we want.
    
3.  Click the airplane icon on the left to select that node and center it in the graph space.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536304/04_01_05_KeywordFlyTo720.png?api=v2)

You can roll over any individual result to display a quick information panel with more details.

## Navigating using a Table

Using the category or relationship of a node or edge, you can search a table and click on one of its rows to center the graph on a node or edge of interest.

**To navigate to a node or edge from a table:**

1.  Click _**Table**_ in the Main Menu.
    
2.  In the _**Table**_ panel's _**Category**_ tab, click a category to display a table of its nodes in the graph.  
    OR  
    In the _**Table**_ panel's _**Relationship**_ tab, click a relationship name to display a table of its edges in the graph.
    
3.  Enter a search term in the _**Search**_ field.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536304/04_01_06_TableSearchSelect.png?api=v2)
4.  You can  
    • Click _**Select All**_ to select all the search results.  
    OR  
    • Click the table row for the node (or edge) you want.  
    The graph centers on the node (or edge), and you can then use _**left mouse click**_ to select it.
    

In a table, property values are shown as columns in alphabetical order by property name. Use the horizontal scroll bar to locate the property values returned by the search.