const { createApp } = Vue;
createApp({
  data() { return { nama: sessionStorage.getItem('sitta_user') || 'Pengguna' }; },
  mounted() {
    const now = new Date(); const h = now.getHours();
    let greet = 'Selamat malam'; if (h<12) greet='Selamat pagi'; else if (h<18) greet='Selamat siang';
    const el = document.getElementById('greeting'); if (el) el.innerText = greet + ', ' + this.nama + '!';
  }
}).mount('#app');