const { createApp } = Vue;
createApp({
  data(){ return { q:'', items: dataBahanAjar }; },
  computed:{ filtered(){ const k=this.q.trim().toLowerCase(); if(!k) return this.items; return this.items.filter(i=> (i.namaBarang+i.kodeBarang+i.kodeLokasi).toLowerCase().includes(k)); } },
  methods:{
    tambah(){
      const kodeLokasi = prompt('Kode Lokasi:'); if(!kodeLokasi) return;
      const kodeBarang = prompt('Kode Barang:'); if(!kodeBarang) return;
      const nama = prompt('Nama Barang:'); if(!nama) return;
      const jenis = prompt('Jenis Barang:'); if(!jenis) return;
      const edisi = prompt('Edisi:'); if(!edisi) return;
      const stok = prompt('Stok:'); if(stok===null) return;
      this.items.push({ kodeLokasi, kodeBarang, namaBarang: nama, jenisBarang: jenis, edisi, stok: Number(stok)||0, cover:'img/default.png' });
    }
  }
}).mount('#app');
