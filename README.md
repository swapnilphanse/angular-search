# Neeva

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## npm Install

Open the project root direcorty from your terminal and run `npm install` to install node_modules dependencies.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://127.0.0.1:4200/`. The app will automatically reload if you change any of the source files. Make sure that the port you use is 4200 and use localhost ip instead as the http://127.0.0.1:4200/ has been used for googe analytics function. Also run it on specifically on the port `4200`. If you use any other port for your development purpose you can run the following command to run this project on this specific port:
`ng serve --open --port 4200`

## AutoComplete function

I tried to implement autocomplete function and it is working fine if the matching_terms property consists only one value. For example in case of tweets.json, the matching_terms consists of 

 "matching_terms": [
          "acme",
          "hiring",
          "timbuktu"
        ]

and if I make it  "matching_terms": "timbuktu" the auto complete function is working and suggesting words.

## Approach for the project:

I decided to create a data service which will read all the json files. On the home page there is a search bar where a user can enter any value from the matching_terms property and the post containing that word or data will be displayed in the drop down. User can click on that drop down and that particular post with all its data will be displayed.

I have created two componenets:
1) Home
2) Search

Home component contains the logic for displaying the post after it has been searched for. The search component is nested inside the Home component.Search component contains the logic for triggering search function.

## Google Analytics

I have included google analytics for event tracking and web traffic. I have included the analytics_debug.js script so that the anayltics can be visible in the console. Once a user clicks on the input filed to type and search, the event tracking function is fired and that data is visible in the browser console as well as google analytics console.


## Dynamic Results
Since no hard coded values have been used, as long as the properties in the json files are same as orignally given, the project can dynamically keep on updating the results. 


## Design

I have used Material Design in this project as Material Design as it gives well-organized format along with the flexibility.
