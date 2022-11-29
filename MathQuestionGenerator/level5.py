import random

f = open('level5.json', 'w')


loopnum = range(200)
text1 = '\t\t"text": ["'
text2 = '","-","'
text3 = '","'
text4 = '"],'
answer1 = '\t\t"answer": '

# print('[')
f.write('[')

for i in loopnum:
    num1 = random.randint(100, 899)
    num2 = random.randint(10, 99)
    result = random.randint(100, 999)

    if(random.randint(0, 1) == 0):
        # print("\t{")
        # print(text1 + str(num1) + text2 +
        #       str(num2) + text3 + str(result) + text4)
        # if num1-num2 == result:
        #     print(answer1 + '"T"')
        # else:
        #     print(answer1 + '"F"')

        # if i == 199:
        #     print("\t}")
        # else:
        #     print("\t},")
        f.write("\t{")
        f.write(text1 + str(num1) + text2 +
                str(num2) + text3 + str(result) + text4)
        if num1-num2 == result:
            f.write(answer1 + '"T"')
        else:
            f.write(answer1 + '"F"')

        if i == 199:
            f.write("\t}")
        else:
            f.write("\t},")
#     else:
#         print("\t{")
#         print(text1 + str(num1) + text2 + str(num2) +
#               text3 + str(num1-num2) + text4)
#         print(answer1 + '"T"')

#         if i == 199:
#             print("\t}")
#         else:
#             print("\t},")
# print(']')
    else:
        f.write("\t{")
        f.write(text1 + str(num1) + text2 + str(num2) +
                text3 + str(num1-num2) + text4)
        f.write(answer1 + '"T"')

        if i == 199:
            f.write("\t}")
        else:
            f.write("\t},")
f.write(']')
