def HelloWorld():
    print("Hello World")


HelloWorld()


def Greeting(name):
    print("Hi " + name + "!")


Greeting("Elmar")


def Add(num1, num2):
    print(num1 + num2)


Add(10, 15)


def returnAdd(num1, num2):
    return (num1 + num2)


sum = returnAdd(12, 34)

print(sum)
