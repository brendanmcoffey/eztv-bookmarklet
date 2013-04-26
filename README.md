EZTV Sorter Bookmarklet
================

Sorter bookmarklet for EZTV that sorts the list into specified rows of TV shows.

How I use this right now (I will make it simpler, but for now it is not too crazy hard):

1. Download the ez_bookmarklet.js file and with a text editor, swap out the list of shows with whichever shows you want to have easy access to. Make sure the names are written exactly as they are on the EZTV site.
1. Save it and host it somewhere. This could be your Dropbox public folder.
1. Copy the public link to your hosted file.
1. Create a bookmark with the below code, and replace the path section with the path to your hosted file.

```javascript
javascript:(function() { var s = document.createElement('script'); s.type = 'text/javascript'; s.src = 'YOUR-SOURCE-HERE/ez_bookmarklet.js'; document.body.appendChild(s); })();
```

I usually use this bookmarklet on the [showlist page](http://eztv.it/showlist/), though it also works well from the EZTV homepage.
