function getSlice(array, value) {
   const indexArray = array.indexOf(value);
   if (indexArray >= 0) {
      return array.slice(0, indexArray + 1)
   }
    else {
    return array.slice(0, 0 )
    }
  }

  console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))

