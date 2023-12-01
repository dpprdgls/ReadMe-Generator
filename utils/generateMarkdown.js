function generateMarkdown(userResponses, userInfo) {
  

    //generate a table of contents based on the userResponses
  let createTofC = `## Table of Contents`;

  if (userResponses.installation !== '') { createTofC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { createTofC += `
  * [Usage](#usage)` };

  if (userResponses.contributions!== '') { createTofC += `
  * [Contributions](#contributions)` };

  if (userResponses.tests!== '') { createTofC += `
  * [Tests](#tests)` };

  //create badges for user
  let draftMarkdown = 
  `# ${userResponses.title}

  
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).


  ## Description

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
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`
  };

  //Usage section (optional)
  if (userResponses.usage!== '') {
    draftMarkdown += `
    
    ## Usage
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`
  };

  //Contributing section (optional)
  if (userResponses.contributions!== '') {
    draftMarkdown += `
    
    ## Contributions
    
    *Instructions on how other developers can contribute to your project:*
    
    ${userResponses.contributions}`
  };

  //Tests section (optional)
  if (userResponses.tests!== '') {
    draftMarkdown += `
    
    ## Tests
    
    *Instructions on how to run tests:*
    
    ${userResponses.tests}`
  };

  //License section (required)
  
    draftMarkdown += `
    
    ## License
    
    This project is covered under the ${userResponses.license} license.`;

    //about the devloper 

  let devAbout = 
  `
  ---

  ## Questions? 

  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="30%" />

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





















