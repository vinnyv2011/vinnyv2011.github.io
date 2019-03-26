var modal = document.querySelector(".modal");
   var trigger = document.querySelector(".trigger");
   var closeButton = document.querySelector(".close-button");

   function toggleModal() {
       modal.classList.toggle("show-modal");
   }
   trigger.addEventListener("click", toggleModal);
   closeButton.addEventListener("click", toggleModal);
   window.addEventListener("click", windowOnClick);

   function windowOnClick(event) {
       if (event.target === modal) {
           toggleModal();
       }
   }


   // Get the modal
   var modal = document.getElementById('myModal');

   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks on the button, open the modal
   btn.onclick = function() {
     modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
