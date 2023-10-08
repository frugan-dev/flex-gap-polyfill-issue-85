module.exports = {
  extends: ['stylelint-config-twbs-bootstrap'],
  rules: {
    'block-no-empty': null,
    //https://stackoverflow.com/a/69676333/3929620
    'selector-no-qualifying-type': null,
    'selector-max-type': 3,
    'selector-max-class': 6,
    'selector-max-compound-selectors': 5,
  },
};
