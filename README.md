# Beep-Boop

#### _Web app to show the understanding of javascript functions, loops and arrays_

#### By _**Alexander Kondra**_

## Description

Web app that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

Numbers that contain a 0 are replaced (all digits) with "Beep!"

Numbers that contain a 1 are replaced (all digits) with "Boop!"

Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

## Setup/Installation Requirements

_Link to see the page live:_
_https://alexanderkondra.github.io/beepboop/_

## Specifications

* Program outputs "Please, make sure to enter a number" if the input isn't a number
  * Example Input: Hello!
  * Example Output: ["Please, make sure to enter a number"]

* If the number is divisible by 3 program replaces the number with a phrase "I'm sorry, *USERNAME*. I'm afraid I can't do that."
  * Example Input: 30
  * Example Output: ["I'm sorry, *USERNAME*. I'm afraid I can't do that."]

* Program replaces 1 with "Boop!"
  * Example Input: 1
  * Example Output: ["Boop!"]  

* Program replaces 0 with "Beep!"
  * Example Input: 0
  * Example Output: ["Beep!"]

* Program outputs a range of numbers from 0 to the chosen number
  * Example Input: 23
  * Example Output: ["0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23"]

* Program checks for all the exceptions stated above and if none are true, it outputs a range of numbers
  * Example Input: 28
  * Example Output: ["0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"]

## Support and contact details

_alexanderkondra@icloud.com_

## Technologies Used

HTML

CSS

Javascript

JQuery

Bootstrap

## Known Bugs

_none_

### License

*Licensed under MIT license*

Copyright (c) 2019 **_Alexander Kondra_**
