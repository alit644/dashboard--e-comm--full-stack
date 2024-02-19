
export const addItemToCart = (cartitem , product) =>{
  // في حال العنصر كان موجود داخل الكرت

const esx =  cartitem.find((item) => item.id === product.id)
  if (esx) {
    return cartitem.map((item) => item.id === product.id ? {...item , qty: item.qty + 1} : item)
  }
  // لو ما كان موجود داخل الكرت
  return [...cartitem , {...product , qty: 1}]
}



// حذف العنصر من الفضلة
export const removeItemFromFav = (favItem , product) => {
  const removeItem = favItem.find((item) => item.id === product.id)

  if (removeItem) {
      return favItem.filter((item) => item.id !== product.id) 
  }

  return [...favItem , ...product]
}