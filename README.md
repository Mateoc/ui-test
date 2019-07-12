# UI candidates test v2.0

Hi, the fe is inside rule-of-thumb folder. It was created using create react andapp so to run just install dependencies and `run npm start` ( you can also use yarn or npx if you so whish).

I did not have time for the last point:
"Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)"
I would have implemented it in the service with something like a save method which will store the votes in a map (the id of the person would have being the key and an array with votes would be the values), then when I where I load the people I would have read from localhost and updated the values.