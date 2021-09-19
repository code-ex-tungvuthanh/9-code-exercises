import random
import plotext as plt

print("hello ,world")

flipResultArr = [None]*10
flipChartArr = [None]*10

def flip_coin():
  totalHead = 0

  for x in range(10):
    flipResult = bool(random.getrandbits(1))
    if flipResult == True:
      totalHead += 1
      flipResultArr[x] = "Head"
    else:
      flipResultArr[x] = "Tail"

    flipChartArr[x] = totalHead

flip_coin()

print("Result:")
for i in range(len(flipResultArr)):
  print("Flip " + str(i+1) + ": " + flipResultArr[i])

print("")
print("Chart:")
print(flipChartArr)
plt.xlim(0, 10)
plt.ylim(0, 10)
plt.ticks(11, 11)
flipChartArr.insert(0,0)
plt.plot(flipChartArr)
plt.show()
