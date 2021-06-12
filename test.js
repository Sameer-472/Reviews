// there are some certain test that i have to done throught the completion of the 
// project

console.log("this is my test file")

/// clearing the concept of iterator in js

let data = [
    // index 0
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    // index 1
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    // index 2
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    // index 3
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


//   iterator function for get the values of the object one by one


// iterator for the array of object in increaseing order
function dataIterator(params) {
    let count = 0;
    //   dataIterator function will return an object 
    return {
        //   this is will return an another function called next
        next: function () {
            if (count < params.length) {
                //   the next function will return an object 
                //   this object has two keys values and data
                return {
                    value: params[count++],
                    data: false
                }
            }
            else {
                return {
                    data: true
                }
            }

        }
    }

}

// now we are calling the function for implementation of data object
let profiles = dataIterator(data);
console.log(profiles.next());
console.log(profiles.next().value);
console.log(profiles.next().value.job);

let x = data.length - 1
console.log(data[x].name)



// iterator for the object in decreasing order

function decIterator(params) {
    let count = params.length - 1;
    return {
        next: function () {
                return {
                    value: params[count--],
                    data: false
                
            }
            return{
                    data: true
                }
            }
        }
    }

let dec = decIterator(data);
console.log(dec.next().value.name);
console.log(dec.next().value.name);
console.log(dec.next().value.name);
console.log(dec.next().value.name);