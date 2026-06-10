let startTime = Date.now();
let currentDomain = "";

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    let tab = await chrome.tabs.get(activeInfo.tabId);

    track(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.url) {
        track(changeInfo.url);
    }
});

function track(url) {
    if (!url) return;

    let domain = new URL(url).hostname;

    let endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000;

    startTime = Date.now();

    console.log(domain, timeSpent);
    fetch("http://localhost:5000/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            domain: domain,
            timeSpent: timeSpent
        })
    });
}