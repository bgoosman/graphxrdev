The **Projects** page is your portal to create and manage individual GraphXR projects. It’s also where you review details of your GraphXR account and register your questions and comments.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_02_04_ProjectsPage1080.png?api=v2)

The menu at the top of the _**Projects**_ page lets you access and edit your GraphXR account or log out. _**Feedback**_ lets you log questions and comments for administrator review and response and _**Help**_ takes you to the Kineviz website where you can find learning resources and contact information.

A language selector menu enables you to choose UI elements labeled in either **English** or **Chinese**.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_01_cProjectsChinese1320.png?api=v2)

The body of the _**Projects**_ page includes areas to create and access GraphXR projects:

*   _**Recent Projects**_ displays projects you have recently opened.
    
*   _**My Projects**_ lets you **Create** a new project, and displays projects you’ve created.
    
*   _**Demo Projects**_ lets you select a demo project from those available using the _**Select Demo**_ dropdown.
    
*   _**Shared Projects**_ displays projects of other users which have been shared with you.
    

The _**Search Projects**_ bar at the top of the page lets you find one or more projects by name.

A display icon lets you display projects in a more compact _list_, instead of the default _tiles_.

![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_01_bProjectsList1080.png?api=v2)

## Explore a Demo Project

To get started quickly with GraphXR you can explore available _**Demo**_ projects.

**To open a Demo project:**

1.  Click the dropdown arrow next to _**Select Demo**_ and select a project from the menu.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_02_DemoMenu420.png?api=v2)
2.  Now click the demo project you selected to enter its graph space.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_03_DemoSelected420.png?api=v2)
3.  The project’s graph space will be empty when you open it.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_04_GraphSpace1320.png?api=v2)
    
    For Demo projects that are connected to a Neo4j database, you can click the **Project** menu item on the upper left side of the browser window to explore the categories and relationships in the connected database.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_05_DemoGOTCategories1320.png?api=v2)
    
    For example, in the Demo project with data for the HBO Game of Thrones series, categories such as **Character**, **House**, **Episode**, etc, and relationships such as **child\_of**, **married\_to**, **guarded\_by**, etc. have been created in the Neo4j graph database. You’ll also see the color assigned to each category (or relationship), and a list of their defined property names.
    

To explore the data, you’ll need to pull it into the graph space from the database. GraphXR provides several different ways to do this. For details, see [Import from Neo4j](../importing-saving-and-exporting-graph-data/import-from-neo4j.md).

## Create a Project

You can create a new GraphXR project and either leave the project unconnected, or immediately connect to a Neo4j database.

### Create a stand-alone project

Creating a project without connecting it to a Neo4j database can be useful for importing and working with data available in a variety of formats (e.g. CSV, SQL, JSON, GraphXR's GXRF and Snapshot files, and others). Once the project is created, you can import many types of data files simply by drag and drop, or select and model specific data using GraphXR’s [_**Mapping Editor**_](../importing-saving-and-exporting-graph-data/import-using-a-mapping.md).

**To create a stand-alone project:**

1.  In the _**Projects**_ page, click the _**+**_ icon next to _**Create**_ in the _**Your Projects**_ area.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_06_CreateProject1_540.png?api=v2)
2.  In the _**Project Name**_ text box, enter a descriptive project name. Make sure that _**Configure Neo4j Instance**_ is not checked.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_07_CreateProject2_540.png?api=v2)
3.  Click _**Confirm**_.  
    The new project appears under _**Your Projects**_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_08_CreateProject3_720.png?api=v2)

You can now:

*   Click the _**Edit**_ icon to edit the project, for example, to connect it to a Neo4j database.
    
*   Click the _**Clone**_ icon to duplicate the project.
    
*   Click on the project name to enter the project's graph space, which will be empty.
    
*   Click the project’s _**Enable Share/Disable Share**_ (Lock) icon to enable sharing of data views with another user. Share users you _**Invite**_ have access only to that project and the data views you share.  
    You can also click **ShareUI Config** to restrict share users' ability to navigate or edit the view.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_09_ShareIcons720.png?api=v2)
*   Click the _**Delete**_ (trash can) icon to delete the project.
    

### Create a project connected to a Neo4j database

You can connect a project to an existing Neo4j graph database by specifying the database and server details. Once the connection is established, you can review the project settings and enter its graph space.

**To create a project connected to a Neo4j database:**

1.  In the _**Projects**_ page, under _**Your Projects**_ click the plus _**+**_ icon next to _**Create**_.
    
2.  In the dialog that appears, click the _**Configure Neo4j Instance**_ checkbox.
    
3.  Enter the information required to connect to your Neo4j database:
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_11_CreateNeo4jDialog420.png?api=v2)
    
    • _**Project Name**_: Descriptive name, (e.g., the name of the Neo4j database).  
    • _**Neo4j DB Host**_: Host address, (e.g., a url such as _localhost_, or other host location). Do not include [https://,](#) bolt://, or :(port number) here.  
    • _**Bolt Port**_: (e.g. 7687)  
    • _**Neo4j DB Username**_: DB user name  
    • _**Neo4j DB Password**_: DB password  
    • _**Connection Type**_: Choose one of the following:  
    \-- _**Browser Connection**_: GraphXR connects to the Neo4j DB directly through the browser.  
    HTTPS is required to be on for Neo4j, and this is the preferred connection type.  
    \-- _**Through GraphXR server connection**_: Data flows from the Neo4j DB through a GraphXR server  
    to the browser. In this mode you can share the project. HTTPS is optional for the Neo4j DB.
    
4.  Click _**Confirm**_.  
    The new project appears in _**Your Projects**_.
    
    ![](https://kineviz.atlassian.net/wiki/download/attachments/1719533825/01_03_12_NewNeo4j420.png?api=v2)

You can now:

*   Click the _**Settings**_ icon, labeled _**APOC Search Index Config**_, to use Neo4j's indexing plugin to configure the allowed search terms for the project. You can modify these search terms at any time.
    
*   Click the project's _**Switch DB**_ icon to edit its Neo4j configuration.
    
*   Click the _**Delete**_ (trash can) icon to delete a project. This deletes only the GraphXR project, not its Neo4j database.
    
*   Click on the project name to enter the project's graph space and begin pulling data from the Neo4j database.
    
*   Click the project’s _**Enable Share/Disable Share**_ (Lock) icon to enable sharing of data views with another user. Share users you _**Invite**_ have access only to that project and its data views.  
    You can also click **ShareUI Config** to restrict share users' ability to navigate or edit the view.
    
*   Click the _**Delete**_ (trash can) icon to delete the project.