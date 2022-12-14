# String Functions
This module provides functions for splitting a given string into an array of strings, each with a maximum length of maxLength.

## Installation
To install, run the following command:


```
npm install split-paragraph

```

## Usage
```js
import { splitParagraph, splitString } from '@litruv/stringfunctions';
```

```js
splitParagraph(paragraph: string, maxSize: number): string[]
```

This function splits a given paragraph into an array of strings, each with a maximum length of maxSize.

```js
splitString(str: string, maxLength: number): string[]
```
This function splits a given str into an array of strings, each with a maximum length of maxLength, and each separated by at least two newlines or two \r\n sequences.

```js
hasUrl(str: string): bool
```
Takes a string as an input and returns a boolean value indicating whether or not the string contains a URL

## Examples

```js
splitParagraph("This is a paragraph that needs to be split into multiple strings", 10);
// ["This is a ", "paragraph ", "that ", "needs to ", "be split ", "into ", "multiple ", "strings"]

splitString("This is a string\nthat needs to be\nsplit into multiple\nstrings", 10);
// ["This is a", "string", "that needs", "to be", "split into", "multiple", "strings"]

string1 = "Visit my website at https://www.example.com for more information."
string2 = "I don't have a website, but you can email me at johnsmith@gmail.com."
string3 = "I'm not sure what you mean by a URL. Can you give me an example?"

console.log(hasurl(string1)) // True
console.log(hasurl(string2)) // True
console.log(hasurl(string3)) // False

```
