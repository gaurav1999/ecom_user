import { combineResolvers } from 'graphql-resolvers';

const testOrder = async (parent, data, { postgres, models }) => {
  const user = new models.Users();
  user.userId = 'dsgsdg';
  await user.save();
  return data.data;
};

// const getOrdersFromDb = async(parent, data, {postgres}) => {
//   return await  postgres.order.find();
// }


export default {
  Query: {
    testOrder,
    //getOrders: getOrdersFromDb,
  },
};
