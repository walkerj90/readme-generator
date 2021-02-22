// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function markdown(data) {
  return `# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})

# Description
${data.Description}

# Table of Contents

* Installation (#installation)

* Usage (#usage)

* License (#license)

* Contributing (#contributing)

* Tests (#tests)

* Questions (#questions)

* Acknowledgements (#acknowledgements)

# Installation Instructions

You must have the following dependencies installed prior to running this application correctly. ${data.Installation}

# Usage

To use this application you must first see the following. ${data.Usage}

# Licensing

This project uses the following licenses. ${data.License}

# Contributions

${data.Contributor}

#Testing

In order to test this application you must use the following commands and/or steps. ${data.test}

#Contact information

If you have any further questions about the following app please contact ${data.Username} at (https://github.com/${data.UserName})
or at the email ${data.email}
`;
}

module.exports = markdown;
