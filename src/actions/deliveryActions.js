//Actions for Delivery

let nextDeliveryId = 0;
export const addDeliveryData = delivery => {
  return {
    type: 'ADD_DELIVERY_DATA',
    id: nextDeliveryId++,
    name: delivery.name,
    address: delivery.address,
    city: delivery.city,
    zip: delivery.zip,
    voivodeship: delivery.voivodeship,
    phone: delivery.phone,
    payment: delivery.payment,
    value: delivery.value,
    nameoncard: delivery.nameoncard,
    creditcardnumber: delivery.creditcardnumber,
    expiration: delivery.expiration,
    cvv: delivery.cvv,
    date: delivery.date
  };
};
