import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  DataChanged,
  GraphAddressBytesChanged,
  GraphAddressChanged,
  GraphTokenBytesChanged,
  GraphTokenChanged,
  OwnershipTransferred
} from "../generated/L2Storage/L2Storage"

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

export function createDataChangedEvent(
  node: string,
  key: string,
  nonce: BigInt
): DataChanged {
  let dataChangedEvent = changetype<DataChanged>(newMockEvent())

  dataChangedEvent.parameters = new Array()

  dataChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromString(node))
  )
  dataChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  dataChangedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return dataChangedEvent
}

export function createGraphAddressBytesChangedEvent(
  tokenId: BigInt,
  key: string,
  value: Bytes
): GraphAddressBytesChanged {
  let graphAddressBytesChangedEvent = changetype<GraphAddressBytesChanged>(
    newMockEvent()
  )

  graphAddressBytesChangedEvent.parameters = new Array()

  graphAddressBytesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  graphAddressBytesChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  graphAddressBytesChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBytes(value))
  )

  return graphAddressBytesChangedEvent
}

export function createGraphAddressChangedEvent(
  tokenId: BigInt,
  key: string,
  value: string
): GraphAddressChanged {
  let graphAddressChangedEvent = changetype<GraphAddressChanged>(newMockEvent())

  graphAddressChangedEvent.parameters = new Array()

  graphAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  graphAddressChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  graphAddressChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )

  return graphAddressChangedEvent
}

export function createGraphTokenBytesChangedEvent(
  tokenId: BigInt,
  key: string,
  value: Bytes
): GraphTokenBytesChanged {
  let graphTokenBytesChangedEvent = changetype<GraphTokenBytesChanged>(
    newMockEvent()
  )

  graphTokenBytesChangedEvent.parameters = new Array()

  graphTokenBytesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  graphTokenBytesChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  graphTokenBytesChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBytes(value))
  )

  return graphTokenBytesChangedEvent
}

export function createGraphTokenChangedEvent(
  tokenId: BigInt,
  key: string,
  value: string
): GraphTokenChanged {
  let graphTokenChangedEvent = changetype<GraphTokenChanged>(newMockEvent())

  graphTokenChangedEvent.parameters = new Array()

  graphTokenChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  graphTokenChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  graphTokenChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )

  return graphTokenChangedEvent
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
