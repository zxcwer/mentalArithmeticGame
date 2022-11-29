import random

f = open('level3.json', 'w')


loopnum = range(200)
text1 = '\t\t"text": ["'
text2 = '","-","'
text3 = '","'
text4 = '"],'
answer1 = '\t\t"answer": '

# print('[')
f.write('[')

for i in loopnum:

    if i % 2 == 0:
        text2 = '","-","'
    else:
        text2 = '","+","'
    num1 = random.randint(10, 99)
    num2 = random.randint(1, 9)
    result = random.randint(1, 99)

    if(random.randint(0, 1) == 0):
        f.write("\t{")
        f.write(text1 + str(num1) + text2 +
                str(num2) + text3 + str(result) + text4)
        if i % 2 == 0:
            if num1-num2 == result:
                f.write(answer1 + '"T"')
            else:
                f.write(answer1 + '"F"')
        else:
            if num1+num2 == result:
                f.write(answer1 + '"T"')
            else:
                f.write(answer1 + '"F"')

        if i == 199:
            f.write("\t}")
        else:
            f.write("\t},")
    else:
        f.write("\t{")
        if i % 2 == 0:
            f.write(text1 + str(num1) + text2 + str(num2) +
                    text3 + str(num1-num2) + text4)
        else:
            f.write(text1 + str(num1) + text2 + str(num2) +
                    text3 + str(num1+num2) + text4)
        f.write(answer1 + '"T"')

        if i == 199:
            f.write("\t}")
        else:
            f.write("\t},")
f.write(']')
