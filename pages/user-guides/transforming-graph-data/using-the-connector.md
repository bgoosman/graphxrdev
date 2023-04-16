The _**Connector**_ provides access through APIs to selected third-party applications and services. These can be useful for injecting data from external sources, or modifying existing data in your graph.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719537692/06_07_01_ConnectorAddress1320.png?api=v2)

The _**Connector**_ is available only in Enterprise subscriptions of GraphXR.

The following connectors are available by default:

*   _**Address => Geo**_, to transform a physical address to geospatial (latitude and longitude) coordinates.
    
*   _**IP => Geo**_ to transform an IP address to geospatial coordinates either through [_ipgeolocation.io_](http://ipgeolocation.io), or [_iplocation.com_](http://iplocation.com)_._
    
*   _**ShortURL to FullURL**_, to complete a short URL address.
    

Additional connectors may also be installed to address specialized needs.

**To run an application in the Connector:**

1.  Deselect all data, to operate on all your data, or make a selection, for example, by clicking a category name on the Legend.
    
2.  Open the _**Transform**_ panel and _**Connector**_ tab and select one of the applications from the drop down menu.
    
3.  Select a _**Proxy Setting**_. This will be either _**No Proxy**_, or _**HTTP Proxy**_, where you enter details for the _**Host**_, _**Port**_, _**Username**_, and _**Password**_.
    
4.  Open the _**API Setting**_ window to enter an API token or key.
    
5.  Select a _**Category**_ and the property (_prop_) that will supply the input.
    
6.  For a geospatial transform, enter the name of the new longitude and latitude properties that will be created. The default names are _lng_ and _lat_, respectively.
    
7.  Click the _**Create New Node**_ checkbox if you want a new node category to be created. In that case, you must also enter a _**New Node Prefix**_ and a _**New Rel Prefix**_ (for the new relationship that will be created). You can use the default entries, or enter your own prefixes.
    
8.  Click the _**Skip Finished data**_ checkbox to update only recently added data, not replace already processed data.
    
9.  Click _**Run**_, or _**Stop**_ to stop an already running process.