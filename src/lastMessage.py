import sys 
from pororo import Pororo

Pororo.available_tasks()

zsl = Pororo(task="zero-topic", lang="ko")

def getMessage(message): 
    print(zsl(message, ['건강', '연애', '인간관계', '자아', '취업', '학업', '금전']))
    
if __name__ == '__main__' : 
    getMessage(sys.argv[1])
