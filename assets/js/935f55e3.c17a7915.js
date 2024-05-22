"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[532],{6357:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(4848),a=r(8453);const o={title:"9618_s22_qp_41 (2022 May 41)",sidebar_label:"9618_s22_qp_41"},s=void 0,i={id:"s22_qp_41/index",title:"9618_s22_qp_41 (2022 May 41)",description:"Resources:",source:"@site/docs/9618_s22_qp_41/index.md",sourceDirName:"9618_s22_qp_41",slug:"/s22_qp_41/",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s22_qp_41/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"9618_s22_qp_41 (2022 May 41)",sidebar_label:"9618_s22_qp_41"},sidebar:"tutorialSidebar",previous:{title:"9618_s21_qp_42",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s21_qp_42/"},next:{title:"9618_s22_qp_42",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s22_qp_42/"}},l={},c=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3 - INCOMPLETE",id:"question-3---incomplete",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Resources:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(8374).A+"",children:"Question Paper"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(6433).A+"",children:"Exam Resources"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(39).A+"",children:["My Answers ",(0,t.jsx)(n.code,{children:"(evidence.doc)"})]})}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"question-1",children:"Question 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# a)\r\nclass Player:\r\n    def __init__(self, name, score: int):\r\n        self.__name = name\r\n        self.__score = score\r\n\r\n    def __repr__(self):\r\n        return f"<Player name=\'{self.__name}\' score={self.__score}>"\r\n\r\n    @property\r\n    def name(self):\r\n        return self.__name\r\n\r\n    @name.setter\r\n    def set_name(self, value):\r\n        self.__name = value\r\n\r\n    @property\r\n    def score(self):\r\n        return self.__score\r\n\r\n    @score.setter\r\n    def set_score(self, value):\r\n        self.__score = value\r\n\r\nPlayerData = []\r\n\r\n# b)\r\ndef ReadHighScores():\r\n    try:\r\n        with open("HighScore.txt", "r", encoding="utf-8") as file:\r\n            for i in range(10):\r\n                name = file.readline().strip()[:3]\r\n                try:\r\n                    score = int(file.readline().strip())\r\n                except ValueError:\r\n                    print(f"Not an integer after {name}")\r\n                PlayerData.append(Player(name=name, score=score))\r\n    except (IOError, FileNotFoundError):\r\n        print("File not found!")\r\n    except Exception as e:\r\n        print(f"Another errror occured: {e}")\r\n\r\n# c) \r\ndef OutputHighScores():\r\n    for element in PlayerData:\r\n        print(f"{element.name} {element.score}")\r\n    \r\n# d) i)\r\nReadHighScores()\r\nOutputHighScores()\r\n\r\n# d) ii)\r\n# screenshot\r\n\r\n\r\n# e) i)\r\nwhile True:\r\n    inp_name = input("?) Enter the player name: ").strip().upper()\r\n    if len(inp_name) == 3:\r\n        break\r\n\r\nwhile True:\r\n    inp_score = input("? Enter the player score: ").strip()\r\n    try:\r\n        if "." in inp_score:\r\n            raise ValueError\r\n        inp_score = int(inp_score)\r\n        if (inp_score < 1) or (inp_score > 10000):\r\n            raise ValueError\r\n        break\r\n    except ValueError:\r\n        print("Please enter a valid integer belonging to the given range!")\r\n    except Exception as e:\r\n        print(f"An other error occured: {e}")\r\n\r\n# e) ii)\r\ndef Foo(name, score):\r\n    last_item = PlayerData[-1]\r\n    if inp_score > last_item.score:\r\n        del PlayerData[-1]\r\n        PlayerData.append(Player(name=name, score=score))\r\n    else:\r\n        print("Player doesn\'t belong to Top 10")\r\n\r\n    n = len(PlayerData)\r\n    for i in range(n-1):\r\n        for j in range(0, n-i-1):\r\n            if PlayerData[j].score < PlayerData[j+1].score:\r\n                PlayerData[j], PlayerData[j+1] = PlayerData[j+1], PlayerData[j]\r\n\r\n# e) ii)\r\nFoo(name=inp_name, score=inp_score)\r\nOutputHighScores()\r\n\r\n# f)\r\ndef WriteTopTen():\r\n    with open("NewHighScore.txt", "w+", encoding=\'utf-8\') as file:\r\n        file.write(f"{PlayerData[0].name}\\n{PlayerData[0].score}") # to fix the new line issue\r\n        for el in PlayerData[1:]:\r\n            file.write(f"\\n{el.name}\\n{el.score}")\r\n\r\nWriteTopTen()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"question-2",children:"Question 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# a)\r\nclass Balloon:\r\n    #Health as integer\r\n    #Colour as string\r\n    #DefenceItem as string\r\n    def __init__(self, DefenceItem: str, BalloonColor: str) -> None:\r\n        self.__Health: int = 100\r\n        self.__DefenceItem: str = DefenceItem\r\n        self.__BaloonColor: str = BalloonColor\r\n\r\n    # b)\r\n    def GetDefenceItem(self) -> str:\r\n        return self.__DefenceItem\r\n\r\n    # c)\r\n    def ChangeHealth(self, value: int) -> None:\r\n        self.__Health += value\r\n\r\n    # d)\r\n    def CheckHealth(self) -> bool:\r\n        if self.__Health <= 0:\r\n            return True\r\n        return False\r\n# e)\r\nDefenceItem = input("? Enter Defence Item: ").strip()\r\nBalloonColor = input("? Enter Ballon Color: ").strip()\r\nBalloon1 = Balloon(DefenceItem=DefenceItem, BalloonColor=BalloonColor)\r\n\r\n# f)\r\ndef Defend(obj: Balloon) -> Balloon:\r\n    while True:\r\n        try:\r\n            inp_strength = int(input("? Enter strength of opponent: ").strip())\r\n            break\r\n        except ValueError:\r\n            print("Please enter a valid integer")\r\n        except Exception as e:\r\n            print(f"Another error has occured: {e}")\r\n    obj.ChangeHealth(-inp_strength)\r\n    print(f"You defended with {obj.GetDefenceItem()}")\r\n    if obj.CheckHealth() == True:\r\n        print("Defence Failed")\r\n    else:\r\n        print("Defence Succeeded")\r\n    return obj\r\n\r\n# g) i)\r\nDefend(obj=Balloon1)\r\n\r\n# g) ii)\r\n# screenshot\n'})}),"\n",(0,t.jsx)(n.h2,{id:"question-3---incomplete",children:"Question 3 - INCOMPLETE"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NOT COMPLETED!!!"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'QueueArray = [""] * 10\r\n\r\npHead = 0\r\npTail = 0\r\nnoItems = 0\r\n\r\ndef Enqueue(DataToAdd) -> bool:\r\n    global QueueArray, pHead, pTail, noItems\r\n    if noItems == 10:\r\n        return False\r\n    QueueArray[pTail] = DataToAdd\r\n    if pTail >= 9:\r\n        pTail = 0\r\n    else:\r\n        pTail += 1\r\n    noItems += 1\r\n    return True\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8374:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/9618_s22_qp_41-c7920b97613886cfa7b88995cfc0f545.pdf"},6433:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/9618_s22_sf_41-06a0898313e496977cfcf53430b32b8e.zip"},39:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/evidence-aad473f7f5450a82c7d1eba8cffdb452.doc"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);