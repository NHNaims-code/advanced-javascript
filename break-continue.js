const nums = [1, -2, 3, -4, 5];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    // if(element > 3){
    //     break;
    // }
    if(element < 0){
        continue;
    }

    console.log(element);
}