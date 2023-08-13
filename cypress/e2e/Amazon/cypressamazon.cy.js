describe('Amazon Giriş ve Arama Testi', () => {
    it('Amazon ana sayfasını ziyaret eder ve arama yapar', () => {
        cy.visit('https://www.amazon.com.tr/'); //amazon trye gider
        cy.get('#twotabsearchtextbox').type('akıllı telefon'); // Arama kutusuna metin yazma
        cy.get('.nav-input').click({ multiple: true }); // Arama düğmesine tıklama
    });
});

describe('Google Arama Testi', () => {
    it('Google ana sayfasını ziyaret eder ve arama yapar', () => {
        cy.visit('https://www.google.com/');

        cy.get('[name="q"]').type('Batuhan Aygörmez Linkedin'); // Arama kutusuna metin yazma
        cy.get('input[value="Google\'da Ara"]').first().click(); //google da arama butonuna tıklar
        cy.contains('h3', 'Batuhan Aygörmez - Software Test Engineer').click().should('be.visible'); 
    });
});

