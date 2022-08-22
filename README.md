## Automation Test Suite for Assignment

### Prerequisities
    
1. Install latest Node Version (https://nodejs.org/en/download  - Download LTS Version (More Stable))
2. Install Visual Studio Code (https://code.visualstudio.com/download)


## Steps to run the test:

1. Clone the Repository from URL (https://github.com/fatimaasadd/advertismentAsssignmentCode.git) Clone --> Open in your IDE Visual Studio Code

2. To install Dependencies, Run the following Command in Terminal:

    `npm install`

3. Run the following commands to execute the Tests in various Modes 

    - **_Cross-Browser Testing (To execute the Tests in various Browsers (Headed))_:** 

        - Navigate to the cloned Repository path in Terminal and run the below Command to execute the Tests in Headed mode
            `node_modules.bin\cypress open` 
            (Or)
            `npx cypress open`

        - Cypress Test Runner will open then you can find all your test folders on right side, Choose a Test. 
        - A new chrome/Electron/Firefox/Edge window opens & runs the Test

    - **_To execute Test in Headless/Headed Mode using Commands_:**

        - _Headed mode_:
            `npm run headTest`

        - _Headed mode with Reports_:
            `npm run mochaReportHeadedTest`

        - _Headless mode with Reports_:
            `npm run e2e:Mochawesome`
        
        - _Headless mode with Reports & Cypress Dashboard Runs_:
            `npm run e2e:CypressDashboard`

    - **_Cross-Browser Testing (To execute the Tests in various Browsers (Headless))_:**

        -  _Chrome_: 
            `npm run chromeTest`

        -  _Electron_:  
            `npm run electronTest`

        -  _Firefox_:  
            `npm run firefoxTest`

        -  _Edge_:  
            `npm run edgeTest`

4. To check the Test Reports, Open mochawesome*.html in the folder mochawesome-report

5. To check the Test Videos, Open the folder videos/modules

#### To Create random user for Form :

##### Using Faker to generate data for your Cypress tests

- Install faker

`npm install faker --save-dev`

**_Project Details & Overview_:**

    - **_Project Structure & Page Modelling_:**

        1.  _Tool used to Automate:_ 
            Cypress

        2.  _Programming Language:_ 
            JavaScript / Nodejs

        3.  _Programming Model:_
            This project used page object model and data driven framework
            Each web page has a separate class which holds functionalities and members of that web page.

        4.  _e2e:_
            This Folder contains the test Spec Files - One for End-to-End Flow, one for Partner Interface, etc..

    -  **_Cypress Configurations_**

        1.  _Packages:_
            Cypress, npm

        2.  _Cypress.json:_ 
            To set the Environment - Environment Settings. 
            Also store Cypress related Settings & Mochawesome Report Settings & DB Configurations, if needed

        3.  _mochawesome-report:_ 
            To store Mochawesome Test Reports in HTML. Just run the Html file to see the report 

        4.  _Package.json: _
            To generate various Scripts for Cross-Browser Testing,  
            Reporting and to run in the Cypress Dashboard. 
            To manage the Dependancies
