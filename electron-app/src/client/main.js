window.$ = window.jQuery = require('jquery')

$(() => {
    let amount = 0.00
    $("#main-click").click(e => {
        switchViews("#step-1", "#step-2")
    })
    $("a").click(e => {
        e.preventDefault()
        amount = 0
        addAmount(0)
        switchViews("#step-3", "#step-1")
    })
    const switchViews = (first, second) => {
        $(first).addClass("hidden")
        $(second).removeClass("hidden")
    }
    $("#stop-collecting").click(e => {
        let xp = 2
        let points = Math.ceil(amount/2)
        let date = Date.now()

        switchViews("#step-2", "#step-3")
        $("#congrats").text("Good work! You just donated $" + (+(Math.round(amount + "e+2")  + "e-2")) + "!")
        $("#xp").text(`You earned ${xp} xp and ${points} gem(s).`)
        $.ajax({
            url: 'http://10.10.163.242:3000/transactions',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                "amount": amount,
                "pointsEarned": points,
                "date": date,
                "location": 1
            })
        })
    })
    const addAmount = item => {
        amount += item
        $("#amount-collected").text(`$${+(Math.round(amount + "e+2")  + "e-2")}`)
    }
    $("#quarter").click(e => addAmount(0.25))
    $("#dime").click(e => addAmount(0.10))
    $("#nickel").click(e => addAmount(0.05))
    $("#penny").click(e => addAmount(0.01))
})