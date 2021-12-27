const faker = require('faker')
faker.locale = "pt_BR";

//motorcycle
Cypress.Commands.add('register_motor', () => {
    cy.visit('/')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    
    cy.get('input[name="name"]').type(faker.name.findName())
    cy.get('input[name="cpf"]').type(faker.phone.phoneNumber('###########'))
    cy.get('input[name="email"]').type(faker.internet.email())
    cy.get('input[name="whatsapp"]').type(faker.phone.phoneNumber('###########'))
    
    cy.get('input[name="postalcode"]').type('58063009')
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    
    cy.get('input[name="address-number"]').type(faker.datatype.number())
    cy.get('input[name="address-details"]').type('taubaté')

    cy.get('input[name="address"]').should('have.value', 'Rua Miguel Ouriques de Vasconcelos')
    cy.get('input[name="district"]').should('have.value','Valentina de Figueiredo')
    cy.get('input[name="city-uf"]').should('have.value','João Pessoa/PB')

    cy.contains('.delivery-method li', 'Moto').click()

    cy.get('input[accept="image/*"]').attachFile('/images/cnh-digital.jpg')

    cy.get('form button[type="submit"]').click()

    cy.get('.swal2-container .swal2-html-container').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
})

//bike
Cypress.Commands.add('register_bike', () => {
    cy.visit('/')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    
    cy.get('input[name="name"]').type(faker.name.findName())
    cy.get('input[name="cpf"]').type(faker.phone.phoneNumber('###########'))
    cy.get('input[name="email"]').type(faker.internet.email())
    cy.get('input[name="whatsapp"]').type(faker.phone.phoneNumber('###########'))
    
    cy.get('input[name="postalcode"]').type('58063009')
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    
    cy.get('input[name="address-number"]').type(faker.datatype.number())
    cy.get('input[name="address-details"]').type('taubaté')

    cy.get('input[name="address"]').should('have.value', 'Rua Miguel Ouriques de Vasconcelos')
    cy.get('input[name="district"]').should('have.value','Valentina de Figueiredo')
    cy.get('input[name="city-uf"]').should('have.value','João Pessoa/PB')

    cy.contains('.delivery-method li', 'Bicicleta').click()

    cy.get('input[accept="image/*"]').attachFile('/images/cnh-digital.jpg')

    cy.get('form button[type="submit"]').click()

    cy.get('.swal2-container .swal2-html-container').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
})

//van or car
Cypress.Commands.add('register_vcar', () => {
    cy.visit('/')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    
    cy.get('input[name="name"]').type(faker.name.findName())
    cy.get('input[name="cpf"]').type(faker.phone.phoneNumber('###########'))
    cy.get('input[name="email"]').type(faker.internet.email())
    cy.get('input[name="whatsapp"]').type(faker.phone.phoneNumber('###########'))
    
    cy.get('input[name="postalcode"]').type('58063009')
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    
    cy.get('input[name="address-number"]').type(faker.datatype.number())
    cy.get('input[name="address-details"]').type('taubaté')

    cy.get('input[name="address"]').should('have.value', 'Rua Miguel Ouriques de Vasconcelos')
    cy.get('input[name="district"]').should('have.value','Valentina de Figueiredo')
    cy.get('input[name="city-uf"]').should('have.value','João Pessoa/PB')

    cy.contains('.delivery-method li', 'Van/Carro').click()

    cy.get('input[accept="image/*"]').attachFile('/images/cnh-digital.jpg')

    cy.get('form button[type="submit"]').click()

    cy.get('.swal2-container .swal2-html-container').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
})