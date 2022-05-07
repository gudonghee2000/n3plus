import requests
import json
import os

import requests
import json

with open("kakao_code.json","r") as fp:
    tokens = json.load(fp)


friend_url = "https://kapi.kakao.com/v1/api/talk/friends"

headers={"Authorization" : "Bearer " + tokens["access_token"]}

result = json.loads(requests.get(friend_url, headers=headers).text)

print(type(result))
print("=============================================")
print(result)
print("=============================================")


currentPath = os.getcwd()

url = "https://kapi.kakao.com/v2/api/talk/memo/default/send"

headers = {
    "Authorization": "Bearer " + tokens["access_token"]
}

data = {
    "template_object": json.dumps({"object_type": "text",
                                   "text": "Hello, world!",
                                   "link": {
                                       "web_url": "www.naver.com"
                                   }
                                   })
}

response = requests.post(url, headers=headers, data=data)
print(response.status_code)
if response.json().get('result_code') == 0:
    print('메시지를 성공적으로 보냈습니다.')
else:
    print('메시지를 성공적으로 보내지 못했습니다. 오류메시지 : ' + str(response.json()))



