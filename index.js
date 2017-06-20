// We can't use arrow functions here because
// they don't respect the `this` scope

module.exports = function(item, name) {
  if (name) {
    this[name] = item
    return
  }

  if (item.props && item.props.name) {
    name = item.props.name
  } else if (item.getAttribute) {
    name = item.getAttribute('name')
  }

  this[name] = item
}
