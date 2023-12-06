import{_ as l,V as a,W as i,X as e,Y as o,Z as t,a0 as n,F as s}from"./framework-f06be456.js";const d={},h=n('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><p><strong>最新版本：</strong></p><ul><li><p><code>go1.21.5</code>，发布于2023-10-10</p></li><li><p><code>go.1.20.12</code>，发布于2023-10-10</p></li></ul><p><strong>维护版本：</strong></p><ul><li><code>go1.21</code> 发布于2023-08-08</li><li><code>go1.20</code> 发布于2023-02-01</li></ul><br>',6),c=e("code",null,"主版本",-1),g=e("code",null,"次版本",-1),_=e("code",null,"补丁版本",-1),p={href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://go.dev/doc/go1compat",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"Go团队每半年发布一个二级版本，并且只有最新的两个二级版本是长期维护，维护时间都是六个月，鉴于Go每一次更新都保持着相当高的兼容性，建议在新版本稳定后及时将Go升级到最新版。",-1),b={href:"https://go.dev/doc/devel/release",target:"_blank",rel:"noopener noreferrer"},f=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"此页面只是对官方日志的一个简单搬运，不定期更新，想获取最新消息还请前往官网。")],-1),G=e("h2",{id:"_1-21",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-21","aria-hidden":"true"},"#"),o(" 1.21")],-1),k={href:"https://go.dev/doc/devel/release#go1.21.0",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"_1-21-0-2023-08-08",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-21-0-2023-08-08","aria-hidden":"true"},"#"),o(" 1.21.0 （2023-08-08）")],-1),x=e("p",null,[e("strong",null,"语言层面")],-1),P=n("<li><p>新增了两个内置函数<code>min</code> ，<code>max</code>，用于计算最大值最小值。</p></li><li><p>新增内置函数<code>clear</code>，用于清空map和slice</p></li><li><p>更新了<code>package</code>初始化顺序</p><ul><li>按导入路径对所有包进行排序</li><li>重复执行，直到包的列表为空</li><li>找到列表中所有的导入都已被初始化的第一个包</li><li>初始化该包并将其从列表中删除</li></ul></li><li><p>提高和改进了类型推理的能力和精度，主要是泛型相关。</p></li>",4),A=e("code",null,"for range",-1),y={href:"https://github.com/golang/go/wiki/LoopvarExperiment",target:"_blank",rel:"noopener noreferrer"},L={href:"https://go.googlesource.com/proposal/+/master/design/60078-loopvar.md",target:"_blank",rel:"noopener noreferrer"},C=n("<li><p>保证了<code>recover</code>的返回值不会是<code>nil</code>，如果在调用<code>panic</code>时参数为<code>nil</code>，则会触发另一个<code>panic</code>，返回<code>*runtime.PanicNilError</code>。为了兼容性，在编译时设置<code>GODEBUG=panicnil=1</code>允许向<code>panic</code>传入<code>nil</code>。</p></li>",1),R=n("<p><strong>标准库</strong></p><ol><li>新增<code>log/slog</code>库，提供标准的结构化日志库</li><li>新增<code>testing/slogtest</code>库，用于验证<code>slog.Handler</code>的实现</li><li>新增<code>slices</code>库，提供了一系列泛型函数用于操作切片。</li><li>新增<code>maps</code>库，提供了一系列泛型函数用于操作map</li><li>新增<code>cmp</code>库，用于比较有序类型。</li></ol><p><strong>其他</strong></p>",3),T=e("li",null,"go1.21.0至少在windows系统上至少需要win10或者Windows Server 2016版本以上才能运行，先前的版本不再支持。",-1),N=e("li",null,"go1.21.0至少需要在macOS 10.15 Catalina或者更新的版本才能运行，先前的版本不再支持。",-1),I=e("li",null,"新增了实验性的WebAssembly System Interface，Go依旧在WASM这块不断的探索。",-1),q={href:"https://go.dev/doc/pgo",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"default.pgo",-1),S=e("li",null,"当打印非常深的运行时调用栈时，从原来的只打印前一百个帧，到现在分别打印前50的最后的50个帧。",-1),H=e("li",null,"优化了在Unix平台CGO的调用性能，从1-3微秒优化到了现在的100-200纳秒。",-1),E=e("li",null,"在1.21版本，编译速度提升了接近6%，这主要归功于编译器本身使用PGO来构建。",-1),O={href:"https://go.dev/doc/go1.21#introduction",target:"_blank",rel:"noopener noreferrer"},D=n('<h3 id="_1-21-1-2023-09-06" tabindex="-1"><a class="header-anchor" href="#_1-21-1-2023-09-06" aria-hidden="true">#</a> 1.21.1（2023-09-06）</h3><ol><li>修复了<code>cmd/go</code>, <code>crypto/tls</code>, <code>html/template</code> 包的安全问题</li><li>修复了编译器，go命令行, linker, runtime, 以及包 <code>context</code>, <code>crypto/tls</code>, <code>encoding/gob</code>, <code>encoding/xml</code>, <code>go/types</code>, <code>net/http</code>, <code>os</code>,<code>path/filepath</code>的一些bug。</li></ol>',2),V={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.21.1+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},W=e("h3",{id:"_1-21-2-2023-10-05",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-21-2-2023-10-05","aria-hidden":"true"},"#"),o(" 1.21.2（2023-10-05）")],-1),B=e("ol",null,[e("li",null,[o("修复了"),e("code",null,"cmd/go"),o("包的安全问题")]),e("li",null,[o("修复了编译器, go命令行,linker,runtime, 以及包"),e("code",null,"runtime/metrics"),o("的一些bug。")])],-1),z={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.21.2+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"_1-21-3-2023-10-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-21-3-2023-10-10","aria-hidden":"true"},"#"),o(" 1.21.3（2023-10-10）")],-1),F=e("ol",null,[e("li",null,[o("修复了"),e("code",null,"net/http"),o("包关于http2中handler的协程数量最大值的问题。")])],-1),M={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.21.3+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},X=n('<h3 id="_1-21-4-2023-11-07" tabindex="-1"><a class="header-anchor" href="#_1-21-4-2023-11-07" aria-hidden="true">#</a> 1.21.4（2023-11-07）</h3><ol><li>修复了<code>path/filepath</code>的有关于解析windows路径的安全问题。</li><li>修复了<code>linker</code>，<code>compiler</code>，<code>runtime</code>，<code>http</code>，<code>cgo</code>的一些bug。</li></ol>',2),Y={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.21.4+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},Z=n('<h3 id="_1-21-5-2023-12-05" tabindex="-1"><a class="header-anchor" href="#_1-21-5-2023-12-05" aria-hidden="true">#</a> 1.21.5（2023-12-05）</h3><ol><li>修复了命令行和<code>net/http</code>，<code>path/filepath</code>的安全问题</li><li>修复了 compiler, go command, the runtime, 以及包 <code>crypto/rand</code>, <code>net</code>, <code>os</code>, <code>syscall</code> 的一些bug。</li></ol>',2),j={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.21.5+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"_1-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20","aria-hidden":"true"},"#"),o(" 1.20")],-1),K={href:"https://go.dev/doc/devel/release#go1.20",target:"_blank",rel:"noopener noreferrer"},Q=n('<h3 id="_1-20-0-2023-02-01" tabindex="-1"><a class="header-anchor" href="#_1-20-0-2023-02-01" aria-hidden="true">#</a> 1.20.0 （2023-02-01）</h3><p><strong>语言层面</strong></p><ol><li>在将切片类型转换为数组时，原来需要对指针数组解引用<code>*(*[4byte])(x)</code>来避免和切片操作同一个底层数组，现在可以直接这么写<code>[4]byte(x)</code>。</li><li><code>unsafe</code>新增了<code>SliceData</code>，<code>String</code>，<code>StringData</code>函数，用于构建和结构切片与字符串值。</li></ol><p><strong>标准库</strong></p><ol><li>新增<code>crypto/ecdh</code>库，提供了对于ECDH（Elliptic Curve Diffie-Hellman，一种非对称加密方法）的支持。</li><li>go1.20扩展了对error包装的支持，允许一个error包装多个error。</li><li>新增<code>net/http.ResponseContorller</code>，提供了一种更清晰、更易于发现的方法来添加每个handler controls。</li><li><code>httputil.ReverseProxy</code>包含了一个新的Rewrite Hook函数，用于取代之前的Director Hook。</li></ol><p><strong>其他</strong></p>',6),$=e("li",null,"go1.20是最后一个支持win7，8，Server2008和Server2012的版本，在未来版本中不再提供支持。",-1),ee=e("li",null,"go1.20是最后一个支持macOS 10.13或10.14的版本，未来版本将不再提供支持。",-1),oe=e("li",null,"在1.18和1.19版本中，由于泛型的出现，相较于1.17编译速度出现了倒退，go1.20编译速度将会提升10%左右。",-1),re=e("li",null,"发布PGO（Profile-guided optimization）的预览版本，这是一种计算机界的编译器优化技术，可以提高运行时性能。",-1),te=e("li",null,"在go1.20，在没有C toolchains的系统上，go command禁用cgo。",-1),ne={href:"https://go.dev/testing/coverage/",target:"_blank",rel:"noopener noreferrer"},le=e("li",null,"对GC进行了改进，提高了稳定性，减少内存开销，提升了整体2%的CPU性能。",-1),ae={href:"https://go.dev/doc/go1.20#introduction",target:"_blank",rel:"noopener noreferrer"},ie=n('<h3 id="_1-20-1-2023-02-14" tabindex="-1"><a class="header-anchor" href="#_1-20-1-2023-02-14" aria-hidden="true">#</a> 1.20.1 （2023-02-14）</h3><ol><li><p>修复了一些库的安全问题</p><ul><li><p><code>crypto/tls</code></p></li><li><p><code>mime/multipart</code></p></li><li><p><code>net/http</code></p></li><li><p><code>path/filepath</code></p></li></ul></li><li><p>修复了编译器，go command，linker，runtime，time包的一些bug。</p></li></ol>',2),se={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.1+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},de=n('<h3 id="_1-20-2-2023-03-07" tabindex="-1"><a class="header-anchor" href="#_1-20-2-2023-03-07" aria-hidden="true">#</a> 1.20.2 （2023-03-07）</h3><ol><li>修复了<code>crypto/elliptic</code>库的安全问题</li><li>修复了编译器，covdata命令，linker，runtime，<code>crypto/ecdh</code>, <code>crypto/rsa</code>, <code>crypto/x509</code>, <code>os</code>, <code>syscall</code>库的一些bug</li></ol>',2),he={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.2+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},ce=n('<h3 id="_1-20-3-2023-04-04" tabindex="-1"><a class="header-anchor" href="#_1-20-3-2023-04-04" aria-hidden="true">#</a> 1.20.3 （2023-04-04）</h3><ol><li>修复了以下库的安全问题 <ul><li><code>go/parser</code></li><li><code>html/tempalte</code></li><li><code>mime/multipart</code></li><li><code>net/http</code></li><li><code>net/textproto</code></li></ul></li><li>修复了编译器，linker，runtime，time包的bug</li></ol>',2),ge={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.3+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},_e=n('<h3 id="_1-20-4-2023-05-02" tabindex="-1"><a class="header-anchor" href="#_1-20-4-2023-05-02" aria-hidden="true">#</a> 1.20.4 （2023-05-02）</h3><ol><li>修复了<code>html/tempalte</code>的三个安全问题</li><li>修复了编译器，runtime，还有<code>crypto/subtle</code>, <code>crypto/tls</code>, <code>net/http</code>, <code>syscall</code>的一些bug。</li></ol>',2),pe={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.4+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},ue=n('<h3 id="_1-20-5-2023-06-06" tabindex="-1"><a class="header-anchor" href="#_1-20-5-2023-06-06" aria-hidden="true">#</a> 1.20.5 （2023-06-06）</h3><ol><li>修复了四个来自<code>cmd/go</code>和<code>runtime</code>库的安全问题</li><li>修复了编译器，go command，runtime，还有 <code>crypto/rsa</code>, <code>net</code>, <code>os</code> 库的bug</li></ol>',2),me={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.5+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},be=e("h3",{id:"_1-20-6-2023-07-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20-6-2023-07-11","aria-hidden":"true"},"#"),o(" 1.20.6 （2023-07-11）")],-1),fe=e("code",null,"net/http",-1),Ge={href:"https://github.com/moby/moby/issues/45935",target:"_blank",rel:"noopener noreferrer"},ke=e("li",null,[o("修复了编译器，cgo，cover tool，go command，runtime，还有"),e("code",null,"crypto/ecdsa"),o(", "),e("code",null,"go/build"),o(", "),e("code",null,"go/printer"),o(", "),e("code",null,"net/mail"),o(", "),e("code",null,"text/template"),o(" 库的一些bug。")],-1),ve={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.6+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},xe=e("h3",{id:"_1-20-7-2023-08-01",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20-7-2023-08-01","aria-hidden":"true"},"#"),o(" 1.20.7 （2023-08-01）")],-1),Pe=e("ol",null,[e("li",null,[o("修复了"),e("code",null,"crypto/tls"),o("库的安全问题")]),e("li",null,"修复了assembler，编译器的bug。")],-1),Ae={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.7+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},ye=n('<h3 id="_1-20-8-2023-09-06" tabindex="-1"><a class="header-anchor" href="#_1-20-8-2023-09-06" aria-hidden="true">#</a> 1.20.8 （2023-09-06）</h3><ol><li>修复了<code>html/template</code>包的两个安全问题</li><li>修复了编译器，命令行，运行时以及 <code>crypto/tls</code>, <code>go/types</code>, <code>net/http</code>, <code>path/filepath</code> 包的一些bug</li></ol>',2),Le={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.8+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},Ce=e("h3",{id:"_1-20-9-2023-10-05",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20-9-2023-10-05","aria-hidden":"true"},"#"),o(" 1.20.9 （2023-10-05）")],-1),Re=e("ol",null,[e("li",null,[o("修复了"),e("code",null,"cmd/go"),o("的一个安全问题")]),e("li",null,"修复了命令行，链接器的一些bug。")],-1),Te={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.9+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},Ne=e("h3",{id:"_1-20-10-2023-10-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20-10-2023-10-10","aria-hidden":"true"},"#"),o(" 1.20.10（2023-10-10）")],-1),Ie=e("p",null,[o("修复了"),e("code",null,"net/http"),o("包的一个安全问题，是关于http2中handler的协程数量最大值的问题。")],-1),qe={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.10+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},we=e("h3",{id:"_1-20-11-2023-11-07",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20-11-2023-11-07","aria-hidden":"true"},"#"),o(" 1.20.11（2023-11-07）")],-1),Se=e("ol",null,[e("li",null,[o("修复了"),e("code",null,"path/filepath"),o("的有关于解析windows路径的安全问题。")]),e("li",null,[o("修复了linker，以及包"),e("code",null,"net/http"),o("的bug。")])],-1),He={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.11+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},Ee=e("h3",{id:"_1-20-12-2023-12-05",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-20-12-2023-12-05","aria-hidden":"true"},"#"),o(" 1.20.12（2023-12-05）")],-1),Oe=e("ol",null,[e("li",null,[o("修复了命令行和"),e("code",null,"net/http"),o("，"),e("code",null,"path/filepath"),o("的安全问题")]),e("li",null,"修复了 compiler, go command的一些bug。")],-1),De={href:"https://github.com/golang/go/issues?q=milestone%3AGo1.20.12+label%3ACherryPickApproved",target:"_blank",rel:"noopener noreferrer"},Ve=e("h2",{id:"_1-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-19","aria-hidden":"true"},"#"),o(" 1.19")],-1),We={href:"https://go.dev/doc/go1.19",target:"_blank",rel:"noopener noreferrer"},Be=e("h2",{id:"_1-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-18","aria-hidden":"true"},"#"),o(" 1.18")],-1),ze={href:"https://go.dev/doc/go1.18",target:"_blank",rel:"noopener noreferrer"},Ue=e("h2",{id:"_1-17",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-17","aria-hidden":"true"},"#"),o(" 1.17")],-1),Fe={href:"https://go.dev/doc/go1.17",target:"_blank",rel:"noopener noreferrer"},Me=e("h2",{id:"_1-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-16","aria-hidden":"true"},"#"),o(" 1.16")],-1),Xe={href:"https://go.dev/doc/go1.16",target:"_blank",rel:"noopener noreferrer"},Ye=e("h2",{id:"_1-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-15","aria-hidden":"true"},"#"),o(" 1.15")],-1),Ze={href:"https://go.dev/doc/go1.15",target:"_blank",rel:"noopener noreferrer"},je=e("h2",{id:"_1-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-14","aria-hidden":"true"},"#"),o(" 1.14")],-1),Je={href:"https://go.dev/doc/go1.14",target:"_blank",rel:"noopener noreferrer"},Ke=e("h2",{id:"_1-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-13","aria-hidden":"true"},"#"),o(" 1.13")],-1),Qe={href:"https://go.dev/doc/go1.13",target:"_blank",rel:"noopener noreferrer"},$e=e("h2",{id:"_1-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-12","aria-hidden":"true"},"#"),o(" 1.12")],-1),eo={href:"https://go.dev/doc/go1.12",target:"_blank",rel:"noopener noreferrer"},oo=e("h2",{id:"_1-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-11","aria-hidden":"true"},"#"),o(" 1.11")],-1),ro={href:"https://go.dev/doc/go1.11",target:"_blank",rel:"noopener noreferrer"},to=e("h2",{id:"_1-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-10","aria-hidden":"true"},"#"),o(" 1.10")],-1),no={href:"https://go.dev/doc/go1.10",target:"_blank",rel:"noopener noreferrer"},lo=e("h2",{id:"_1-9-2017-08-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-9-2017-08-24","aria-hidden":"true"},"#"),o(" 1.9（2017-08-24）")],-1),ao={href:"https://go.dev/doc/go1.9",target:"_blank",rel:"noopener noreferrer"},io=e("h2",{id:"_1-8-2017-02-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-8-2017-02-16","aria-hidden":"true"},"#"),o(" 1.8（2017-02-16）")],-1),so={href:"https://go.dev/doc/go1.8",target:"_blank",rel:"noopener noreferrer"},ho=e("h2",{id:"_1-7-2016-08-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-7-2016-08-15","aria-hidden":"true"},"#"),o(" 1.7（2016-08-15）")],-1),co={href:"https://go.dev/doc/go1.7",target:"_blank",rel:"noopener noreferrer"},go=e("h2",{id:"_1-6-2016-02-17",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-6-2016-02-17","aria-hidden":"true"},"#"),o(" 1.6（2016-02-17）")],-1),_o={href:"https://go.dev/doc/go1.6",target:"_blank",rel:"noopener noreferrer"},po=e("h2",{id:"_1-5-2015-8-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-5-2015-8-19","aria-hidden":"true"},"#"),o(" 1.5（2015-8-19）")],-1),uo={href:"https://go.dev/doc/go1.5",target:"_blank",rel:"noopener noreferrer"},mo=e("h2",{id:"_1-4-2014-12-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-4-2014-12-10","aria-hidden":"true"},"#"),o(" 1.4（2014-12-10）")],-1),bo={href:"https://go.dev/doc/go1.4",target:"_blank",rel:"noopener noreferrer"},fo=e("h2",{id:"_1-3-2014-06-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3-2014-06-18","aria-hidden":"true"},"#"),o(" 1.3（2014-06-18）")],-1),Go={href:"https://go.dev/doc/go1.3",target:"_blank",rel:"noopener noreferrer"},ko=e("h2",{id:"_1-2-2013-12-01",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-2013-12-01","aria-hidden":"true"},"#"),o(" 1.2（2013-12-01）")],-1),vo={href:"https://go.dev/doc/go1.2",target:"_blank",rel:"noopener noreferrer"},xo=e("h2",{id:"_1-1-2013-05-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-2013-05-12","aria-hidden":"true"},"#"),o(" 1.1（2013-05-12）")],-1),Po={href:"https://go.dev/doc/go1.1",target:"_blank",rel:"noopener noreferrer"},Ao=n('<p><strong>语言层面</strong>：</p><ol><li>一个数被0整除以前会抛出<code>panic</code>，到了1.1直接无法通过编译。</li><li>方法可以作为一个值存在。</li><li>引入了终止语句的概念，函数的返回规则更为宽松。</li></ol><p><strong>性能方面</strong>：</p><ol><li>使用go1.1的工具编译的go程序性能大概可以提升30%-40%</li></ol><h2 id="_1-0-2013-03-28" tabindex="-1"><a class="header-anchor" href="#_1-0-2013-03-28" aria-hidden="true">#</a> 1.0（2013-03-28）</h2>',5),yo={href:"https://go.dev/doc/go1.0",target:"_blank",rel:"noopener noreferrer"},Lo=e("h2",{id:"pre",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre","aria-hidden":"true"},"#"),o(" pre")],-1),Co=e("p",null,"在go1正式发布之前，所有的版本都被称为预览版本，对于这些预览版本官方会每周发布一个快照版本，其中比较重要的版本有",-1),Ro=e("ul",null,[e("li",null,"r60（2011-09-07），规定了else块现在必须加括号"),e("li",null,"r59（2011-08-01），设计了新的结构体tag方案"),e("li",null,"r58（2011-06-29），修复了滥用goto而导致内存未初始化的问题，新增了gui，exec包"),e("li",null,"r57（2011-05-03），支持短变量多重赋值语法，重新设计了http，reflect包，将gotest作为一个go程序而非shell脚本"),e("li",null,"r56（2011-03-07），第一个稳定版本")],-1),To={href:"https://go.dev/doc/devel/pre_go1",target:"_blank",rel:"noopener noreferrer"},No={href:"https://go.dev/doc/devel/weekly#2012-03-27",target:"_blank",rel:"noopener noreferrer"};function Io(qo,wo){const r=s("ExternalLinkIcon");return a(),i("div",null,[h,e("p",null,[o("Go官方采用语义化版本来标识更新，格式为v"),c,o("."),g,o("."),_,o(" （见"),e("a",p,[o("语义化版本 2.0.0 | Semantic Versioning (semver.org)"),t(r)]),o("），主版本的更新意味着发生了Breaking Change，即无法向下兼容的更新，此版本的更新意味着有新功能添加同时保持向下兼容，补丁版本的更新意味着有问题被修复同时保持向下兼容。")]),e("p",null,[o("Go2.0上一次提出草案是在2018年11月19日，那时还是处于go1.13版本，五年过后，版本已经迭代到了go1.21，Go2.0的各种想法已经通过增量更新的方式体现在了Go1.0上，创始人之一也曾明确表示未来可能并不会有Go2.0，Go将一直为保持向下兼容而努力（见"),e("a",u,[o("Go 1 and the Future of Go Programs - The Go Programming Language"),t(r)]),o("）。")]),m,e("p",null,[o("Go语言官方更新日志："),e("a",b,[o("Release History - The Go Programming Language"),t(r)])]),f,G,e("p",null,[o("Go1.21更新日志："),e("a",k,[o("Release History - The Go Programming Language"),t(r)])]),v,x,e("ol",null,[P,e("li",null,[e("p",null,[o("推出了"),A,o("循环变量改进的预览版本，这是一个困扰了Go开发者接近十年的问题，官方终于要解决了，详情见："),e("a",y,[o("LoopvarExperiment · golang/go Wiki (github.com)"),t(r)]),o("和"),e("a",L,[o("Proposal: Less Error-Prone Loop Variable Scoping (googlesource.com)"),t(r)])])]),C]),R,e("ol",null,[T,N,I,e("li",null,[o("在1.20还是实验性质的（Profile-guide optimization）PGO（见"),e("a",q,[o("Profile-guided optimization - The Go Programming Language"),t(r)]),o("），1.21版本正式启用。在main包下包含"),w,o("文件会启用该功能，开启后性能可能会提升2%-7%。")]),S,H,E]),e("p",null,[o("以上是一些主要的更新信息，更多内容请访问"),e("a",O,[o("Go 1.21 Release Notes - The Go Programming Language"),t(r)])]),D,e("p",null,[o("更多细节前往："),e("a",V,[o("1.21.1 Issues · golang/go (github.com)"),t(r)])]),W,B,e("p",null,[o("更多细节前往："),e("a",z,[o("1.21.2 Issues · golang/go (github.com)"),t(r)])]),U,F,e("p",null,[o("更多细节前往："),e("a",M,[o("1.21.3 Issues · golang/go (github.com)"),t(r)])]),X,e("p",null,[o("更多细节前往："),e("a",Y,[o("1.21.4 Issues · golang/go (github.com)"),t(r)])]),Z,e("p",null,[o("更多细节前往："),e("a",j,[o("1.21.5 Issues · golang/go (github.com)"),t(r)])]),J,e("p",null,[o("Go1.20更新日志："),e("a",K,[o("1.20 Release History - The Go Programming Language"),t(r)])]),Q,e("ol",null,[$,ee,oe,re,te,e("li",null,[o("支持收集程序代码覆盖率文件，见"),e("a",ne,[o("Coverage profiling support for integration tests - The Go Programming Language"),t(r)])]),le]),e("p",null,[o("以上是一些主要的更新信息，更多内容请访问"),e("a",ae,[o("Go 1.20 Release Notes - The Go Programming Language"),t(r)])]),ie,e("p",null,[o("更多细节前往"),e("a",se,[o("1.20.1 Issues · golang/go (github.com)"),t(r)])]),de,e("p",null,[o("更多细节前往"),e("a",he,[o("1.20.2 Issues · golang/go (github.com)"),t(r)])]),ce,e("p",null,[o("更多细节前往"),e("a",ge,[o("1.20.3 Issues · golang/go (github.com)"),t(r)])]),_e,e("p",null,[o("更多细节前往"),e("a",pe,[o("1.20.4 Issues · golang/go (github.com)"),t(r)])]),ue,e("p",null,[o("更多细节前往"),e("a",me,[o("1.20.5 Issues · golang/go (github.com)"),t(r)])]),be,e("ol",null,[e("li",null,[o("修复了来自"),fe,o("库的的安全问题（Host Header的校验问题，这个问题曾导致了Docker Engine API 无法正常使用，笔者曾经遇到过，见"),e("a",Ge,[o('Golang client fails to attach to streams with "http: invalid Host header" with go1.20.6, go1.19.11 · Issue #45935 · moby/moby (github.com)'),t(r)]),o("）")]),ke]),e("p",null,[o("更多细节前往"),e("a",ve,[o("1.20.6 Issues · golang/go (github.com)"),t(r)])]),xe,Pe,e("p",null,[o("更多细节前往"),e("a",Ae,[o("1.20.7 Issues · golang/go (github.com)"),t(r)])]),ye,e("p",null,[o("更多细节前往"),e("a",Le,[o("1.20.8 Issues · golang/go (github.com)"),t(r)])]),Ce,Re,e("p",null,[o("更多细节前往"),e("a",Te,[o("1.20.9 Issues · golang/go (github.com)"),t(r)])]),Ne,Ie,e("p",null,[o("更多细节前往："),e("a",qe,[o("1.20.10 Issues · golang/go (github.com)"),t(r)])]),we,Se,e("p",null,[o("更多细节前往："),e("a",He,[o("1.20.11 Issues · golang/go (github.com)"),t(r)])]),Ee,Oe,e("p",null,[o("更多细节前往："),e("a",De,[o("1.20.12 Issues · golang/go (github.com)"),t(r)])]),Ve,e("p",null,[o("Go1.19更新日志："),e("a",We,[o("Go 1.19 Release Notes - The Go Programming Language"),t(r)])]),Be,e("p",null,[o("GO1.18更新日志："),e("a",ze,[o("Go 1.18 Release Notes - The Go Programming Language"),t(r)])]),Ue,e("p",null,[o("Go1.17更新日志："),e("a",Fe,[o("Go 1.17 Release Notes - The Go Programming Language"),t(r)])]),Me,e("p",null,[o("Go1.16更新日志："),e("a",Xe,[o("Go 1.16 Release Notes - The Go Programming Language"),t(r)])]),Ye,e("p",null,[o("Go1.15更新日志："),e("a",Ze,[o("Go 1.14 Release Notes - The Go Programming Language"),t(r)])]),je,e("p",null,[o("Go1.14更新日志："),e("a",Je,[o("Go 1.14 Release Notes - The Go Programming Language"),t(r)])]),Ke,e("p",null,[o("Go1.13更新日志："),e("a",Qe,[o("Go 1.13 Release Notes - The Go Programming Language"),t(r)])]),$e,e("p",null,[o("Go1.12更新日志："),e("a",eo,[o("Go 1.12 Release Notes - The Go Programming Language"),t(r)])]),oo,e("p",null,[o("Go1.11更新日志："),e("a",ro,[o("Go 1.11 Release Notes - The Go Programming Language"),t(r)])]),to,e("p",null,[o("Go1.10更新日志："),e("a",no,[o("Go 1.10 Release Notes - The Go Programming Language"),t(r)])]),lo,e("p",null,[o("Go1.9更新日志："),e("a",ao,[o("Go 1.9 Release Notes - The Go Programming Language"),t(r)])]),io,e("p",null,[o("Go1.8更新日志："),e("a",so,[o("Go 1.8 Release Notes - The Go Programming Language"),t(r)])]),ho,e("p",null,[o("Go1.8更新日志："),e("a",co,[o("Go 1.7 Release Notes - The Go Programming Language"),t(r)])]),go,e("p",null,[o("Go1.6更新日志："),e("a",_o,[o("Go 1.6 Release Notes - The Go Programming Language"),t(r)])]),po,e("p",null,[o("Go1.5更新日志："),e("a",uo,[o("Go 1.5 Release Notes - The Go Programming Language"),t(r)])]),mo,e("p",null,[o("Go1.4更新日志："),e("a",bo,[o("Go 1.4 Release Notes - The Go Programming Language"),t(r)])]),fo,e("p",null,[o("Go1.3更新日志："),e("a",Go,[o("Go 1.3 Release Notes - The Go Programming Language"),t(r)])]),ko,e("p",null,[o("Go1.2更新日志："),e("a",vo,[o("Go 1.2 Release Notes - The Go Programming Language"),t(r)])]),xo,e("p",null,[o("Go1.1更新日志："),e("a",Po,[o("Go 1.1 Release Notes - The Go Programming Language"),t(r)])]),Ao,e("p",null,[o("Go1.0更新日志："),e("a",yo,[o("Go 1.0 Release Notes - The Go Programming Language"),t(r)])]),Lo,Co,Ro,e("p",null,[o("预览版本的开发始于2009年12月09日，在go1于2012年3月28日正式发布之后停止，持续了接近三年的时间，往后不再记录每周快照版本。前往"),e("a",To,[o("Pre-Go 1 Release History"),t(r)]),o("了解这些主要版本的信息，前往"),e("a",No,[o("Weekly Snapshot History"),t(r)]),o("了解全部预览版本的每周快照版本信息。")])])}const Ho=l(d,[["render",Io],["__file","release.html.vue"]]);export{Ho as default};
