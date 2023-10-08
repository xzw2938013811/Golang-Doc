const e=JSON.parse('{"key":"v-6d6eeec3","path":"/advance/impl/1.map.html","title":"map","lang":"zh-CN","frontmatter":{"description":"go与其它语言不同的是，映射表的支持是由map关键字提供的，而非将其封装为标准库。映射表是一种使用场景非常多的数据结构，底层有着许多的实现方式，最常见的两种方式就是红黑树和哈希表，go采用的是哈希表实现方式。 map的实现中涉及到了大量的指针移动操作，所以阅读本文需要unsafe标准库的知识。 内部结构 runtime.hmap结构体就是代表着go中的...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/advance/impl/1.map.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"map"}],["meta",{"property":"og:description","content":"go与其它语言不同的是，映射表的支持是由map关键字提供的，而非将其封装为标准库。映射表是一种使用场景非常多的数据结构，底层有着许多的实现方式，最常见的两种方式就是红黑树和哈希表，go采用的是哈希表实现方式。 map的实现中涉及到了大量的指针移动操作，所以阅读本文需要unsafe标准库的知识。 内部结构 runtime.hmap结构体就是代表着go中的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-08T08:51:19.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-08T08:51:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"map\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-08T08:51:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"内部结构","slug":"内部结构","link":"#内部结构","children":[]},{"level":2,"title":"哈希冲突","slug":"哈希冲突","link":"#哈希冲突","children":[]},{"level":2,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[{"level":3,"title":"键值","slug":"键值","link":"#键值","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]}]},{"level":2,"title":"修改","slug":"修改","link":"#修改","children":[]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":2,"title":"清空","slug":"清空","link":"#清空","children":[]},{"level":2,"title":"扩容","slug":"扩容","link":"#扩容","children":[{"level":3,"title":"增量扩容","slug":"增量扩容","link":"#增量扩容","children":[]},{"level":3,"title":"等量扩容","slug":"等量扩容","link":"#等量扩容","children":[]}]}],"git":{"createdTime":1696755079000,"updatedTime":1696755079000,"contributors":[{"name":"246859","email":"2633565580@qq.com","commits":1}]},"readingTime":{"minutes":74.51,"words":11177},"filePathRelative":"advance/impl/1.map.md","localizedDate":"2023年10月8日","autoDesc":true}');export{e as data};
