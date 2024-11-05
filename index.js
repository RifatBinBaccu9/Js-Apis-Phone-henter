const phoneHunter= async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const cardData= data.data;
    cards(cardData);
}

const cards = addCardData => {
console.log(addCardData);

const pushData= document.getElementById('card-data');
pushData.innerText='';
addCardData.forEach(element => {
    const createDiv=document.createElement('div');
    createDiv.classList=`card card-compact bg-base-100 w-96 shadow-xl`;
    createDiv.innerHTML=`
  <figure>
    <img
      src="${element.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${element.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
</div>`;
pushData.appendChild(createDiv);
});
}

const btnClick = search => {
const searchInput=document.getElementById('searchSection');
const searchValue=searchInput.value;
phoneHunter(searchValue);
}