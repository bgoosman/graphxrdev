The _**Algorithm**_ panel provides a selection of graph algorithms widely used in graph analytics, organized in _**Path Finding**_, _**Centrality**_ and _**Community Detection**_ tabs.

The _**Path Finding**_ algorithm traces the path between a selected start and end node and applies an optional weight.

_**Centrality**_ and _**Community Detection**_ algorithms return a numerical value for each node which are basically measures of grouping or components in the graph.

For an e-book introduction to graph algorithms and their uses, see  
[Graph Algorithms: Practical Examples in Apache Spark and Neo4j](https://neo4j.com/lp/book-graph-algorithms-ms/?utm_source=bing&utm_medium=ppc&utm_campaign=*NA%20-%20Search%20-%20Graph%20Algorithms&utm_adgroup=*NA%20-%20Search%20-%20Graph%20Algorithms%20-%20Graph%20Algorithm&utm_term=graph%20algorithms&msclkid=b90c0620812219ca24845b97d8af0b68%5BGraph).

## Using the Path Finding Algorithm

The _**Path Finding**_ algorithm traces the path between selected start and end nodes. If relationships in the path have a property that can be used as a weighting factor, you can select a path weighting factor. The nodes and edges on the path are traced and selected.

Once a path has been successfully traced, you can click _**Spotlight Path**_ to display only the nodes and edges involved.

**To find a path between connected nodes:**

1.  Open the _**Algorithm**_ panel and _**Path Finding**_ tab.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537719/07_00_01_AlgorithmPanel720.png?api=v2)
2.  Select one or more starting nodes in the graph, and click _**Add to Start**_.  
    Your selected nodes are listed in _**Start Nodes**_.  
    **Note:** An error message displays if you select too many start and end nodes such that there are more than ten pairs for tracing the shortest path.
    
3.  Now select ending nodes in the graph, and click _**Add to End**_.  
    The selected nodes are listed in _**End Nodes**_.  
    **Note:** You can click _**Remove Start Node**_ or _**Remove End Node**_ to delete your current selection and choose other nodes.
    
4.  In the _**Weight Property**_ menu you can select a property of one of the relationships in the path to be used as a path weighting value, or leave the default _**Ignore Weight Property**_ selected. If the relationships have no properties (which is often the case), _**Ignore Weight Property**_ will be the only choice.
    
5.  Click _**Trace Path**_ to display and select the nodes and edges for the shortest path(s) between your start and end nodes.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537719/07_01_01_AlgorithmPath1320.png?api=v2)
6.  Once the path has been successfully traced, you can click _**Spotlight Path**_ to display only the nodes and edges involved. The button label changes to _**Un-spotlight Path**_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537719/07_01_02_AlgorithmSpotlight1320.png?api=v2)
    
    At this point, you can save and share a _**Data View**_, save a _**GXRF**_ file, or save and export a _**Snapshot**_.
    
7.  Once you are done inspecting the paths, click _**Un-spotlight Path**_ to return the all the data to the graph. Note that the path will no longer be selected. However, the start and end nodes you selected persist until you remove them, so you can click _**Trace Path**_ again.
    

## Using Centrality or Community Detection Algorithms

GraphXR includes a selection of commonly used _**Centrality**_ or _**Community Detection**_ algorithms, which are designed to calculate measures of connectedness (both with respect to distance and strength of connection) in multi-dimensional data. There are many such algorithms, and each has its own characteristic behavior and strengths.

When you run a _**Centrality**_ or _**Community Detection**_ algorithm the computed result is added as a property to each node in the graph. The following table lists the available algorithms and the property names GraphXR uses to store the results.

|     |     |     |
| --- | --- | --- |
| **Algorithm Type** | **Algorithm** | **Property Name** |
| **Centrality** | _**PageRank**_ | _pageRank_ |
| _**Betweenness**_ | _betweenness_ |
| _**Closeness**_ | _closeness_ |
| _**Eigenvector**_ | _eigenvector_ |
| **Community Detection** | _**Connected Component**_ | _componentId_ |
| _**Strong Connected Component**_ | _strongComponentId_ |
| _**Louvain**_ | _louvainComponentId_ |
| _**Label Propagation**_ | _labelPropagationId_ |

The numerical results can be displayed (for example, in a scatter plot), accessed for other processes within GraphXR, or exported for use in other graph analytics or statistics applications.

**To run a Centrality or Community Detection algorithm:**

1.  In the _**Algorithm**_ panel, click to open the _**Centrality**_ or _**Community Detection**_ tab.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537719/07_01_04_Centrality1320.png?api=v2)
2.  Click the button for the algorithm you want to run.  
    A message displays when the calculation is finished. The property and calculated value is added to each node in the graph. To see the results, you can  
    Open a table.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537719/07_01_06_AlgorithmResultsTable.png?api=v2)
    
    OR  
    Inspect any node’s information panel.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719537719/07_01_05_CommunityDetection1320.png?api=v2)