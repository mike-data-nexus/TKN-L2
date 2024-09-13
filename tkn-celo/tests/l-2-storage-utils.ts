import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AddressDataChanged,
  AdminChanged,
  ListDataChanged,
  ListMembershipChanged,
  ListOwnershipChanged,
  OwnershipTransferred,
  TokenDataChanged,
  UserDataChanged,
  ValidationDataChanged
} from "../generated/L2Storage/L2Storage"

export function createAddressDataChangedEvent(
  addressId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): AddressDataChanged {
  let addressDataChangedEvent = changetype<AddressDataChanged>(newMockEvent())

  addressDataChangedEvent.parameters = new Array()

  addressDataChangedEvent.parameters.push(
    new ethereum.EventParam(
      "addressId",
      ethereum.Value.fromUnsignedBigInt(addressId)
    )
  )
  addressDataChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  addressDataChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  addressDataChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return addressDataChangedEvent
}

export function createAdminChangedEvent(
  op: Address,
  admin: boolean
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam("op", ethereum.Value.fromAddress(op))
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromBoolean(admin))
  )

  return adminChangedEvent
}

export function createListDataChangedEvent(
  listId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): ListDataChanged {
  let listDataChangedEvent = changetype<ListDataChanged>(newMockEvent())

  listDataChangedEvent.parameters = new Array()

  listDataChangedEvent.parameters.push(
    new ethereum.EventParam("listId", ethereum.Value.fromUnsignedBigInt(listId))
  )
  listDataChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  listDataChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  listDataChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return listDataChangedEvent
}

export function createListMembershipChangedEvent(
  listMembershipId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): ListMembershipChanged {
  let listMembershipChangedEvent = changetype<ListMembershipChanged>(
    newMockEvent()
  )

  listMembershipChangedEvent.parameters = new Array()

  listMembershipChangedEvent.parameters.push(
    new ethereum.EventParam(
      "listMembershipId",
      ethereum.Value.fromUnsignedBigInt(listMembershipId)
    )
  )
  listMembershipChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  listMembershipChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  listMembershipChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return listMembershipChangedEvent
}

export function createListOwnershipChangedEvent(
  listOwnershipId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): ListOwnershipChanged {
  let listOwnershipChangedEvent = changetype<ListOwnershipChanged>(
    newMockEvent()
  )

  listOwnershipChangedEvent.parameters = new Array()

  listOwnershipChangedEvent.parameters.push(
    new ethereum.EventParam(
      "listOwnershipId",
      ethereum.Value.fromUnsignedBigInt(listOwnershipId)
    )
  )
  listOwnershipChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  listOwnershipChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  listOwnershipChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return listOwnershipChangedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenDataChangedEvent(
  tokenId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): TokenDataChanged {
  let tokenDataChangedEvent = changetype<TokenDataChanged>(newMockEvent())

  tokenDataChangedEvent.parameters = new Array()

  tokenDataChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokenDataChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  tokenDataChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  tokenDataChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return tokenDataChangedEvent
}

export function createUserDataChangedEvent(
  userId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): UserDataChanged {
  let userDataChangedEvent = changetype<UserDataChanged>(newMockEvent())

  userDataChangedEvent.parameters = new Array()

  userDataChangedEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )
  userDataChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  userDataChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  userDataChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return userDataChangedEvent
}

export function createValidationDataChangedEvent(
  validationId: BigInt,
  key: string,
  value: string,
  nonce: BigInt
): ValidationDataChanged {
  let validationDataChangedEvent = changetype<ValidationDataChanged>(
    newMockEvent()
  )

  validationDataChangedEvent.parameters = new Array()

  validationDataChangedEvent.parameters.push(
    new ethereum.EventParam(
      "validationId",
      ethereum.Value.fromUnsignedBigInt(validationId)
    )
  )
  validationDataChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  validationDataChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  validationDataChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return validationDataChangedEvent
}
