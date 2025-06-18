# bs-layout

[Short description of the addon.]

## Compatibility

- Ember.js v5.8 or above
- Ember CLI v5.8 or above
- Node.js v18 or above

## Installation

```
pnpm install @fmadler/bs-layout
```

This package relies on ember-bootstrap, ember-fontawesome and ember-cli-sass

If not present in the package.json dependency add those

### FontAwesome
https://www.npmjs.com/package/@fortawesome/ember-fontawesome

```bash
ember install @fortawesome/ember-fontawesome @fortawesome/fontawesome-svg-core
npm install --save-dev @fortawesome/free-solid-svg-icons
```

Add font-awesome.js and import it in app.js according to https://www.npmjs.com/package/@fortawesome/ember-fontawesome
### Bootstrap

```bash
npm install ember-bootstrap
ember generate ember-bootstrap
```

### SASS

```bash
npm install ember-cli-sass
ember g ember-cli-sass
```

## For publication

### Still to do
* Convert /app/compoment/bs/**.js to add namespace "@fmadler/"

Otherwise it's not working in dummy application.hbs page


## Usage

[Longer description of how to use the addon in apps.]

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
