
var data_no = 1;
let questions = [
    {
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        about: "About the Founder",
        name: "Bhanu Pratap Singh",
        pic: "pexels-josh-sorenson-1714208.jpg",

        
    },
    {
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",


        about: "about us.",
        name: "Lorem",
        pic: "fold3.png",

        
    },
    {
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",


        about: "What future holds for us??",
        name: "Dream to touch every continent",
        pic: "iphone13.jfif",

    }
    ,
];
/*feching data
*/
function myFunction(no) {
    document.getElementById("data").innerHTML = questions[no - 1].data;
    document.getElementById("about").innerHTML = questions[no - 1].about;
    document.getElementById("name").innerHTML = questions[no - 1].name;
    document.getElementById("pic").src = questions[no - 1].pic;
}

/*responding to mouse click*/
$('html').mousedown(function (event) {
    switch (event.which) {
        case 1:
            if (data_no < 3) {
                data_no = data_no + 1;
                myFunction(data_no);
            }
            
            break;
        case 2:
            
            break;
        case 3:
            if (data_no > 1) {
                data_no = data_no - 1;
                myFunction(data_no);
            }
            
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
/*disabling right click*/
$(document).bind("contextmenu", function (e) {
    return false;
});


/*disabling selecting text*/
if (typeof document.onselectstart != "undefined") {
    document.onselectstart = new Function("return false");
}

/*document.getElementById("myImg").src = "hackanm.gif";
*/
myFunction(1);

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal(`#data, #pic`, {
    interval: 100
});
