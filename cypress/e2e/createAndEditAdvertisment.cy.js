import advertismentFlowObjects from '../support/pages/advertismentFlowObjects';
import { getRandomNumber, getFirstName } from '../support/utility';

describe('CREATE AND UPDATE ADVERTISMENT', () => {

  //Initilaizing Variables.
  const name = "Test" + getFirstName();
  const street = getRandomNumber();
  const rooms = getRandomNumber();
  const price = getRandomNumber();
  const updatedName = name + getRandomNumber();

  before(() => {
    // Visit Website URL
    cy.visit(Cypress.env('siteUrl'));
    // Get Validation Test Data from Json File to Check Validation Errors.
    cy.fixture('/advertsimentValidationsData.json').then(function (formData) {
      this.formData = formData;
    }).as('formData');
  })

  it('VERIFY ADVERTISMENT FORM VALIDATIONS', () => {

    advertismentFlowObjects.adAdvertismentBtn().click();
    //Testing Fields on Muliple Data to verify Validation Errors.
    cy.get('@formData').then((advertsimentValidations) => {
      cy.wrap(advertsimentValidations).each((data) => {
        advertismentFlowObjects.fillSignUpForm(data.name, data.street, data.room, data.price, data.expectedError)
      })
    })
  })

  it('CREATE ADVERTISMENT BY PROVIDING DATA IN FORM', () => {
    //Create Advertisment with Valid Data
    advertismentFlowObjects.fillSignUpForm(name, street, rooms, price, '');
    advertismentFlowObjects.saveAdvertisementBtn().should('be.visible').click();
  })

  it('VERIFY ADVERTISMENT IS CREATED SUCCESFULLY FROM GUI SIDE', () => {
    // Verifying Advertisment Created Succesfuly through GUI Side. 
    advertismentFlowObjects.createdRow(name, price).should('exist');
  })

  it('VERIFY ADVERTISMENT IS CREATED SUCCESFULLY THROUGH API', () => {
    // Verifying Advertisment Created Succesfuly through API. 
    advertismentFlowObjects.checkAdvertismentExist(name, street, rooms, price);
  })

  it('EDIT ADVERTISMENT AND VERIFY UPDATED DATA FROM  GUI SIDE', () => {
    //Click on Created Row
    advertismentFlowObjects.createdRow(name, price).click();
    //Update Advertisment with Valid Data
    advertismentFlowObjects.fillSignUpForm(updatedName, street, rooms, price, '');
    advertismentFlowObjects.saveAdvertisementBtn().should('be.visible').click();
    // Verifying Advertisment Created Succesfuly through GUI Side. 
    advertismentFlowObjects.createdRow(updatedName, price).should('exist');

  })

  it('EDIT ADVERTISMENT AND VERIFY UPDATED DATA FROM API SIDE', () => {
    // Verifying Advertisment Updated Succesfuly through API. 
   advertismentFlowObjects.checkAdvertismentExist(updatedName, street, rooms, price);

  })

})