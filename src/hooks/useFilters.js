export function useFilters(filter, data) {
  const {listTop, listBottom, updateTop, updateBottom, updateFilter} = data
  const listOne = Array.from(listTop)
  const listTwo = Array.from(listBottom)

  if (filter === 'alphabetic') {

    listOne.sort(function (a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });

    listTwo.sort(function (a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    }).reverse()

    updateTop(listOne)
    updateBottom(listTwo)
    updateFilter('')
  }

  if (filter === 'colors') {
    const orderColors = ['red', 'orange', 'yellow', 'green', 'light_blue', 'dark_blue', 'violet', 'pink']
 
    let filterByColorOne = []
    let filterByColorTwo = []

    orderColors.forEach((color) => {
      listOne.forEach(book => {
        if(color === book.color) {
          filterByColorOne.push(book)
        }
      })
    })

    orderColors.forEach((color) => {
      listTwo.forEach(book => {
        if(color === book.color) {
          filterByColorTwo.push(book)
        }
      })
    })

    updateTop(filterByColorOne)
    updateBottom(filterByColorTwo.reverse())
    updateFilter('')
  }

  if (filter === 'sizes') {
    listOne.sort(function (a, b) {
      return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);
    });

    listTwo.sort(function (a, b) {
      return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);
    }).reverse()

    updateTop(listOne)
    updateBottom(listTwo)
    updateFilter('')
  }

}