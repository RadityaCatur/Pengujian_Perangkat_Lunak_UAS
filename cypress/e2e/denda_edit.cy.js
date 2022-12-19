describe('melakukan edit testing', () => {
    it('melakukan edit harga denda', () => {
      cy.visit('http://localhost/sistem_perpustakaan-projek2/')

      // memasukkan username
      cy.get('#user').type('farah')
  
      // memasukkan password
      cy.get('#pass').type('123')
  
      // menekan tombol masuk
      cy.get('#loding').click()

      // menuju ke fitur denda
      cy.get(':nth-child(6) > .cursor').click()

      // mengklik button edit
      cy.get('[href="http://localhost/sistem_perpustakaan-projek2/transaksi/denda?id=1"] > .btn').click()

      // mengosongkan inputan harga denda
      cy.get('form > :nth-child(1) > .form-control').clear()

      // memasukkan nominal harga denda baru
      cy.get('form > :nth-child(1) > .form-control').type(5000)

      // mengklik button edit
      cy.get('form > .btn').click()

      // mengklik button edit
      cy.get('[href="http://localhost/sistem_perpustakaan-projek2/transaksi/denda?id=1"] > .btn').click()

      // mengosongkan inputan harga denda
      cy.get('form > :nth-child(1) > .form-control').clear()

      // mengembalikan harga denda lama agar testing lain berjalan lancar
      cy.get('form > :nth-child(1) > .form-control').type(4000)

      // mengklik button edit
      cy.get('form > .btn').click()

      // mengklik button edit
      cy.get('[href="http://localhost/sistem_perpustakaan-projek2/transaksi/denda?id=1"] > .btn').click()

      // mengubah status harga denda menjadi tidak aktif
      cy.get(':nth-child(2) > .form-control').select('Tidak Aktif')

      // mengklik button edit
      cy.get('form > .btn').click()

      // mengklik button edit
      cy.get('[href="http://localhost/sistem_perpustakaan-projek2/transaksi/denda?id=1"] > .btn').click()

      // mengembalikan status harga denda menjadi aktif kembali
      cy.get(':nth-child(2) > .form-control').select('Aktif')

      // mengklik button edit
      cy.get('form > .btn').click()
    })
})