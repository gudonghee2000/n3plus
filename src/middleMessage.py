import sys 
from pororo import Pororo

Pororo.available_tasks()

zsl = Pororo(task="zero-topic", lang="ko")

def getMessage(message): 
    print(zsl(message, ['긍정', '부정']))
    
if __name__ == '__main__' : 
    getMessage(sys.argv[1])
