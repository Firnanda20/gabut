function calculateDays() {
    const startDate = document.getElementById("startDate").value;
  
    if (!startDate) {
      alert("Masukkan tanggal terlebih dahulu!");
      return;
    }
  
    const start = new Date(startDate);
    const today = new Date();
  
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    document.getElementById("output").innerText = `Kita sudah bersama selama ${diffDays} hari! 💕`;
  }
  