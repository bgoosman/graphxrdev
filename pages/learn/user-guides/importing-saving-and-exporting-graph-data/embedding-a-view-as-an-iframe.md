In a project where sharing has been enabled, once you have saved a view you can share its url directly with others even if they do not have a GraphXR login. You can also embed that shared GraphXR view on another web page. 

Visit [https://www.kineviz.com/sarscov2](https://www.kineviz.com/sarscov2) for an example of how an embedding can be used.

GraphXR iFrame embedding is supported for all GraphXR subscriptions.

**To embed a saved GraphXR view in a webpage as an iFrame:**

1.  In the _**Projects**_ panel and _**Data**_ tab, oad a saved view.
    
2.  Click the view's _**Share**_ icon.
    
    ![](/02_08_03_ShareView.png)
    
    The shared view is displayed in a separate browser tab. It will include only the UI elements you've set in the project's sharing configuration.
    
    ![](/02_08_04_ShareViewShared.png)
3.  Copy and paste the url of the shared view into the following iFrame embed code, which you will then insert into the html for the web page of your choice.
    

```
<iframe id="iframe-id-graph" src="VIEW URL GOES HERE" height="600px" width = "100%"></iframe>
<script>
let graphXRIframe = document.getElementById("iframe-id-graph");
graphXRIframe.addEventListener('mouseover', function () {
    window.document.body.style.overflow = 'hidden';
    graphXRIframe.style.overflow = 'auto';
});
graphXRIframe.addEventListener('mouseout', function () {
    window.document.body.style.overflow = 'auto';
    graphXRIframe.style.overflow = 'hidden';
})
</script>
```