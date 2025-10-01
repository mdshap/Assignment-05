const data = [
  {
    img: "./assets/emergency.png",
    service: "National Emergency Number",
    name: "National Emergency",
    number: 999,
    type: "All",
  },
  {
    img: "./assets/police.png",
    service: "Police Helpline Number",
    name: "Police",
    number: 999,
    type: "Police",
  },
  {
    img: "./assets/fire-service.png",
    service: "Fire Service Number",
    name: "Fire Service",
    number: 999,
    type: "Fire",
  },
  {
    img: "./assets/ambulance.png",
    service: "Ambulance Service",
    name: "Ambulance",
    number: "1994-999999",
    type: "Health",
  },
  {
    img: "./assets/emergency.png",
    service: "Women & Child Helpline",
    name: "Women & Child Helpline",
    number: 109,
    type: "Help",
  },
  {
    img: "./assets/emergency.png",
    service: "Anti-Corruption Helpline",
    name: "Anti-Corruption",
    number: 106,
    type: "Govt.",
  },
  {
    img: "./assets/emergency.png",
    service: "Electricity Helpline",
    name: "Electricity Outage",
    number: 16216,
    type: "Electricity",
  },
  {
    img: "./assets/brac.png",
    service: "Brac Helpline",
    name: "Brac",
    number: 16445,
    type: "NGO",
  },
  {
    img: "./assets/Bangladesh-Railway.png",
    service: "Bangladesh Railway Helpline ",
    name: "Bangladesh Railway",
    number: 163,
    type: "Travel",
  },
];


// Coin Management Section
let coins=100;
document.getElementById("coins").innerText=`${coins}`;
const manageCoins = () =>{
    
    if(coins>=20)
    {
        coins-=20;
        document.getElementById("coins").innerText=`${coins}`
        return true
    }
    else{
        alert('Not Enough Coin')
        return false
    }


}


// Heart Management Section
let hearts=0;
document.getElementById("hearts").innerText=`${hearts}`
const manageHeart = () =>{
    hearts+=1;
    document.getElementById("hearts").innerText=`${hearts}`
}


// Copy Management Section
let copy=0;
document.getElementById("copy").innerText=`${copy}`;
const manageCopy = () =>{
    copy+=1;
    document.getElementById("copy").innerText=`${copy}`;
}
const copyText = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => alert(`${text} copied to clipboard!`))
    .catch(err => console.error(err));
}


const clearCallHistory = () =>{

  document.getElementById("call-histories").innerHTML=""
    const emptyCallHistoryDiv = document.getElementById("when-call-history-empty");
    emptyCallHistoryDiv.innerHTML=`<div class="bg-gray-100 rounded-md px-2 py-2 mt-2">
                <div>
                <h3 class="text-[14px] text-center">Call History is Empty</h3>
                </div>
            </div>`

  alert('The Call History is Being Cleared...')

}

const showCards = () => {
  const cardsContainer = document.getElementById("cards-container");

  cardsContainer.innerHTML = data
    .map(
      (element, index) => ` 
        <div class=" w-[] bg-white px-6 py-8 rounded-2xl shadow-md">
          <div class="flex items-center justify-between">
            <div class="bg-red-50 p-2 rounded-xl">
              <img class="w-[25px]" src=${element.img} alt="" />
            </div>

            <div onclick="manageHeart()"
            class="btn bg-transparent rounded-full text-gray-500 hover:bg-red-100 hover:text-red-700 shadow-none border-none">
            <i class="fa-regular fa-heart   text-[18px]"></i>
            </div>
          </div>

          <div class="my-4">
            <h3 class="font-bold text-lg">${element.service}</h3>
            <p class="text-gray-500">${element.name}</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-2">${element.number}</h2>
            <span class="bg-gray-100 text-gray-500 px-3 py-1 rounded-xl">${element.type}</span>
          </div>

          <div 
           class="flex justify-between w-full mt-4">
            <div onclick="copyText('${String(element.number)}'), manageCopy()"
             class="px-4 py-1 text-center rounded-lg font-semibold border btn w-[49%] ">
              <i class="fa-regular fa-copy"></i>
              <span>Copy</span>
            </div>

            <div onclick="addToCallHistory(${index})"
              class="bg-green-600 hover:bg-blue-600 px-4 py-1 rounded-lg text-white text-center font-semibold btn w-[49%]">
              <i class="fa-solid fa-phone"></i>
              <span>Call</span>
            </div>
          </div>
        </div>`
    )
    .join("");
};

const addToCallHistory = (index) => {
    const element = data[index]
    const coinsStatus = manageCoins();
    if(!coinsStatus)
    {
        return
    }
    alert(`Calling ${element.service} ${element.number}...`)

    document.getElementById("when-call-history-empty").innerHTML=""
    let time= new Date();
    time=time.toLocaleTimeString()
  const callHistoryDiv = document.getElementById("call-histories");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div class="bg-gray-100 rounded-md px-2 py-2 mt-2 flex justify-between items-center">
                <div>
                <h3 class="text-[14px] font-bold">${element.service}</h3>
                <p class="text-gray-600">${element.number}</p>
                </div>

                <div>
                    <p class="text-[14px]">${time}</p>
                </div>
            </div>`;
  callHistoryDiv.append(newDiv);
};

showCards();
