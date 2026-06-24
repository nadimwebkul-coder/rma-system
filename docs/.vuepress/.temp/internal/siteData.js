export const siteData = JSON.parse("{\"base\":\"/rma-system/\",\"lang\":\"en-US\",\"title\":\"Webkul\",\"description\":\"User Guide and Documentation for Magento 2 Product Return RMA Extension by Webkul\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
