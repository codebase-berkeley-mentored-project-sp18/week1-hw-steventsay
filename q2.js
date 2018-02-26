/*
Question 2 - Arrays and Strings
======================================================

The following function takes in a string as well as an array of bad words.
The function should return the first input but with all occurences of bad words
replaced by the string "*CENSORED*" (no quotes).

PRECONDITION: The input string contains only alphanumeric characters and spaces.

Example:
>>> censorBadWords("you buy too much fuckin shit", ["shit", "fuck"])
--> "you buy too much fuckin *CENSORED*"
>>> censorBadWords("youbuytoomuchfuckinshit", ["shit", "fuck"])
--> "youbuytoomuchfuckinshit"
*/
function censorBadWords(inputStr, badWords) {
var input = inputStr.split(" ");

  for (var i = 0; i < input.length; i++) {
    for (var x = 0; x < badWords; x++) {
       if (input[i]==badWords[x]){
         input[i]= "*CENSORED*";
       }// do this
}
var ans = input.join();
       // do this
}
return ans;
}
