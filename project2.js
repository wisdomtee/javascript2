# String Manipulation Functions:

def reverse_string(string):
    return string[::-1]

def count_characters(string):
    return len(string)

def capitalize_words(sentence):
    return ' '.join(word.capitalize() for word in sentence.split())

# Array Functions:

def find_maximum(arr):
    return max(arr)

def find_minimum(arr):
    return min(arr)

def sum_of_array(arr):
    return sum(arr)

def filter_array(arr, condition):
    return [x for x in arr if condition(x)]

# Mathematical Functions:

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def fibonacci_sequence(n):
    sequence = [0, 1]
    while len(sequence) < n:
        next_term = sequence[-1] + sequence[-2]
        sequence.append(next_term)
    return sequence[:n]

# Testing the functions:

# String Manipulation Functions:
print(reverse_string("hello"))  # Output: "olleh"
print(count_characters("hello"))  # Output: 5
print(capitalize_words("hello world"))  # Output: "Hello World"

# Array Functions:
arr = [3, 1, 4, 1, 5, 9, 2, 6]
print(find_maximum(arr))  # Output: 9
print(find_minimum(arr))  # Output: 1
print(sum_of_array(arr))  # Output: 31
print(filter_array(arr, lambda x: x % 2 == 0))  # Output: [4, 2, 6]

# Mathematical Functions:
print(factorial(5))  # Output: 120
print(is_prime(17))  # Output: True
print(fibonacci_sequence(6))  # Output: [0, 1, 1, 2, 3, 5]

