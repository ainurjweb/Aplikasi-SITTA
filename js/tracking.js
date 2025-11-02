const { createApp } = Vue;
createApp({
  data(){ return { noDO:'', hasil:'' }; },
  methods:{
    cari(){
      const key = this.noDO.trim();
      if(!key){ this.hasil = '<p>Masukkan nomor DO.</p>'; return; }
      const d = dataTracking[key];
      if(!d){ this.hasil = '<p>Nomor DO tidak ditemukan.</p>'; return; }
      let html = `<h3>${d.nama}</h3><p>Status: <b>${d.status}</b></p><p>Ekspedisi: ${d.ekspedisi}</p><p>Tanggal Kirim: ${d.tanggalKirim}</p><p>Paket: ${d.paket}</p><p>Total: ${d.total}</p><ul>`;
      d.perjalanan.forEach(p=> html+= `<li>${p.waktu} - ${p.keterangan}</li>`);
      html += '</ul>'; this.hasil = html;
    }
  }
}).mount('#app');
