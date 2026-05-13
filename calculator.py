#i'm going to use fuctions to add,subtract, multiply, and divide numbers
def addingNumbers(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

def subtract(*numbers):
    if len(numbers) < 2:
        return "Error: At least two numbers are required for subtraction."
    total = numbers[0]
    for num in numbers[1:]:
        total -= num
    return total

def multiply(*numbers):
    total = 1
    for num in numbers:
        total *= num
    return total

def divide(*numbers):
    if len(numbers) < 2:
        return "Error: At least two numbers are required for division."
    if numbers[1] == 0:
        return "Error: Division by zero is not allowed. It leads to an undefined answer."
    total = numbers[0]
    for num in numbers[1:]:
        total /= num
    return total

#i'm going to use the functions to do some calculations now using arguments
print("Addition:", addingNumbers(1, 2, 3, 4))
print("Subtraction:", subtract(10, 5, 2))
print("Testing Subtraction with just one argument or insufficient arguments:", subtract(10))
print("Multiplication:", multiply(2, 3, 4))
print("Testing Multiplication with zero:", multiply(2, 0, 4))
print("Division:", divide(100, 5, 2))
print("Testing Division by zero:", divide(100, 0, 2))

#What if the user inputs his own numbers in the terminal? Here's how i can do that.
#Just printing some new lines to make the output more readable when the user inputs his own numbers
print("\n")
print("\n")

def get_user_input():
    try:
        numbers = input("Enter numbers separated by spaces: ")
        return list(map(float, numbers.split()))
    except ValueError:
        print("Invalid input. Please enter valid numbers.")
        return []
    
    #I'm trying to use the user input to do some calculations now using the previous functions
user_numbers = get_user_input()
print("Addition:", addingNumbers(*user_numbers))
print("Subtraction:", subtract(*user_numbers))
print("Multiplication:", multiply(*user_numbers))
print("Division:", divide(*user_numbers))