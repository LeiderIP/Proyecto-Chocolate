(() => {
  const refs = {
      openModalBtn: document.querySelector("[data-modal-open-0]"),
      closeModalBtn: document.querySelector("[data-modal-close-0]"),
      modal: document.querySelector("[data-modal-0]"),
  };
  
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
  
      function toggleModal() {
          refs.modal.classList.toggle("is_hidden");
      }
  })();