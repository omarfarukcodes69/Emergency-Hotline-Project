
// .......... Reuseable function .........
function getId(id) {
    const idName = document.getElementById(id)
    return idName

}
function getClass(className) {
    const cName = document.getElementsByClassName(className)
    return cName
}


const allCards = getId("all-cards");
// .............. heart button click even -------------
//  ------heart hover even -------
allCards.addEventListener("mouseover", function (e) {
    if (e.target.className.includes("heart-btn")) {
        const heartButton = e.target;
        heartButton.classList.add("text-red-500");
    }
})
allCards.addEventListener("mouseout", function (e) {
    if (e.target.className.includes("heart-btn")) {
        const heartButton = e.target;
        heartButton.classList.remove("text-red-500");
    }
})

// ---------heart clicked even -----------
allCards.addEventListener("click", function (e) {
    if (e.target.className.includes("heart-btn")) {
        const heartButton = e.target;
        // ---- click event -----
        heartButton.addEventListener("click", function () {
            heartButton.classList.toggle("text-red-500");
            const totalHeart = document.getElementById("total-heart").innerText;
            const currentHeart = Number(totalHeart) + 1;
            document.getElementById("total-heart").innerText = currentHeart;
        })
    }
})


////--------------- call btn even use even daligation---------------

/// ..... hover effect even.....
allCards.addEventListener("mouseover", function (e) {
    if (e.target.className.includes("call-btn")) {
        const callButton = e.target;
        callButton.classList.add("bg-black")
        // console.log("call button is hovered")
    }
})
allCards.addEventListener("mouseout", function (e) {
    if (e.target.className.includes("call-btn")) {
        const callButton = e.target;
        callButton.classList.remove("bg-black")
        // console.log("call button is hoverout")
    }
})

// ......click event.....
allCards.addEventListener("click", function (e) {
    if (e.target.className.includes("call-btn")) {
        const callButton = e.target;
        // --- coin minus ----
        const totalCoin = Number(getId("total-coin").innerText);
        if (totalCoin <= 0) {
            alert("আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            return
        }
        const newCoin = totalCoin - 20;
        getId("total-coin").innerText = newCoin;

        // ---add history---
        const cardTitle = callButton.parentNode.parentNode.children[1].children[0].innerText;
        const callNumber = callButton.parentNode.parentNode.children[1].children[2].innerText;
        const historyContainer = getId("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="history-card bg-gray-100 my-2 p-4 flex justify-between items-center rounded-lg">
                    <div>
                        <h1 class=" text-md font-semibold ">${cardTitle}</h1>
                        <p class="text-sm text-gray-500">${callNumber}</p>
                    </div>
                    <h1 class="text-md text-gray-500">${new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true })}</h1>
                </div>
        `
        historyContainer.appendChild(newHistory)
        alert(cardTitle + " " + callNumber);
        // console.log(cardTitle, callNumber, historyContainer,callButton)

    }
})

// ........... copy button even handalinhg ..............
// ---copy btn hover even ----
// -----hover effect ----
allCards.addEventListener("mouseover", function (e) {
    if (e.target.className.includes("copy-btn")) {
        const copyBtn = e.target;
        copyBtn.classList.add("bg-black")
    }
})
allCards.addEventListener("mouseout", function (e) {
    if (e.target.className.includes("copy-btn")) {
        const copyBtn = e.target;
        copyBtn.classList.remove("bg-black")
    }
})
// ---copy btn click even ----
allCards.addEventListener("click", function (e) {
    if (e.target.className.includes("copy-btn")) {
        const copyBtn = e.target;
        const callNumber = copyBtn.parentNode.parentNode.children[1].children[2].innerText;
        // alert("নাম্বার কপি হয়েছে:" + " " + callNumber);
        // ...copy count ...
        const totalCopy = getId("total-copy").innerText;
        const currenCopy = Number(totalCopy) + 1;
        getId("total-copy").innerText = currenCopy;
        // .... copy number ....
        navigator.clipboard.writeText(callNumber).then(function () {
            alert("নাম্বার কপি হয়েছে:" + " " + callNumber);
        }).catch(function (err) {
            console.log("নাম্বার কপি হয় নি :" + " " + callNumber);
        });
    }
})

// ..............clear button event handaling ......................
getId("clear-btn").addEventListener("click", function () {
    getId("history-container").innerHTML = "";
    console.log("clear is clicked")
})