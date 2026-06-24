import comp from "/home/users/nadim.ahmad/Downloads/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky.html\",\"title\":\"Sticky Article\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"Category C\"],\"tag\":[\"tag E\"],\"sticky\":true,\"excerpt\":\"<p>A sticky article demo.</p>\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1781871567000,\"contributors\":[{\"name\":\"Nadim Ahmad\",\"username\":\"\",\"email\":\"nadimahmad.mg322@webkul.in\",\"commits\":1}],\"changelog\":[{\"hash\":\"352528ada77dce5d02ae49abeb40ef0052c2b249\",\"time\":1781871567000,\"email\":\"nadimahmad.mg322@webkul.in\",\"author\":\"Nadim Ahmad\",\"message\":\"feat: setup VuePress documentation with RMA guide\"}]},\"filePathRelative\":\"posts/sticky.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
