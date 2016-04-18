[![Build Status](https://travis-ci.org/applification/TiStarter.svg?branch=master)](https://travis-ci.org/applification/TiStarter)

# Ti Starter (Tabbed UI)

> A starter project for Appcelerator Titanium that showcases best practice techniques and can be used to kick-start your Ti App

## Getting Started
This project makes heavy use of NPM packages. Once downloaded you will need to run the following from your command line to install all dependencies:

```javascript
npm install
```

### Splash Screens
If you want your splash screens to look right across all the variety of mobile devices then you need to use:

* iOS Storyboards
* Android .9patch

This start app uses both and integrates with TiCons CLI so you can generate them from a single image.

Bonus - TiCons also handles the generation of App Icons and Assets for you.

### App Design / Architecture
To deliver the best user experience this app makes use of the best native UI elements for each platform.

> NB: I've seen and had to implement many <View> based app architectures. Don't do this! It's really bad for performance and negates the whole point of Titanium IMHO. Use the native UI elements and a <Window> based architecture to ensure your app performance and user experience is not crappy.

This is a tabbed UI and it's important to note that iOS and Android deal with tabs slightly differently.

### Alloy Theming
A number of global styles are configured in:
/app/config.json
These are used within the TSS files to make it easy to re-skin the app with a few style color changes.

### Android Custom Theme
To get the best native styling on Android you need to use a custom theme. This is set up in: /app/platform/android/res/values/custom_theme.xml

### Android Window Animations
The default Window animations built into Android with Titanium are a little uninspiring. Fortunately you can add and use custom window animations, this starter app bundles a few extras in: /app/platform/android/res/anim/

The app is currently pre-configured to use Twitter style window animations with scaling and sliding.

### ListViews
TableViews can be slow (especially on Android) this app uses ListViews throughout as necessary.

### Alloy Models / Binding / Templates
Alloy Models & Data Binding make it very easy with minimal code to bind data. There are other ways to do this but I prefer the simple and maintainable approach!

### Custom Fonts
To illustrate using Custom Fonts the app is pre-configured with SF Compact. This works on both iOS and Android by renaming the font.

### FontAwesome
FontAwesome is integrated so you can use font based icons throughout the app to reduce the number of images required in your app, reducing app size and improving speed.

NB: There are some places you can't use Font Icons, e.g Tab Icons

### Language Strings
It's always a good idea to set up the app for multiple languages from the outset. The language strings are held at: /app/i18n/

## Unit Tests
There is no ideal supported option in Titanium for Unit Testing but I still think it's useful to set up and run a few tests.

This starter project is configured with two options:

### Ti-Mocha
Probably the most widely supported option, Ti-Mocha is handy but sadly has to be run in parallel with a simulator or device so it's not an ideal solution for me.

That said if you want it check the following files:

* app/alloy.jmk
* app/alloy.js
* app/config.json
* app/specs/

By default the tests are NOT running. If you want them to run, change *run_unit_tests* to true in config.json

> NB: When running tests the runner does not know how to handle Ti.App.Android.R.anim. You will see there is some hacky bypass which checks the run_unit_tests var and turns on / off the custom Android Window animations appropriately

### Ti-Slag
A headless option is Ti-Slag but it's unofficial and it's limited in what you can actually test. That said it's my preference as it can be integrated with CI easier.

Ti-Slag has been set up to run with AVA and is pre-configured with a number of NPM Script options:

```javascript
npm run test:ios:watch
```

```javascript
npm run test:android:watch
```

### Code Coverage
> I had wanted to make use of the Istanbul Code Coverage support of Ti-Slag, however, as this is an Alloy project I've yet to find a way to do so.

### ESLint
To ensure a certain level of code quality this app has been configured with ESLint based on AirBnb ES5 rules.

> NB: I had wanted to use ES6 and transpile down to ES5 using this module, however, the lack of LiveView support made this an undesirable option.

You can manually check linting by running the following command from the CLI:

```javascript
npm run eslint
```

I also recommend using an IDE other than Appcelerator Studio if you want proper linting support. I use Atom with https://atom.io/packages/linter-eslint

### Pre-Commit
As a method of enforcing the ESLint rules the NPM pre-commit module is installed. This will run ESLint checking every time a GIT commit is performed. If the linting fails you will not be allowed to commit and push your code.  

> NB: I had wanted to use ghooks as it offers the full range of GIT hooks. However it (and other similar options) did not work with GIT GUI so pre-commit is the best option right now.
