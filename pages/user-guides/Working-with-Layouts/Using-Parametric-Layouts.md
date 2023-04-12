A _**Parametric**_ layout enables you to create scatter plots by displaying any numerical property value encoded in your data on X-, Y-, or Z- axes.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537984/08_02_01_ParametricLayout1320.png?api=v2)

You can:

*   Select a numerical property to be displayed on the X-, Y-, and Z- axes.
    
*   Set an _**Advanced Range**_ (minimum and maximum) of values to be displayed.
    
*   Adjust the scale of the axes using the _**Axis**_ slider.
    
*   Choose to show or hide the _**Axes**_ and/or the _**Grid.**_
    
*   Click the _**Enable Force Layout**_ icon to additionally display in a force-directed layout the connected nodes that don’t have the selected properties. The default is to collapse these nodes at the origin, because displaying them usually obscures the parametric scatter plot.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537984/08_02_04_EnableDisableForce720.png?api=v2)
*   _**Apply**_ the layout, or _**Reset**_ the graph to the layout you started with.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537984/08_02_04_AxesGrid720.png?api=v2)

Your parametric layout is saved in the lower part of the panel, and you can:

*   Click _**Apply**_ to re-apply any of the saved parametric layouts.
    
*   Click _**Delete**_ to delete a saved parametric layout.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537984/08_02_05_ApplySaved.png?api=v2)

**To create a parametric layout:**

1.  Click to open the _**Layout**_ panel and choose the _**Parametric**_ tab.
    
2.  Choose a property for the X-, Y-, and Z-axes from the drop down menus.  
    **NOTE:** You can flatten the layout to a 2D projection by choosing _none_ as the Z-axis.
    
3.  Optionally, click the _**Advanced Range**_ checkbox to set a range of property values to display.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537984/08_02_02a_ParametricAdvRange720.png?api=v2)
4.  Use the _**Axis**_ slider to adjust the size of the scatterplot space.
    
5.  Click the _**Show Axes**_ checkbox to show labeled X-, Y-, and Z- axes. Click the _**Show Grid**_ checkbox to add gridlines.
    
6.  Click _**Apply**_ to apply the parametric layout.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537984/08_02_04_AxesGrid720.png?api=v2)
    

Parametric layouts are deleted once you log out of the project. However, saved layouts do persist in a _**Snapshot**_ archive or data _**View**_.

Once you are done designing your scatter plots, you can save a _**Snapshot**_ or data _**View**_, and then _**Reset**_ the data to the layout you started with.

For example, if you started with geospatial data pinned to a map, but crafted another view of it in a parametric layout, clicking _**Reset**_ returns you to the map layout.