The **Project** panel’s **Settings** tab includes options to set the appearance of the graph space and the project-wide appearance of nodes and edges.

![](/03_01_01_DisplaySettings.png)

## Setting display of the graph space

For the graph space, you can choose a dark or light theme, and to show or hide the _**Snapshots**_ window and information panels. You can also scale color density of nodes and edges to enhance 3D visualization.

**To set display of the graph space:**

1.  Click to open the _**Project**_ Panel and _**Settings**_ tab.
    
2.  Set one or more of the following display options:
    

*   Click the _**Theme**_ icon to toggle between the default _dark_ mode and _light_ mode.
    
    ![](/03_01_02_DisplaySettingsTheme.png)
*   Click the _**Quick Info**_ checkbox to display an information pane when you roll over a node or edge. You can also use the _**Quick Info**_ icon in the context menu to toggle the rollover info pane on and off.
    
    ![](/03_01_03_DisplaySettingsQuickInfo.png)
*   Click the _**Show Snapshot**_ checkbox to display the menu bar for the floating _**SnapShots**_ window. This lets you display the _**SnapShots**_ dialog in the graph space only when you need it.
    
    ![](/03_01_04_DisplaySettingsSnapshots.png)
*   Use the _**Fog Density**_ slider to enhance (or reduce) the impression of a 3D space by scaling color density of nodes and edges depending on how close or far away from the viewer they are in the virtual 3D space. A fog density of zero (0) results in crisp rendering of all graph elements.
    
    ![](/03_01_05_DisplaySettingsFog.png)

## Setting display of nodes

You can scale the size of nodes and their captions, control whether an image or the pin icon is displayed on the node, and select an icon sheet for the project.

Options to set colors, icons, and captions for nodes by Category are available in the **Project** panel and **Category** tab, and by clicking the colored dot next to an item in the legend list.

**To set display of nodes:**

1.  Click to open the _**Project**_ Panel and _**Settings**_ tab.
    
2.  Set one or more of the display options for nodes, as outlined below.
    
    ![](/03_01_06_DisplayNodes.png)

*   _**Show Avatars checkbox.**_ Show images associated with nodes through a URL property of its Category. An attempt to load an image will be made for any property key of _\_photo_, _photo_, _avatar_, _image_, _picture_, or _icon_ which has a property value starting with _http_, _https_, or _ftp_. Formats supported are _jpg, jpeg, png, gif, bmp_. An image appears when you zoom in to a fixed virtual distance from the node. When you zoom out from that point the color and icon selected for the Category displays instead. To speed up navigation in the graph space you can deselect the _**Show Avatars**_ checkbox. Icons (if any) are still displayed.
    
*   _**Hide Pin Icon**_ checkbox. Hide the Pin icon that displays on a pinned node. The Pin icon can obscure graph patterns you want to visualize using color and added icons or images.
    
*   _**Node Size Scale**_ slider. Set a global value for the size of all nodes. This value is applied independent of mapping node size to one of its properties, and preserves the relative scale of different sized nodes.
    
*   _**Caption Size Scale**_ slider. Set a global value for the size of captions for both nodes and edges.
    
*   _**Node Caption Position**_ dropdown menu. Position options are _Right_, _Top_ (left-aligned or centered), _Bottom_ (left-aligned or centered), and _Vertical_.
    
*   _**Icon Mode**_ dropdown menu. Set a display mode for icons overlaid on nodes.
    
    ![](/03_01_07_SettingsIconModeMenu.png)
    
    Options are:  
    _**Background Transparent**_. Removes the node background. Only the icon is colored and the rest of the node circle is transparent.
    
    ![](/03_01_07b_DisplayIconBkTransparent.png)
    
    _**Icon Transparent**_. Makes the icon transparent, and overlays it on the node circle.
    
    ![](/03_01_07a_DisplayIconTransparent.png)
    
    _**Mix Color**._ Automatically selects a lighter, contrasting hue for the icon and overlays it on the node circle.
    
    ![](/03_01_07c_DisplayIconMixColor.png)

## Setting display of edges

Options for displaying edges let you scale edge width and caption size, use a curved or straight line, show or hide directional arrowheads, and display a blended, lighter color for edges that overlay one another.

Setting the color of edges by relationship is done either in the _**Project**_ panel and _**Relationships**_ tab, or by clicking the colored line next to a relationship in the _**Legend**_ list. Captions for edges, like those for nodes, are derived from one or more property values. You set them in the _**Project**_ panel and _**Relationship**_ tab using the _**AsCaption**_ property checkboxes.

**To set display of edges:**

1.  Click to open the _**Project**_ panel and _**Settings**_ tab.
    
2.  Set one or more of the following display options for edges:
    
    ![](/03_01_10_EdgeDisplay.png)

*   _**Alternate Caption Rendering**_ checkbox. Use a more compact rendering of captions which may be more legible.
    
*   _**Show Relationship Name**_ checkbox. Label every edge with its relationship name.
    
*   _**Use Curve Line**_ checkbox. Represent edges as curved lines rather than straight lines. This is especially useful when pairs of nodes in a graph share multiple relationships.
    
*   _**Hide Arrow**_ checkbox. Hide the arrowheads that show the edge direction.
    
*   _**Blend Edges**_ checkbox. This enables additive blending of edge color such that multiple edges stacked on top of one another will appear brighter.
    
*   _**Dash Line**_ checkbox. Render edges as a dashed, rather than a solid line.
    
*   _**Edge Width Scale**_ slider. Set a global value for the width of all edges.
    
*   _**Caption Size Scale**_ slider. Set a global value for the size of captions for both nodes and edges.