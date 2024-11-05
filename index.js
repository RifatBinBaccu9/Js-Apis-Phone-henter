const phoneHunter= async (searchPhone, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const cardData= data.data;
    cards(cardData, isShowAll);
    // console.log(cardData);
}

const cards = (addCardData, isShowAll) => {

const pushData= document.getElementById('card-data');
pushData.innerText='';

const btnShowRemove= document.getElementById('show-all');
if(addCardData.length > 12 && !isShowAll){
  btnShowRemove.classList.remove('hidden');
}else{
  btnShowRemove.classList.add('hidden');
}

if (!isShowAll) {
  addCardData = addCardData.slice(0,12);
}

addCardData.forEach((element) => {
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
      <button class="btn btn-primary" onclick="showDetails('${element.slug}')">Buy Now</button>
    </div>
</div>`;
pushData.appendChild(createDiv);
});

loaderSpenr(false);
}

const showDetails=async (id) =>{
console.log(id);

const res= await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
const data=await res.json();
const cardDetails= data;
console.log(cardDetails);
}

// <!-- Open the modal using ID.showModal() method -->
// <button class="btn" onclick="my_modal_5.showModal()">open modal</button>
// <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
//   <div class="modal-box">
//     <h3 class="text-lg font-bold">Hello!</h3>
//     <p class="py-4">Press ESC key or click the button below to close</p>
//     <div class="modal-action">
//       <form method="dialog">
//         <!-- if there is a button in form, it will close the modal -->
//         <button class="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>

const btnClick = (isShowAll) => {
  loaderSpenr(true);
const searchInput=document.getElementById('searchSection');
const searchValue=searchInput.value;
phoneHunter(searchValue, isShowAll);
}

const loaderSpenr= (loader) =>{
  const loaderHiddenAdd=document.getElementById('loading-spinners');
  if(loader){
    loaderHiddenAdd.classList.remove('hidden');
  }else{
    loaderHiddenAdd.classList.add('hidden');
  }
}

const showAll= () =>{
  btnClick(true);
}