// Get the tab links and tab contents
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

// Add click event listener to each tab link
tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', () => {
    const target = tabLink.getAttribute('onclick').match(/\((.*?)\)/)[1]; // Get the target ID

    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = 'none';
    });

    // Display the selected tab content
    document.getElementById(target).style.display = 'block';
  });
});

    
            var sidemenu = document.getElementById("sidemenu");
            function openmenu(){
                sidemenu.style.right = "0";
            }
            function closemenu(){
                sidemenu.style.right = "-200px";
            }




    var typed = new Typed(".text", {
    strings:["Software Engineer", "FullStack Developer", "MERN Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbwfUWfZOqj5kKU5k03MiDDVAsL0zhypcmiiNt_xt978vnBZRnTw4nx337cESXG0gXhnxA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ""
    }, 5000)
    form.reset()
   })
   .catch(error => console.error('Error!', error.message))
});
