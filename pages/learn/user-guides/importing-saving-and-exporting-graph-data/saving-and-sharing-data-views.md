As you work with data, you can save data _**Views**_ to the server. You can load any of your saved views, for example, to return to scatter plot, geometric layout, or other useful views you create during exploration and analysis. If your project is connected to a Neo4j database, its saved views can be shared with other users by enabling sharing for the project.

A data view is available only to the project where it was created. You can, however, load a view, save it as a GXRF, CSV archive, or Snapshot, and export it. The exported file can then be loaded to another project by drag and drop.

Click the _**Take Screenshot**_ toolbar icon download a .png screenshot of just the data and legend displayed in the browser window. While not an active view, this may be useful in some situations. The screenshot receives the name of the GraphXR project, and is saved to your system download (or other location as set in your system preferences).

## Saving a Data View

A data _**View**_ is a named GXRF file uploaded to the server. It includes the graph data and its 3D layout. Data _**Views**_ are similar to [Snapshots](./saving-or-loading-snapshots), but are saved only in the cloud as GXRF files. A view persists in a project until you delete it.

A saved GXRF file is saved on the local machine, and a data view is saved on the server. Both are saved in GraphXR's GXRF format.

**To save a data View:**

1.  Go to the _**Project**_ panel and _**Data**_ tab.
    
2.  Enter a view name in the text box, and click _**Save View**_.
    
    The view appears in the list below the text box, labeled with your _**View Name**_ and _**UpdateTime**_ timestamp.
    
    ![](/02_08_01_SaveViewSaved.png)
    
3.  Once you've saved a view, you can:
    

*   Click its _**Load**_ icon to load the view to the graph space. This replaces any data currently in the graph space with the data saved in the view.
    
*   Click its _**Update**_ icon to update the view to the current contents of the graph space. You might do this after editing or deleting some of the data, or creating a better layout.
    
*   Click its _**Delete**_ (trash can) icon to delete the view. This deletes that view (but not the data present in the graph space).
    
*   Click its _**Share**_ icon to display a view that can be shared with anyone by sharing its url.
    

If you click _**Save View**_ without entering a view name, GraphXR uses the _**UpdateTime**_ timestamp (YYYY-MM-DD HH:MM:SS) for the name. You can click the pencil icon to the left of the view name to re-name it.

The most recently created view appears at the top of the list. The view you've loaded is highlighted, in case you want to update that view after editing its data or layout.

![](/02_08_02_SaveViewSecond.png)

## Sharing a Project and its Data Views

You can share a project that's connected to a Neo4j database with other users. All of its data views will be available to the invited users. The project's sharing configuration determines which navigation and editing capabilities are granted to sharing users.

Views from a project not connected to a Neo4j database cannot be shared directly. You can, however, export a GXRF, Snapshot, or CSV archive which can then be loaded to another project by drag and drop.

**To share a project and its data views:**

1.  Go to the _**Projects**_ (Home) page, locate the project you want to share, and click its _**Enable Share**_ icon (the lock icon at the lower right of the project label).
    
    ![](/02_08_04_ShareProject.png)
    
    The lock icon changes to _**DisableShare**_, and additional _**GoToShare**_, _**Invite**_, and _**ShareUIConfig**_ icons appear.
    
    ![](/02_08_04_ShareProject1.png)
2.  Click the project's _**ShareUI Config**_ icon to display the dialog to review the project's sharing configuration.
    
    ![](/02_08_04_ShareProject2.png)
    
    By default, all user interface functions are enabled.
    
    ![](/02_08_05_ShareConfig.png)
3.  Click the checkbox next to the functions you want removed for share users, and click _**Save**_.  
    To exit the dialog without making changes, click the arrow icon at the upper left.
    
4.  Now click the projects's _**Invite**_ icon to send an email invitation to another GraphXR user.  
    
    ![](/02_08_06_ShareInviteIcon.png)
    
    When the recipient accepts the invitation, the project appears in the _**Shared Projects**_ area on their _**Projects**_ page.
    
    ![](/02_08_07_ShareInvite.png)