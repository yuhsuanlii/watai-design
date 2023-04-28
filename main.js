// datetime

function update() {
    let now = new Date();
    let utc_timestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
    let offset = 8 * 60 * 60 * 1000;
    let gmt8_timestamp = utc_timestamp + offset;
    let gmt8_date = new Date(gmt8_timestamp);

    let year = gmt8_date.getFullYear();
    let month = ("0" + (gmt8_date.getMonth() + 1)).slice(-2);
    let day = ("0" + gmt8_date.getDate()).slice(-2);
    let hours = ("0" + gmt8_date.getHours()).slice(-2);
    let minutes = ("0" + gmt8_date.getMinutes()).slice(-2);
    let seconds = ("0" + gmt8_date.getSeconds()).slice(-2);

    document.getElementById("current-time").innerHTML = "GMT+8　" + year + "-" + month + "-" + day + "　" + hours + ":" + minutes + ":" + seconds;
}
setInterval(update, 1000);
