function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
  }
  
  function toggleForm(formId) {
    var form = document.getElementById(formId);
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }
  
  
  function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
  }
  
  // Toggle responsive top navigation
  function toggleResponsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
  }
  
  function openSignupForm() {
    document.getElementById("signupForm").style.display = "block";
  }
  
  function closeSignupForm() {
    document.getElementById("signupForm").style.display = "none";
  }
  
  function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
  }
  
  