GraphXR provides a wide variety of flexible layout options for displaying data in the project space. By enabling you to select, organize and separate data in the graph space, layouts make it possible to create and share information-rich visualizations of high-dimensional data.

Detailed control of layouts is provided in _**Layout**_ panel. including sorting by property value, positioning and setting orientation along X- Y- and Z- axes, and much more,

Layouts (and the geospatial mapping provided in the _**Map**_ panel) rely on the ability to fix, or _**Pin**_ nodes in 3D space in various specific ways, and to _**Release**_ the pinned nodes when desired.

The _**Layout**_ panel organizes detailed controls to adjust layouts in the following tabs:

*   _**Force**_. The default force-directed layout renders nodes and edges in the graph space using a complex physics simulation that attempts to keep individual nodes and edges close enough, while reducing the number of crossing lines or hidden entities. In the _**Force**_ layout tab you can adjust simulation parameters including link strength and distance, gravity, collision, and more.
    
    ![](/08_00_01_ForceLayout720.png)
*   _**Parametric**._ This layout lets you create scatter plots based on parameter values.
    
    ![](/08_00_02_ParametricLayout720.png)
*   _**Geometric**._ These layouts let you arrange any selected group of nodes in a _**Line**_, _**Grid**_, _**Circle**_, _**Spiral**_, _**Cube**_, or _**Spring**_ arrangement. Selections can be individually ordered by property value, scaled, placed, and rotated along X-, Y-, or Z axes in the project space.
    
    ![](/08_00_03_GeometricLayout720.png)
    
    You can also arrange nodes in hierarchical _**Ring**_ or _**Tree**_ layouts of a specified depth and relative edge
    
    length around selected nodes.
    
    ![](/08_00_04_EgoRings.png)
    
    **NOTE**  
    A _**Quick Layout**_ menu is available from the toolbar that lets you apply basic geometric layouts (_**Line**_, _**Grid**_, _**Circle**_, _**Spiral**_, _**Cube**_, or _**Spring**_) to any selection of nodes in one click, and to _**Expand**_ or _**Contract**_ the layout in pre-set increments. This provides fast and easy layouts for exploratory visualization, useful if ordering nodes by property value or fine-tuning the 3D orientation is not immediately needed.
    
    ![](/08_00_03a_GeoQuickLayout.png)
*   _**Tree**._ This layout automatically arranges nodes in a hierarchical tree structure.
    
    ![](/08_00_05_TreeLayout720%20copy.png)

A green _**Reset**_ flag appears next to the _**Layout**_ menu icon when you apply a new layout and then close the _**Layout**_ panel. You can click this _**Reset**_ flag to revert to the view you started with.

![](/08_00_06_ResetButton.png)