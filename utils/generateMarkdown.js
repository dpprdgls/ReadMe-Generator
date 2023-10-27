function generateMarkdown(userResponses, userInfo) {
  

    //generate a table of contents based on the userResponses
  let createTofC = `## Table of Contents`;

  if (userResponses.installation !== '') { createTofC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { createTofC += `
  * [Usage](#usage)` };

  if (userResponses.contributions!== '') { createTofC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests!== '') { createTofC += `
  * [Tests](#tests)` };

  
  let draftMarkdown = `# ${userResponses.title}

  //create badges for user
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).


  ##Description

  *The purpose, the motivation, the execution:*

  ${userResponses.description}

  `
  //Add the table of contents into the markdown
  draftMarkdown += createTofC;

  //add a license section 
  draftMarkdown += `
  * [License](#license)`;

  //Install section (optional)
  if (userResponses.installation != '') {
    draftMarkdown += `
    
    ##Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`
  };

  //Usage section (optional)
  if (userResponses.usage!== '') {
    draftMarkdown += `
    
    ##Usage
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`
  };

  //Contributing section (optional)
  if (userResponses.contributions!== '') {
    draftMarkdown += `
    
    ##Contributing
    
    *Instructions on how other developers can contribute to your project:*
    
    ${userResponses.contributions}`
  };

  //Tests section (optional)
  if (userResponses.tests!== '') {
    draftMarkdown += `
    
    ##Tests
    
    *Instructions on how to run tests:*
    
    ${userResponses.tests}`
  };

  //License section (required)
  
    draftMarkdown += `
    
    ##License
    
    This project is covered under the ${userResponses.license} license.`;

    //about the devloper 

  let devAbout = 
  `
  ---

  ##Questions? 

  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40% />

  For any questions or concerns, feel free to contact me using the information below:
  
  GitHub: [@${userInfo.login}](${userInfo.url})

  `;

  //If GitHub email is not null, add to Developer section

  if (userInfo.email !== null) {
    devAbout += 
    `
    
    Email: ${userInfo.email}
    
    `};

    draftMarkdown += devAbout;
  

  return draftMarkdown;



}

module.exports = generateMarkdown;




























// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
