import { db } from 'src/lib/db'

export const items = () => {
  return db.item.findMany()
}

export const item = ({ id }) => {
  return db.item.findUnique({
    where: { id },
  })
}

export const createItem = ({ input }) => {
  return db.item.create({
    data: input,
  })
}

export const updateItem = ({ id, input }) => {
  return db.item.update({
    data: input,
    where: { id },
  })
}

export const updateItems = async ({ items }) => {
  console.log('updateItems', items)
  return db.$transaction(
    items.map(({ id, quantity }) =>
      db.item.update({
        where: { id }, // Correctly reference itemId here
        data: { quantity }, // Update quantity
      })
    )
  )
}

export const deleteItem = ({ id }) => {
  return db.item.delete({
    where: { id },
  })
}

export const Item = {
  orderItems: (_obj, { root }) => {
    return db.item.findUnique({ where: { id: root?.id } }).orderItems()
  },
}
