{
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'twitter_share',
      title: 'このページをツイート',
    })
  })

  chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
      console.log(tab[0]?.title)
      console.log(tab[0]?.url)
    })
  })
}
