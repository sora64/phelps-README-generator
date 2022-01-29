// Function that returns a license badge based on which license is passed in
const renderLicenseBadge = license => {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'SIL') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === 'WTFPL') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
  } else if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  } else if (license === 'none') {
    return '';
  };
};

// Function that returns the license link
const renderLicenseLink = license => {
  if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost') {
    return '[Boost](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Eclipse') {
    return '[Eclipse](https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'GNU GPL v3') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'IBM') {
    return '[IBM](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'ISC') {
    return '[ISC](https://opensource.org/licenses/ISC)';
  } else if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'SIL') {
    return '[SIL](https://opensource.org/licenses/OFL-1.1)';
  } else if (license === 'Unlicense') {
    return '[Unlicense](http://unlicense.org/)';
  } else if (license === 'WTFPL') {
    return '[WTFPL](http://www.wtfpl.net/about/)';
  } else if (license === 'Zlib') {
    return '[Zlib](https://opensource.org/licenses/Zlib)';
  } else if (license === 'none') {
    return '';
  };
};


// Function that returns the contributing section of README
const renderContributingSection = contributing => {
  if (!contributing) {
    return '';
 } else {
    return `
  ## Contributing
  ${contributing}
    `;
  }
};

// Function that returns the tests section of README
const renderTestSection = tests => {
  if (!tests) {
    return '';
 } else {
    return `
  ## Tests
  ${tests}
    `;
  }
};

// Function that returns the license section of README
const renderLicenseSection = license => {

  if (license === 'none') {
    return '';
  } else {
    return `
  ## License
  ${renderLicenseLink(license)}
    `;
  };
};

const contributingTableLink = contributing => {
  if (!contributing) {
    return '';
 } else {
    return `
  - [Contributing](#contributing)
    `;
  }
};

const testsTableLink = tests => {
  if (!tests) {
    return '';
 } else {
    return `
  - [Tests](#tests)
    `;
  }
};

// Function to generate markdown for README

module.exports = generateMarkdown => {
  const data = generateMarkdown;

  console.log(data);

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${contributingTableLink(data.contributing)}
  ${testsTableLink(data.tests)}
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

${renderContributingSection(data.contributing)}


${renderTestSection(data.tests)}


  ## Questions

  - GitHub: [${data.github}](https://github.com/${data.github}/)

  - Email: [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}
  `;
};