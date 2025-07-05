function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
    
    return [];
};

console.log(twoSum([2,5,5,11], 10));
