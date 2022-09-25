var foodimgArr=[
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOv-0z6LEwXKIP9Rk4tYz7mlJ0g_6kNElGxw&usqp=CAU", 
        foodName:"Milk"
    },
    {
        url: "https://www.thefullhelping.com/wp-content/uploads/2020/04/Classic-vegan-white-sandwich-bread-1.jpg",
        foodName:"Bread"
    },
    {
        url: "https://dairyfarmersofcanada.ca/sites/default/files/styles/product/public/product_butter_hero.jpg",
        foodName:"Butter"
    },
    {
        url: "https://im.rediff.com/getahead/2021/may/28slipper-sandwich2.jpg",
        foodName:"Sandwich"
    },
    {
        url: "https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg",
        foodName:"Pancake" 
    },
]

function orderFood(){
    let div2=document.getElementById("part-3");
    let div=document.getElementById("part-2");
    div.innerHTML=null; 
    div2.innerHTML=null; 

    let bag=[];
    var value1=document.querySelector("#food1")
    if(value1.checked){
        bag.push("Milk");
    }
    var value2=document.querySelector("#food2")
    if(value2.checked){
        bag.push("Bread");
    }
    var value3=document.querySelector("#food3")
    if(value3.checked){
        bag.push("Butter");
    }
    var value4=document.querySelector("#food4")
    if(value4.checked){
        bag.push("Sandwich");
    }
    var value5=document.querySelector("#food5")
    if(value5.checked){
        bag.push("Pancake");
    }

    orderCompleted(bag);
    
}

//promise
function orderCompleted(order){
let div=document.getElementById("part-2");
// div.innerHTML=null;

  let status = "open";

  let mypromise = new Promise(function (resolve, reject) {
    let time = Math.random() * 10 * 1000;

    setTimeout(function () {
      if (status === "open") {
        resolve(order);
      } else {
        reject();
      }
    }, time);
  });

  mypromise.then(function (res) {
      let bag="";
      for(let i=0; i<res.length; i++){
          if(res[res.length-1]==res[i]){
              
            bag+=res[i]+" ";
          }else{
              console.log(res[res.length-1], res[i])
            bag+=res[i]+" "+"and ";
          }
        }


    div.append(`${bag}is ready`);

    let div2=document.getElementById("part-3");
    // div2.innerHTML=null;

    for(let i=0; i<foodimgArr.length; i++){
        for(j=0; j<res.length; j++){
            if(foodimgArr[i].foodName===res[j]){
                let img=document.createElement("img");
                img.src=foodimgArr[i].url;
                div2.append(img);
            }
        }
    }

  });
}
