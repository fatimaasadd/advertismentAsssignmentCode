import { sendDataInField, checkIfElementExists } from '../utility';
class advertismentFlowObjects {

  adAdvertismentBtn = () => {
    return cy.get('a[href="/advertisement/new"]');
  }

  advertisementName() {
    return cy.get("form [name='name']");
  }

  advertisementStreet() {
    return cy.get("[name='street']");
  }

  advertisementRoom() {
    return cy.get("[name='rooms']");
  }

  advertisementPrice() {
    return cy.get("[name='price']");
  }

  advertisementStatus() {
    return cy.get("[aria-label='Status']");
  }

  saveAdvertisementBtn() {
    return cy.get("[type='button'] span").eq(1).contains('save');
  }

  cancelAdvertisementBtn() {
    return cy.get("[type='button'] span").eq(0).contains('cancel');
  }

  createdRow(name, price) {
    return cy.get('.ng-isolate-scope tr').
      contains('td', name)
      .siblings('td')
      .contains(price) // gives you the cell                            
  }

  /**
  * 
  * @param {string} name
  * @param {string} street
  * @param {string} room
  * @param {string} price
  * @param {string} expectedError
  * 
  * Function to Fill Advertisment Form
  */
  fillSignUpForm(name, street, room, price, expectedError) {

    sendDataInField(this.advertisementName(), name)
    sendDataInField(this.advertisementStreet(), street)
    sendDataInField(this.advertisementRoom(), room)
    sendDataInField(this.advertisementPrice(), price)
    this.advertisementStatus().click();
    this.matchErrorMsg(expectedError)
  }

  /**
   * 
   * @param {string} name
   * @param {string} street
   * @param {string} rooms
   * @param {string} price
   * 
   * Function to Check Advertisment created succesfully
   */
  checkAdvertismentExist(name, street, rooms, price) {
    cy.getRequest(Cypress.env('apiUrl'), (response) => {
      expect(response.status).to.equal(200);
      //Loop through Account created rows: name, street,rooms and price.
      expect(JSON.stringify(response.body)).to.contain(name);
      expect(JSON.stringify(response.body)).to.contain(street);
      expect(JSON.stringify(response.body)).to.contain(rooms);
      expect(JSON.stringify(response.body)).to.contain(price);
    })
  }

  /**
 * 
 * @param {string} expectedError
 * 
 *Function to Match Expected Error if it exists in DOM
 */
  matchErrorMsg(expectedError) {
    cy.wait(500)
    checkIfElementExists('[role="alert"]', 'div', { setTimeout: 1000 }).then((errormsg) => {
      if (errormsg > 0) {
        cy.get('[role="alert"] div').eq(0).then((message) => {
          expect(message.text()).to.contains(expectedError)
        })
      } else { }
    });
  }

}

export default new advertismentFlowObjects;