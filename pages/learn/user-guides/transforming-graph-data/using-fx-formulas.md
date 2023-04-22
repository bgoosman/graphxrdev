With graph-based _f(x)_ _functions_ you can calculate values based on existing properties and write the results back to the source nodes or edges. This capability is similar to _formulas_ in Excel and SQL, and _functions_ in a MapReduce framework. An _f(x)_ formula lets you run javascript formulas on a single category or relationship. You select existing properties in the data to create new properties according to pre-defined or custom formulas.

## f(x) Preset formulas

The following table lists the available preset formulas and their general formats.

| **Preset** | **Function** | **Format** |
| --- | --- | --- |
| _toCustom_ | Editable format | (propVal,props) => propVal |
| _toNumber_ | String or Number => a Number | (propVal,props) => Number(propVal) \| 0 |
| _toString_ | String, Number, or Date => a String | (propVal,props) => String(propVal) |
| _toDate_ | Valid date-time =>  <br/>a _YYYY-MM-DD HH:mm:ss_ timestamp | (propVal,props) => moment(propVal).format('YYYY-MM-DD HH:mm:ss') |
| _toWeek_ | Valid date-time =>  <br/>a weekday (e.g. _Monday_) | (propVal,props) => moment(propVal).format('dddd') |
| _convertCustomDate_ | Custom date format _MM,DD,YYYY_ => a _YYYY-MM-DD HH:mm:ss_ timestamp | (propVal,props) => moment(propVal, "MM,DD,YYYY").format('YYYY-MM-DD HH:mm:ss') |
| _fullName_ | Combine _firstName_ and _lastName_ property values =>  <br/>the new property, as a full name. | (propVal,props) => !props\['firstName'\] ? propVal : `${props['firstName']}-${props['lastName']}` |

Editing a preset moves it to the _**toCustom**_ item, where you can test or run the edited formula.

## Running a preset f(x) formula

Formulas apply to a single category or relationship at a time. However, you can run more than one formula at a time on a selection of data.

In the following example numerical data in the file _ImportSample.csv_ has been entered as a text string. We'll use the _**toNumber**_ preset to transform the data to numerical values.

**To run preset formulas to create and populate new properties:**

1.  Deselect all the data in the graph space to ensure that the transform applies to all nodes or edges of a specified Category or Relationship.
    
2.  Open the _**Transform**_ panel and _**f(x)**_ tab.
    
3.  Select a _Category_ or _Relationship_ for the data you want to operate on (e.g. _ImportSample_).
    
4.  In the _**Apply Formula to Properties**_ dropdown, select the property value to transform (e.g. _Score_), or click the _**+**_ icon in the table of properties below the dropdown to select it.  
    The review panel below the properties shows a sample of existing values and their data formats.
    
5.  Choose a preset formula from the dropdown menu, in this case, _**toNumber**,_ to convert the _Score_ text string to a numerical value.
    
    ![](/06_01_01_FunctionStart1320.png)
6.  Enter a new property name (e.g. _scoreNumerical_) to save the result. Or you can use the default, which simply adds _\_new_ to the _**Selected Property**_ name.  
    **NOTE:** It is usually best to create a new property and give it a descriptive name. Entering the source property name overwrites the existing data, which may be appropriate in some cases.
    
7.  Check the sample input and output property values for the formula (displayed beneath the _**Selected Property**_ and _**New Property Name**_, respectively) to see that the formula returns values you expect.  
    **NOTE:** If the input property value is invalid for a selected formula the area below the new property name displays a brief description of the problem.
    
8.  In this example, we'll run just one formula. However, at this point, you can:  
    • Add more formulas (for example to transform other property values available in the selected Category or Relationship).  
    • Delete a formula by clicking its Trash icon.
    
9.  Once you have added all the formulas you want, you can scroll to the bottom of the panel and either:  
    • Click _**Test**_ to run a test and review the results.  
    OR  
    • Click _**Run**_ to create the new property values for the category or relationship.  
    The new property will be added to the selected category or relationship and the calculated value will be added to each node (or edge) that includes valid input.  
    Messages appear below the _**Run**_ and _**Test**_ buttons showing the results, including the number of nodes with the new property.
    
    ![](/06_01_02_FunctionDone720.png)

## Running a custom f(x) formula

Custom formulas enable you to use javascript functions to handle complex data conversions, and also to bring multiple properties into a single property. The libraries [_Lodash.js_](https://lodash.com/docs) and [_Moment.js_](https://momentjs.com/docs/) are supported.

For a hands-on exercise using the Game of Thrones datasets, see our [How to GraphXR](https://helpcenter.kineviz.com/learning-center/HC/how-to-graphxr) tutorials.

We'll use data from the HBO series Game of Thrones to illustrate using a custom formula to reformat existing properties and write them to a new _seasonEpisode_ property. First we import two CSV files by drag and drop:

*   _Lines.csv_, with details about dialog spoken in the show. In the imported the _Lines_ category, season and episode number are combined into a single _seasonEpisode_ property as a text string (e.g. 'S1E3').
    
*   _Episodes.csv_, with details about the show's episodes. In the imported _Episodes_ category, _seasonNumber_ and _episodeNumber_ are separate properties with integer values (e.g. '1'). We want these combined into a single string and written to a new _seasonEpisode_ property to match _Lines_.
    

**To run a custom formula to create a new property:**

1.  Deselect all the data in the graph space to ensure that the transform applies to all nodes or edges of a specified Category or Relationship.
    
2.  Open the _**Transform**_ panel and _**f(x)**_ tab.
    
3.  Click _**Category**_ and select the _Episodes_ category from the dropdown menu.
    
4.  Click _episodeNumber_ in the list of properties to add it to the _**Selected Property**_ list and display your _**Input Formula**_ options.
    
5.  In the _**New Property Name**_ textbox, enter _seasonEpisode_.
    
6.  Select _toCustom_ from the _**Input Formula**_ menu, and enter the following javascript formula:
    
    ```
    (propVal,props) => 'S'+props.seasonNumber+'E'+props.episodeNumber
    ```
    
7.  As you enter a formula, a sample result appears beneath the new property name. If there is a problem with the formula or the source data, a brief message appears (for example, "Invalid input").
    
    ![](/06_01_03_CustomFcnStart1320.png)
8.  Click _**Test**_ to test the custom function, or _**Run**_ to run it.  
    In either case a message shows the result of the transformation, including the number of nodes with the new property.
    
    ![](/06_01_04_CustomFcnDone1320.png)

To inspect the new _seasonEpisode_ property and its values, open the _**Table**_ panel and select the _Episodes_ category. You can also see the new property in a node's information panel.

![](/06_01_04_CustomFcnTable1320.png)