# a) i)
DataArray = [] # 25 elements integer

# a) ii)
try:
    with open("Data.txt", "r", encoding="utf-8") as file:
        lines = file.readlines()
        for line in lines:
            try:
                DataArray.append(int(line))
            except ValueError:
                print(f"Value {line} is not an integer")
except IOError:
    print("File not found")

# b) i)
def PrintArray(arr):
    for i in arr:
        print(i, end=" ")
    print()

# b) ii)
PrintArray(DataArray)

# c)
def LinearSearch(arr, search):
    count = 0
    for element in arr:
        if element == search:
            count += 1
    return count

# d) i)
while True:
    try:
        inp = int(input("[?] Enter a whole number [0-100]: "))
        if (inp > 0) or (inp < 100):
            break
    except ValueError:
        print("Please enter a valid number")

count = LinearSearch(DataArray, inp)
print(f"The number {inp} is found {count} times.")











