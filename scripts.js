var modal = document.querySelector('.modal');
   var trigger = document.querySelector('.trigger');
   var closeButton = document.querySelector('.close-button');

   trigger.addEventListener('click', toggleModal);
   closeButton.addEventListener('click', toggleModal);

   function toggleModal() {
       modal.classList.toggle('show-modal');
   }
