
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      const btn = document.querySelector('.dark-toggle');
      btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

          // MODAL LOGIC
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modal-title");
      const modalText = document.getElementById("modal-text");
        
      document.querySelectorAll(".cards button").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const card = btn.closest(".cards");
          const title = card.querySelector("h2").textContent;
          const text = card.querySelector("p").textContent;
          modalTitle.textContent = title;
          modalText.textContent = text;
          modal.style.display = "block";
        });
      });
      
      function closeModal() {
        modal.style.display = "none";
      }
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };


    const hamburger = document.getElementById('hamburger');
    const navContainer = document.querySelector('.nav-container');

    hamburger.addEventListener('click', () => {
      navContainer.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
      
