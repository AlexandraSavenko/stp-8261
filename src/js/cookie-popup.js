document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".cookie-popup");
    const overlay = document.querySelector(".overlay");

    const cookiesValue = localStorage.getItem("cookies-reply")
    setTimeout(() => {
        if(cookiesValue){return}
      popup.classList.add("show-popup");
      overlay.classList.add("show-overlay");
    }, 5000);

    document.querySelectorAll(".decline-btn, .accept-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        localStorage.setItem("cookies-reply", e.target.className)
        popup.classList.remove("show-popup");
        overlay.classList.remove("show-overlay");
      });
    });
  });
