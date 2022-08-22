
/**
 * 
 * @param {string} url
 * @param {json} callback
 * 
 * Function to Send Get Request.
 */
Cypress.Commands.add('getRequest', (url, callback) => {
  cy.request({
    method: 'GET',
    url:  url,
    failOnStatusCode: false,
  }).then(callback);
})
