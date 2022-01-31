//console.log("Hello from main");

const metoe = document.querySelector(".menubar");
console.log(metoe);
metoe.addEventListener("click", showmenup);


const metoo = document.querySelector(".kosbox");
console.log(metoo);
metoo.addEventListener("click", showmenup);



const mySVG = document.getElementById("splash-svg");
console.log(mySVG);
let svgDoc = '';




mySVG.addEventListener("load", svgdoc);

function svgdoc() {
    //console.log("fucku");
    svgDoc = mySVG.contentDocument;
    console.log(svgDoc);

    const heading = document.querySelector(".k1");
    const orign = heading.innerText;

    //    "Excuse Me! -  Click Top Right To See What Is On The Menu"




    //    svgDoc.getElementById("path398");
    //    console.log(svgDoc.getElementById("path3981"))

    svgDoc.getElementById("path3981").addEventListener("mouseenter", e => { heading.innerHTML = "Check out our menu for services" });
    svgDoc.getElementById("path3981").addEventListener("mouseleave", e => { heading.innerHTML = "KOS Web & Admin Support" });

    svgDoc.getElementById("path3867").addEventListener("mouseenter", e => { heading.innerHTML = "Wake Me Up Before You Go Go", document.body.style.backgroundColor = "#FC17BB"; });
    svgDoc.getElementById("path3867").addEventListener("mouseleave", e => { heading.innerHTML = heading.innerText, document.body.style.backgroundColor = "rgb(65, 65, 64)", restex(orign, heading) });

    svgDoc.getElementById("path2609").addEventListener("mouseenter", e => { heading.innerHTML = "Lets Go Brandon" });
    svgDoc.getElementById("path2609").addEventListener("mouseleave", e => { heading.innerHTML = heading.innerText, restex(orign, heading) });

    svgDoc.getElementById("path3291").addEventListener("mouseenter", e => { heading.innerHTML = "Time to get outta here!" });
    svgDoc.getElementById("path3291").addEventListener("mouseleave", e => { heading.innerHTML = "KOS Web & Admin Support" });

    svgDoc.getElementById("path3041").addEventListener("mouseenter", e => { heading.innerHTML = "Wait! Our office is Covid secure" });
    svgDoc.getElementById("path3041").addEventListener("mouseleave", e => { heading.innerHTML = "KOS Web & Admin Support" });

    svgDoc.getElementById("path3959").addEventListener("mouseenter", e => { heading.innerHTML = "Click for Main Menu!", document.body.style.backgroundColor = "#46FC17", showmenu() });
    svgDoc.getElementById("path3959").addEventListener("mouseleave", e => { heading.innerHTML = "KOS Web & Admin Support", document.body.style.backgroundColor = "rgb(65, 65, 64)"; });


    function restex(origin, heading) {

        console.log(origin + heading.innerText);


        if (heading.innerText !== origin.innerText) {
            heading.innerText = orign;


        };



    }



}

const menubar = document.getElementsByClassName("menubar");
console.log(menubar);





function showmenup() {
    event.preventDefault();
    showmenu();
}


function showmenu() {

    // event.preventDefault();

    const me = document.querySelector(".menu");
    console.log(me);


    if (me.style.visibility === "hidden") {
        me.style.visibility = "visible";
    } else {
        me.style.visibility = "hidden";
    }


}