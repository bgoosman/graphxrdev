The _**Filter**_ panel enables you to filter data by any _numerical_ property, including date and time, using multiple composable filters. An individual filter operates on a single property (of either nodes or edges). Creating multiple filters that operate at once lets you select data with any combination of numerical properties (for example, _transaction amount, date range_, etc.).

Data that meets filter criteria remain in the graph space where it can be selected using the _**Select Visible Nodes**_ button in the _**Filter**_ panel, or the _**Select Visible Nodes**_ toolbar icon. This is particularly useful for selecting and removing data that are not of interest. You can set filter criteria, select and delete the visible data, and then delete the filter to see the remaining data.

## Filtering using multiple composable filters

This example uses a dataset of TV series viewership per episode displayed in a [parametric layout](../working-with-layouts/using-parametric-layouts). We can create a filter by date, then add a second filter for the number of viewers.

Date-time values need to be formatted as _YYYY-MM-DD hh:mm:ss_. Date-timestamps not in that format can be converted using an _**f(x)**_ function in the _**Transform**_ panel.

**To filter data using multiple filters:**

1.  Open the _**Filter**_ panel. First we’ll filter by date.
    
2.  From the _**Node Properties**_ menu, choose the _episodeAirdate_ property.  
    The filter is labeled with the property name and the category or relationship label (e.g. _episodeAirdate_(_Episodes_)). A slider shows the range of the property's timestamp values.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536681/04_03_01_Filter1440.png?api=v2)
3.  Set a range of dates using the _**Min**_ and _**Max**_ selectors under the slider. For filtering by date, you can click the value to display a calendar and select dates. You can lock down a range of values, then use the slider or animation playhead to filter using that range (for example, by year, month, or week).
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536681/04_03_02_FilterLockRange1440.png?api=v2)
4.  Now add a second filter for viewership. We select the _millionViewers_ property from the _**Node Properties**_ menu.
    
5.  To set a range of amounts, enter minimum and maximum values in the _**Min**_ and _**Max**_ text boxes (e.g. 5 and 10).
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719536681/04_03_04_FilterViewers1440.png?api=v2)
    
    The view in the graph space now includes only the filtered data. List items in the legend are updated to show the new numbers for each category, relationship, etc.  
      
    For dynamic presentation of data, the animation playhead lets you play through the range of filtered values automatically. You can set start and ending values on the slider, then enter a duration and select options for the direction of play and for continuous looping through the filter values. Each filter has its own independently set playhead.
    

## Clearing a filter

*   Click the _**Delete**_ button above the filter’s slider, or click the property name in the _**Node Properties**_ menu.
    

You can dismiss the _**Filter**_ panel and continue working with the filtered data.

To clear all existing filters so that you can see all your data again, you must clear (i.e., delete) all your filters. When the menu panel is closed, clicking the green _**Reset**_ tab clears all existing filters and returns data to a force layout.

Filters do not persist when you exit the project. When you load a saved _**Snapsho**_**t** of a filtered graph, filters are not included, but the data that was filtered out is hidden and can be restored by clicking the _**Un-hide Selection**_ icon.

## Saving or deleting filtered nodes using Select Visible Nodes

Filters do not delete data; it must be explicitly selected and deleted. You can delete either the visible nodes, or nodes that have been filtered out.

**To delete visible nodes:**

1.  Click _**Select Visible Nodes**_ and press _**del**_ or _**backspace**_.
    
    The graph space appears empty.
    
2.  To restore data you wanted to keep, clear your filters by clicking the _**Del**_ button to the right of the filter’s slider (or the _**x**_ next to the property name in the _**Node Properties**_ menu).
    

**To delete filtered nodes:**

1.  Click _**Select Visible Nodes**_ (the nodes you want to keep).
    
2.  Clear your filters by clicking the _**Del**_ button to the right of the filter’s slider (or the _**x**_ next to the property name in the _**Node Properties**_ menu).  
    All the data appears, with the nodes you want still selected.
    
3.  Click _**Inverse (Ctrl**+**I)**_ to invert the selection, and press _**del**_ or _**backspace**_ to delete.