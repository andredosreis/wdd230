
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  
  let fulldate = dayName +  " " + monthName + " " + d.getDate() + ", " + d.getFullYear();
  
  document.getElementById("currentDate").textContent = "Last Updated: " + fulldate;
  
  try { 
      let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      document.getElementById("currentDate").textContent =
        new Date().toLocaleDateString("en-US", options);
  } catch (e) {
    alert("Error with code or your browser does not support Locale");
  }
  