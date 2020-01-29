export default store => next => action => {
  console.group(action.type)
    console.log("The action:::", action)
    const returnedValue = next(action)
    console.log("The new state:::", store.getState())
  console.groupEnd()
  return returnedValue
}
