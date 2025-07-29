document.addEventListener("DOMContentLoaded", () => {
  console.log("MotoComp Website Loaded");

  // Log klik tombol
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(`Tombol diklik: ${btn.textContent.trim()}`);
      
    });
  });
});
