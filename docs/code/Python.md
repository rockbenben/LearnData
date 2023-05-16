---
article: false
title: Python
icon: python
order: 3
---

Python 很久没用了，暂时只做记录作用。

## 入门文档

- [Python3 语法](http://www.runoob.com/python3/python3-basic-syntax.html)
- [Scrapy 入门](http://scrapy-chs.readthedocs.io/zh_CN/latest/intro/tutorial.html#intro-tutorial)
  浮点数：1.23x109 就是 1.23e9，或者 12.3e8，0.000012 可以写成 1.2e-5
- [requests](https://requests.readthedocs.io/zh_CN/latest/) 模块 - 获取数据
- [BeautifulSoup4](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/) 模块 - 解析 HTML
- [openpyxl](https://openpyxl.readthedocs.io/en/stable/) 模块 - 读写 Excel 文件
- Pillow 模块 - 图片
- re 模块 - 正则表达式

## 简单示例

```python
import requests  #载入指定库
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:63.0) Gecko/20100101 Firefox/63.0', 'Content-Type': 'text/html; charset=utf-8'}
r = requests.get("<http://www.runoob.com/python3/python3-string.html>", headers=headers)
#r.encoding = 'utf-8' #如果没设置表头，可以设置编码防止中文出现乱码
r.encoding = r.apparent_encoding #使用网页固定编码
print(r.text)
print(r.headers)

from bs4 import BeautifulSoup
soup = BeautifulSoup(r.text, "html.parser")
print(soup.title.string)

from PIL import Image

# 打开一个 jpg 图像文件，注意是当前路径
im = Image.open('test.jpg')
# 获得图像尺寸
w, h = im.size
print('Original image size: %sx%s' % (w, h))
# 缩放到 50%
im.thumbnail((w//2, h//2))
print('Resize image to: %sx%s' % (w//2, h//2))
# 把缩放后的图像用 jpeg 格式保存
im.save('thumbnail.jpg', 'jpeg')
```

`if __name__ = "__main__"` 是只在主程序中运行，如果是作为模块引用，则不运行。
`sys.path.append("c:\\\\Python37\\\\test)` 添加模块的搜索路径文件夹。`\\` 在 Pythone 中会转义，所以要输入两个。

## 基础语法

```python
# end=" "为后缀，可空，默认为换行符
print("密码不能含有“*”，你还有",count,"次机会", end=" ")

# ''' 三引号可以用多行，或在每行后添加 \\ ，或每行用引号括起来

type(a) #判别变量种类，容易出问题，不要用于判定
isinstance(a,float) #判断变量是否是该类型，主要使用

# s 为字符串
s.isalnum()  #所有字符都是数字或者字母，为真返回 True, 否则返回 False
s.isalpha()  #所有字符都是字母，为真返回 True, 否则返回 False
s.isdigit()  #所有字符都是数字，为真返回 True, 否则返回 False
s.islower()  #所有字符都是小写，为真返回 True, 否则返回 False
s.isupper()  #所有字符都是大写，为真返回 True, 否则返回 False
s.istitle    #所有单词都是首字母大写，为真返回 True, 否则返回 False
s.isspace    #所有字符都是空白字符，为真返回 True, 否则返回 False
```

## 序列类型

```python
#列表
list =[1,2,3,"a","b"]
list.append([4,1])
list =[1,2,3,"a","b",[4,1]] #append() 函数是方法向列表的尾部添加一个新的元素

#元组
tuple = (1,2,3,"a","b")
tuple = (1,) #元组只有一个元素时，必须在后面加逗号

#字符串
set() 是个集合函数，括号里的参数可以是字典类型，列表类型，元组类型，字符串类型，不能是数字类型。
s1 = "abc123"
s2 = "abc,123"
s2.split(",")) #字符串分割后变为列表，使用逗号进行分割 ["abc",123]
print("|".join(list)) #join 只能对字符串进行操作，用"|"中的符号连接字符串，比如 ab

r1 = range(1, 4)

#集合是无序列的，每次出现顺序都不同，不支持按索引提取
set()
set1 = set(list) =([1,2,3,"a","b"])
college1 = {"哲学", "经济学", "法学"}
print(college1) #每次集合排列顺序是随机的
college2 = set(["哲学", "经济学", "法学"]) #将其他数据转换为集合

#字典
dict()
{}
```

## 字符串用法

```python
len(string) #返回字符串长度
join(seq)  # 以指定字符串作为分隔符，将 seq 中所有的元素 (的字符串表示) 合并为一个新的字符串
startswith(str, beg=0,end=len(string)) #检查字符串是否是以 obj 开头，是则返回 True，否则返回 False。如果 beg 和 end 指定值，则在指定范围内检查。
endswith(suffix, beg=0, end=len(string)) # 检查字符串是否以 obj 结束，如果 beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True，否则返回 False.

count(str, beg= 0,end=len(string))  # 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数
find(str, beg=0 end=len(string))  #检测 str 是否包含在字符串中，如果指定范围 beg 和 end，则检查是否包含在指定范围内，如果包含返回开始的索引值，否则返回 -1
rfind(str, beg=0,end=len(string)) #类似于 find() 函数，不过是从右边开始查找。
index(str, beg=0, end=len(string)) # 跟 find() 方法一样，只不过如果 str 不在字符串中会报一个异常。
rindex( str, beg=0, end=len(string)) #类似于 index()，不过是从右边开始。

strip([chars])   #在字符串上执行 lstrip() 和 rstrip(),移除头尾指定字符
replace(old, new [, max]) #把 将字符串中的 str1 替换成 str2，如果 max 指定，则替换不超过 max 次。
split(str="", num=string.count(str))  #num=string.count(str)) 以 str 为分隔符截取字符串，如果 num 有指定值，则仅截取 num 个子字符串
splitlines([keepends])  #按照行 ('\\r', '\\r\\n', \\n') 分隔，返回一个包含各行作为元素的列表，如果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。

lower()  #转换字符串中所有大写字符为小写。
upper()  #转换字符串中的小写字母为大写
swapcase() #将字符串中大写转换为小写，小写转换为大写
```

## 运算符

| 运算符 | 描述                      | 实例                                    |
| ------ | ------------------------- | --------------------------------------- |
| %      | 取模 - 返回除法的余数     | 21 % 10 输出结果 1                      |
| \*\*   | 幂 - 返回 x 的 y 次幂     | 10\*\*21 为 10 的 21 次方               |
| //     | 取整除 - 返回商的整数部分 | 9//2 输出结果 4 , 9.0//2.0 输出结果 4.0 |

优先级：not > and > or
not 1 or 0 and 1 or 3 and 4 or 5
(not 1) or (0 and 1) or (3 and 4) or 5

![Python 运算符优先级](https://img.newzone.top/2022-06-29-18-18-44.png?imageMogr2/format/webp)

## 条件三元表达式

```python
x, y = 4, 5
if x < y:
    small = x
else:
    small = y
# 可以缩略为下面一句
small = x if x < y else y

x,y,z=6,5,5
if x<y:
    small = x
    if z < small:
        small =z
elif y < z:
    small =y
else:
    small = z
# 可以缩略为下面一句
small = x if (x<y and not(z<x)) else (y if y<z else z)
```

## 条件循环

```python
while True:    # 无限循环条件
break # 跳出 for 和 while 的循环体。如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行
continue # 告诉 Python 跳过当前循环块中的剩余语句，然后继续进行下一轮循环
for a in b   #遍历任何序列的项目，如一个列表或者一个字符串

# assert（断言）确保程序中的某个条件一定为真才能让程序正常工作，否则就让程序自动崩溃并抛出 AssertionError 异常
assert 3 > 4
```

```python
#条件循环参考，用户只有三次输入错误，内容中包含“*”不计算在内
count=3
password="xxxxdfd"

while count:  # 0 为 False，其他为 True
    passwd = input("请输入密码：")
    if passwd == password:
        print("密码正确，进入程序")
        break
    elif "*" in passwd:
  # end=" "为后缀，可空，默认为换行符
        print("密码不能含有“*”，你还有",count,"次机会", end=" ")
        continue
    else:
        print("密码错误，你还有",count-1,"次机会", end=" ")
    count-=1
```

## range() 函数

range(stop)

range(start, stop[, step])

range 函数具有一些特性：

- 如果 step 参数缺省，默认 1；如果 start 参数缺省，默认 0。
- 如果 step 是正整数，则最后一个元素（start + i \_ step）小于 stop。
- 如果 step 是负整数，则最后一个元素（start + i \_ step）大于 stop。
- step 参数必须是非零整数，否则抛出 VauleError 异常。

## 向列表添加元素

[向列表添加元素](http://www.runoob.com/python/python-lists.html)

```python
list =[1,"xxxx",3.14,[1,3,3]]
list.append(3)   # 添加元素
list.extend([1,2,"或"])    # 添加列表
list.insert(index, obj)   # index -- 对象 obj 需要插入的索引位置 (从 0 开始 ); obj -- 要插入列表中的对象。

list.remove("xxxx")  # 删除第一个含有相同内容的元素
del list[2]            #删除指定索引位置的元素
list.pop(obj=list[-1])      #obj -- 可选参数，从列表要移除指定索引位置的对象，默认为最后以为，返回被移出的元素对象

list.reverse()  #将列表彻底反转
list.sort()        #从小往大排训
list.sort(reverse=True) #从大往小排序

将指定列表的小甲鱼改为小鱿鱼
list1 = [1, [1, 2, ['小甲鱼']], 3, 5, 8, 13, 18]
list1[1][2][0] = '小鱿鱼'
```

## 列表切片

L = ['Google', 'Runoob', 'Taobao']

L(start: stop[: step]) step 可以使用负数，从尾部往左走。

| 结果 Python 表达式 | 结果                           | 描述                     |
| ------------------ | ------------------------------ | ------------------------ |
| L[2]               | 'Taobao'                       | 读取列表中第三个元素     |
| L[-2]              | 'Runoob'                       | 读取列表中倒数第二个元素 |
| L[1:]              | ['Runoob', 'Taobao']           | 从第二个元素开始截取列表 |
| L[:]               | ['Google', 'Runoob', 'Taobao'] | 获取完整列表             |

元祖 tuple 与列表 list 用法类似，但元祖不能直接修改元素，只能用切片的方法来修改

```python
temp=(1,"xxxxx","迷途"，2)      #元祖
temp=temp[:2]+(“y”,)+temp[2:]
del temp #删除元祖
```

### 列表解析

```python
list1 = [x**2 for x in range(10)]  #list1 为 [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
#相当于
list1 = []
for x in range(10):
    list1.append(x**2)

>>> list1 = [(x, y) for x in range(10) for y in range(10) if x%2==0 if y%2!=0]
#相当于
list1 = []
for x in range(10):
    for y in range(10):
        if x%2==0:
            if y%2!=0:
                list1.extend([(x,y)])
print(list1)
```

## 变量

Python 变量是贴标签，而非存储数据

```python
list1=[1,3,2,9,7,8]
list2=list1[:]
list3=list1
# list2 和 list3 的值此时相同，但一旦对 list1 内部进行调整，比如排序、增减变量
list1.sort()  # list3 会随着 list1 发生变化，list2 不变
```

lambda、filter、map

```python
g=lambda x,y : x+y
g(3,4)
7
list(filter(lambda x:x%2,range(10))) #过滤 0-9 中能整除 2 的数字
list(map(lambda x : x%2, range(10))) #罗列 0-9 每个数字乘 2 的结果
```
