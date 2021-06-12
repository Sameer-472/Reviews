

let data = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let name = document.querySelector('.name')
let img = document.querySelector('.img');
let job = document.querySelector('.job');
let review = document.querySelector('.review')

let currentItem = '0';
function def(){
  const item =  data[currentItem];
  // console.log(item.name)
  name.innerHTML = item.name;
  img.innerHTML = item.img;
  job.innerHTML = `<img src="${item.img}" alt="Mypic">`;
  review.innerHTML = item.text;
}


// console.log(name);

// function for random
function dataIterator(params) {
  let count = params.length - 1;
  let num = Math.floor(Math.random() * 4);
  return {
    next: function () {
      return {
        value: params[num],
        data: false
      }
      return {
        data: true
      }
    }
  }
}

function previous(params) {
  let count = params.length - 1;
  return{
    next: function(){
      if(count >= 0){
        return{
          value: params[count--],
          data: false}
      }
      else {
          return{
              data: true
          }
        
      }
    }
  }
}


function forward(params) {
  let count  = 0;
  return{
    next: function(){
      if(count < params.length){
        return{
          value: params[count++],
          data: false}
      }
      else {
          return{
              data: true
          }
        
      }
    }
  }
}

// console.log(i.next().value.name);
// console.log(i.next().value.name);
// console.log(i.next().value.name);
// console.log(i.next().value.name);
// console.log(i.next());




let random = document.querySelector('.random-button');
console.log(random)
random.addEventListener('click', () => {
  
  // console.log(num)
  let dec = dataIterator(data);
  console.log(dec.next().value.name);
  // console.log(dec.next().value.name);
  // console.log(dec.next().value.name);
  // console.log(dec.next().value.name);
  if(dec != undefined){
  name.innerHTML = `${dec.next().value.name}`;
  img.innerHTML = `<img src="${dec.next().value.img}" alt="Mypic" width="124px">`
  job.innerHTML = `${dec.next().value.job}`;
  // console.log(img)
  
  // console.log(job)
  review.innerHTML = `${dec.next().value.text}`;
  // console.log(review)
}
else{

}
  
});

let currentCandidates = previous(data);

let dec = document.querySelector('.previous');
// console.log(previous)
console.log(dec)
dec.addEventListener('click' , ()=>{
  // let dec = previous(data).next().value;
  let currentCandidate = currentCandidates.next().value
   if(currentCandidate != undefined){
    console.log(currentCandidate.name);
    name.innerHTML = `${currentCandidate.name}`;
    img.innerHTML = `<img src= "${currentCandidate.img}" alt="Mypic" width="124px">`
    job.innerHTML = `${currentCandidate.job}`;
  //   console.log(currentCandidate.name);
  //   console.log(currentCandidate.name);
   }
   else{
     def()
   }
  })  
  
  
  // grabing the id for forward

  // console.log(fwrd)
  
let incCandidate = forward(data);
  
  
var x =  document.querySelector('.forward'); 
console.log(x);
x.addEventListener('click' , increment)
  
  
  function increment(){
  currentCandidate = incCandidate.next().value
   if(currentCandidate != undefined){
    console.log(currentCandidate.name);
    name.innerHTML = `${currentCandidate.name}`;
    img.innerHTML = `<img src= "${currentCandidate.img}" alt="Mypic" width="124px">`
    job.innerHTML = `${currentCandidate.job}`;
  }
  else{
    def()
  }
}
