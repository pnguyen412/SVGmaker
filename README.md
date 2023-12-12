# SVGmaker Challenge

## Description
- The main objectives of this challenge were to generate a simple logo for my projects using a command-line application that acecpts user input.
- In addition to the above, we were tasked with creating prompts for text, text color, shape and shape color so that the user is able to customize their logo to their liking.
- I also was challenged to write a test.js to ensure that shapes were rendering correctly which would then show pass when npm test was run in the command line.
- I learned that the manipulation and usage of command line applications with node.js can be tricky and ensuring the proper versions installed were a key to using specific commands. for example: when i initially worked on this, I used the command 'npm install inquirer' it installed version 9.2.12 but after some research, I learned that v9.2.12 doesn't support the require() method, so I had to revert it to v8.2.6 to get it to work.

## Installation:
- Clone the repository on github locally. After being successfully cloned, files are editable through VSC.

## Usage:
- Open cloned repo in Visual Studio Code
- Open up the terminal
- Enter "node  index.js" without the quotations in the command line
- Follow the prompts given to you in the Terminal
- A logo.svg file will be created if done correctly
  
 ![screenshot1](/images/Screenshot1.png)
  
 ![screenshot1](/images/Screenshot2.png)
   
## Collaborators:
- https://github.com/arkenwald

## Credits:
https://github.com/SBoudrias/Inquirer.js#readme
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes


## License:
MIT License

Copyright (c) 2023, Philip Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.