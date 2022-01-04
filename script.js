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
