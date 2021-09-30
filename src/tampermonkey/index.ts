// ==UserScript==
// @name         Fuck Redirect
// @namespace    https://github.com/ryanmoyo
// @version      0.1
// @description  Rebuild the superhighway of the information age, 「重建信息时代的高速公路」
// @author       Ryan Moyo <iherewithmyheart@gmail.com>
// @match        https://link.juejin.cn/?target=*
// @match        https://link.zhihu.com/?target=*
// @match        https://link.zhihu.com/?target=*
// @match        https://www.jianshu.com/go-wild?ac=2&url=*
// @match        https://weibo.cn/sinaurl?toasturl=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MPL-2.0
// ==/UserScript==
'use strict'
;(function () {
  const params = ['target', 'url', 'toasturl']

  const createUrl = (url: string) => new URL(url)

  const urlSearchParam = (url: URL, param: string) => url.searchParams.get(param)

  const searchParamsPro = (url: URL, params: string[]) => {
    for (const param of params) {
      if (urlSearchParam(url, param)) {
        return urlSearchParam(url, param)
      }
    }
    return ''
  }

  /**
   * main
   */
  const currentUrl = window.location.href
  window.location.replace(searchParamsPro(createUrl(currentUrl), params))
})()
