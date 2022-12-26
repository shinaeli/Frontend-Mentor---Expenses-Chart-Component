const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const today = new Date().getDay();
console.log(today);

const getData = data.map(item => {
    const {day, amount} = item;
    let percentHeight = Math.round((amount / 52.36) * 100);
    if(day === days[today - 1] && (today - 1 > 0)) {
        return `<div class="compo">
        <h3>$${amount}</h3>
        <div style="height: ${percentHeight}px; background-color: hsl(186, 34%, 60%);"></div>
        <p>${day}</p>
    </div>`;
    } else if(today - 1 <= 0 && (day === days[days.length - 1])) {
        return `<div class="compo">
        <h3>$${amount}</h3>
        <div style="height: ${percentHeight}px; background-color: hsl(186, 34%, 60%);"></div>
        <p>${day}</p>
    </div>`;
    } else {
        return `<div class="compo">
        <h3>$${amount}</h3>
        <div style="height: ${percentHeight}px;"></div>
        <p>${day}</p>
    </div>`;
    }
})

const allData = getData.join(' ');
console.log(allData);

const chartsEl = document.querySelector('.charts');
chartsEl.innerHTML = allData;

const allBars = document.querySelectorAll('.compo div');
console.log(allBars);
allBars.forEach(bar => {
    bar.addEventListener('mouseover', function() {
        let amountEl = bar.previousElementSibling;
        amountEl.classList.toggle('show');
        // amountEl.classList.add('show');
        console.log(amountEl);
    })
})

// const allBars = document.querySelectorAll('.compo');
// [...allBars].map(bar => {
//   bar.addEventListener('mouseover', function() {
//     let amountEl = bar.firstChild;
//     amountEl.classList.add('show');
//     console.log(amountEl);
//   })
// })
