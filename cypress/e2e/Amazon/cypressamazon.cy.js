describe('Amazon Giriş ve Arama Testi', () => {
    it('Amazon ana sayfasını ziyaret eder ve arama yapar', () => {
        cy.visit('https://www.amazon.com.tr/'); //amazon trye gider
        cy.get('#twotabsearchtextbox').type('akıllı telefon'); // Arama kutusuna metin yazma
        cy.get('.nav-input').click({ multiple: true }); // Arama düğmesine tıklama

        // İlgili ürünlerin listelendiğini ve sonuçları kontrol etmek için gerekli kodları ekleyebilirsiniz.
    });
});
describe('Google Arama Testi', () => {
    it('Google ana sayfasını ziyaret eder ve arama yapar', () => {
        cy.visit('https://www.google.com/');

        cy.get('[name="q"]').type('qwrqwrqwronu'); // Arama kutusuna metin yazma
        cy.get('[name="btnK"]').eq(1).click({ multiple: true }) // Google Arama düğmesine tıklama

    });
});
