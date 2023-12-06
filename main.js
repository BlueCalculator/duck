function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    }
  
    return os;
  }
  
  console.log(getOS());

   let Badboys = ['Windows', 'iOS', 'Mac OS'];

if (os = Badboys) {
    

    function getRandomLink(arr) {

         const randomIndex = Math.floor(Math.random() * arr.length);

         const item = arr[randomIndex];

         return item;
    }

    const array = ['https://www.google.com/search?q=please+stop&rlz=1C1RXQR_enUS1034US1034&oq=please&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIJCAEQRRg5GIAEMgcIAhAAGIAEMgwIAxAuGAoYsQMYgAQyEAgEEC4YgwEYsQMYgAQYigUyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgzODM3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8', 'https://www.google.com/search?q=how+to+do+your+job+better&rlz=1C1RXQR_enUS1034US1034&oq=how+to+do+your+job+better&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg2MzA2ajBqOagCALACAA&sourceid=chrome&ie=UTF-8', 'https://www.google.com/search?q=better+jobs+than+IT+for+a+school&rlz=1C1RXQR_enUS1034US1034&oq=better+jobs+than+IT+for+a+school&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBCDg4NjdqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8', 'https://www.dummies.com/book/technology/information-technology/networking/general-networking/networking-all-in-one-for-dummies-281780/', 'https://www.google.com/search?q=how+to+fake+your+job&rlz=1C1RXQR_enUS1034US1034&oq=how+to+fake+your+job&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMg0IBhAAGIYDGIAEGIoFMg0IBxAAGIYDGIAEGIoFMg0ICBAAGIYDGIAEGIoFMg0ICRAAGIYDGIAEGIoF0gEINDU2MGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8', 'https://www.hiration.com/blog/it-is-illegal-to-lie-on-a-resume/#:~:text=In%20California%2C%20lying%20on%20a%20resume%20can%20lead%20to%20automatic%20forfeiture%20of%20all%20employment%20rights.%20In%20addition%2C%20the%20employee%20can%20also%20be%20treated%20unlawfully%20by%20the%20employer%20and%20be%20unable%20to%20hold%20the%20employer%20liable.'];

    const result = getRandomLink(array);
    window.location.replace(result);

}
else {
    function getRandomLink(arr) {

        const randomIndex1 = Math.floor(Math.random() * arr.length);

        const item1 = arr[randomIndex1];

        return item1;
   }

   const SD = ['https://bbbeeesss.github.io/duck1/', 'https://bluecalculator.github.io/duck1/'];

   const result1 = getRandomLink(SD)


   document.write("<iframe src=\"" + result1 + "\"</iframe>")


    // var url = result1;

    //     if (url) {
    //         var win;
    //         duckgo()
    //         function duckgo() {
    //             if (win) {
    //                 win.focus();
    //             } else {
    //                 win = window.open();
    //                 win.document.body.style.margin = '0';
    //                 win.document.body.style.height = '100vh';
    //                 var iframe = win.document.createElement('iframe');
    //                 iframe.style.border = 'none';
    //                 iframe.style.width = '100%';
    //                 iframe.style.height = '100%';
    //                 iframe.style.margin = '0';
    //                 iframe.src = url;
    //                 win.document.body.appendChild(iframe);
                    

    //                 var interval = setInterval(function() {
    //                     if (win.closed) {
    //                         clearInterval(interval);
    //                         win = undefined;

    //                     }
    //                 }, 500);


    //             }
    //         };
    //     }

    //     window.close()

}
