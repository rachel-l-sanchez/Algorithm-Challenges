arr = [1,2,4,6,8,9, 23,46,36]
find = 6


def search(arr):
    i= 0
    while arr[i] != 6:
        if find not in arr:
            return -1
        i+=1
    searchElement = arr.index(find)
    print(searchElement)

search(arr)

