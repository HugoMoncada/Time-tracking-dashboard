let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");
let card__current_hours = document.querySelectorAll(".card__current_hours");
let card__previous_hours = document.querySelectorAll(".card__previous_hours");
var selectedBtn;

initialActiveState()

dailyBtn.addEventListener("click", (selectedBtn) => {
    for(let i = 0; i < 6; i++){
        card__current_hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        card__previous_hours[i].innerHTML = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
    }
    changeActiveState();
    dailyBtn.classList.add("button--active");
});

weeklyBtn.addEventListener("click", (selectedBtn) => {
    for(let i = 0; i < 6; i++){
        card__current_hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        card__previous_hours[i].innerHTML = "Last week - " + data[i].timeframes.weekly.previous + "hrs";
    }
    changeActiveState();
    weeklyBtn.classList.add("button--active");
});


monthlyBtn.addEventListener("click", (selectedBtn) => {
    for(let i = 0; i < 6; i++){
        card__current_hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        card__previous_hours[i].innerHTML = "Last month - " + data[i].timeframes.monthly.previous + "hrs";
    }
    changeActiveState();
    monthlyBtn.classList.add("button--active");
});


function initialActiveState(){
    dailyBtn.classList.add("button--active"); 
    selectedBtn =  dailyBtn;
}


function changeActiveState(){
    document.querySelectorAll("button").forEach( (btn) => {
        if(btn.classList.contains("button--active")){
            btn.classList.remove("button--active");
        }
    })
}