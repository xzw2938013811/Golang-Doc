# 更新日志

**维护版本：**

- go1.22，首次发布：2024-02-08，最后更新：go1.22.5 (2024-07-02)

- go1.21 ，首次发布：2023-08-08，最后更新：go1.21.10 (2024-05-07)

Go语言官方更新日志：[Release History - The Go Programming Language](https://go.dev/doc/devel/release)

Go官方采用语义化版本来标识更新，格式为v`主版本`.`次版本`.`补丁版本` (见[Semantic Versioning](https://semver.org/lang/zh-CN/))，主版本的更新意味着发生了Breaking Change，即无法向下兼容的更新，次版本的更新意味着有新功能添加同时保持向下兼容，补丁版本的更新意味着有问题被修复同时保持向下兼容。

Go团队每半年发布一个二级版本，并且只有最新的两个二级版本是长期维护，维护时间都是六个月，鉴于Go每一次更新都保持着相当高的兼容性，建议在新版本稳定后及时将Go升级到最新版。

Go2.0上一次提出草案是在2018年11月19日，那时还是处于go1.13版本，五年过后，版本已经迭代到了go1.21，Go2.0的各种想法已经通过增量更新的方式体现在了Go1.0上，创始人之一也曾明确表示未来可能并不会有Go2.0，Go将一直为保持向下兼容而努力(见[Go 1 and the Future of Go Programs](https://go.dev/doc/go1compat))。

::: tip

此页面只是对官方日志的一个简单搬运，不定期更新，想获取最新消息还请前往官网。

:::



## 1.22

首次发布：2024-02-06

最后更新：go1.22.5（released 2024-07-02）

go1.22版本的详细更新日志可以前往[Go 1.22 Release Notes](https://go.dev/doc/go1.22)查看，在其维护期间发布的所有补丁版本可以前往[Go1.22 - Release Patch](https://go.dev/doc/devel/release#go1.22.0)了解。、



**语言层面**

1. 解决了go语言循环变量的问题

2. `for range`现在支持数字，比如

    ```go
    for i := range 10 {
    	fmt.Println(i)
    }
    ```

**标准库**

1. 增强了自带的HTTP路由



## 1.21

首次发布：2023-08-08

最后更新：go1.21.10(released 2024-05-07)

go1.21版本的详细更新日志可以前往[Go 1.21 Release Notes](https://go.dev/doc/go1.21)查看，在其维护期间发布的所有补丁版本可以前往[Go1.21 - Release Patch](https://go.dev/doc/devel/release#go1.21.0)了解。



**语言层面**

1. 新增了两个内置函数`min` ，`max`，用于计算最大值最小值。
2. 新增内置函数`clear`，用于清空map和slice
3. 更新了`package`初始化顺序

    - 按导入路径对所有包进行排序
    - 重复执行，直到包的列表为空
    - 找到列表中所有的导入都已被初始化的第一个包
    - 初始化该包并将其从列表中删除

4. 提高和改进了类型推理的能力和精度，主要是泛型相关。

5. 推出了`for range`循环变量改进的预览版本，这是一个困扰了Go开发者接近十年的问题，官方终于要解决了，详情见：[LoopvarExperiment · golang/go Wiki (github.com)](https://github.com/golang/go/wiki/LoopvarExperiment)和[Proposal: Less Error-Prone Loop Variable Scoping (googlesource.com)](https://go.googlesource.com/proposal/+/master/design/60078-loopvar.md)

6. 保证了`recover`的返回值不会是`nil`，如果在调用`panic`时参数为`nil`，则会触发另一个`panic`，返回`*runtime.PanicNilError`。为了兼容性，在编译时设置`GODEBUG=panicnil=1`允许向`panic`传入`nil`。

**标准库**

1. 新增`log/slog`库，提供标准的结构化日志库
2. 新增`testing/slogtest`库，用于验证`slog.Handler`的实现
3. 新增`slices`库，提供了一系列泛型函数用于操作切片。
4. 新增`maps`库，提供了一系列泛型函数用于操作map
5. 新增`cmp`库，用于比较有序类型。

**其他**

1. go1.21.0至少在windows系统上至少需要win10或者Windows Server 2016版本以上才能运行，先前的版本不再支持。
2. go1.21.0至少需要在macOS 10.15 Catalina或者更新的版本才能运行，先前的版本不再支持。
3. 新增了实验性的WebAssembly System Interface，Go依旧在WASM这块不断的探索。
4.  在1.20还是实验性质的(Profile-guide optimization)PGO(见[Profile-guided optimization - The Go Programming Language](https://go.dev/doc/pgo))，1.21版本正式启用。在main包下包含`default.pgo`文件会启用该功能，开启后性能可能会提升2%-7%。
5. 当打印非常深的运行时调用栈时，从原来的只打印前一百个帧，到现在分别打印前50的最后的50个帧。
6. 优化了在Unix平台CGO的调用性能，从1-3微秒优化到了现在的100-200纳秒。
7. 在1.21版本，编译速度提升了接近6%，这主要归功于编译器本身使用PGO来构建。



## 1.20

首次发布：2023-02-01

最后更新：go1.20.14 (released 2024-02-06)

go1.20版本的详细更新日志可以前往[Go 1.20 Release Notes](https://go.dev/doc/go1.20)查看，在其维护期间发布的所有补丁版本可以前往[Go1.20 - Release Patch](https://go.dev/doc/devel/release#go1.20)了解。



**语言层面**

1. 在将切片类型转换为数组时，原来需要对指针数组解引用`*(*[4byte])(x)`来避免和切片操作同一个底层数组，现在可以直接这么写`[4]byte(x)`。
2. `unsafe`新增了`SliceData`，`String`，`StringData`函数，用于构建和结构切片与字符串值。

**标准库**

1. 新增`crypto/ecdh`库，提供了对于ECDH(Elliptic Curve Diffie-Hellman，一种非对称加密方法)的支持。
2. go1.20扩展了对error包装的支持，允许一个error包装多个error。
3. 新增`net/http.ResponseContorller`，提供了一种更清晰、更易于发现的方法来添加每个handler controls。
4. `httputil.ReverseProxy`包含了一个新的Rewrite Hook函数，用于取代之前的Director Hook。

**其他**

1. go1.20是最后一个支持win7，8，Server2008和Server2012的版本，在未来版本中不再提供支持。
2. go1.20是最后一个支持macOS 10.13或10.14的版本，未来版本将不再提供支持。
3. 在1.18和1.19版本中，由于泛型的出现，相较于1.17编译速度出现了倒退，go1.20编译速度将会提升10%左右。
4. 发布PGO(Profile-guided optimization)的预览版本，这是一种计算机界的编译器优化技术，可以提高运行时性能。
5. 在go1.20，在没有C toolchains的系统上，go command禁用cgo。
6. 支持收集程序代码覆盖率文件，见[Coverage profiling support for integration tests - The Go Programming Language](https://go.dev/testing/coverage/)
7. 对GC进行了改进，提高了稳定性，减少内存开销，提升了整体2%的CPU性能。



## 1.19

首次发布：2022-08-02

最后更新：go1.19.13 (released 2023-09-06)

go1.19版本的详细更新日志可以前往[Go 1.19 Release Notes](https://go.dev/doc/go1.19)查看，在其维护期间发布的所有补丁版本可以前往[Go1.19 - Release Patch](https://go.dev/doc/devel/release#go1.19)了解。

**重要变化**

1. 内存模型向c/c++看齐

2. `sync/atomic`包现在提供了更多的类型可供使用

3. 支持使用`runtime/debug.SetMemoryLimit`函数对go内存进行软限制，在某些情况下可以提供内存利用效率

4. 运行时现在会根据协程栈的平均使用情况来选择一个合适的大小为其初始化栈空间内存，这样可以避免频繁的栈扩容缩容

    

## 1.18

首次发布：2022-03-15

最后更新：go1.18.10 (released 2023-01-10)

go1.18版本的详细更新日志可以前往[Go 1.18 Release Notes](https://go.dev/doc/go1.18)查看，在其维护期间发布的所有补丁版本可以前往[Go1.18 - Release Patch](https://go.dev/doc/devel/release#go1.18)了解。

**语言层面**

1. 重量级更新，支持泛型，类型集接口，参数类型约束

**其它**

1. 优化了`append`函数的扩容行为
2. 新增`debug/buildinfo`包，可以在运行时获取go程序的构建信息
3. gofmt现在可以并发的格式化源文件



## 1.17

首次发布：2021-08-16

最后更新：go1.17.13 (released 2022-08-01)

go1.17版本的详细更新日志可以前往[Go 1.17 Release Notes](https://go.dev/doc/go1.17)查看，在其维护期间发布的所有补丁版本可以前往[Go1.17 - Release Patch](https://go.dev/doc/devel/release#go1.17)了解。

**语言层面**

1. 新增`unsafe.Add`函数，支持指针运算
2. 新增`unsafe.Slice`函数，支持获取切片的底层数组的指针
3. 切片现在可以转换为数组指针类型，`[]T => *[N]T`，前提是数组的长度要小于等于切片的长度



## 1.16

首次发布：2021-02-16

最后更新：go1.16.15 (released 2022-03-03)

go1.16版本的详细更新日志可以前往[Go 1.16 Release Notes](https://go.dev/doc/go1.16)查看，在其维护期间发布的所有补丁版本可以前往[Go1.16 - Release Patch](https://go.dev/doc/devel/release#go1.16)了解。

**重要变化**

该版本没什么重要的语法上的变更，一些重要的变化如下

1. 弃用`ioutil`包
2. 支持通过`//go:embed`指令来将一些静态文件嵌入到程序中
3. 新增`io/fs.Fs`类型，对文件系统进行了更好的抽象



## 1.15

首次发布：2020-08-11

最后更新：go1.15.15 (released 2021-08-05)

go1.15版本的详细更新日志可以前往[Go 1.15 Release Notes](https://go.dev/doc/go1.15)查看，在其维护期间发布的所有补丁版本可以前往[Go1.15 - Release Patch](https://go.dev/doc/devel/release#go1.15)了解。

**重要变化**

该版本没什么重要的语法上的变更，一些重要的变化如下

1. 优化了小对象的分配效率

2. 新增了包`time/tzdata`，通过下面的方式支持将时区数据库嵌入到程序中，因为有很多系统本地并没有时区数据信息。

    ```go
    improt _ "time/tzdata"
    ```

3. 对go链接器做出了重大改进，减少了其资源使用，并提高了代码的健壮性

4. 在某些情况下，允许`unsafe.Pointer`转换为`uinptr`



## 1.14

首次发布：2020-02-25

最后更新：go1.14.15 (released 2021-02-04)

go1.14版本的详细更新日志可以前往[Go 1.14 Release Notes](https://go.dev/doc/go1.14)查看，在其维护期间发布的所有补丁版本可以前往[Go1.14 - Release Patch](https://go.dev/doc/devel/release#go1.14)了解。

**语言层面**

1. 支持方法集接口类型嵌套

    ```go
    type MyIO interface {
    	io.WriteCloser
    }
    ```

**其它 **

1. 引用了开放编码优化，`defer`调用的开销降低至几乎跟原生调用一样
2. 支持协程间的异步抢占，没有函数调用的循环将不会再永久阻塞调度



## 1.13

首次发布：2019-09-03

最后更新：go1.13.15 (released 2020-08-06)

go1.13版本的详细更新日志可以前往[Go 1.13 Release Notes](https://go.dev/doc/go1.13)查看，在其维护期间发布的所有补丁版本可以前往[Go1.13 - Release Patch](https://go.dev/doc/devel/release#go1.13)了解。

**语言层面**

1. 支持更现代的数字字面量，比如

    ```go
    0b101 // 二进制
    0o10 // 十进制
    0x1B // 十六进制
    ```

    支持下划线分割数字以带来更好的可读性

    ```go
    10_000
    ```

    虚数`i`的后缀现在可以是任何的二进制，十进制，十六进制，或浮点数数字

**其它**

1. `GO111MODULE`值默认为`auto`
2. 新增`GOPRIVATE`环境变量来支持私有的依赖源
3. 新增`GOSUMDB`环境环境
4. `derfer`的使用开销降低了30%
5. 当发生索引下标越界时，`panic`现在会打印出下标信息
6. go下载依赖时会进行语义化版本验证



## 1.12

首次发布：2019-02-25

最后更新：go1.12.17 (released 2020-02-12)

go1.12版本的详细更新日志可以前往[Go 1.12 Release Notes](https://go.dev/doc/go1.12)查看，在其维护期间发布的所有补丁版本可以前往[Go1.12 - Release Patch](https://go.dev/doc/devel/release#go1.12)了解。

**重要变化**

该版本没什么重要的语法上的变更，一些重要的变化如下

1. 显著提高了堆的扫描性能
2. 运行时将更积极的向操作系统释放申请的内存
3. 用于下载go依赖的命令现在可以并发安全的使用



## 1.11

首次发布：2018-08-24

最后更新：go1.11.13 (released 2019-08-13)

go1.11版本的详细更新日志可以前往[Go 1.11 Release Notes](https://go.dev/doc/go1.11)查看，在其维护期间发布的所有补丁版本可以前往[Go1.11 - Release Patch](https://go.dev/doc/devel/release#go1.11)了解。

**重要变化**

该版本没什么重要的语法上的变更，一些重要的变化如下

1. GoMod首次发布，此前依赖管理的混乱局面将要结束
2. 首次实验性的支持了WASM
3. 运行时采用稀疏堆布局，不再限制堆大小



## 1.10

首次发布：2018-02-16

最后更新：go1.10.8 (released 2019-01-23)

go1.10版本的详细更新日志可以前往[Go 1.10 Release Notes](https://go.dev/doc/go1.10)查看，在其维护期间发布的所有补丁版本可以前往[Go1.10 - Release Patch](https://go.dev/doc/devel/release#go1.10)了解。

**重要变化**

该版本没什么重要的语法上的变更，一些重要的变化如下

1. `go install`命令现在只用于安装和编译命令行工具，不再用于下载依赖
2. `go get`命令现在用于下载源码依赖
3. go测试现在会缓存测试结果，并且会在运行前自动运行`go vet`
4. 显著降低了GC在活跃时造成的延时



## 1.9

首次发布：2017-08-24

最后更新：go1.9.7 (released 2018-06-05)

go1.9版本的详细更新日志可以前往[Go 1.9 Release Notes](https://go.dev/doc/go1.9)查看，在其维护期间发布的所有补丁版本可以前往[Go1.9 - Release Patch](https://go.dev/doc/devel/release#go1.9)了解。

**语言层面**

1. 支持类型别名

**其它**

1. 支持并行编译
2. 新增并发安全的`sync.Map`



## 1.8

首次发布：2017-02-16

最后更新：go1.8.7 (released 2018-02-07)

go1.8版本的详细更新日志可以前往[Go 1.8 Release Notes](https://go.dev/doc/go1.8)查看，在其维护期间发布的所有补丁版本可以前往[Go1.8 - Release Patch](https://go.dev/doc/devel/release#go1.8)了解。

**语言层面**

1. 当两个结构体进行类型转换时，会忽略结构体tag的不同

    ```go
    func example() {
        type T1 struct {
            X int `json:"foo"`
        }
        type T2 struct {
            X int `json:"bar"`
        }
        var v1 T1
        var v2 T2
        v1 = T1(v2) // now legal
    }
    ```

**其它**

1. 垃圾收集造成的暂停时间低至10微秒，大部分情况下低于100微秒（可以看到几乎每个版本go都在努力改进GC）
2. 调用`defer`的开销减少了接近一半
3. go调用c的开销减少了接近一半
4. 优化了map的并发使用检测

## 1.7

首次发布：2016-08-15

最后更新：go1.7.6 (released 2017-05-23)

go1.7版本的详细更新日志可以前往[Go 1.7 Release Notes](https://go.dev/doc/go1.7)查看，在其维护期间发布的所有补丁版本可以前往[Go1.7 - Release Patch](https://go.dev/doc/devel/release#go1.7)了解。

**重要变化**

1. 将`golang.org/x/net/context`加入标准库
2. gc时间相较于1.6大幅缩短
3. `testing`包支持子测试



## 1.6

首次发布：2016-02-17

最后更新：go1.6.4 (released 2016-12-01)

go1.6版本的详细更新日志可以前往[Go 1.6 Release Notes](https://go.dev/doc/go1.6)查看，在其维护期间发布的所有补丁版本可以前往[Go1.6 - Release Patch](https://go.dev/doc/devel/release#go1.6)了解。

**重要变化**

该版本没有语法上的变更，下面是比较重要的变化

1. 对map进行并发使用检测，如果检测到了map正在并发使用会抛出`fatal`
2. 在发生`panic`时，只会打印正在运行协程的调用栈
3. 支持HTTP/2



## 1.5

首次发布：2015-08-19

最后更新：go1.5.4 (released 2016-04-12)

go1.5版本的详细更新日志可以前往[Go 1.5 Release Notes](https://go.dev/doc/go1.5)查看，在其维护期间发布的所有补丁版本可以前往[Go1.5 - Release Patch](https://go.dev/doc/devel/release#go1.5)了解。

**语言层面**

1. 在初始化map字面量的键时，允许省略元素类型

    ```go
    m := map[Point]string{
        Point{29.935523, 52.891566}:   "Persepolis",
        Point{-25.352594, 131.034361}: "Uluru",
        Point{37.422455, -122.084306}: "Googleplex",
    }
    
    // 省略类型
    m := map[Point]string{
        {29.935523, 52.891566}:   "Persepolis",
        {-25.352594, 131.034361}: "Uluru",
        {37.422455, -122.084306}: "Googleplex",
    }
    ```

**其它**

1. 运行时和编译器完全由go重写，不再包含任何c代码
2. 支持并发垃圾收集，大大减少了程序暂停的时间
3. `GOMAXPROCS`默认值变为机器的逻辑核数
4. `internal`包的语义可以应用到任何地方，不再只局限于go的源码包
5. 实验性的支持vendor依赖管理（终于开始着手处理依赖管理这部分了）



## 1.4

首次发布：2014-12-10

最后更新：go1.4.3 (released 2015-09-22)

go1.4版本的详细更新日志可以前往[Go 1.4 Release Notes](https://go.dev/doc/go1.4)查看，在其维护期间发布的所有补丁版本可以前往[Go1.4 - Release Patch](https://go.dev/doc/devel/release#go1.4)了解。

**语言层面**

1. `for range`循环可以一个迭代参数，比如

    ```
    for i := range x {
        ...
    }
    ```

    但是不能一个都没有

2. 在调用双重引用类型的方法时，不再自动解引用

    ```go
    type T int
    func (T) M() {}
    var x **T
    
    // 不被允许
    x.M()
    ```

**其它**

1. 在1.4之前，go的运行时都是由c编写的，现在全部由go完成
2. 支持将包名修改为`internal`来表示该包的所有内容都是私有的不可导出



## 1.3

首次发布：2014-06-18

最后更新：go1.3.3 (released 2014-09-30)

go1.3版本的详细更新日志可以前往[Go 1.3 Release Notes](https://go.dev/doc/go1.3)查看，在其维护期间发布的所有补丁版本可以前往[Go1.3 - Release Patch](https://go.dev/doc/devel/release#go1.3)了解。

**重要变化**

该版本没有语法上的变更，一些比较重要的变化如下

1. 协程栈模型从分段栈改为连续栈，提升了栈扩容的性能。
2. 提升了垃圾回收器指针判断的精度
3. 在小容量map中进行迭代，顺序也会变得不可预测
4. 由于一些运行时方面的完善，当前版本的go程序性能有了较大幅度的提升



## 1.2

首次发布：2013-12-01

最后更新：go1.2.2 (released 2014-05-05)

go1.2版本的详细更新日志可以前往[Go 1.2 Release Notes](https://go.dev/doc/go1.2)查看，在其维护期间发布的所有补丁版本可以前往[Go1.2 - Release Patch](https://go.dev/doc/devel/release#go1.2)了解。



**语言层面**

1. 对值为`nil`的变量进行操作会引发`panic`

2. 在对切片进行分隔时，可以使用第三个参数来限制被分割的切片容量从而更安全的使用切片

    ```go
    var array [10]int
    slice := array[2:4:4]
    ```

**其它**

1. 协程栈的最小内存大小由4KB提升到了8KB

2. 将最大线程数限制在了10000

3. 长时间运行的协程在发生函数调用时会被抢占（协作式抢占的首次引入）


## 1.1

首次发布：2013-05-13

最后更新：go1.1.2 (released 2013-08-13)

go1.1版本的详细更新日志可以前往[Go 1.1 Release Notes](https://go.dev/doc/go1.1)查看，在其维护期间发布的所有补丁版本可以前往[Go1.1 - Release Patch](https://go.dev/doc/devel/release#go1.1)了解。

**语言层面**

1. 一个数被0整除以前会抛出`panic`，到了1.1直接无法通过编译。
2. 方法可以作为一个值存在。
3. 引入了终止语句的概念，函数的返回规则更为宽松，[终止语句的定义 - go-sepc](https://go.dev/ref/spec#Terminating_statements)。

**性能方面**

1. 使用go1.1的工具编译的go程序性能大概可以提升30%-40%

**其它:**

1. 在64位机上堆内存的最大值提升到了几十GB
2. 交叉编译时默认禁用cgo



## 1.0

首次发布：2012-03-28

go1.0版本的详细更新日志可以前往[Go 1.0 Release Notes](https://go.dev/doc/go1.0)查看，在其维护期间发布的所有补丁版本可以前往[Go1.0 - Release Patch](https://go.dev/doc/devel/release#go1.0)了解。

**语言层面**

相较于预览版而言，语法上多了以下这些东西

1. 新增内置`append`函数，用于给切片添加元素

2. 新增内置`close`函数，用于关闭管道

3. 复合语义，在初始化切片，map，结构体字面量元素时，可以省略其类型，如下所示

    ```go
    // 声明类型
    holiday1 := []Date{
        Date{"Feb", 14},
        Date{"Nov", 11},
        Date{"Dec", 25},
    }
    
    // 省略类型
    holiday2 := []Date{
        {"Feb", 14},
        {"Nov", 11},
        {"Dec", 25},
    }
    ```

4. 在`init`函数中使用的协程会直接启动，不需要再等待所有的包都初始化完毕。

5. 新增`rune`类型，表示一个UTF-8字符

6. 新增`error`内置接口，表示错误类型

7. 新增`delete`内置函数用于删除map中的键值对

8. 使用`for range`迭代map的顺序变得不可预测

9. 支持同时给多个变量赋值

    ```
    a := 1
    b := 2
    a, b = 3, 4
    ```

10. 变量隐藏问题：当函数的有具名返回值时，如果有任何返回值被隐藏了，则`return`语句必须携带返回值，否则编译不通过，下面是一个错误示例

    ```go
    func Bug() (i, j, k int) {
        for i = 0; i < 5; i++ {
            for j := 0; j < 5; j++ { // Redeclares j.
                k += i * j
                if k > 100 {
                    return // Rejected: j is shadowed here.
                }
            }
        }
        return // OK: j is not shadowed here.
    }
    ```

11. 允许复制带有私有字段的结构体值

12. 在结构体和切片都是可比较元素组成的情况下，允许它们作为map的键，同时移除了函数和map的可比较性

除了语言层面之外，go1.0在包的组织方式和标准库以及命令行方面相较于预览版本都有着非常大的改变，由于内容太多这里不再过多赘述，感兴趣可以自己去官网了解。




## pre

在go1正式发布之前，所有的版本都被称为预览版本，对于这些预览版本官方会每周发布一个快照版本，其中比较重要的版本有

- r60(2011-09-07)，规定了else块现在必须加括号
- r59(2011-08-01)，设计了新的结构体tag方案
- r58(2011-06-29)，修复了滥用goto而导致内存未初始化的问题，新增了gui，exec包
- r57(2011-05-03)，支持短变量多重赋值语法，重新设计了http，reflect包，将gotest作为一个go程序而非shell脚本
- r56(2011-03-07)，第一个稳定版本

预览版本的开发始于2009年12月09日，在go1于2012年3月28日正式发布之后停止，持续了接近三年的时间，往后不再记录每周快照版本。前往[Pre-Go 1 Release History](https://go.dev/doc/devel/pre_go1)了解这些主要版本的信息，前往[Weekly Snapshot History](https://go.dev/doc/devel/weekly#2012-03-27)了解全部预览版本的每周快照版本信息。



