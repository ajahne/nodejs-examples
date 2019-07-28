# Editing a page
Purpose: to edit an html page, reload, and see the changes

## Current process
- create an HTML page (e.g. index.html)
- make an HTML element on this page editable, e.g.
```HTML
<div contenteditable="true" id='text'>This text can be edited by the user.</div>
```
- When a user clicks `save` send the HTML to the server
- The server takes this message and uses the contents to write over the html page (e.g. write over index.html)
- user refreshes the page, and voila, sees their changes!

## Helpful resources
- [Render HTML files in Express](https://codeforgeek.com/render-html-file-expressjs/)
- [Handle Post Requests in Express](https://expressjs.com/en/4x/api.html#req.body)
- [Outer HTML](https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string)
- [XMLHttpRequest RESTful (GET, POST, PUT, DELETE)](https://gist.github.com/EtienneR/2f3ab345df502bd3d13e)
