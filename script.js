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

// 64. Consonant value - 6 kyu - codewars
/* 
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.

More examples in test cases. Good luck!
 */

function solve(s) {
    const alph = "0abcdefghijklmnopqrstuvwxyz".split("");
    const scoredX = s.split(/[aeuio]+/gi).map((el) => {
        let total = 0;
        [...el].forEach((char) => {
            total += alph.indexOf(char);
        });
        return total;
    });

    return Math.max(...scoredX);
}

console.log(solve("chruschtschov"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 65. Find the odd int -6 kyu - codewars
/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

 */
function findOdd(A) {
    const tally = A.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    console.log(tally);
    for (let key in tally) {
        if (tally[key] % 2 === 1) return +key;
    }
    return 0;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 66. String incrementer - 5 kyu - codewars

/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString(str) {
    let txtStr = str.match(/^[a-zA-Z]+/) ? str.match(/^[a-zA-Z]+/)[0] : "";
    // "" and no number "foo"  => 1, foo1
    if (str.length < 1 || txtStr.length == str.length) return str + "1";

    // Problem !! foo099 -> foo100  foo0042 -> foo0043 etc.
    let num = str.match(/\d+$/)[0];

    // for foo23 foo9 etc.
    let numStr = +str.match(/\d+$/)[0] + 1 + "";
    console.log(num, numStr);
    if (num.length > numStr.length) numStr = numStr.padStart(num.length, "0");
    // console.log(txtStr, numStr);
    return txtStr + numStr;
    // return incrementedString
}
console.log(incrementString("9")); //"foobar001"  foo099 -> foo100

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 67. Highest Rank Number in an Array - codewars -6 kyu
/* 
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */
function highestRank(arr) {
    const tally = arr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    const maxCount = Math.max(...Object.values(tally));
    const maxCountNums = [];

    for (let [key, value] of Object.entries(tally)) {
        if (value === maxCount) maxCountNums.push(key);
    }
    return Math.max(...maxCountNums);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
