import{_ as t,V as c,W as p,X as s,Y as n,Z as e,$ as d,a0 as a,F as l}from"./framework-f06be456.js";const r={},u=a(`<h1 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h1><figure><img src="https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202310312137073.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面介绍一些Go的常用命令，熟悉这些命令还是挺重要的，下面是go所有的命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bug         报告漏洞
build       编译包和依赖
clean       清除对象文件
doc         展示源代码中的文档
env         查看Go环境变量信息
fix         更新packages以使用新的API
fmt         源代码格式化
generate    代码生成
get         添加依赖
install     安装并编译包
list        列出所有的包或模块
mod         模块维护命令
work        工作区维护命令
run         编译并运行
test        测试
tool        运行指定的go工具
version     展示go的版本信息
vet         扫描并输出源代码中可能存在的问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://pkg.go.dev/cmd/go",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> help</h2><p>第一个要认识的是<code>help</code>命令，通过它可以阅读命令的用法。有两种用法，如果要获取简短的使用信息，可以在指定命令后面加上<code>-h</code>标志，比如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-h</span>
usage: go <span class="token function">env</span> <span class="token punctuation">[</span>-json<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span> <span class="token punctuation">[</span>-w<span class="token punctuation">]</span> <span class="token punctuation">[</span>var <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help env&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go会简洁的展示该命令的用法，它也提示了，想要获得更详细的信息就需要使用help命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token builtin class-name">help</span> <span class="token function">env</span>
usage: go <span class="token function">env</span> <span class="token punctuation">[</span>-json<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span> <span class="token punctuation">[</span>-w<span class="token punctuation">]</span> <span class="token punctuation">[</span>var <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Env prints Go environment information.

By default <span class="token function">env</span> prints information as a shell script
<span class="token punctuation">(</span>on Windows, a batch <span class="token function">file</span><span class="token punctuation">)</span>. If one or <span class="token function">more</span> variable
names is given as arguments, <span class="token function">env</span> prints the value of
each named variable on its own line.

The <span class="token parameter variable">-json</span> flag prints the environment <span class="token keyword">in</span> JSON <span class="token function">format</span>
instead of as a shell script.

The <span class="token parameter variable">-u</span> flag requires one or <span class="token function">more</span> arguments and unsets
the default setting <span class="token keyword">for</span> the named environment variables,
<span class="token keyword">if</span> one has been <span class="token builtin class-name">set</span> with <span class="token string">&#39;go env -w&#39;</span><span class="token builtin class-name">.</span>

The <span class="token parameter variable">-w</span> flag requires one or <span class="token function">more</span> arguments of the
form <span class="token assign-left variable">NAME</span><span class="token operator">=</span>VALUE and changes the default settings
of the named environment variables to the given values.

For <span class="token function">more</span> about environment variables, see <span class="token string">&#39;go help environment&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>善于利用help命令，通过它你可以获取很多有关命令的信息。</p><h2 id="doc" tabindex="-1"><a class="header-anchor" href="#doc" aria-hidden="true">#</a> doc</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc <span class="token parameter variable">-h</span>
Usage of <span class="token punctuation">[</span>go<span class="token punctuation">]</span> doc:
        go doc
        go doc <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>
        go doc <span class="token operator">&lt;</span>sym<span class="token operator">&gt;</span><span class="token punctuation">[</span>.<span class="token operator">&lt;</span>methodOrField<span class="token operator">&gt;</span><span class="token punctuation">]</span>
        go doc <span class="token punctuation">[</span><span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>.<span class="token punctuation">]</span><span class="token operator">&lt;</span>sym<span class="token operator">&gt;</span><span class="token punctuation">[</span>.<span class="token operator">&lt;</span>methodOrField<span class="token operator">&gt;</span><span class="token punctuation">]</span>
        go doc <span class="token punctuation">[</span><span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>sym<span class="token operator">&gt;</span>.<span class="token punctuation">]</span><span class="token operator">&lt;</span>methodOrField<span class="token operator">&gt;</span>
        go doc <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>sym<span class="token operator">&gt;</span><span class="token punctuation">[</span>.<span class="token operator">&lt;</span>methodOrField<span class="token operator">&gt;</span><span class="token punctuation">]</span>
For <span class="token function">more</span> information run
        go <span class="token builtin class-name">help</span> doc

Flags:
  <span class="token parameter variable">-C</span> <span class="token function">dir</span>
        change to <span class="token function">dir</span> before running <span class="token builtin class-name">command</span>
  <span class="token parameter variable">-all</span>
        show all documentation <span class="token keyword">for</span> package
  <span class="token parameter variable">-c</span>    symbol matching honors <span class="token keyword">case</span> <span class="token punctuation">(</span>paths not affected<span class="token punctuation">)</span>
  <span class="token parameter variable">-cmd</span>
        show symbols with package docs even <span class="token keyword">if</span> package is a <span class="token builtin class-name">command</span>
  <span class="token parameter variable">-short</span>
        one-line representation <span class="token keyword">for</span> each symbol
  <span class="token parameter variable">-src</span>
        show <span class="token builtin class-name">source</span> code <span class="token keyword">for</span> symbol
  <span class="token parameter variable">-u</span>    show unexported symbols as well as exported
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>doc</code>命令会输出指定包，常量，函数，类型，变量，方法甚至结构体字段的文档注释。在不带任何参数的情况，它会输出当前包的注释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以指定查看某一个包，比如查看<code>runtime</code>包的文档注释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc runtime
package runtime // <span class="token function">import</span> <span class="token string">&quot;runtime&quot;</span>

Package runtime contains operations that interact with Go<span class="token string">&#39;s runtime system,
such as functions to control goroutines. It also includes the low-level type
information used by the reflect package; see reflect&#39;</span>s documentation <span class="token keyword">for</span> the
programmable interface to the run-time <span class="token builtin class-name">type</span> system.
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者某一个类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc unsafe.Pointer
package unsafe // <span class="token function">import</span> <span class="token string">&quot;unsafe&quot;</span>

<span class="token builtin class-name">type</span> Pointer *ArbitraryType
    Pointer represents a pointer to an arbitrary type. There are four special
    operations available <span class="token keyword">for</span> <span class="token builtin class-name">type</span> Pointer that are not available <span class="token keyword">for</span> other
    types:
      - A pointer value of any <span class="token builtin class-name">type</span> can be converted to a Pointer.
      - A Pointer can be converted to a pointer value of any type.
      - A uintptr can be converted to a Pointer.
      - A Pointer can be converted to a uintptr.
      <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者某一个函数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc runtime.GC
package runtime // <span class="token function">import</span> <span class="token string">&quot;runtime&quot;</span>

func GC<span class="token punctuation">(</span><span class="token punctuation">)</span>
    GC runs a garbage collection and blocks the <span class="token builtin class-name">caller</span> <span class="token keyword">until</span> the garbage
    collection is complete. It may also block the entire program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它有以下常用下标志</p><ul><li><code>-u</code>：查看私有的类型</li><li><code>-all</code>：查看指定包的所有文档</li><li><code>-short</code>：只一行简短描述</li><li><code>-src</code>：输出源代码</li><li><code>-cmd</code>：对于一些属于go命令的包，也输出它们包内的代码文档。</li></ul><p>比如查看<code>runtime.inf</code>变量，这是一个不对外暴露的变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc <span class="token parameter variable">-u</span> runtime.inf
package runtime // <span class="token function">import</span> <span class="token string">&quot;runtime&quot;</span>

var inf <span class="token operator">=</span> float64frombits<span class="token punctuation">(</span>0x7FF0000000000000<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用好<code>doc</code>命令可以帮助你更方便的阅读文档。</p><br><p>另一个可以阅读命令文档的方式就是去阅读源代码，因为有些命令的文档并不会写的那么仔细，反而在源代码中会有比较详细的说明。由于这些命令全部都是由go编写的，阅读起来也相当的方便。这些命令都位于<code>src/cmd</code>包下，每一个子包就是一个单独的命令，入口位于<code>cmd/go/main.go</code>文件中</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    base<span class="token punctuation">.</span>Go<span class="token punctuation">.</span>Commands <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>base<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
       bug<span class="token punctuation">.</span>CmdBug<span class="token punctuation">,</span>
       work<span class="token punctuation">.</span>CmdBuild<span class="token punctuation">,</span>
       clean<span class="token punctuation">.</span>CmdClean<span class="token punctuation">,</span>
       doc<span class="token punctuation">.</span>CmdDoc<span class="token punctuation">,</span>
       envcmd<span class="token punctuation">.</span>CmdEnv<span class="token punctuation">,</span>
       fix<span class="token punctuation">.</span>CmdFix<span class="token punctuation">,</span>
       fmtcmd<span class="token punctuation">.</span>CmdFmt<span class="token punctuation">,</span>
       generate<span class="token punctuation">.</span>CmdGenerate<span class="token punctuation">,</span>
       modget<span class="token punctuation">.</span>CmdGet<span class="token punctuation">,</span>
       work<span class="token punctuation">.</span>CmdInstall<span class="token punctuation">,</span>
       list<span class="token punctuation">.</span>CmdList<span class="token punctuation">,</span>
       modcmd<span class="token punctuation">.</span>CmdMod<span class="token punctuation">,</span>
       workcmd<span class="token punctuation">.</span>CmdWork<span class="token punctuation">,</span>
       run<span class="token punctuation">.</span>CmdRun<span class="token punctuation">,</span>
       test<span class="token punctuation">.</span>CmdTest<span class="token punctuation">,</span>
       tool<span class="token punctuation">.</span>CmdTool<span class="token punctuation">,</span>
       version<span class="token punctuation">.</span>CmdVersion<span class="token punctuation">,</span>
       vet<span class="token punctuation">.</span>CmdVet<span class="token punctuation">,</span>

       help<span class="token punctuation">.</span>HelpBuildConstraint<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpBuildmode<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpC<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpCache<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpEnvironment<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpFileType<span class="token punctuation">,</span>
       modload<span class="token punctuation">.</span>HelpGoMod<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpGopath<span class="token punctuation">,</span>
       get<span class="token punctuation">.</span>HelpGopathGet<span class="token punctuation">,</span>
       modfetch<span class="token punctuation">.</span>HelpGoproxy<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpImportPath<span class="token punctuation">,</span>
       modload<span class="token punctuation">.</span>HelpModules<span class="token punctuation">,</span>
       modget<span class="token punctuation">.</span>HelpModuleGet<span class="token punctuation">,</span>
       modfetch<span class="token punctuation">.</span>HelpModuleAuth<span class="token punctuation">,</span>
       help<span class="token punctuation">.</span>HelpPackages<span class="token punctuation">,</span>
       modfetch<span class="token punctuation">.</span>HelpPrivate<span class="token punctuation">,</span>
       test<span class="token punctuation">.</span>HelpTestflag<span class="token punctuation">,</span>
       test<span class="token punctuation">.</span>HelpTestfunc<span class="token punctuation">,</span>
       modget<span class="token punctuation">.</span>HelpVCS<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里你会找到go的所有子命令，以及它们的帮助文档信息。</p><h2 id="bug" tabindex="-1"><a class="header-anchor" href="#bug" aria-hidden="true">#</a> bug</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token builtin class-name">help</span> bug
usage: go bug

Bug opens the default browser and starts a new bug report.
The report includes useful system information.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令没有任何参数和任何标志，它会用你的默认浏览器访问<code>github.com/golang/go</code>仓库的issue界面，方便你反馈bug，除此之外没有任何其它作用。</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h2><p>通过<code>version</code>命令可以查看当前go的版本信息。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>$ <span class="token keyword">go</span> version <span class="token operator">-</span>h
usage<span class="token punctuation">:</span> <span class="token keyword">go</span> version <span class="token punctuation">[</span><span class="token operator">-</span>m<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>v<span class="token punctuation">]</span> <span class="token punctuation">[</span>file <span class="token operator">...</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在不带任何参数执行的情况下，它会输出当前go语言的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go version
go version go1.21.0 windows/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它还接收文件路径作为参数，它将输出该路径下所有可以被识别的二进制文件编译时所采用的go版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go version <span class="token parameter variable">-v</span> ./
buf.exe: go1.20.2
cobra-cli.exe: go1.21.0
dlv.exe: go1.20.2
goctl.exe: go1.20.2
goimports.exe: go1.20.2
golangci-lint.exe: go1.20.2
gopls.exe: go1.19.3
kratos.exe: go1.20.2
main.exe: go1.19.1
protoc-gen-go-grpc.exe: go1.20.2
protoc-gen-go-http.exe: go1.20.2
protoc-gen-go.exe: go1.20.2
protoc-gen-openapi.exe: go1.20.2
swag.exe: go1.21.0
wire.exe: go1.21.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>-v</code>参数指定<code>version</code>命令去尝试输出无法识别的文件的go版本，<code>-m</code>参数输出二进制文件的模块信息，以及一些编译参数，下面是一个简单的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go version <span class="token parameter variable">-v</span> <span class="token parameter variable">-m</span> wire.exe
wire.exe: go1.21.0
        path    github.com/google/wire/cmd/wire
        mod     github.com/google/wire  v0.5.0  h1:I7ELFeVBr3yfPIcc8+MWvrjk+3VjbcSzoXm3JVa+jD8<span class="token operator">=</span>
        dep     github.com/google/subcommands   v1.0.1  h1:/eqq+otEXm5vhfBrbREPCSVQbvofip6kIz+mX5TUH7k<span class="token operator">=</span>
        dep     github.com/pmezard/go-difflib   v1.0.0  h1:4DBwDE0NGyQoBHbLQYPwSUPoCMWR5BEzIk/f1lZbAQM<span class="token operator">=</span>
        dep     golang.org/x/tools      v0.0.0-20190422233926-fe54fb35175b      h1:NVD8gBK33xpdqCaZVVtd6OFJp+3dxkXuz7+U7KaVN6s<span class="token operator">=</span>
        build   <span class="token parameter variable">-buildmode</span><span class="token operator">=</span>exe
        build   <span class="token parameter variable">-compiler</span><span class="token operator">=</span>gc
        build   <span class="token assign-left variable">DefaultGODEBUG</span><span class="token operator">=</span>panicnil<span class="token operator">=</span><span class="token number">1</span>
        build   <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">1</span>
        build   <span class="token assign-left variable">CGO_CFLAGS</span><span class="token operator">=</span>
        build   <span class="token assign-left variable">CGO_CPPFLAGS</span><span class="token operator">=</span>
        build   <span class="token assign-left variable">CGO_CXXFLAGS</span><span class="token operator">=</span>
        build   <span class="token assign-left variable">CGO_LDFLAGS</span><span class="token operator">=</span>
        build   <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64
        build   <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>windows
        build   <span class="token assign-left variable">GOAMD64</span><span class="token operator">=</span>v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go</code>自身也是一个二进制文件，其实在不带任何参数的情况下，<code>go version</code>输出的就是自身二进制文件的go语言版本，因为<code>cmd/go</code>的所有工具链都是由go语言自身实现的。</p><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> env</h2><p>通过<code>env</code>命令可以查看所有go环境变量的信息，修改这些环境变量将会影响go工具链的行为。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-h</span>
usage: go <span class="token function">env</span> <span class="token punctuation">[</span>-json<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span> <span class="token punctuation">[</span>-w<span class="token punctuation">]</span> <span class="token punctuation">[</span>var <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help env&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不带任何参数执行该命令，会输出go所有环境变量的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
<span class="token builtin class-name">set</span> <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将某一个环境变量名作为参数可以只输出该变量的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> GO111MODULE
on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>加上<code>-json</code>可以输出其<code>json</code>形式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-json</span>
<span class="token punctuation">{</span>
        <span class="token string">&quot;AR&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ar&quot;</span>,
        <span class="token string">&quot;CC&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gcc&quot;</span>,
		<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>-w</code>标志，并且以<code>var=value</code>形式作为参数，会永久修改某一个变量的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>-u</code>标志，可以将某一个变量恢复为默认值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token parameter variable">-u</span> GO111MODULE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行<code>go help environment</code>可以查看每一个环境变量的介绍</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token builtin class-name">help</span> environment
The go <span class="token builtin class-name">command</span> and the tools it invokes consult environment variables
<span class="token keyword">for</span> configuration. If an environment variable is <span class="token builtin class-name">unset</span> or empty, the go
<span class="token builtin class-name">command</span> uses a sensible default setting. To see the effective setting of
the variable <span class="token operator">&lt;</span>NAME<span class="token operator">&gt;</span>, run <span class="token string">&#39;go env &lt;NAME&gt;&#39;</span><span class="token builtin class-name">.</span> To change the default setting,
run <span class="token string">&#39;go env -w &lt;NAME&gt;=&lt;VALUE&gt;&#39;</span><span class="token builtin class-name">.</span> Defaults changed using <span class="token string">&#39;go env -w&#39;</span>
are recorded <span class="token keyword">in</span> a Go environment configuration <span class="token function">file</span> stored <span class="token keyword">in</span> the
per-user configuration directory, as reported by os.UserConfigDir.
The location of the configuration <span class="token function">file</span> can be changed by setting
the environment variable GOENV, and <span class="token string">&#39;go env GOENV&#39;</span> prints the
effective location, but <span class="token string">&#39;go env -w&#39;</span> cannot change the default location.
See <span class="token string">&#39;go help env&#39;</span> <span class="token keyword">for</span> details.

General-purpose environment variables:

        GO111MODULE
                Controls whether the go <span class="token builtin class-name">command</span> runs <span class="token keyword">in</span> module-aware mode or GOPATH mode.
                May be <span class="token string">&quot;off&quot;</span>, <span class="token string">&quot;on&quot;</span>, or <span class="token string">&quot;auto&quot;</span><span class="token builtin class-name">.</span>
                See https://golang.org/ref/mod<span class="token comment">#mod-commands.</span>
        GCCGO
                The gccgo <span class="token builtin class-name">command</span> to run <span class="token keyword">for</span> <span class="token string">&#39;go build -compiler=gccgo&#39;</span><span class="token builtin class-name">.</span>
        GOARCH
                The architecture, or processor, <span class="token keyword">for</span> <span class="token function">which</span> to compile code.
                Examples are amd64, <span class="token number">386</span>, arm, ppc64.
        GOBIN
                The directory where <span class="token string">&#39;go install&#39;</span> will <span class="token function">install</span> a command.
        GOCACHE
                The directory where the go <span class="token builtin class-name">command</span> will store cached
                information <span class="token keyword">for</span> <span class="token for-or-select variable">reuse</span> <span class="token keyword">in</span> future builds.
		<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>下面介绍一些常用的环境变量</p><p><strong>GOVERSION</strong></p><p>该环境变量的值取决于go语言的版本，而版本号来自于<code>$GOROOT/VERSION</code>文件，该文件记录了当前go的版本号和构建时间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token variable">$GOROOT</span>/VERSION
go1.21.3
<span class="token function">time</span> <span class="token number">2023</span>-10-09T17:04:35Z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>runtime.Version</code>变量值与<code>GOVERSION</code>的值相同，且该环境变量无法被修改。</p><p><strong>GOENV</strong></p><p><code>$GOROOT</code>目录下会有一个默认的名为<code>go.env</code>的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token variable">$GOROOT</span>/go.env
<span class="token comment"># This file contains the initial defaults for go command configuration.</span>
<span class="token comment"># Values set by &#39;go env -w&#39; and written to the user&#39;s go/env file override these.</span>
<span class="token comment"># The environment overrides everything else.</span>

<span class="token comment"># Use the Go module mirror and checksum database by default.</span>
<span class="token comment"># See https://proxy.golang.org for details.</span>
<span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://proxy.golang.org,direct
<span class="token assign-left variable">GOSUMDB</span><span class="token operator">=</span>sum.golang.org

<span class="token comment"># Automatically download newer toolchains as directed by go.mod files.</span>
<span class="token comment"># See https://go.dev/doc/toolchain for details.</span>
<span class="token assign-left variable">GOTOOLCHAIN</span><span class="token operator">=</span>auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的格式就是简单的<code>key=value</code>这种形式，通过<code>go env -w key=value</code>命令修改的环境变量值将会被写入配置文件中。不过也可以不使用默认的配置文件，<code>GOENV</code>环境变量可以手动指定<code>env</code>配置文件的地址，并且<code>GOENV</code>环境变量的值只能被操作系统的环境变量所覆盖，无法被<code>go env -w</code>命令所修改。</p><p><strong>GOHOSTARCH</strong></p><p>代表着本机的CPU架构，只是用来展示，该环境变量的值并不是从配置文件中读取，也无法被修改。</p><p><strong>GOHOSTOS</strong></p><p>代表着本机的操作系统，只是用来展示，该环境变量的值并不是从配置文件中读取，也无法被修改。</p><p><strong>GOOS</strong></p><p>编译时，<code>GOOS</code>的值将会决定将源代码编译成哪个目标系统的二进制文件，默认值是<code>GOHOSTOS</code>，也就是本机的操作系统，它有以下几个可选项</p><ul><li><code>linux</code></li><li><code>darwin</code></li><li><code>windows</code></li><li><code>netbsd</code></li><li><code>aix</code></li><li><code>android</code></li></ul><p>实际支持的操作系统并不止这些，使用命令，<code>go tool dist list</code>，查看所有支持的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool dist list <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;!seen[$0]++&#39;</span>
aix
android
darwin
dragonfly
freebsd
illumos
ios
js
linux
netbsd
openbsd
plan9
solaris
wasip1
windows
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GOARCH</strong></p><p>编译时，<code>GOARCH</code>的值将会决定编译时采用哪个CPU架构的指令，默认值是<code>GOHOSTARCH</code>，也就是本机的CPU架构，它有以下几个可选项</p><ul><li><code>amd64</code></li><li><code>386</code></li><li><code>arm</code></li><li><code>ppc64</code></li></ul><p>实际上支持的架构不止这些，使用<code>go tool dist list</code> 命令，查看所有支持的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool dist list <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;!seen[$0]++&#39;</span>
ppc64
<span class="token number">386</span>
amd64
arm
arm64
riscv64
wasm
loong64
mips
mips64
mips64le
mipsle
ppc64le
s390x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，<code>GOOS</code>和<code>GOARCh</code>并不能随意的进行组合，部分操作系统只能支持特定的CPU架构。</p><p><strong>GOROOT</strong></p><p><code>GOROOT</code>代表go语言安装位置的根目录， <code>GOROOT</code>的值无法被直接修改，且只能被操作系统的环境变量所覆盖。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token variable">$GOROOT</span> <span class="token parameter variable">-1</span>
api
bin
codereview.cfg
CONTRIBUTING.md
doc
go.env
lib
LICENSE
misc
PATENTS
pkg
README.md
SECURITY.md
src
<span class="token builtin class-name">test</span>
VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在根目录下有以下几个比较重要的文件夹或文件</p><ul><li><p><code>lib</code>，存放一些依赖，目前而言只有一个包含世界各国时区信息的库，位于<code>$GOROOT/lib/time</code>，编译后的二进制文件不会包含这些时区信息。</p></li><li><p><code>pkg</code>，存放一些工具库和头文件，比如<code>go tool</code>命令会在<code>$GOROOT/pkg/tool</code>目录下寻找go工具链的二进制文件</p></li><li><p><code>bin</code>，存放二进制文件，默认情况下只有<code>go</code>和<code>gofmt</code>这两个可执行文件，<code>$GOROOT/bin</code>应该被添加到系统变量中，否则无法使用go命令。</p></li><li><p><code>src</code>，存放go源代码</p></li><li><p><code>VERSION</code>，该文件存放着go语言的版本信息</p></li><li><p><code>go.env</code>，该文件是默认的<code>env</code>配置文件</p></li></ul><p><strong>GOPATH</strong></p><p><code>GOPATH</code>默认值是<code>$HOME/go</code>，该环境变量的值指定了在解析<code>import</code>语句时，去哪里寻找导入的文件。在早期没有gomod的时候，<code>GOPATH</code>是专门用来存放各种第三方库的，其结构如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/home/user/go

/home/user/go/
    src/
        foo/
            bar/               <span class="token punctuation">(</span>go code <span class="token keyword">in</span> package bar<span class="token punctuation">)</span>
                x.go
            quux/              <span class="token punctuation">(</span>go code <span class="token keyword">in</span> package main<span class="token punctuation">)</span>
                y.go
    bin/
        quux                   <span class="token punctuation">(</span>installed <span class="token builtin class-name">command</span><span class="token punctuation">)</span>
    pkg/
        linux_amd64/
            foo/
                bar.a          <span class="token punctuation">(</span>installed package object<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gomod诞生之后，<code>GOPATH</code>就只是一个用来存放<code>go get</code>下载的依赖的地方，以及用于存放<code>go install</code>下载并编译的二进制文件。需要注意的是<code>GOPATH</code>的位置不能与<code>GOROOT</code>相同，否则将不会起任何作用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">env</span> GOBIN
warning: GOPATH <span class="token builtin class-name">set</span> to GOROOT <span class="token punctuation">(</span>/home/user/go<span class="token punctuation">)</span> has no effect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>截至目前笔者写下本文时，go语言版本已经来到了go1.21.3，除了非常古老的项目，基本上没有人会再使用gopath来管理依赖了。</p><p><strong>GOBIN</strong></p><p><code>GOBIN</code>是用于存放<code>go install</code>下载并编译的第三方二进制可执行文件，其默认值为<code>$GOPATH/bin</code>。与<code>$GOROOT/bin</code>一样，该目录应该被添加到操作系统的环境变量中，否则的话也无法使用<code>GOBIN</code>目录的下的二进制文件。</p><p><strong>GOMODCACHE</strong></p><p><code>GOMODCACHE</code>表示存放<code>go get</code>下载的依赖所存放的位置，默认值为<code>$GOPATH/pkg/mod</code>。其存放格式如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$GOMODCACHE/domain/username/project@verion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在同级目录下还会有一个名为<code>sumdb</code>的文件夹，用于存放依赖校验和数据库的相关信息。</p><p><strong>GOCACHE</strong></p><p>存放用于编译的缓存信息，其默认值为<code>$HOME/.cache/go-build</code>，该目录下会生成一个<code>README</code>文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOCACHE<span class="token variable">)</span></span>/README
This directory holds cached build artifacts from the Go build system.
Run <span class="token string">&quot;go clean -cache&quot;</span> <span class="token keyword">if</span> the directory is getting too large.
Run <span class="token string">&quot;go clean -fuzzcache&quot;</span> to delete the fuzz cache.
See golang.org to learn <span class="token function">more</span> about Go.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一次<code>build</code>都会产生许多文件，go会缓存这些文件以便于下一次编译时复用。</p><p><strong>GOTEMPDIR</strong></p><p>用于编译时产生的临时文件，例如<code>go run</code>要运行的临时二进制文件。其默认值为操作系统所指定的临时目录，在mac或linux上为<code>/tmp</code>，windows上为<code>%TEMP%</code>，也可以修改为用户所指定的位置。</p><p><strong>GO111MODULE</strong></p><p>该环境变量表示使用何种方式来管理go项目的依赖，有以下三个可用的值</p><ul><li><code>off</code>，关闭gomod，采用gopath，并且会忽略一切<code>go.mod</code>文件</li><li><code>on</code>，采用gomod，不使用gopath（默认）。</li><li><code>auto</code>，自动感知，如果项目文件包含<code>go.mod</code>就会采用gomod来进行管理</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为什么叫<code>GO111MODULE</code>，不直接叫<code>GOMODULE</code>，因为gomod是在go1.11版本第一次推出的。</p></div><p><strong>GOPROXY</strong></p><p>go模块代理，默认值为<code>https://proxy.golang.org,direct</code>，url采用逗号分隔，<code>direct</code>意思是直接使用VCS跳过模块代理，只有在前者无法访问时才会执行后者，还有一个可用的选项是<code>off</code>，表示禁止下载任何模块。除此之外，<code>GOPROXY</code>还可以是文件地址，比如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOPROXY=file://$(go env GOMODCACHE)/cache/download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过<code>go get -x</code>可以查看依赖下载过程所执行的命令，就可以知晓有没有走代理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get <span class="token parameter variable">-x</span> github.com/spf13/cast
<span class="token comment"># get https://goproxy.cn/github.com/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/@v/list: 404 Not Found (0.118s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/@v/list: 404 Not Found (0.197s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/list: 200 OK (0.257s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/v1.5.1.info</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/v1.5.1.info: 200 OK (0.013s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/v1.5.1.mod</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/v1.5.1.mod: 200 OK (0.015s)</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/supported</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/supported: 200 OK (0.064s)</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/lookup/github.com/spf13/cast@v1.5.1</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/lookup/github.com/spf13/cast@v1.5.1: 200 OK (0.014s)</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/tile/8/0/x079/736</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/tile/8/0/x079/736: 200 OK (0.016s)</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/tile/8/0/x068/334</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/tile/8/1/266</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/tile/8/0/x068/334: 200 OK (0.023s)</span>
<span class="token comment"># get https://goproxy.cn/sumdb/sum.golang.org/tile/8/1/266: 200 OK (0.028s)</span>
go: downloading github.com/spf13/cast v1.5.1
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/v1.5.1.zip</span>
<span class="token comment"># get https://goproxy.cn/github.com/spf13/cast/@v/v1.5.1.zip: 200 OK (0.024s)</span>
go: added github.com/spf13/cast v1.5.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用模块代理可以有效的提升模块的下载速度，国内用户基本上不使用代理的话无法访问默认的官方代理，目前公开且可信任的第三方模块代理如下</p><ul><li><code>https://proxy.golang.com.cn</code>，开源同时提供企业版服务</li><li><code>https://goproxy.cn</code>，七牛云提供并开源</li></ul>`,112),b={href:"https://github.com/goproxy/goproxy",target:"_blank",rel:"noopener noreferrer"},g=a(`<p><strong>GOSUMDB</strong></p><p><code>GOSUMDB</code>用于设置依赖库的校验和检测数据库地址，默认是<code>sum.golang.org</code>，当你设置了代理后，go就会通过代理来访问校验数据库。</p><p><strong>GOPRIVATE</strong></p><p><code>GOPRIVATE</code>环境变量用于设置私有的库，匹配的库将不会通过sumdb进行校验，也不会走代理，将通过VCS直接下载依赖。该支持通配符设置，使用逗号分隔，如下所示，所有后缀为<code>corp.example.com</code>和名为<code>github.com/gohper/myproject</code>的依赖都不会走代理和sumdb。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOPRIVATE=*.corp.example.com,github.com/gohper/myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以直接设置某一用户或组织</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOPRIVATE=github.com/gopher,github.com/myorganization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>GONOPROXY</strong></p><p>表明哪些依赖不需要走代理，规则与<code>GOPRIVATE</code>一致，并且会覆盖<code>GOPRIVATE</code>。</p><p><strong>GONOSUMDB</strong></p><p>表明哪些依赖不需要走校验数据库，规则与<code>GOPRIVATE</code>一致，并且会覆盖<code>GOPRIVATE</code>。</p><p><strong>GOINSECURE</strong></p><p>表示哪些依赖直接使用VCS进行下载，规则与<code>GOPRIVATE</code>一致，并且会被<code>GONOPROXY</code>和<code>GONOSUMDB</code>覆盖。</p><p><strong>GOVCS</strong></p><p>设置模块管理的版本控制系统，默认<code>public:git|hg,private:all</code>。也可以限制指定域名的VCS，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOVCS=github.com:git,evil.com:off,*:git|hg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述的限制中，github只能用git，evil.com则不允许使用，使用<code>|</code>来可以表示多个VCS。如果不做任何限制，可以如下设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOVCS=*:all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不允许任何VCS的使用，可以如下设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOVCS=*:off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>GOWORK</strong></p><p>设置工作区是否启用，默认为空即启用，如果设置为<code>off</code>，则不启用，会忽略一切<code>go.work</code>文件。</p><p><strong>GOTOOLDIR</strong></p><p>设置要使用的go工具链的位置，默认是<code>$GOROOT/pkg/tool</code>，默认的工具链也存放在该位置。</p><p><strong>GODEBUG</strong></p><p>设置调试选项，以键值对的形式控制go程序的部分执行行为，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GODEBUG=http2client=0,http2server=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),k=s("code",null,"1.21",-1),h=s("code",null,"panic(nil)",-1),f=s("code",null,"GODEBUG History",-1),x={href:"https://go.dev/doc/godebug",target:"_blank",rel:"noopener noreferrer"},y=a(`<p><strong>CGO_ENABLED</strong></p><p>表示是否开启cgo，默认为1，即开启，设置为0则关闭。</p><br><p>上面这些环境变量都是比较常用的，对于一些不那么常用的不做过多的介绍，比如CGO，WASM之类的，感兴趣可以自己了解。</p><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2><p>go支持的编译器有两种，gccgo和gc。gcc是一个老牌c/c++的编译器，支持多种语言包括go，后者gc并不是指的是垃圾回收的意思，它指的是go compiler，go语言在go1.5时完成了自举，gc是完全由go语言编写的编译器，它的源代码位于<code>cmd/compile</code>包下，由于完全是go语言实现，所以对于了解和学习其内部机制也十分的方便。在默认情况下，编译器采用gc进行编译。顺便提一嘴，go语言调试器也分两种，gdb和dlv，前者是老牌的c/c++调试器，支持多种语言，包括go，后者是go语言编写的调试器，对go语言的支持更友好，它同样也是开源的，推荐使用后者。 <code>build</code>命令的作用就是将go源文件编译成可执行的二进制文件，你会体验到相当迅速的编译体验，这也正是go语言的特点之一。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-h</span>
usage: go build <span class="token punctuation">[</span>-o output<span class="token punctuation">]</span> <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help build&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它接收三个参数，一个是<code>-o</code>标志所指示的文件输出路径，一个是用于定义编译行为的构建标志<code>build flas</code>，最后一个就是要编译的包，<strong>该参数必须放在最后</strong>。下面是一个简单的例子，没用到构建标志。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-o</span> ./bin/golearn.exe golearn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>./bin/golearn.exe</code>是表示输出路径，<code>golearn</code>表示要编译的模块，也可以是一个入口文件，或是一个文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-o</span> ./bin/golearn.exe main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在编译的时候它会忽略掉所有以<code>_test.go</code>结尾的文件，因为些文件按照约定都是测试文件。</p><br><p>除此之外，<code>build</code>命令还支持相当多的构建标志用于控制编译时的一些行为。</p><ul><li><code>-x</code>：输出编译过程中的详细指令</li><li><code>-n</code>：与<code>-x</code>类似，但是区别是它只是输出这些指令，但实际上并不会执行。</li><li><code>-v</code>：输出编译的包</li><li><code>-p</code>：编译过程中的并发数</li><li><code>-a</code>：强制重新构建，即使已经是最新的了。</li><li><code>-compiler</code>：指定使用哪个编译器，<code>gccgo</code>或者<code>gc</code>，后者是由go编写的编译器。</li><li><code>-race</code>：开启竞态检测</li><li><code>-msan</code>：开启内存分析</li><li><code>-asan</code>：开启地址分析</li><li><code>-cover</code>：开启代码覆盖检测</li><li><code>-buildmode</code>：指定编译模式，有<code>archive</code>，<code>c-archive</code>，<code>c-shared</code>，<code>default</code>，<code>shared</code>，<code>exe</code>，<code>pie</code>，<code>plugin</code>这几个选项。</li><li><code>-pgo</code>，指定pgo文件</li><li><code>-trimpath</code>：消除源文件路径前缀，比如相对路径<code>/var/lib/go/src/main.go</code>，消除后在运行时通过<code>runtime </code>获取到的文件名就只有相对于模块路径的相对路径<code>/main.go</code>，开启此项后，编译耗时会明显上升，大概在20-40%左右，取决于文件数量。</li><li><code>-toolexec</code>，在编译前执行的一些go命令，格式为<code>-toolexec &#39;cmd args&#39;</code>。</li><li><code>-gcflags</code>：指定编译器gc的一些tag</li><li><code>-gccgoflags</code>：指定编译器gccgo的一些tag</li><li><code>-ldflags</code>：指定link工具的一些tag</li></ul><p>对于一些ldflags之类的传递参数，可以传递<code>&quot;-help&quot;</code>这样的参数来获取其可能的值，比如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-ldflags</span> <span class="token parameter variable">-help</span>
usage: <span class="token function">link</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> main.o
  <span class="token parameter variable">-B</span> note
        <span class="token function">add</span> an ELF NT_GNU_BUILD_ID note when using ELF
  <span class="token parameter variable">-E</span> entry
        <span class="token builtin class-name">set</span> entry symbol name
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述这些是比较常用的，对于其它不怎么常用的可以自行了解。</p><h3 id="gcflags" tabindex="-1"><a class="header-anchor" href="#gcflags" aria-hidden="true">#</a> gcflags</h3><p>通过<code>gcflags</code>可以向编译器gc传递一些参数以控制特定的行为，它的使用格式是<code>-gcflags=&quot;pattern=args list&quot;</code>，<code>ages list</code>就是参数列表，<code>pattern</code>就是作用范围，有以下几个可用的值</p><ul><li><code>main</code>，入口文件所在的顶级包路径</li><li><code>all</code>，当前模块以及当前模式的所有依赖</li><li><code>std</code>，标准库</li><li><code>cmd</code>，作用<code>cmd</code>包下的所有源文件</li><li>通配符，比如<code>.</code>，<code>./...</code>，<code>cmd/...</code>。</li></ul><p>该<code>pattern</code>规则适用于所有支持该格式的标志，例如<code>ldflags</code>。通过如下命令查看其参数可用的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-gcflags</span> <span class="token parameter variable">-help</span>
usage: compile <span class="token punctuation">[</span>options<span class="token punctuation">]</span> file.go<span class="token punctuation">..</span>.
  -%    debug non-static initializers
  -+    compiling runtime
  <span class="token parameter variable">-B</span>    disable bounds checking
  <span class="token parameter variable">-C</span>    disable printing of columns <span class="token keyword">in</span> error messages
  <span class="token parameter variable">-D</span> path
        <span class="token builtin class-name">set</span> relative path <span class="token keyword">for</span> <span class="token builtin class-name">local</span> imports
  <span class="token parameter variable">-E</span>    debug symbol <span class="token builtin class-name">export</span>
  <span class="token parameter variable">-I</span> directory
        <span class="token function">add</span> directory to <span class="token function">import</span> search path
  <span class="token parameter variable">-K</span>    debug missing line numbers
  <span class="token parameter variable">-L</span>    also show actual <span class="token builtin class-name">source</span> <span class="token function">file</span> names <span class="token keyword">in</span> error messages <span class="token keyword">for</span> positions affected by //line directives
  <span class="token parameter variable">-N</span>    disable optimizations
  <span class="token parameter variable">-S</span>    print assembly listing
  <span class="token parameter variable">-V</span>    print version and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">-W</span>    debug parse tree after <span class="token builtin class-name">type</span> checking
  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面介绍几个常用的参数</p><ul><li><code>-S</code>：输出代码的汇编形式</li><li><code>-N</code>：关闭编译优化</li><li><code>-m</code>：输出优化决策</li><li><code>-l</code>：关闭函数内联</li><li><code>-c</code>：编译的并发数</li><li><code>-dwarf</code>：生成DWARF标志</li></ul><p>比如如果要查看代码的汇编形式，可以使用<code>-S</code>参数，并且还要关闭优化和内联，这样才能还原其本来的形式，如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-trimpath</span> <span class="token parameter variable">-gcflags</span><span class="token operator">=</span><span class="token string">&quot;-N -l -S&quot;</span> main.go
main.main STEXT <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">171</span> <span class="token assign-left variable">args</span><span class="token operator">=</span>0x0 <span class="token assign-left variable">locals</span><span class="token operator">=</span>0x58 <span class="token assign-left variable">funcid</span><span class="token operator">=</span>0x0 <span class="token assign-left variable">align</span><span class="token operator">=</span>0x0
        0x0000 00000 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      TEXT    main.main<span class="token punctuation">(</span>SB<span class="token punctuation">)</span>, ABIInternal, <span class="token variable">$88</span>-0
        0x0000 00000 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      CMPQ    SP, <span class="token number">16</span><span class="token punctuation">(</span>R14<span class="token punctuation">)</span>
        0x0004 00004 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      PCDATA  <span class="token variable">$0</span>, $-2
        0x0004 00004 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      JLS     <span class="token number">161</span>
        0x000a 00010 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      PCDATA  <span class="token variable">$0</span>, $-1
        0x000a 00010 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      PUSHQ   BP
        0x000b 00011 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      MOVQ    SP, BP
        0x000e 00014 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      SUBQ    <span class="token variable">$80</span>, SP
        0x0012 00018 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      FUNCDATA        <span class="token variable">$0</span>, gclocals·J5F+7Qw7O7ve2QcWC7DpeQ<span class="token operator">==</span><span class="token punctuation">(</span>SB<span class="token punctuation">)</span>
        0x0012 00018 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      FUNCDATA        <span class="token variable">$1</span>, gclocals·bDfKCdmtOiGIuJz/x+yQyQ<span class="token operator">==</span><span class="token punctuation">(</span>SB<span class="token punctuation">)</span>
        0x0012 00018 <span class="token punctuation">(</span>./main.go:9<span class="token punctuation">)</span>      FUNCDATA        <span class="token variable">$2</span>, main.main.stkobj<span class="token punctuation">(</span>SB<span class="token punctuation">)</span>
        0x0012 00018 <span class="token punctuation">(</span>./main.go:10<span class="token punctuation">)</span>     MOVUPS  X15, main<span class="token punctuation">..</span>autotmp_0+40<span class="token punctuation">(</span>SP<span class="token punctuation">)</span>
        0x0018 00024 <span class="token punctuation">(</span>./main.go:10<span class="token punctuation">)</span>     LEAQ    main<span class="token punctuation">..</span>autotmp_0+40<span class="token punctuation">(</span>SP<span class="token punctuation">)</span>, CX
        0x001d 00029 <span class="token punctuation">(</span>./main.go:10<span class="token punctuation">)</span>     MOVQ    CX, main<span class="token punctuation">..</span>autotmp_2+32<span class="token punctuation">(</span>SP<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ldflags" tabindex="-1"><a class="header-anchor" href="#ldflags" aria-hidden="true">#</a> ldflags</h3><p>通过ldflags可以向链接器传递一些参数以控制特定的行为，通过如下命令来查看<code>ldflags</code>所有可用的值，接近二三十个。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-ldflags</span> <span class="token parameter variable">-help</span>
usage: <span class="token function">link</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> main.o
  <span class="token parameter variable">-B</span> note
        <span class="token function">add</span> an ELF NT_GNU_BUILD_ID note when using ELF
  <span class="token parameter variable">-E</span> entry
        <span class="token builtin class-name">set</span> entry symbol name
  <span class="token parameter variable">-H</span> <span class="token builtin class-name">type</span>
        <span class="token builtin class-name">set</span> header <span class="token builtin class-name">type</span>
  <span class="token parameter variable">-I</span> linker
        use linker as ELF dynamic linker
  <span class="token parameter variable">-L</span> directory
        <span class="token function">add</span> specified directory to library path
  <span class="token parameter variable">-R</span> quantum
        <span class="token builtin class-name">set</span> address rounding quantum <span class="token punctuation">(</span>default -1<span class="token punctuation">)</span>
  <span class="token parameter variable">-T</span> int
        <span class="token builtin class-name">set</span> the start address of text symbols <span class="token punctuation">(</span>default -1<span class="token punctuation">)</span>
  <span class="token parameter variable">-V</span>    print version and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">-X</span> definition
        <span class="token function">add</span> string value definition of the form <span class="token assign-left variable">importpath.name</span><span class="token operator">=</span>value
  <span class="token parameter variable">-a</span>    no-op <span class="token punctuation">(</span>deprecated<span class="token punctuation">)</span>
  <span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ldflags</code>的<code>-X</code>参数是一个非常实用的功能，它可以在链接时定义指定包的字符串变量的值。通过这个功能，我们可以很方便的在编译时注入一些元信息。而且它只是一个变量，所以也方便在运行时获取，下面是一个简单的例子。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	Version <span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Version<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go build <span class="token parameter variable">-ldflags</span> <span class="token string">&quot;-X main.Version=<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> describe <span class="token parameter variable">--always</span><span class="token variable">)</span></span>&quot;</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行后就会输出git提交的sha1校验和。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5e3fd7a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外一些比较实用的参数有</p><ul><li><code>-w</code>：不生成DWARF，这是一种方便调试源码的信息。</li><li><code>-s</code>：禁用符号表</li></ul><p>这两个通常放一块用，可以显著的减小编译后的二进制文件的体积，大概有40%-50%左右，缺点也很明显，没法进行调试，下面是一个例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-ldflags</span><span class="token operator">=</span><span class="token string">&quot;-w -s&quot;</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="交叉编译" tabindex="-1"><a class="header-anchor" href="#交叉编译" aria-hidden="true">#</a> 交叉编译</h3><p>go语言编译总共有两大特点，第一个就是快，另外一大特点就是交叉编译，交叉编译指的是可以在本地编译成其它系统的目标代码，例如在<code>windows</code>上编译成<code>linux</code>或<code>darwin</code>上的二进制文件，反过来也是一样。交叉编译支持的语言非常多，这并不是什么稀奇事，但是go语言交叉编译非常的简单，只需要以下两步</p><ol><li>设置GOOS环境变量，选择你的目标操作系统</li><li>设置GOARCH环境变量，选择你的目标CPU架构</li><li>像平时一样使用<code>go build</code>进行编译</li></ol><p>整个过程非常短，不需要使用额外的工具或配置，而且速度跟平时一样快。如下所示</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token target symbol">build_linux</span><span class="token punctuation">:</span>
	SET CGO_ENABLED<span class="token operator">=</span>0
	SET GOOS<span class="token operator">=</span><span class="token string">&quot;linux&quot;</span>
	SET GOARCH<span class="token operator">=</span><span class="token string">&quot;amd64&quot;</span>
	go build -o golearn  main.go

<span class="token target symbol">build_mac</span><span class="token punctuation">:</span>
	SET CGO_ENABLED<span class="token operator">=</span>0
	SET GOOS<span class="token operator">=</span><span class="token string">&quot;darwin&quot;</span>
	SET GOARCH<span class="token operator">=</span><span class="token string">&quot;amd64&quot;</span>
	go build -o golearn main.go

<span class="token target symbol">build_win</span><span class="token punctuation">:</span>
	SET CGO_ENABLED<span class="token operator">=</span>0
	SET GOOS<span class="token operator">=</span><span class="token string">&quot;win&quot;</span>
	SET GOARCH<span class="token operator">=</span><span class="token string">&quot;amd64&quot;</span>
	go build -o golearn.exe main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build_linux \\
		build_mac \\
		build_win
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一步<code>SET CGO_ENABLED=0</code>这一项禁用了cgo，一旦你的代码中使用了cgo，那么就无法正常使用交叉编译。第二步<code>SET GOOS</code>设置目标系统，可选的有<code>linux</code>，<code>darwin</code>，<code>windwos</code>，<code>netbsd</code>。第三步设置CPU架构，<code>SET GOARCH</code>，可选的有<code>amd64</code>，<code>386</code>，<code>arm</code>，<code>ppc64</code>。最后一步就是像往常一样进行编译。</p><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h2><p><code>run</code>命令与<code>build</code>都会将源代码进行编译，不同的是<code>run</code>命令在编译完成后会直接运行。 <code>run</code>命令为了加快编译速度，在编译过程中不会生成调试信息，所以也就不支持调试，并且只是生成一个临时的二进制文件，通常存放在<code>GOTMEPDIR</code>目录下，例如<code>/temp/go-build2822241271/b001/exe/main.exe</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run <span class="token parameter variable">-h</span>
usage: go run <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>-exec xprog<span class="token punctuation">]</span> package <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help run&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它也支持<code>build</code>命令的构建标志，还提供了一个参数<code>-exec</code>来指明由哪个程序来运行二进制文件，<code>[arguments...]</code>指的是程序的运行参数。下面是一个例子</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	Version <span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Version<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>go run</code>运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run <span class="token parameter variable">-ldflags</span><span class="token operator">=</span><span class="token string">&quot;-X main.Version=<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> describe <span class="token parameter variable">--always</span><span class="token variable">)</span></span>&quot;</span> main.go hello
5e3fd7a
<span class="token punctuation">[</span>hello<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总体上使用起来与<code>go build</code>没有太大的差别，就不再做过多的赘述。</p><h2 id="tool" tabindex="-1"><a class="header-anchor" href="#tool" aria-hidden="true">#</a> tool</h2><p><code>tool</code>命令本身没有任何功能，它的作用是直接调用<code>cmd/</code>目录下的工具，例如<code>cmd/compile</code>就是自带的编译器。通过<code>go tool</code>可以直接调用这些工具，不用去手动执行这些工具的二进制文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool <span class="token parameter variable">-h</span>
usage: go tool <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token builtin class-name">command</span> <span class="token punctuation">[</span>args<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>-n</code>参数打印出其所有支持的命令参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool <span class="token parameter variable">-n</span>
addr2line
asm
buildid
cgo
compile
covdata
cover
doc
fix
<span class="token function">link</span>
nm
objdump
pack
pprof
test2json
trace
vet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些工具存放在<code>GOROOT/pkg/tool</code>目录下，并且根据操作系统和CPU架构对工具进行分组，如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token variable">$GOROOT</span>/pkg/tool/windows_amd64/ <span class="token parameter variable">-1</span>
addr2line.exe*
asm.exe*
buildid.exe*
cgo.exe*
compile.exe*
covdata.exe*
cover.exe*
doc.exe*
fix.exe*
link.exe*
nm.exe*
objdump.exe*
pack.exe*
pprof.exe*
test2json.exe*
trace.exe*
vet.exe*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>go doc cmd/command</code>格式查看每个命令的用法，比如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc cmd/compile
Usage:

    go tool compile <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> file<span class="token punctuation">..</span>.

The specified files must be Go <span class="token builtin class-name">source</span> files and all part of the same package.
The same compiler is used <span class="token keyword">for</span> all target operating systems and architectures.
The GOOS and GOARCH environment variables <span class="token builtin class-name">set</span> the desired target.

Flags:

    <span class="token parameter variable">-D</span> path
        Set relative path <span class="token keyword">for</span> <span class="token builtin class-name">local</span> imports.
    <span class="token parameter variable">-I</span> dir1 <span class="token parameter variable">-I</span> dir2
        Search <span class="token keyword">for</span> imported packages <span class="token keyword">in</span> dir1, dir2, etc,
        after consulting <span class="token variable">$GOROOT</span>/pkg/<span class="token variable">$GOOS_</span><span class="token variable">$GOARCH</span><span class="token builtin class-name">.</span>
    <span class="token parameter variable">-L</span>
        Show complete <span class="token function">file</span> path <span class="token keyword">in</span> error messages.
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>cmd/compile</code>支持的标志参数，也就是前面提到过的<code>gcflags</code>支持的参数。<code>go tool compile</code>与<code>go build</code>的不同在于，前者只是负责编译，并且只能以文件作为参数，后者可以以文件夹，包，文件作为参数，而且不仅做了编译源代码这一件事，还负责链接文件，清除无用的文件等，前者是后者的一部分。我们可以打印<code>build</code>过程中执行的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go build <span class="token parameter variable">-n</span> main.go

<span class="token comment">#</span>
<span class="token comment"># internal/goarch</span>
<span class="token comment">#</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$WORK</span><span class="token punctuation">\\</span>b004<span class="token punctuation">\\</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span><span class="token variable">$WORK</span><span class="token punctuation">\\</span>b004<span class="token punctuation">\\</span>importcfg <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;<span class="token bash punctuation"> <span class="token comment"># internal</span></span>
# import config
EOF</span>
<span class="token string">&quot;/golang/pkg/tool/windows_amd64/compile.exe&quot;</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">$WORK</span>/b004/_pkg_.a&quot;</span> <span class="token parameter variable">-trimpath</span> <span class="token string">&quot;<span class="token variable">$WORK</span>/b004=&gt;&quot;</span> <span class="token parameter variable">-p</span> internal/goarch <span class="token parameter variable">-std</span> -+ <span class="token parameter variable">-complete</span> <span class="token parameter variable">-buildid</span> 3gunEkUExGdhOPa2rFsh/3gunEkUExGdhOPa2rFsh <span class="token parameter variable">-goversion</span> go1.21.0 <span class="token parameter variable">-c</span><span class="token operator">=</span><span class="token number">4</span> <span class="token parameter variable">-nolocalimports</span> <span class="token parameter variable">-importcfg</span> <span class="token string">&quot;<span class="token variable">$WORK</span>/b004/importcfg&quot;</span> <span class="token parameter variable">-pack</span> <span class="token string">&quot;/golang/src/internal/goarch/goarch.go&quot;</span> <span class="token string">&quot;/golang/src/internal/goarch/goarch_amd64.go&quot;</span> <span class="token string">&quot;/golang/src/internal/goarch/zgoarch_amd64.go&quot;</span>
<span class="token string">&quot;/golang/pkg/tool/windows_amd64/buildid.exe&quot;</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;<span class="token variable">$WORK</span>/b004/_pkg_.a&quot;</span> <span class="token comment"># internal</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在过程中可以看到有这么一段<code>/golang/pkg/tool/windows_amd64/compile.exe</code>，正是调用了编译器。除了<code>compile</code>之外，还有很多工具可以调用，很多go命令实际上都是它们的别名。</p><h2 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> clean</h2><p><code>clean</code>命令用于清除编译过程中生成的对象文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go clean <span class="token parameter variable">-h</span>
usage: go clean <span class="token punctuation">[</span>clean flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help clean&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它支持以下标志</p><ul><li><code>-i</code>：清除对应的归档文件或二进制文件</li><li><code>-n</code>：打印将要清除过程要执行的命令但实际并不执行</li><li><code>-x</code>：打印清除过程中的要执行的命令并执行</li><li><code>-r</code>：通过<code>import path</code>递归的进行清除</li><li><code>-cache</code>，清除所有<code>go build</code>产生的缓存</li><li><code>-testcache</code>：清除所有产生的测试缓存</li><li><code>-modcache</code>：清除所有下载的模块缓存</li><li><code>-fuzzcache</code>：清除<code>fuzz test</code>产生的缓存。</li></ul><p>当使用<code>go tool compile</code>时，是直接调用编译器命令，并不像<code>go build</code>那会做很多善后处理，就会产生对象文件。比如执行如下的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go tool compile <span class="token parameter variable">-N</span> <span class="token parameter variable">-S</span> <span class="token parameter variable">-l</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就会生成一个名为<code>main.o</code>的文件，使用<code>go clean</code>命令清除即可。或者使用<code>-n</code>参数打印将要执行的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go clean <span class="token parameter variable">-n</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> golearn golearn.exe golearn golearn.exe golearn.test golearn.test.exe golearn.test golearn.test.exe api api.exe main main.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>清除编译缓存，它会删除<code>GOCACHE</code>目录下产生的编译缓存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go clean <span class="token parameter variable">-cache</span> <span class="token parameter variable">-n</span>
<span class="token function">rm</span> <span class="token parameter variable">-r</span> /cache/00 /cache/01 /cache/02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>清除fuzz test产生的缓存，这些缓存默认存放在<code>GOCACHE/fuzz/</code>目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go clean <span class="token parameter variable">-fuzzcache</span> <span class="token parameter variable">-n</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /cache/fuzz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fix" tabindex="-1"><a class="header-anchor" href="#fix" aria-hidden="true">#</a> fix</h2><p>go语言截至到撰写本文时已经有十年了，在语言不断更新和修改的过程中，难免会出现一些因API的变化而导致的不兼容，<code>fix</code>命令就是为此而生的，它会检测源文件中那些已经过时的API并将其替换为新的API。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go fix <span class="token parameter variable">-h</span>
usage: go fix <span class="token punctuation">[</span>-fix list<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help fix&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它支持文件夹，文件名，目录作为参数，接收<code>-fix</code>标志来传递参数以表明进行何种修改，可以通过<code>got tool fix -help</code>命令查看可用的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool fix <span class="token parameter variable">-help</span>
usage: go tool fix <span class="token punctuation">[</span>-diff<span class="token punctuation">]</span> <span class="token punctuation">[</span>-r fixname,<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>-force fixname,<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>path <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
  <span class="token parameter variable">-diff</span>
        display diffs instead of rewriting files
  <span class="token parameter variable">-force</span> string
        force these fixes to run even <span class="token keyword">if</span> the code looks updated
  <span class="token parameter variable">-go</span> string
        go language version <span class="token keyword">for</span> files
  <span class="token parameter variable">-r</span> string
        restrict the rewrites to this comma-separated list

Available rewrites are:

buildtag
        Remove +build comments from modules using Go <span class="token number">1.18</span> or later

cftype
        Fixes initializers and casts of C.*Ref and JNI types

context
        Change imports of golang.org/x/net/context to context

egl
        Fixes initializers of EGLDisplay

eglconf
        Fixes initializers of EGLConfig

gotypes
        Change imports of golang.org/x/tools/go/<span class="token punctuation">{</span>exact,types<span class="token punctuation">}</span> to go/<span class="token punctuation">{</span>constant,types<span class="token punctuation">}</span>

jni
        Fixes initializers of JNI&#39;s jobject and subtypes

netipv6zone
        Adapt element key to IPAddr, UDPAddr or TCPAddr composite literals.

        https://codereview.appspot.com/6849045/

printerconfig
        Add element keys to Config composite literals.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面举个例子，源代码中用到了<code>golang.org/x/net/context</code>包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>package main

<span class="token function">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;golang.org/x/net/context&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	background :<span class="token operator">=</span> context.Background<span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt.Println<span class="token punctuation">(</span>background.Err<span class="token punctuation">(</span><span class="token punctuation">))</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>go fix</code>修正，将其替换为标准库中的<code>context</code>包，我们可以如下命令来进行替换</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go fix <span class="token parameter variable">-fix</span> context main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以不替换，看看前后文件变化。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool fix <span class="token parameter variable">-r</span> context <span class="token parameter variable">-diff</span>  main.go
main.go: fixed context
<span class="token function">diff</span> main.go fixed/main.go
--- main.go
+++ fixed/main.go
@@ -1,8 +1,8 @@
 package main

 <span class="token function">import</span> <span class="token punctuation">(</span>
+       <span class="token string">&quot;context&quot;</span>
        <span class="token string">&quot;fmt&quot;</span>
-       <span class="token string">&quot;golang.org/x/net/context&quot;</span>
 <span class="token punctuation">)</span>

 func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go语言诞生了十多年只有九个可用的替换参数，可见兼容性保持的还算可以。</p><h2 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt" aria-hidden="true">#</a> fmt</h2><p><code>fmt</code>命令是go语言自带的格式化工具，用于格式化go源代码文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">fmt</span> <span class="token parameter variable">-h</span>
usage: go <span class="token function">fmt</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>-x<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help fmt&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过命令<code>go doc gofmt</code>查看其详细文档</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go doc cmd/gofmt
Gofmt formats Go programs. It uses tabs <span class="token keyword">for</span> indentation and blanks <span class="token keyword">for</span>
alignment. Alignment assumes that an editor is using a fixed-width font.

Usage:

    gofmt <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>path <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

The flags are:

    <span class="token parameter variable">-d</span>
        Do not print reformatted sources to standard output.
        If a <span class="token function">file</span><span class="token string">&#39;s formatting is different than gofmt&#39;</span>s, print diffs
        to standard output.
    <span class="token parameter variable">-e</span>
        Print all <span class="token punctuation">(</span>including spurious<span class="token punctuation">)</span> errors.
    <span class="token parameter variable">-l</span>
        Do not print reformatted sources to standard output.
        If a <span class="token function">file</span><span class="token string">&#39;s formatting is different from gofmt&#39;</span>s, print its name
        to standard output.
    <span class="token parameter variable">-r</span> rule
        Apply the rewrite rule to the <span class="token builtin class-name">source</span> before reformatting.
    <span class="token parameter variable">-s</span>
        Try to simplify code <span class="token punctuation">(</span>after applying the rewrite rule, <span class="token keyword">if</span> any<span class="token punctuation">)</span>.
    <span class="token parameter variable">-w</span>
        Do not print reformatted sources to standard output.
        If a <span class="token function">file</span><span class="token string">&#39;s formatting is different from gofmt&#39;</span>s, overwrite it
        with gofmt&#39;s version. If an error occurred during overwriting,
        the original <span class="token function">file</span> is restored from an automatic backup.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>gofmt</code>使用<code>tab</code>进行缩进，空格进行对齐，在默认情况下格式化后的代码将会输出到标准输出中，并非覆盖到原文件。<code>go fmt</code>命令实际上用到的是<code>gofmt</code>命令，它是一个独立的二进制文件，位于<code>GOROOT/bin</code>目录下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token variable">$GOROOT</span>/bin <span class="token parameter variable">-1</span>
go.exe*
gofmt.exe*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给<code>go fmt</code>命令加上<code>-n</code>标志就可以知晓其将要执行的指令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">fmt</span> main.go
/golang/bin/gofmt.exe <span class="token parameter variable">-l</span> <span class="token parameter variable">-w</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出<code>go fmt</code>其实就是是<code>gofmt -l -w</code>的别名，<code>gofmt</code>命令有以下参数</p><ul><li><code>-d</code>：输出格式化前后的文件差异</li><li><code>-e</code>：输出所有错误</li><li><code>-l</code>：输出发生变化的文件名</li><li><code>-r</code>：应用格式化规则</li><li><code>-s</code>：尝试简化代码</li><li><code>-w</code>：覆盖源文件，如果发生错误就恢复备份</li></ul><p>假设现在有如下源文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>$ cat main<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>-d</code>参数可以预览其变化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gofmt <span class="token parameter variable">-d</span> main.go
<span class="token function">diff</span> main.go.orig main.go
--- main.go.orig
+++ main.go
@@ -3,5 +3,5 @@
 <span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

 func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
-fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
-
+       fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
+<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-l</code>参数将会输出将要修改的文件名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ gofmt -l .
main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果存在语法错误的话，<code>-e</code>参数可以输出的更详细</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gofmt <span class="token parameter variable">-d</span> <span class="token parameter variable">-e</span> main.go
main.go:6:27: missing <span class="token string">&#39;,&#39;</span> <span class="token keyword">in</span> argument list
main.go:6:28: expected operand, found newline
main.go:7:2: expected <span class="token string">&#39;)&#39;</span>, found <span class="token string">&#39;EOF&#39;</span>
main.go:7:2: expected <span class="token string">&#39;;&#39;</span>, found <span class="token string">&#39;EOF&#39;</span>
main.go:7:2: expected <span class="token string">&#39;;&#39;</span>, found <span class="token string">&#39;EOF&#39;</span>
main.go:7:2: expected <span class="token string">&#39;}&#39;</span>, found <span class="token string">&#39;EOF&#39;</span>
main.go:7:2: missing <span class="token string">&#39;,&#39;</span> <span class="token keyword">in</span> argument list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-w</code>会将修改应用到源文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gofmt <span class="token parameter variable">-l</span> <span class="token parameter variable">-w</span> <span class="token builtin class-name">.</span>
main.go

$ <span class="token function">cat</span> main.go
package main

<span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以发现作为一个格式化工具，<code>gofmt</code>完全没有提供任何的自定义配置，而专为美化js代码的格式化器<code>prettify</code>它就提供了相当多的配置用于格式化代码，这里可以体现出go官方的一个态度，别想搞什么个性化，所有人代码风格最好都是一致的，至少有一个好处就是在阅读代码的时候不用去适应他人的习惯。不过其实它还是保留了一个自定义项的，就是格式化代码的替换规则，规则是可以自定义的，格式如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pattern -&gt; replacement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如去除冗余的括号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(a) -&gt; a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文件变更</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gofmt <span class="token parameter variable">-r</span> <span class="token string">&quot;(a) -&gt; a&quot;</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-l</span> <span class="token builtin class-name">.</span>
main.go
<span class="token function">diff</span> main.go.orig main.go
--- main.go.orig
+++ main.go
@@ -3,5 +3,5 @@
 <span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

 func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
-       fmt.Println<span class="token variable"><span class="token punctuation">((</span>&quot;hello world<span class="token operator">!</span>&quot;<span class="token punctuation">))</span></span>
+       fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>gofmt</code>会将冗余的括号删除掉。</p><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h2><p><code>get</code>命令绝对是go开发过程中最常用的了，它的作用是将指定地址包源代码下载到<code>GOMODCACHE</code>所对应的目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get <span class="token parameter variable">-h</span>
usage: go get <span class="token punctuation">[</span>-t<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help get&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-u</code>：尝试更新包的次要版本以及补丁版本，如果涉及到主版本的改变，比如<code>v1-&gt;v2</code>，将不会更新。</li><li><code>-t</code>：更新测试中的依赖版本</li><li><code>-v</code>：输出被编译的包，实际上属于<code>build flags</code>的参数之一</li></ul><p>在古早时期，<code>go get</code>的作用和<code>go install</code>类似，它会下载并编译这些包，然而随着go模块的诞生与完善，这一部分的作用渐渐的被废弃了，<code>get</code>命令现在最常用的作用就是对go模块下载并解析依赖，所以你可以看到<code>go get</code>命令还支持<code>build flags</code>这类构建标志，并且如果你尝试在模块外像使用<code>go install</code>一样使用<code>go get</code>，它会提示你此用法已经被废弃了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get github.com/wire/wire
go: go.mod <span class="token function">file</span> not found <span class="token keyword">in</span> current directory or any parent directory.
        <span class="token string">&#39;go get&#39;</span> is no longer supported outside a module.
        To build and <span class="token function">install</span> a command, use <span class="token string">&#39;go install&#39;</span> with a version,
        like <span class="token string">&#39;go install example.com/cmd@latest&#39;</span>
        For <span class="token function">more</span> information, see https://golang.org/doc/go-get-install-deprecation
        or run <span class="token string">&#39;go help get&#39;</span> or <span class="token string">&#39;go help install&#39;</span><span class="token builtin class-name">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于为什么在文档描述中还保留这些也是不得而知，翻看<code>get</code>命令的源代码，你还会发现它保留了以前的那些flag。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	getD        <span class="token operator">=</span> CmdGet<span class="token punctuation">.</span>Flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	getF        <span class="token operator">=</span> CmdGet<span class="token punctuation">.</span>Flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	getFix      <span class="token operator">=</span> CmdGet<span class="token punctuation">.</span>Flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;fix&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	getM        <span class="token operator">=</span> CmdGet<span class="token punctuation">.</span>Flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;m&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	getT        <span class="token operator">=</span> CmdGet<span class="token punctuation">.</span>Flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	getU        upgradeFlag
	getInsecure <span class="token operator">=</span> CmdGet<span class="token punctuation">.</span>Flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;insecure&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// -v is cfg.BuildV</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到正题，<code>get</code>命令会将指定的包的源代码下载到本地的全局依赖目录中，也就是<code>GOCACHE</code>对应的目录，然后将信息记录到<code>go.mod</code>和<code>go.sum</code>文件中，前者负责记录版本，后者负责记录sha1校验和确保安全性。<code>get</code>命令实际上是基于VCS，也就是本地的版本控制系统，总共支持下面几个</p><ul><li>git</li><li>hg</li><li>bzr</li><li>svn</li><li>fossil</li></ul><p>其中，默认只支持git和hg，可以<code>GOVCS</code>中进行配置，格式如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GOVCS=github.com:git,example.com:hg,*:git|hg,*:all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>GOVCS</code>仅支持git和hg作为VCS，其它三个需要在<code>GOPRIVATE</code>中配置。</p><p><code>go get</code>命令总共有下面几种用法，可以直接将依赖地址作为参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get golang.org/x/net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以指定版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get golang.org/x/net@0.17.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定最新版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get golang.org/x/net@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>尝试更新版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get <span class="token parameter variable">-u</span> golang.org/x/net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除某一依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get golang.org/x/net@none
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>上面这些是用来管理普通的依赖，它还可以用来管理不那么普通的依赖，比如更新go语言的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get go@latest
go: updating go.mod requires go <span class="token operator">&gt;=</span> <span class="token number">1.21</span>.3<span class="token punctuation">;</span> switching to go1.21.3
go: downloading go1.21.3 <span class="token punctuation">(</span>windows/amd64<span class="token punctuation">)</span>
go: upgraded go <span class="token number">1.21</span>.0 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1.21</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至还可以用来更新go工具链的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get toolchain@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你使用<code>go get</code>更新go和工具链版本时，它们会在<code>GOMODCACHE/golang.org/</code>目录下安装新版本的go</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOMODCACHE<span class="token variable">)</span></span>/golang.org <span class="token parameter variable">-1</span>
<span class="token string">&#39;toolchain@v0.0.1-go1.21.3.windows-amd64&#39;</span>/
x/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候再手动修改一下<code>GOROOT</code>就可以切换到指定的版本了。</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><p><code>install</code>命令与<code>get</code>命令类似，它们都是用于下载第三方的依赖，不过区别在于<code>get</code>命令下载的是源码，而<code>install</code>命令会将源码编译成本机可执行的二进制文件，二进制文件存放路径首先在<code>GOBIN</code>目录下，其次是<code>GOPATH/bin</code>。该命令的主要功能是用来下载第三方公开的一些命令行工具，得益于go语言的编译速度和可移植性，并不需要下载二进制文件，而是直接下载源代码然后在本地进行编译。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">install</span> <span class="token parameter variable">-h</span>
usage: go <span class="token function">install</span> <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help install&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>install</code>命令接收构建标志和包名作为参数，在gomod开启的情况下，包名必须携带版本号。例如下载delve调试器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">install</span> <span class="token parameter variable">-x</span> github.com/go-delve/delve/cmd/dlv@latest
<span class="token comment"># get https://goproxy.cn/github.com/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/delve/cmd/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/delve/cmd/dlv/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/delve/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/@v/list: 404 Not Found (0.014s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/delve/cmd/@v/list: 404 Not Found (0.027s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/delve/cmd/dlv/@v/list: 404 Not Found (0.027s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/delve/@v/list: 200 OK (0.027s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/go-delve/@v/list: 404 Not Found (0.027s)</span>
<span class="token assign-left variable">WORK</span><span class="token operator">=</span>/home/user/tmp/go-build2033992495
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$WORK</span>/b001/
<span class="token function">cat</span> <span class="token operator">&gt;</span>/home/user/tmp/go-build2033992495/b001/importcfg.link <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;</span> <span class="token comment"># internal</span>
packagefile github.com/go-delve/delve/cmd/dlv<span class="token operator">=</span>/home/user/.cache/go-build/f1/f11d552287458c0fce625abe50bf928c487064c36bbb1251ad8b1968772c3e4b-d
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/wyh/gomod/bin/
<span class="token function">mv</span> <span class="token variable">$WORK</span>/b001/exe/a.out /home/wyh/gomod/bin/dlv
<span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token variable">$WORK</span>/b001/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它首先会将源代码下载到<code>GOMODCACHE</code>所存放的路径，这一点跟<code>get</code>命令一致，然后切换到临时工作目录，对其进行编译，编译完成后将二进制文件移动到<code>GOPATH/bin</code>目录下，最后再删除临时文件夹。<code>install</code>命令还有一个限制就是下载的包必须是该项目的入口包，也就是说必须要包含<code>main.go</code>入口文件，否则的话会提示你无法安装。例如，使用<code>go install</code>下载gin</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">install</span> <span class="token parameter variable">-x</span> github.com/gin-gonic/gin@latest
<span class="token comment"># get https://goproxy.cn/github.com/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/gin-gonic/gin/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/gin-gonic/@v/list</span>
<span class="token comment"># get https://goproxy.cn/github.com/@v/list: 404 Not Found (0.022s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/gin-gonic/gin/@v/list: 200 OK (0.027s)</span>
<span class="token comment"># get https://goproxy.cn/github.com/gin-gonic/@v/list: 404 Not Found (0.028s)</span>
package github.com/gin-gonic/gin is not a main package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gin是一个web框架依赖库，并不是一个命令行工具，自然也就没有入口文件，所以也就会安装失败。</p><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><p><code>list</code>命令会列出指定位置的包，一行一个，并且支持自定义格式化输出，支持很多的参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go list <span class="token parameter variable">-h</span>
usage: go list <span class="token punctuation">[</span>-f format<span class="token punctuation">]</span> <span class="token punctuation">[</span>-json<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m<span class="token punctuation">]</span> <span class="token punctuation">[</span>list flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help list&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它支持的参数如下</p><ul><li><code>-f</code>：格式化参数</li><li><code>-json</code>：json格式输出</li><li><code>-compiled</code>：展示所有会被编译器编译的包</li><li><code>-deps</code>：展示每一个包及其所依赖的每一个包的名称</li><li><code>-test</code>：展示每一个包的测试包</li><li><code>-e</code>：遇到错误的包时正常输出</li><li><code>-find</code>：不解析这些包的依赖关系</li><li><code>-export</code>：使用该参数时，设置结构体<code>Package.Export</code>字段值为包含指定包的最新的导出信息的文件，以及设置<code>Package.BuildID</code>字段值为包的<code>BuildID</code>，主要是格式化输出用。</li></ul><p>模块信息参数，</p><ul><li><p><code>-m</code>：输出模块而不是输出包</p></li><li><p><code>-versions</code>：展示一个模块所有可用的信息</p></li><li><p><code>-retracted</code>：展示一个模块的撤回版本</p></li></ul><p><code>[packages]</code>参数可以是一个指定的包名，或者文件夹，也可以是<code>all</code>，表示任何地方，当使用<code>-m</code>参数时，<code>all</code>表示当前模块引用的所有依赖。</p><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format</h3>`,167),O={class:"hint-container tip"},w=s("p",{class:"hint-container-title"},"提示",-1),G=a(`<p><code>list</code>命令的输出是以行为单位，每一个行输出都是一个包。官方提供了可以让我们自定义行输出格式的参数<code>-f</code>，它所接受的值也就是<code>template/text</code>模板引擎包所定义的模板语法，例如下面的示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-f</span> <span class="token string">&quot;package {{ .Dir }} {{ .Name }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每一个迭代的包都将以下面结构体的形式传入，该结构体中的所有字段都可以作为模板参数。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Package <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Dir            <span class="token builtin">string</span>   <span class="token comment">// directory containing package sources</span>
    ImportPath     <span class="token builtin">string</span>   <span class="token comment">// import path of package in dir</span>
    ImportComment  <span class="token builtin">string</span>   <span class="token comment">// path in import comment on package statement</span>
    Name           <span class="token builtin">string</span>   <span class="token comment">// package name</span>
    Doc            <span class="token builtin">string</span>   <span class="token comment">// package documentation string</span>
    Target         <span class="token builtin">string</span>   <span class="token comment">// install path</span>
    Shlib          <span class="token builtin">string</span>   <span class="token comment">// the shared library that contains this package (only set when -linkshared)</span>
    Goroot         <span class="token builtin">bool</span>     <span class="token comment">// is this package in the Go root?</span>
    Standard       <span class="token builtin">bool</span>     <span class="token comment">// is this package part of the standard Go library?</span>
    Stale          <span class="token builtin">bool</span>     <span class="token comment">// would &#39;go install&#39; do anything for this package?</span>
    StaleReason    <span class="token builtin">string</span>   <span class="token comment">// explanation for Stale==true</span>
    Root           <span class="token builtin">string</span>   <span class="token comment">// Go root or Go path dir containing this package</span>
    ConflictDir    <span class="token builtin">string</span>   <span class="token comment">// this directory shadows Dir in $GOPATH</span>
    BinaryOnly     <span class="token builtin">bool</span>     <span class="token comment">// binary-only package (no longer supported)</span>
    ForTest        <span class="token builtin">string</span>   <span class="token comment">// package is only for use in named test</span>
    Export         <span class="token builtin">string</span>   <span class="token comment">// file containing export data (when using -export)</span>
    BuildID        <span class="token builtin">string</span>   <span class="token comment">// build ID of the compiled package (when using -export)</span>
    Module         <span class="token operator">*</span>Module  <span class="token comment">// info about package&#39;s containing module, if any (can be nil)</span>
    Match          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// command-line patterns matching this package</span>
    DepOnly        <span class="token builtin">bool</span>     <span class="token comment">// package is only a dependency, not explicitly listed</span>
    DefaultGODEBUG <span class="token builtin">string</span>  <span class="token comment">// default GODEBUG setting, for main packages</span>

    <span class="token comment">// Source files</span>
    GoFiles           <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .go source files (excluding CgoFiles, TestGoFiles, XTestGoFiles)</span>
    CgoFiles          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .go source files that import &quot;C&quot;</span>
    CompiledGoFiles   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .go files presented to compiler (when using -compiled)</span>
    IgnoredGoFiles    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .go source files ignored due to build constraints</span>
    IgnoredOtherFiles <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// non-.go source files ignored due to build constraints</span>
    CFiles            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .c source files</span>
    CXXFiles          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .cc, .cxx and .cpp source files</span>
    MFiles            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .m source files</span>
    HFiles            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .h, .hh, .hpp and .hxx source files</span>
    FFiles            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .f, .F, .for and .f90 Fortran source files</span>
    SFiles            <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .s source files</span>
    SwigFiles         <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .swig files</span>
    SwigCXXFiles      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .swigcxx files</span>
    SysoFiles         <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// .syso object files to add to archive</span>
    TestGoFiles       <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// _test.go files in package</span>
    XTestGoFiles      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">// _test.go files outside package</span>

    <span class="token comment">// Embedded files</span>
    EmbedPatterns      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// //go:embed patterns</span>
    EmbedFiles         <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// files matched by EmbedPatterns</span>
    TestEmbedPatterns  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// //go:embed patterns in TestGoFiles</span>
    TestEmbedFiles     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// files matched by TestEmbedPatterns</span>
    XTestEmbedPatterns <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// //go:embed patterns in XTestGoFiles</span>
    XTestEmbedFiles    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// files matched by XTestEmbedPatterns</span>

    <span class="token comment">// Cgo directives</span>
    CgoCFLAGS    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// cgo: flags for C compiler</span>
    CgoCPPFLAGS  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// cgo: flags for C preprocessor</span>
    CgoCXXFLAGS  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// cgo: flags for C++ compiler</span>
    CgoFFLAGS    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// cgo: flags for Fortran compiler</span>
    CgoLDFLAGS   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// cgo: flags for linker</span>
    CgoPkgConfig <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// cgo: pkg-config names</span>

    <span class="token comment">// Dependency information</span>
    Imports      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>          <span class="token comment">// import paths used by this package</span>
    ImportMap    <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// map from source import to ImportPath (identity entries omitted)</span>
    Deps         <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>          <span class="token comment">// all (recursively) imported dependencies</span>
    TestImports  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>          <span class="token comment">// imports from TestGoFiles</span>
    XTestImports <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>          <span class="token comment">// imports from XTestGoFiles</span>

    <span class="token comment">// Error information</span>
    Incomplete <span class="token builtin">bool</span>            <span class="token comment">// this package or a dependency has an error</span>
    Error      <span class="token operator">*</span>PackageError   <span class="token comment">// error loading package</span>
    DepsErrors <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>PackageError <span class="token comment">// errors loading dependencies</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PackageError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ImportStack   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// shortest path from package named on command line to this one</span>
    Pos           <span class="token builtin">string</span>   <span class="token comment">// position of error (if present, file:line:col)</span>
    Err           <span class="token builtin">string</span>   <span class="token comment">// the error itself</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果迭代的是模块，则以下面结构体的形式传入，它的所有字段也可以作为模板参数。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Module <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Path       <span class="token builtin">string</span>        <span class="token comment">// module path</span>
    Query      <span class="token builtin">string</span>        <span class="token comment">// version query corresponding to this version</span>
    Version    <span class="token builtin">string</span>        <span class="token comment">// module version</span>
    Versions   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>      <span class="token comment">// available module versions</span>
    Replace    <span class="token operator">*</span>Module       <span class="token comment">// replaced by this module</span>
    Time       <span class="token operator">*</span>time<span class="token punctuation">.</span>Time    <span class="token comment">// time version was created</span>
    Update     <span class="token operator">*</span>Module       <span class="token comment">// available update (with -u)</span>
    Main       <span class="token builtin">bool</span>          <span class="token comment">// is this the main module?</span>
    Indirect   <span class="token builtin">bool</span>          <span class="token comment">// module is only indirectly needed by main module</span>
    Dir        <span class="token builtin">string</span>        <span class="token comment">// directory holding local copy of files, if any</span>
    GoMod      <span class="token builtin">string</span>        <span class="token comment">// path to go.mod file describing module, if any</span>
    GoVersion  <span class="token builtin">string</span>        <span class="token comment">// go version used in module</span>
    Retracted  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>      <span class="token comment">// retraction information, if any (with -retracted or -u)</span>
    Deprecated <span class="token builtin">string</span>        <span class="token comment">// deprecation message, if any (with -u)</span>
    Error      <span class="token operator">*</span>ModuleError  <span class="token comment">// error loading module</span>
    Origin     any           <span class="token comment">// provenance of module</span>
    Reuse      <span class="token builtin">bool</span>          <span class="token comment">// reuse of old module info is safe</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ModuleError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Err <span class="token builtin">string</span> <span class="token comment">// the error itself</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mod" tabindex="-1"><a class="header-anchor" href="#mod" aria-hidden="true">#</a> mod</h2><p><code>go mod</code>是专用于管理go模块的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod <span class="token builtin class-name">help</span>
Go mod provides access to operations on modules.

Note that support <span class="token keyword">for</span> modules is built into all the go commands,
not just <span class="token string">&#39;go mod&#39;</span><span class="token builtin class-name">.</span> For example, day-to-day adding, removing, upgrading,
and downgrading of dependencies should be <span class="token keyword">done</span> using <span class="token string">&#39;go get&#39;</span><span class="token builtin class-name">.</span>
See <span class="token string">&#39;go help modules&#39;</span> <span class="token keyword">for</span> an overview of module functionality.

Usage:

        go mod <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">]</span>

The commands are:

        download    download modules to <span class="token builtin class-name">local</span> cache
        edit        edit go.mod from tools or scripts
        graph       print module requirement graph
        init        initialize new module <span class="token keyword">in</span> current directory
        tidy        <span class="token function">add</span> missing and remove unused modules
        vendor      <span class="token function">make</span> vendored copy of dependencies
        verify      verify dependencies have expected content
        why         explain why packages or modules are needed

Use <span class="token string">&quot;go help mod &lt;command&gt;&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它有下面几个子命令</p><ul><li><code>download</code>：将<code>go.mod</code>文件中所有标明的依赖下载到本地缓存</li><li><code>edit</code>：编辑<code>go.mod</code>文件，它提供的命令行接口主要是提供给其它工具或脚本调用的。</li><li><code>init</code>：在当前目录初始化一个gomod项目</li><li><code>tidy</code>：下载缺失的依赖，删除无用的依赖</li><li><code>graph</code>：输出依赖图</li><li><code>verify</code>：验证本地的依赖</li><li><code>why</code>：解释为什么会依赖这些模块</li><li><code>verdor</code>：导出项目依赖到vendor目录</li></ul><h3 id="vendor" tabindex="-1"><a class="header-anchor" href="#vendor" aria-hidden="true">#</a> vendor</h3><p>vendor是早期gomod没有推出之前的一个gopath的替代方案，每一个go项目下都会有一个vendor目录，按照<code>domain/user/project</code>这种格式单独存放每一个项目的依赖，就像隔壁nodeJs臃肿的<code>nodemodule</code>一样每一个项目的依赖分开放，这种依赖管理方式现在看起来确实很愚蠢，但是在那个时候确实没有更好的方案了，之所以保留vendor是因为go秉承的向下兼容的承诺，有一些老项目包括go源代码里面可能还在使用vendor。</p><p>回到正题，<code>vendor</code>是<code>go mod</code>的一个子命令，它可以将当前模块所引用的全局依赖导出到vendor目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod vendor <span class="token parameter variable">-h</span>
usage: go mod vendor <span class="token punctuation">[</span>-e<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o outdir<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help mod vendor&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它有以下几个参数</p><ul><li><code>-o</code>：指定输出路径文件夹</li><li><code>-v</code>：输出每一个依赖</li><li><code>-e</code>：出现错误时不退出仍然继续</li></ul><p>下面看一个示例，先用<code>go list -m all</code>查看下当前项目所引用的依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go list <span class="token parameter variable">-m</span> all
github.com/dstgo/task                               
github.com/davecgh/go-spew v1.1.1                   
github.com/pkg/errors v0.9.1                        
github.com/pmezard/go-difflib v1.0.0                
github.com/stretchr/objx v0.5.0                     
github.com/stretchr/testify v1.8.4                  
gopkg.in/check.v1 v0.0.0-20161208181325-20d25e280405
gopkg.in/yaml.v3 v3.0.1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出到当前的vendor目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod vendor <span class="token parameter variable">-v</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> vendor
<span class="token comment"># github.com/davecgh/go-spew v1.1.1</span>
<span class="token comment">## explicit</span>
github.com/davecgh/go-spew/spew
<span class="token comment"># github.com/pkg/errors v0.9.1</span>
<span class="token comment">## explicit</span>
github.com/pkg/errors
<span class="token comment"># github.com/pmezard/go-difflib v1.0.0</span>
<span class="token comment">## explicit</span>
github.com/pmezard/go-difflib/difflib
<span class="token comment"># github.com/stretchr/testify v1.8.4</span>
<span class="token comment">## explicit; go 1.20</span>
github.com/stretchr/testify/assert
<span class="token comment"># gopkg.in/yaml.v3 v3.0.1</span>
<span class="token comment">## explicit</span>
gopkg.in/yaml.v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出后的目录结构如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─vendor
    ├─github.com
    │  ├─davecgh
    │  │  └─go-spew
    │  │      └─spew
    │  ├─pkg
    │  │  └─errors
    │  ├─pmezard
    │  │  └─go-difflib
    │  │      └─difflib
    │  └─stretchr
    │      └─testify
    │          └─assert
    └─gopkg.in
    |    └─yaml.v3
    |
    |--modules.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="work" tabindex="-1"><a class="header-anchor" href="#work" aria-hidden="true">#</a> work</h2><h2 id="vet" tabindex="-1"><a class="header-anchor" href="#vet" aria-hidden="true">#</a> vet</h2><p>命令<code>vet</code>是一个go语言源代码的静态错误检查工具，就像其它语言的lint工具，比如<code>Eslint</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go vet <span class="token parameter variable">-h</span>
usage: go vet <span class="token punctuation">[</span>build flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>-vettool prog<span class="token punctuation">]</span> <span class="token punctuation">[</span>vet flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help vet&#39;</span> <span class="token keyword">for</span> details.
Run <span class="token string">&#39;go tool vet help&#39;</span> <span class="token keyword">for</span> a full list of flags and analyzers.
Run <span class="token string">&#39;go tool vet -help&#39;</span> <span class="token keyword">for</span> an overview.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先来看一个简单的示例，现有如下源代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> main.go
package main

<span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在同级目录下不带任何参数执行<code>go vet</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go vet
vet: ./main.go:6:28: missing <span class="token string">&#39;,&#39;</span> before newline <span class="token keyword">in</span> argument list <span class="token punctuation">(</span>and <span class="token number">1</span> <span class="token function">more</span> errors<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vet</code>会报告哪个文件哪一行出了什么问题。它支持构建标志作为参数，例如<code>-n</code>和<code>-x</code>，支持包，文件夹，文件名作为参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go vet <span class="token builtin class-name">.</span>
$ go vet main.go
$ go vet ./cmd
$ go vet runtime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过如下命令查看其更详细的参数和解释。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go tool vet <span class="token builtin class-name">help</span>
vet is a tool <span class="token keyword">for</span> static analysis of Go programs.

vet examines Go <span class="token builtin class-name">source</span> code and reports suspicious constructs,
such as Printf calls whose arguments <span class="token keyword">do</span> not align with the <span class="token function">format</span>
string. It uses heuristics that <span class="token keyword">do</span> not guarantee all reports are
genuine problems, but it can <span class="token function">find</span> errors not caught by the compilers.

Registered analyzers:

    asmdecl      report mismatches between assembly files and Go declarations
    assign       check <span class="token keyword">for</span> useless assignments
    atomic       check <span class="token keyword">for</span> common mistakes using the sync/atomic package
    bools        check <span class="token keyword">for</span> common mistakes involving boolean operators
    buildtag     check //go:build and // +build directives
    <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go tool vet</code>命令并不能直接用来对代码进行检查，应该使用<code>go vet</code>。<code>go vet</code>参数中的<code>[vet flag]</code>支持设置代码分析器，可用的值如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>asmdecl      检查汇编文件是否与go声明不匹配
assign       检查是否有无用的变量
atomic       检查使用sync/atomic时是否破坏了原子性
bools        检查是否错误使用逻辑运算符
buildtag     检查build tag
cgocall      检查违反cgao指针传递规则的行为
composites   检查未初始化的复合结构，比如map，chan
copylocks    检查是否发生了锁的值复制
directive    检查go工具链指令
errorsas     检查是否向errors.As传递非指针类型或非error类型的值
framepointer 检查编译优化后的汇编代码是否在保存帧指针之前对其进行清除
httpresponse 检查是否错误使用httpresponse
ifaceassert  检查接口到接口的类型断言
loopclosure  循环变量的引用问题
lostcancel   context.WithCancel没有使用cancel函数
nilfunc      检查函数和nil之间是否存在无用的比较
printf       检查printf的格式化参数是否正确
shift        检查是否有等于或超过整数宽度的移位
sigchanyzer  检查无缓冲的chan os.Signal
slog         检查不合法的结构化日志调用
stdmethods   检查已知接口方法的签名是否正确
stringintconv 检查字符串整型转换
structtag    检查结构体tag是否正确
testinggoroutine 检查是否在测试中使用协程调用testing.Fatal
tests        检查测试和示例的常见错误用法
timeformat   使用(time.Time).Format 或 time.Parse的时间格式是否正确
unmarshal    向unmarshal传递非指针或非接口类型
unreachable  检查不可到达的代码
unsafeptr    检查uintptr到unsafe.Pointer不正确转换
unusedresult 检查未使用的函数返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它们都是针对某一个点进行分析的分析器，比如<code>timeformat</code>分析器是检查<code>time.Format</code>的调用格式是否符合正确的语法。在默认情况下以上所有的分析器都会启用，单独启用可用使用如下的格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go vet <span class="token parameter variable">-timeformat</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>单独禁用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go vet <span class="token parameter variable">-timeformat</span><span class="token operator">=</span>false main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这些分析器的源代码位于<code>cmd/vendor/golang.org/x/tools/go/analysis/passes</code>，每一个分析器都是go语言容易犯的一个坑，所以十分建议使用<code>vet</code>命令来检查你的代码。除此这些之外，它还支持一些其它的标志参数</p><ul><li><code>-V</code>，仅打印版本然后退出</li><li><code>-json</code>，以json形式输出</li><li><code>-c=n</code>，显示上下文中指定数目的冲突行（似乎并没有任何作用）</li></ul><p>还有一些外置的分析器，比如<code>shadows</code>，它负责检测短变量命名的变量隐藏问题，由于是外置的所以需要用<code>go install</code>来进行下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token function">install</span> golang.org/x/tools/go/analysis/passes/shadow/cmd/shadow@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用格式如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go vet <span class="token parameter variable">-vettool</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> shadow<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token builtin class-name">test</span> <span class="token parameter variable">-h</span>
usage: go <span class="token builtin class-name">test</span> <span class="token punctuation">[</span>build/test flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>packages<span class="token punctuation">]</span> <span class="token punctuation">[</span>build/test flags <span class="token operator">&amp;</span> <span class="token builtin class-name">test</span> binary flags<span class="token punctuation">]</span>
Run <span class="token string">&#39;go help test&#39;</span> and <span class="token string">&#39;go help testflag&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generate" tabindex="-1"><a class="header-anchor" href="#generate" aria-hidden="true">#</a> generate</h2>`,50);function C(E,q){const i=l("ExternalLinkIcon"),o=l("RouterLink");return c(),p("div",null,[u,s("p",null,[n("上述这些命令代表着go语言从编译，文档、测试、到模块管理等一系列功能整合而成一整套工具链，本文只是简单的叙述与介绍它们的使用，所有内容参考自官方文档，所以想要了解更多细节可以前往"),s("a",v,[n("cmd/go"),e(i)]),n("。")]),m,s("p",null,[n("当然也有开源的自建模块代理方案："),s("a",b,[n("goproxy"),e(i)])]),g,s("p",null,[n("这些设置是为了方便在版本更新过程中而出现了不兼容变化时，方便go回退到以前的旧行为，例如在"),k,n("中不再允许"),h,n("这种情况发生，为此，go官方专门记录了"),f,n("，前往"),s("a",x,[n("GODEBUG"),e(i)]),n("了解更多细节。")]),y,s("div",O,[w,s("p",null,[n("关于模板语法，可以前往"),e(o,{to:"/essentail/senior/130.template.html"},{default:d(()=>[n("模板引擎")]),_:1}),n("了解。")])]),G])}const T=t(r,[["render",C],["__file","cmd.html.vue"]]);export{T as default};
