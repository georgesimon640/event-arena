import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createEvent(event) {
  event.id = uuid4();
  event.price = parseNearAmount(event.price + "");
  return window.contract.setEvent({ event });
}


export function changeLocation( Id, _location ) {
  return window.contract.changeLocation( { id: Id, _location: _location }, GAS );
}

export function EndEvent( id ) {
  return window.contract.endEvent( { id: id }, GAS );
}


export function getEvents() {
  return window.contract.getEvents();
}

export async function Register({ id, price}) {
  await window.contract.Register({ id: id }, GAS, price);
}

export async function RegisterAnotheruser({ id, user, price}) {
  await window.contract.RegisterAnotherUser({ id: id, user: user }, GAS, price);
}
