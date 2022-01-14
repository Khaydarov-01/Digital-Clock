let h1 = document.getElementById('demo'),
    p = document.getElementById('demo1');

    setInterval(myWatch, 1000)
 
    function myWatch() {
        let d = new Date();
         //let hour = d.getHours();
        // let min = d.getMinutes();
        // let sec = d.getSeconds();
        //h1.innerHTML = hour + ':' + min + ':' + sec;
       h1.innerHTML = d.toLocaleTimeString();
    }
function myDate() {
    let data = new Date();
        let year = data.getFullYear();
        let month = data.getMonth();
        let days = data.getDate();
        let day = data.getDay();

    const oylar = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const kunlar = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday']

    p.innerHTML = kunlar[day] + ", " + oylar[month] + ' ' + days + ", " + year; 
}
myDate()
