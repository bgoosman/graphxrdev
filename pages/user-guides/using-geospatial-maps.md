The _**Map**_ panel lets you work with data positioned on a world map (using [Mapbox](https://www.mapbox.com), Google, or OpenStreetMap servers). When you open the _**Map**_ panel to display the world map, nodes in the graph space that have latitude and longitude property values are automatically dropped onto the map.

![](/09_01_01_MapView.png)

Nodes with no latitude and longitude coordinates which are connected to those on the map are also displayed, with their connecting edges, positioned above the map. By default, a force-directed layout is used for these nodes, unless they have been arranged using a geometric layout.

![](/09_01_02_PhotoMap1320.png)

Nodes with geospatial coordinates are pinned to the map until you hide the map, at which time they are released and displayed in the default force-directed layout.

## Format for Latitude and Longitude coordinates

Geospatial data must be encoded in the data in separate latitude(_lat_) and longitude(_lng_) properties as follows:

|     | **Property Name** | **Example Value** |
| --- | --- | --- |
| Latitude | _lat_ | `-74.006393` |
| Longitude | _lng_ | `40.714172` |

The _lat_ and _lng_ values must be floating point, not strings. Most lat-long data are encoded that way, but if not, strings can be transformed using the _toNumber_ or a custom transform in the _**f(x)**_ transform panel.

The .KML and .KMZ ([Keyhole Markup Language/Keyhole Markup Zip](https://en.wikipedia.org/wiki/Keyhole_Markup_Language)) files used by mapping applications such as Google Earth contain appropriately encoded coordinates, and you can map these files directly in GraphXR.

![](/09_01_03_LatLong1320.png)

## Navigating and working with mapped data

When you click _**Map**_ in the _**Main Menu**_, the _**Map**_ panel opens, automatically displaying nodes pinned to their geospatial locations on a map surface rendered in the 3D graph space.

Desktop navigation and data selection is the same as for other layouts. You can:

*   Navigate the mapped nodes using any GraphXR navigation method (for example, pan, zoom, rotate, _**Center To**_ a single node or selection of nodes, and _**Fly Out**_ to view all the mapped data)
    
*   Select nodes using any selection method, and perform any of the data transformations, editing, or tagging available in the graph space.
    
*   Save snapshot views for use in data visualization.
    

For example, in the map below, tags have been created to assign regions to sets of nodes.

![](/09_01_03_TaggedMap1320.png)

You can use a tag to select nodes by region then click the _**Center To**_ icon to zoom in to the center point of the selection on the map.

## Using the Map Panel

Click the _**Map**_ menu item to display the _**Map**_ panel, which includes

*   _**Show Map**_ to re-set the map (for example, after you have zoomed in to selected data, or flown away to a search location).
    
*   _**Hide Map**_ to dismiss the map and return the mapped data to the default force layout.
    
*   _**Search Location**_ bar to enter a place name and fly to that location.
    
*   _**Map Control**_ to reposition the map and adjust its boundaries.
    
*   _**Setting**_ to select a map server, install custom map servers, and set _**Mode**_ and _**Auto Fitting**_ options.
    
    ![](/09_01_04a_MapPanel720.png)

### Using Show Map and Hide Map

Opening the _**Map**_ panel automatically displays a map with boundaries set according to the coordinates in your data, and drops your graph data onto it.

*   Click _**Hide Map**_ to hide the map and return the data to the default force layout.
    
*   Click _**Show Map**_ to:
    
    *   Show the initial map again after using _**Hide Map**_.
        
    *   Reset the map to its initial position after using _**Search Location**_ or _**Map Control**_.
        

You can click the _**Map**_ panel icon to dismiss the panel. This only removes the panel, not the map. When you are done working with a map, click _**Map**_ to open the panel, then click _**Hide Map**_.

### Flying to a Search Location

You can fly to any named world location or region by entering its name in the _**Search Location**_ bar. There does not need to be any mapped data for that location.

_**To fly to a named location**_**:**

1.  Open the _**Map**_ panel.
    
2.  In the _**Search Location**_ bar, enter the name of a location (e.g. _United Kingdom_) and click it on the search list.  
    The map centers on the named location.
    
    ![](/09_01_04b_SearchMap1320.png)
3.  To reset the map, clear the search by clicking the _**x**_ icon in the search bar, then click _**Show Map**_.
    

### Using Map Control

A map boundary is initially set based on the locations in the graph data, but a wider view is often desirable, for example, to display additional areas for which there is no data. _**Map Control**_ mode lets you adjust the map boundary temporarily.

When you click _**Map Control**_, 3D navigation is de-activated.

**To adjust map boundaries:**

1.  Open the _**Map**_ panel and click _**Map Control**_.  
    The button turns blue, indicating you are in map control mode.
    
    ![](/09_01_06_MapControl1080.png)
2.  Set the map boundaries with the following mouse controls or their equivalent keyboard shortcuts:  
    • Pan (_l**eft mouse click**_ **drag**)  
    • Zoom (_**mouse scroll**_ or _**2**_+_**left mouse click**_ **drag**)
    
3.  Click _**Map Control**_ to exit and resume 3D navigation with the adjusted map.
    

Whenever you click _**Show Map**_, map boundaries are reset to the initial area bounded by the locations in the data. To retain adjusted boundaries you set in **Map Control**, de-select the _**AutoFitting**_ checkbox in the _**Setting**_ dialog.

### Using Map Setting options

Map _**Setting**_ options let you:

*   Select an installed map server (e.g. MapBox, Google or OpenStreetMap)
    
*   Add or delete custom map servers.
    
*   Set a _**Wall**_ or _**Floor**_ mode.
    
*   Select or de-select the _**Auto Fitting**_ option.
    
    ![](/09_01_05_MapSetting720.png)