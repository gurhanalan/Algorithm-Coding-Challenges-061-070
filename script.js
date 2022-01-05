"use strict";

// 61. Data Reverse - 6 kyu - codewars
/* 
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
 */
function dataReverse(data) {
    const bytes = [];

    while (data.length > 0) {
        bytes.push(data.splice(0, 8));
    }

    return bytes.reverse().reduce((acc, el) => {
        acc.push(...el);
        return acc;
    }, []);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 62. Highest Scoring Word- 6 kyu - codewars
/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */
function high(x) {
    const alph = "abcdefghijklmnopqrstuvwxyz".split("");
    const scoredX = x.split(" ").map((el) => {
        let total = 0;
        [...el].forEach((char) => {
            total += alph.indexOf(char);
        });
        return total;
    });

    const highestScoreIdx = scoredX.indexOf(Math.max(...scoredX));

    return x.split(" ")[highestScoreIdx];
}

console.log(high("man i need a taxi up to ubud"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 63. Count the smiley faces! - 6 kyu - codewars

/* 
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

 */

function countSmileys(arr) {
    return arr
        .map((el) => {
            if (/^(:|;)(-|~)?(\)|D)/.test(el)) return 1;
            else return 0;
        })
        .reduce((acc, cur) => acc + cur);
}
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
