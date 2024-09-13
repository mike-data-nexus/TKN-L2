import {
  AddressDataChanged as AddressDataChangedEvent,
  AdminChanged as AdminChangedEvent,
  ListDataChanged as ListDataChangedEvent,
  ListMembershipChanged as ListMembershipChangedEvent,
  ListOwnershipChanged as ListOwnershipChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenDataChanged as TokenDataChangedEvent,
  UserDataChanged as UserDataChangedEvent,
  ValidationDataChanged as ValidationDataChangedEvent
} from "../generated/L2Storage/L2Storage"
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
} from "../generated/schema"

export function handleAddressDataChanged(event: AddressDataChangedEvent): void {
  let entity = new AddressDataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addressId = event.params.addressId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.op = event.params.op
  entity.admin = event.params.admin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListDataChanged(event: ListDataChangedEvent): void {
  let entity = new ListDataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.listId = event.params.listId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListMembershipChanged(
  event: ListMembershipChangedEvent
): void {
  let entity = new ListMembershipChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.listMembershipId = event.params.listMembershipId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListOwnershipChanged(
  event: ListOwnershipChangedEvent
): void {
  let entity = new ListOwnershipChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.listOwnershipId = event.params.listOwnershipId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenDataChanged(event: TokenDataChangedEvent): void {
  let entity = new TokenDataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserDataChanged(event: UserDataChangedEvent): void {
  let entity = new UserDataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidationDataChanged(
  event: ValidationDataChangedEvent
): void {
  let entity = new ValidationDataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.validationId = event.params.validationId
  entity.key = event.params.key
  entity.value = event.params.value
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
