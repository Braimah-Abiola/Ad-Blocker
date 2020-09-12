chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return { cancel: true}},
    { urls: defaultFilters },
    ["blocking"]
)

defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.google-analytics.com/*",
    "*://*.exponential.com/*",
    "*://*.adbrite.com/*",
    "*://*.zedo.com/*",
    "*://*.patner.googleadservices.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
]