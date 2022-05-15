import sys 
from pororo import Pororo

zsl = Pororo(task="zero-topic")

def getMessage(message): 
    print(zsl(message, ['취업', '학업', '인간관계', '연애', '건강', '자아']))
    
if __name__ == '__main__' : 
    getMessage(sys.argv[1])
