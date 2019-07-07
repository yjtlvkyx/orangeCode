module.exports = {
    title: 'Adroi媒体API 接口文档',  // 设置网站标题
    description : 'Adroi',
    base : '/orangeCode/',
    themeConfig : {
      nav : [
          { text: '接口定义', link: '/apiword' }
      ],
      sidebar: {
          '/' : [
        "/", //指的是根目录的md文件 也就是 README.md 里面的内容
              "apiword", // 根目录创建 apiword.md文件
          ]
      },
      sidebarDepth : 2
    }
  }