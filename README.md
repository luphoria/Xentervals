# Xentervals
Compare intervals of different EDOs to find matches!

## Install
Clone the repository (`git clone https://github.com/luphoria/Xentervals`), and, in the root directory of the repository, run `npm install` to install it.

## Usage
`node app.js`

The program will prompt you to enter a number to create an EDO. Enter an integer for however many steps you want to divide your octave into, i.e. `x`edo.

Do this for however many EDOs you want to compare at the same time. Once you've entered all your EDOs, leave the input field blank and hit Enter.

The program will then ask you for a "margin of error in cents." This is the maximum number of cents apart two intervals can be for the program to "match" them. The default is 10 for 10 cents. Enter a number.

Once you do that, the program will list the total number of interval matches for each EDO, and ask you which EDO you want to view. Type one of the options. It will print the matches for that EDO.

When you're done, type `0` (or Ctrl+C) to exit the application.

## Roadmap
Right now it's a functional CLI, but I want it to be a pretty, visual web app. 

There is currently no dependency on nodejs, this works totally fine within the browser as long as you remove the `prompt-sync` polyfill. I want visual aid for the resulting data though.

## Contributing
Please.

## Credits
- [luphoria](https://luphoria.com)
- Your name could be here, if you dang contributed to the repository ;-)
