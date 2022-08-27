const composeFunction = (state, functionList) => (dataList) => {
  return functionList.reduce((acc, currentFunc) => {
    return currentFunc(state, acc)
  }, dataList);
}

const getFilteredByType = (state, dataList) => {
  if (state.sortBy === "Rent") {
    return dataList.filter((item) => item.isForRent);
  }
  else if (state.sortBy === "Buy") {
    return dataList.filter((item) => item.isForSell);
  }
  return dataList
}
const getFilteredBySearchQuery = (state, dataList) => {
  if (state.searchByQuery) {
    return dataList.filter((item) => item.propertyType.toLowerCase().includes(state.searchByQuery.toLowerCase()) ||
      item.price.toString().toLowerCase().includes(state.searchByQuery.toLowerCase()) ||
      item.sqft.toLowerCase().includes(state.searchByQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(state.searchByQuery.toLowerCase()) ||
      item.place.toLowerCase().includes(state.searchByQuery.toLowerCase()))
  }
  else return dataList;
}

const getFilteredByForm=(state,dataList)=>{
  if(state.searchByForm)
  {
    if(state.searchByForm.price ==="")
    {
      return dataList
    }
    else{
     const priceData = state.searchByForm.price.split("-");
     console.log(priceData,Number(priceData[0].slice(1)),Number(priceData[1].slice(2)), state.searchByForm.movedInDate.slice(5, 7))
     const List = dataList.filter((item) => item.propertyType === state.searchByForm.property &&
      item.place.toLowerCase().includes(state.searchByForm.location.toLowerCase()) &&
      item.movedInMonth === state.searchByForm.movedInDate.slice(5, 7) &&
      item.price >= Number(priceData[0].slice(1)) && item.price <= Number(priceData[1].slice(2))
    )
    return List
    }
  }
  else return dataList;
}
const functionList = [getFilteredByType, getFilteredBySearchQuery, getFilteredByForm];
export { functionList, composeFunction }
