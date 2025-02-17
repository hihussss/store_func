import React from 'react'
import '../App.css'

export const ShopItemFunc = (probs) => {
    const {brand, title, description, descriptionFull, price, currency} = probs.cardItem
  return (
    <div className={"main-content"}>
  <h2>{brand}</h2>
  <h1>{title}</h1>
  <h3>{description}</h3>
  <div className={"description"}>
    {descriptionFull}
  </div>
  <div className={"highlight-window mobile"}><div className={"highlight-overlay"}></div></div>
  <div className={"divider"}></div>
  <div className={"purchase-info"}>
    <div class="price">{currency}{price.toFixed(2)}</div>
    <button>Добавить в корзину</button>
  </div>
</div>
  )
}
