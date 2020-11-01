/// <reference types="cypress" />

import * as indexFuncs from "../pages/indexPage"
import * as overviewFuncs from "../pages/overviewPage"
import * as targets from "../targets/targets"

// This is a test suite
describe('Test suite', function(){ 

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPageTitle(cy)
        indexFuncs.loginToApp(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

    afterEach(() => {
        overviewFuncs.logoutFromApp(cy, 'Login')
    })

    // This is a test case
    it('Create client', function(){
        overviewFuncs.continueToClients(cy, 'Create Client')
        
    })

    it('Rename client', function(){
        overviewFuncs.continueToClients(cy, 'Create Client')
       

    })

    it('Delete client', function(){
        overviewFuncs.continueToClients(cy, 'Create Client')
       

    })

    it('Create bill', function(){
        overviewFuncs.continueToBills(cy, 'Create Bill')
       

    })

    it('Delete bill', function(){
        overviewFuncs.continueToBills(cy, 'Create Bill')
       

    })
   
    
})