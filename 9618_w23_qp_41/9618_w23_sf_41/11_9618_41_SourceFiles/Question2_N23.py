# a) i)
Queue = [] # 50 ineteger
HeadPointer = -1 # integer
TailPointer = 0 # integer

# a) ii)
def Enqueue(value):
    global Queue, HeadPointer, TailPointer
    if TailPointer == 50:
        print("Queue is full")
    else:
        Queue.append(value)
        TailPointer += 1
        if HeadPointer == -1:
            HeadPointer = 0

# a) iii)
def Dequeue():
    global Queue, HeadPointer, TailPointer
    if (HeadPointer == -1) or (HeadPointer == TailPointer):
        print("Empty Queue")
        return "Empty"
    else:
        HeadPointer += 1
        return Queue[HeadPointer-1]

# b)
def ReadData():
    try:
        with open("QueueData.txt", "r", encoding="utf-8") as file:
            for line in file.readlines():
                Enqueue(value=line.strip())
    except IOError:
        print("File not found")
    except Exception as e:
        print(f"Another error occured: {e}")

# c) i)
class RecordData:
    # self.ID string
    # self.Total integer
    def __init__(self, ID, Total):
        self.ID = ID
        self.Total = Total
# c) ii
Records = [] # 50 elements of type RecordData
NumberRecords = 0 # integer

# c) iii)
def TotalData():
    DataAccessed = Dequeue()
    Flag = False
    if NumberRecords == 0:
        Records.append(RecordData(ID=DataAccessed, Total=1))
        Falg = True
        NumberRecords += 1
    else:
        for x in range(0, NumberRecords):
            if Records[x].ID == DataAccessed:
                Records[x].Total += 1
                Flag = True
    if Flag is False:
        Records[NumberRecords].ID = DataAccessed
        Records[NumberRecords].Total = 1
        NumberRecords += 1
        
                

    






















