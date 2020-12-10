# Prettier for Handlebars - A fork of Handlebars Formatter

This extension allow you to format handlebars files using the currently unreleased Prettier `glimmer` parser

Because it uses unreleased, it may break with future changes to Prettier.

## Why Prettier for Handlebars exists VS Handlebars Formatter

This fork exists because of a difference in the hard coded Prettier dependency.

Currently Prettier for Handlebars uses Prettier v1.18.2 while [Handlebars Formatter](https://github.com/mfeckie/handlebars-formatter) uses something more modern.

Because the Prettier `glimmer` parser is still experimental it tends to break. There were idempotency issues with versions above v1.18.2.

Once these are fixed then this extension will be updated accordingly.

Final reason: I, Alon, like my name better 🙂

## Configuration

This extension should respect options declared in `.prettierrc`.  If you wish to provide specific overrides you can do so like this

```
{
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.hbs",
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

## Features

Format your handlebars files with Prettier ... that's it!

Example below from a slightly complex template from [Discourse](https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/templates/preferences-username.hbs)

Before

![before](/images/before.png)

After

![after](/images/after.png)

## Usage
Using Command Palette (CMD/CTRL + Shift + P)

`CMD + Shift + P` -> Format Document
OR
`CMD + Shift + P` -> Format Selection

## Extension Settings

This extension has no user configurable options at this point
