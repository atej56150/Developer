names = ['Alice', 'Bob', 'Charlie']

print(names)

if 'David' in names:
    print("The name already exists in the list.")
else:
    names.append('David')
    print("The name was added to the list.")

print(names)
