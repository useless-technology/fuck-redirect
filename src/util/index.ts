const lastIndexOfPro = (str: string, search: string | RegExp) => {
  let i = str.length - 1
  while (i >= 0) {
    if (!str[i].match(search)) {
      return i
    }
    i -= 1
  }
  return -1
}

const includesPro = (str: string, search: string | RegExp) => str.search(search) >= 0

const substringLastIndex = (str: string, search: string | RegExp) =>
  str.substring(0, lastIndexOfPro(str, search) + 1)

// const splitMulti = (str: string) => {
//   const results = new Array()
// }

const createUrl = (url: string | URL) => new URL(url)

const isValidUrl = (url: string) => includesPro(url, /^https?:\/\//)

const isInvalidUrl = (url: string) => !isValidUrl(url)

const redirect = (fakeUrl: string | URL, realUrlParam: string) => {
  fakeUrl = createUrl(fakeUrl)
  let realUrl = fakeUrl.searchParams.get(realUrlParam)
  realUrl = decodeURIComponent(realUrl)
  if (isInvalidUrl(realUrl)) {
    realUrl = 'https://' + realUrl
  }
  window.location.replace(realUrl)
}
