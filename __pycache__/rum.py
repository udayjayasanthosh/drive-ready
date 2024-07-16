def fun(a):
    print(a)
    if(a==0):
        return
    fun(a-1)
fun(10)