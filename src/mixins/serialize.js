export default {
  methods : {
    serialize(record,quantity) {
      let parsedInteger  = parseInt(quantity)
      return {
        id: record.id,
        name: record.name,
        price: record.price,
        quantity : parsedInteger
      }
    }
  }
}