# lightweb

This little node server serves a page that allows Bluetooth control of a strip of LEDs directly from your browser.

## Requirements

- A browser with Web Bluetooth capabilities.  Chrome, yes. Safari, no. Firefox, no. as of 2/2018
- A Bluetooth LEB control available from a site coming soon.
- A device that has Bluetooth BLE enabled.  

As far as devices that can run a browser with Web Bluetooth, I know the MacBook Pro Mid-2015 running Chrome are capable.

## Usage

- Clone this tiny repo
- cd lightweb
- node lightweb.js
- Browse to localhost:14000

- Click the Get Stuff button to find the bluetooth controller for your LEDs. 
- Click the color wheel to set the whole strip to the clicked color.
- Click Shoot for a shooting effect
- Click Set Pixel for a twinkling effect.
- Click Disconnect to tell the bluetooth led controller to disconnect from your browser.  Remember to disconnect before leaving the web page so connection later can happen.  If you forget, just wait 10 minutes for the led controller to reset.



