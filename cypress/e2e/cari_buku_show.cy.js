describe('login', () => {
    it('menuju ke website perpustakaan', () => {
      cy.visit('http://localhost/sistem_perpustakaan-projek2/')
    })
  
    it('melakukan login sebagai anggota/siswa', () => {
  
      // memasukkan username
      cy.get('#user').type('rendra')
  
      // memasukkan password
      cy.get('#pass').type('123')
  
      // menekan tombol masuk
      cy.get('#loding').click()

      // masuk ke fitur data pengembalian
      cy.get(':nth-child(3) > .cursor').click()
    })
  })
  
  describe('menampilkan 10 baris data', () => {
    it('memilih menu dropdown [n] entries', () => {    
      cy.get('#example1_length > label > .form-control').select('10')
    })
  })
  
  describe('menampilkan 25 baris data', () => {
    it('memilih menu dropdown [n] entries', () => {
      cy.get('#example1_length > label > .form-control').select('25')
    })
  })