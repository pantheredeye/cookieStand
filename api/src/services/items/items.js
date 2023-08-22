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
