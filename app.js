window.addEventListener("load", () => {
    clock(); 
    function clock() {
        const today = new Date();

        //Get Time Components
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        //add '0' to hour, minute, and second when they are less then 10 seconds.
        const hour = hours <10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;

        //Make cloick a 12-hour time clock
        const hourTime = hour > 12 ? hour - 12 : hour;

        const ampm = hour < 12 ? "AM" : "PM";

        //Get date components
        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();

        //declaring a list of all months in a year
        const monthList = [
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

        //Get current date and time
        const date = monthList[month] + " " + day + ", " + year;
        const time = hourTime + ":" + minute + ":" + second + ampm;

        //combine current date and time
        const dateTime = date + " - " + time;

        //print current date and time to the DOM
        document.getElementById("date-time").innerHTML = dateTime;
        setTimeout(clock, 1000);

     }
});