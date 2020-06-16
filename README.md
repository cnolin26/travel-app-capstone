# Travel App

# Description

This asks for a location and date.  It returns the weather for that location on that date, as well as a photo of the location, and some info about the country the location is in.

## Usage

If Provo and 06/16/2020 are input, you should receive:

>Days until trip begins:
2
The 2020-06-17 forecast for Provo is cloud coverage of 31% of the sky, a high of 64.5F with a low of 52.6F, and 0mm of rain.
Country: United States of America

>Population: 323947000

>Capital: Washington, D.C.

plus the image at 
https://pixabay.com/get/54e7d0434252af14f1dc84609629307e1038d7e3544c704c7c2d79d1954dc358_640.jpg should be displayed.

## Extend Your Project

To extend my project, I used REST Countries API to get info about the destination country and display it.

Unfortunately, the Rest Countries api does not list the most likely country first when you use its country search request.  If you search "United States", you get "United States Minor Islands" and if you search "India", you get "British Indian Ocean Territory".  To fix this, I would need to display the search results and allow the user to choose.  Doing so is useful, but I don't think it displays the skills this project is designed to teach.  If you simply submit "United States" or "India", you'll get "United States Minor Islands" and "British Indian Ocean Territory" respectively.