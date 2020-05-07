function headersPageFunction(headerName, headerContent) {
    document.querySelector("#page-content").innerHTML = `<h1>${headerName}</h1>
<p>${headerContent}</p>`
}

document.querySelector("#home-btn").addEventListener("click", () => headersPageFunction('Home', `Man, that guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. Well I don't like your unemployed genes in my grandchildren, Jerry. He threatened to turn me in to the government, so I made him and the government go away! Then it's time to get your beak wet tonight playa!`))

document.querySelector("#contact-btn").addEventListener("click", () => headersPageFunction('Contact Me', `You know what shy pooping is, Rick? I'd like to order one large sofa chair with extra chair please. high chair, no no no recliner... and wheelchair on half. Why'd you even rope me into this?! Shut the fuck up about moonmen!`))

document.querySelector("#about-btn").addEventListener("click", () => headersPageFunction('About', `Grassss... Taste bad! You gave them proof that there was something bigger and scarier to unite against, you little idiot! They would have gone back into the Dark Ages for a couple of generations, but instead, they dedicated themselves into making universe-destroying, un-thought-out technology like time travel all so they could try to kill a little shitsack on Earth who couldn't let a dead snake be dead even after it bit his ankle! Oh, wow. That's an intense line of questioning, Snuffles Listen, Morty, I hate to break it to you but what people call "love" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.`))

document.querySelector("#projects-btn").addEventListener("click", () => headersPageFunction('Projects', `I mixed in some praying mantis DNA. You know a praying mantis is the exact opposite of a vole, Morty? They mate once and then bluergh cut each other's heads off. If you break the rules, try to leave or lose the game, you will die. Just like Saaaaw. That just sounds like slavery with extra steps. Oh my god, how could I not see this coming? My lust, my greed! I deserve thiiiiii- Ladies, let's get out of here. I haven't learned a thiiiiiing!`))

// Contact button / forms

document.querySelector("#contact-btn").addEventListener("click", function () {
    document.querySelector("#page-content").innerHTML += `<form>
    <input id = "input-name" placeholder = Name>
    <input id = "input-message" placeholder = Message></form>
    
    <button id = "click-send">Send</button>`
})

document.querySelector("#page-content").addEventListener("click", function(){
    if (event.target.id === "click-send"){
        document.querySelector("#page-content").innerHTML += `<p>Keagan plays lego</p>`
    }
})
