const noakhaliDonate = document.getElementById('noakhaliDonate');
noakhaliDonate.addEventListener('click', function(){
    
    const inputNoakhali = Number(document.getElementById('inputNoakhali').value);
    // console.log(inputNoakhali);

    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const balanceNumber = Number(balanceString);
    // console.log(balance)
    if(inputNoakhali <= 0 || isNaN(inputNoakhali)){
        alert('Invalid input');
        return
    }

    const inputNoakhaliAmount = balanceNumber - inputNoakhali;
    balance.innerText = inputNoakhaliAmount;

    const noakhaliBalance = document.getElementById('noakhaliBalance');
    const noakhaliBalanceString = noakhaliBalance.innerText;
    const noakhaliBalanceNumber = Number(noakhaliBalanceString);

    const totalNoakhaliAmount = noakhaliBalanceNumber + inputNoakhali;
    noakhaliBalance.innerText = totalNoakhaliAmount;

    const historyItem = document.createElement('div');
        historyItem.classList = (
            'bg-slate-200 p-3 rounded-lg border-2 shadow-xl mb-4 text-center max-w-screen-xl mx-auto'
        )

        historyItem.innerHTML = `
            <p class='text-xl font-bold'>${totalNoakhaliAmount}Taka is Donated for Aid Injured in the quota Movement, Bangladesh</p>
            <p>${new Date().toLocaleTimeString()}</p>
        `
        const historyContainer = document.getElementById('historyContainer');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);


    document.getElementById('inputNoakhali').value = '';
})



const feniButton = document.getElementById('feniButton');
feniButton.addEventListener('click', function(){

    const inputFeni = Number(document.getElementById('inputFeni').value);

        const balance = document.getElementById('balance');
        const balanceString = balance.innerText;
        const balanceNumber = Number(balanceString);

        if(inputFeni <= 0 || isNaN(inputFeni)){
            alert('Invalid input');
            return
        }

        const inputFeniAmount = balanceNumber - inputFeni;

        balance.innerText = inputFeniAmount;

        const feniBalance = document.getElementById('feniBalance');
        const feniBalanceString = feniBalance.innerText;
        const feniBalanceNumber = Number(feniBalanceString);

        const totalFeniAmount = feniBalanceNumber + inputFeni;
        feniBalance.innerText = totalFeniAmount;

        const historyItem = document.createElement('div');
        historyItem.classList = (
            'bg-slate-200 p-3 rounded-lg border-2 shadow-xl mb-4 text-center max-w-screen-xl mx-auto'
        )

        historyItem.innerHTML = `
            <p class='text-xl font-bold'>${totalFeniAmount}Taka is Donated for Aid Injured in the quota Movement, Bangladesh</p>
            <p>${new Date().toLocaleTimeString()}</p>
        `
        const historyContainer = document.getElementById('historyContainer');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);


        document.getElementById('inputFeni').value = '';
})



const injuredButton = document.getElementById('injuredButton');
injuredButton.addEventListener('click', function(){
    const inputInjured = Number(document.getElementById('inputInjured').value);

        const balance = document.getElementById('balance');
        const balanceString = balance.innerText;
        const balanceNumber = Number(balanceString);

        if(inputInjured <= 0 || isNaN(inputInjured)){
            alert('Invalid input');
            return
        }

        const inputInjuredAmount = balanceNumber - inputInjured;
        balance.innerText = inputInjuredAmount;

        const injuredBalance = document.getElementById('injuredBalance');
        const injuredBalanceString = injuredBalance.innerText;
        const injuredBalanceNumber = Number(injuredBalanceString);

        const totalInjuredAmount = injuredBalanceNumber + inputInjured;
        injuredBalance.innerText = totalInjuredAmount;

        const historyItem = document.createElement('div');
        historyItem.classList = (
            'bg-slate-200 p-3 rounded-lg border-2 shadow-xl mb-4 text-center max-w-screen-xl mx-auto'
        )

        historyItem.innerHTML = `
            <p class='text-xl font-bold'>${totalInjuredAmount}Taka is Donated for Aid Injured in the quota Movement, Bangladesh</p>
            <p>${new Date().toLocaleTimeString()}</p>
        `
        const historyContainer = document.getElementById('historyContainer');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);


        document.getElementById('inputInjured').value = '';
})



// top tow button works

const donationTeb = document.getElementById('donationTeb');
const historyTeb = document.getElementById('historyTeb');
historyTeb.addEventListener('click', function(){
    historyTeb.classList.add(
        'text-black',
        'bg-lime-400'
    )

    donationTeb.classList.remove(
        'text-black',
        'bg-lime-400'
    )

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.classList.add('hidden')

    const historyContainer = document.getElementById('historyContainer');
    historyContainer.classList.remove('hidden')

    const accordion = document.getElementById('accordion');
    accordion.classList.add('hidden')
})


donationTeb.addEventListener('click', function(){
    donationTeb.classList.add(
        'text-black',
        'bg-lime-400'
    )

    historyTeb.classList.remove(
        'text-black',
        'bg-lime-400'
    )

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.classList.remove('hidden')

    const accordion = document.getElementById('accordion');
    accordion.classList.add('hidden')
})



// blog button work

const blog = document.getElementById('blog');
blog.addEventListener('click', function(){
    // console.log('hello')
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.classList.add('hidden')

    const accordion = document.getElementById('accordion');
    accordion.classList.remove('hidden')
})