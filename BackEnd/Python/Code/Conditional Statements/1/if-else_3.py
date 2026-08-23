names = ['Alice', 'Bob', 'Charlie', 'David']
name = 'David'  

if name in names:  
    print(f"The name '{name}' already exists in the list.")
else:
    names.append(name)
    print(f"The name '{name}' was added to the list.")

print(names)
