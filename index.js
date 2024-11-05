const phoneHunter= async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const cardData= data.data;
    cards(cardData);
}

const cards = addCardData => {

const pushData= document.getElementById('card-data');
pushData.innerText='';

const btnShowRemove= document.getElementById('show-all');
if(addCardData.length > 12){
  btnShowRemove.classList.remove('hidden');
}else{
  btnShowRemove.classList.add('hidden');
}

addCardData = addCardData.slice(0,12);

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

loaderSpenr(false);
}

const btnClick = search => {
  loaderSpenr(true);
const searchInput=document.getElementById('searchSection');
const searchValue=searchInput.value;
phoneHunter(searchValue);
}

const loaderSpenr= loader =>{
  const loaderHiddenAdd=document.getElementById('loading-spinners');
  if(loader){
    loaderHiddenAdd.classList.remove('hidden');
  }else{
    loaderHiddenAdd.classList.add('hidden');
  }
}