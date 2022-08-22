
import {faker} from '@faker-js/faker';
/**
 * 
 * @param {string} name
 * 
 * Function for Random Name Generator
 */
export const getFirstName= ()=> {
  let firstName = faker.name.firstName();
  return firstName;
}

/**
 * 
 * @param {number} number
 * 
 * Function for Random Number Generator
 */
export const getRandomNumber=() =>{
  let number = faker.random.numeric();
  return number;
}

/**
 * 
 *  @param {selector} selector
 *  @param {string}   data
 * 
 * Function to Send Data in Input Fields : Handle Empty Values
 */
 export function sendDataInField(selector, data) {
  return new Promise((resolve) => {
    selector.then((element) => {
      if (data !== '') {
        cy.wrap(element).focus().clear().type(data)
        resolve('1');}
      else {
        cy.wrap(element).focus().clear().invoke('val', data)
        resolve('-1')}
    })
  })
}

/**
 * 
 *  @param {selector} selector
 *  @param {selector} findElement
 *  Function to Check If Element Exist in the Dom
 */  
export function checkIfElementExists(selector, findElement) {
  return new Promise((resolve, reject) => {
    cy.get('body').find(selector).then($res => {
      if ($res.find(findElement).length > 0) {
        cy.log(" Elements Found " + $res.find(findElement).length)
        resolve($res.find(findElement).length)} else {
        cy.log("Element is not found in the Dom " + $res.find(findElement).length)
        resolve($res.find(findElement).length)
        reject()}
    })
  })
}