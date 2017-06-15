// We can't use arrow functions here because
// they don't respect the `this` scope

function setReference(item, name) {
  if (!this.refs) {
    this.refs = {}
  }

  this.refs[name] = item
}

module.exports = function(item, name) {
  if (!item) {
    return
  }

  if (name) {
    setReference(item, name)
    return
  }

  if (item.props && item.props.name) {
    name = item.props.name
  } else if (item.getAttribute) {
    name = item.getAttribute('name')
  }

  if (!name) {
    return
  }

  setReference(item, name)
}
