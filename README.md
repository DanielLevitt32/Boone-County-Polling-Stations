#### Polling places around Columbia, Missouri

In this exercise, we created a map of Columbia's polling stations using the [Leaflet.js](http://leafletjs.com/) mapping library. See the `script.js` file for step-by-step documentation.

The data comes from the [Boone County Clerk's office](https://www.showmeboone.com/clerk/PollingPlaceNames.asp) and lives in a PDF. Which makes things difficult! To get the data into json, we did the following:

1. Download the PDF.
2. Convert the table to a PDF using [Tablula](http://tabula.technology/).
3. Add "Columbia, Missouri" to each address via Excel.
4. Use a batch geocode tool to convert each address to a lat/long. In class, we used [this one](http://www.findlatitudeandlongitude.com/batch-geocode/). (Iaryna says there's a Google Docs method. I [found this](https://vilimpoc.org/blog/2013/07/11/google-spreadsheet-geocoding-macro/), but haven't tried it.)
5. Convert the output via [Mr. Data Converter](http://shancarter.github.io/mr-data-converter/).
6. Cut and paste the output into a JSON file. You're done!

