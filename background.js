async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true }
  let [tab] = await chrome.tabs.query(queryOptions)
  console.log(tab)

  const url = new URL(tab.url)
  console.log(url.searchParams.get('target'))
  tab.url = url.searchParams.get('target')
}

chrome.tabs.onUpdated.addListener(() => {
  getCurrentTab()
})
