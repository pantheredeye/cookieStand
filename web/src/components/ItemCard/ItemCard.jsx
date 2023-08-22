import { Link, routes } from '@redwoodjs/router'

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <Link to={routes.item({ id: item.id })}>View</Link>
    </div>
  )
}

export default ItemCard
