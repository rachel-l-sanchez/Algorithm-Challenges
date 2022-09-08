nums = [5,8,9,1,2,3,0]

def runningSum(nums):
    num = []
    num.append(nums[0])
    for i in range(1, len(nums)):
        nums[i] = nums[i-1] + nums[i]
        num.append(nums[i])
    return num

print(runningSum(nums))
