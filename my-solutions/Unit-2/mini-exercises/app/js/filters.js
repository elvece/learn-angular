app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g, "-");
  };
});

app.filter('redact', function () {
  return function (input) {

  };
});
