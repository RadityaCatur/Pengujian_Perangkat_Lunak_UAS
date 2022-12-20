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
      cy.get(':nth-child(2) > .cursor').click()
  
      // mengklik tombol detail peminjaman
      cy.get('.odd > :nth-child(10) > .btn').click()
  
      // mengklik tombol kembali
      cy.get('.btn').click()
    })
  })

