# <README Generator>

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/dpprdgls/ReadMe-Generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/dpprdgls/ReadMe-Generator?style=flat&logo=appveyor)

## Description


  *The purpose, the motivation, the execution:*

  A great project starts with a great README with quality information about the app including what the app is used for, how to use it, how to install it, how to report issues, and how to contribute to the project so that other developers are more likely to contribute, leading to the success of the project. 

This is a command line applicaion that runs using Node.js and dynamically creates a README.md file based on the inputs provided regarding your project. View the [`ExampleReadme.md`](https://github.com/dpprdgls/ReadMe-Generator/blob/master/ExampleReadme.md) as an example. 


## Installation


To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.

Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:

  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
  * [`axios`](https://www.npmjs.com/package/axios) will fetch your info from the GitHub API.

The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'ExampleREADME.md' and will be ready for you at the root of the repo.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your profile picture & email from GitHub.


## Usage

![GIF Demo](ReadMe-Generator.gif)

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

[Video Link](https://drive.google.com/file/d/1MotLjt4Evb-vw-B1SirMlAhtMQG8cO2t/view)


## Methodology 


The applicaiton utilizes the principles of modularization by separating the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js` within the `utils` folder. 


## Questions

Feel free to utilize this app for your next project or contact me with any questions using the information below:

GitHub: [@dpprdgls](https://api.github.com/users/ddprdgls)
Email: daps.douglas@gmail.com



## License

MIT License

Copyright (c) 2023 dpprdgls

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


![vscode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)