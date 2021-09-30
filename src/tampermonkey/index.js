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
  var params = ['target', 'url', 'toasturl']
  var createUrl = function (url) {
    return new URL(url)
  }
  var urlSearchParam = function (url, param) {
    return url.searchParams.get(param)
  }
  var searchParamsPro = function (url, params) {
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
      var param = params_1[_i]
      if (urlSearchParam(url, param)) {
        return urlSearchParam(url, param)
      }
    }
    return ''
  }
  /**
   * main
   */
  var currentUrl = window.location.href
  window.location.replace(searchParamsPro(createUrl(currentUrl), params))
})()
