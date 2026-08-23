data = [10,2,56,78,99,8,49]
result = 0

for i in range (0, len(data) -1):
    if (data[i] + data[i+1]) > result:
        result = data[i] + data[i+1]

print(f"The largest number is {result}")
