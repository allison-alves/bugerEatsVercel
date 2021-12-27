describe('Register for a new delivery person', () => {
    it('User must register as a delivery person with motorcycle', () => {
       cy.register_motor()
    });

    it('User must register as a delivery person with bicycle', () => {
        cy.register_bike()
     });

     it('User must register as a delivery person with a van or car', () => {
        cy.register_vcar()
     });
});