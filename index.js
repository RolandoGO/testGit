//return the evens numbers up the given number.......................

function evensNum(num) {
    let total = 0
    for(let i =0; i<=num;i++){(i%2===0)?total +=1:null}
    console.log(total)
}

//cheking if an array is sort in ascending order.....................


function checkSort(arr) {

    for(let i =0;i<arr.length -1; i++){
        if(arr[i] > arr[i+1]){
            console.log("not ascending "+arr[i],arr[i+1])
            
        }
    }
    
}
checkSort([1,2,4,6,5])