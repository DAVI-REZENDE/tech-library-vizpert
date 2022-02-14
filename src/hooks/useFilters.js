export function useFilters(filter, listTop, listBottom) {
  const listOne = listTop
  const listTwo = listBottom

  if (filter === 'alphabetic') {
    const filteredListTop = listOne.sort(function (a, b) {
    
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
     
    });

    const filteredListBottom = listTwo.sort(function (a, b) {
    
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
     
    }).reverse()

    return {filteredListTop, filteredListBottom}
  }

  if (filter === 'colors') {
    const filteredListTop = listOne.sort(function (a, b) {
    
      return (a.color.order_color > b.color.order_color) ? 1 : ((b.color.order_color > a.color.order_color) ? -1 : 0);
     
    });

    const filteredListBottom = listTwo.sort(function (a, b) {
    
      return (a.color.order_color > b.color.order_color) ? 1 : ((b.color.order_color > a.color.order_color) ? -1 : 0);
     
    }).reverse()

    return {filteredListTop, filteredListBottom}
  }

  if (filter === 'sizes') {
    const filteredListTop = listOne.sort(function (a, b) {
    
      return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);
     
    });

    const filteredListBottom = listTwo.sort(function (a, b) {
    
      return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);
     
    }).reverse()

    return {filteredListTop, filteredListBottom}
  }

}