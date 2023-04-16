_**Aggregate**_ lets you gather properties from a node's neighboring nodes or edges, optionally perform a function on those values, and write the result back to the origin node. You can use _**Aggregate**_ to generate quantitative data relating to how graph data are connected. For example, in a telephone call log, you can aggregate the number of incoming and outgoing calls for a given caller, and write that aggregate value as a property on each caller node.

The _**Aggregate**_ transform starts from a node, collects neighbors connected by a specified relationship, calculates new aggregate property values, and writes them back to the original node as a new property.

You can aggregate along either a property of neighbor nodes or a property of connecting edges.

## Preset formulas for an Aggregate property

Preset formulas are available for often-used calculations, as shown in the following table. You can also enter a _custom_ javascript formula.

| **Preset** | **Function** | **Format** |
| --- | --- | --- |
| _custom_ | Editable format |     |
| _take first_ | Copies the first value of another property. | (neighborPropValues) => \_.size(neighborPropValues) > 0 ? neighborPropValues\[0\] : null |
| _count_ | Calculates a value based on number of connections. | (neighborPropValues) => \_.size(neighborPropValues) |
| _sum_ | Sums the values of the selected property. | (neighborPropValues) => \_.sumBy(neighborPropValues,d => Number(d) \| 0) |
| _average_ | Averages the values of the selected property. | (neighborPropValues) => _.sumBy(neighborPropValues,d => Number(d) \| 0)/(_.size(neighborPropValues) > 0 ? \_.size(neighborPropValues) : 1) |
| _range_ | Finds the lowest and highest value of the selected property. | (neighborPropValues) => `${_.minBy(neighborPropValues, d => Number(d) \| 0)} - ${_.maxBy(neighborPropValues, d => Number(d) \| 0)}` |
| _max_ | Finds the maximum value of the selected property. | `(neighborPropValues) => _.maxBy(neighborPropValues, d => Number(d) \| 0)` |
| _min_ | Finds the minimum value of the selected property. | (neighborPropValues) => \_.minBy(neighborPropValues, d => Number(d) \| 0) |

Editing a preset moves it to the _custom_ item, where you can test or run the modified formula.

## Aggregating connections between nodes

Examples use the open-source dataset for the HBO series Game of Thrones. For a hands-on exercise, see our [How to GraphXR](https://helpcenter.kineviz.com/learning-center/HC/how-to-graphxr) tutorials.

We can use _**Aggregate**_ to find the total number of lines spoken on each Game of Thrones episode. The _Lines.csv_ file includes data about the dialog in the show, and the _Episodes.csv_ file includes details about each season and episode. We first transform data imported from these files as follows:

*   Use the [_**f(x)**_ transform](./using-fx-formulas) to calculate _seasonEpisode_ property values for the _Episodes_ category. This allows us to match the _seasonEpisode_ property in _the Lines_ category.
    
*   Use the [_**Link**_ transform](./using-link) to link lines to their respective episodes through a new _SPOKEN\_ON_ relationship.
    

**To aggregate connections between nodes:**

1.  Select one or more nodes. For example, click the _Episodes_ category to select its nodes.
    
2.  Open the _**Transform**_ panel and _**Aggregate**_ tab, and enter the following:  
    • In _**Aggregate To Category**_, select _Episodes_.  
    • In _**Aggregate Along**_ select the _SPOKEN\_ON_ relationship.  
    • Click _**Property from neighbor nodes**_ and select the _lineCount_ property.  
    • In the _**New Prop**_ textbox, enter _totalLines_. This is the new aggregate property that will contain the total number of lines of dialog in an episode.  
    • In the _**Formula Name**_ menu, select the _sum_ preset. A sample result is displayed below the property name.
    
    ![](/06_03_01_Aggregate1320.png)
3.  Click _**Run**_. Since we are just adding a new property, the graph does not visually change.  
    A scrolling list below the _**Run**_ button displays error and completion messages.
    
    ![](/06_03_02_RunMessages720.png)
4.  To review the new _totalLines_ property, open the _**Table**_ panel, click the **Category** tab, and select _Episodes_. You can also _**Export**_ the entire table as a CSV, or open an _**Enhanced Table**_ to edit and export the table.
    
    ![](/06_03_03_AggregateTable1320.png)