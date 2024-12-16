import { BigInt } from "@graphprotocol/graph-ts"
import { AddressDataChanged, AddressCreated } from "../generated/AddressStorage/AddressStorage"
import { Address, KeyValue } from "../generated/schema"

export function handleAddressDataChanged(event: AddressDataChanged): void {
    let address = Address.load(event.params.addressID.toString())
    if (address == null) {
        address = new Address(event.params.addressID.toString())
        address.nonce = BigInt.fromI32(0)
        address.createdAt = event.block.timestamp
    }
    address.updatedAt = event.block.timestamp

    address.nonce = event.params.nonce

    let keyValueId = address.id + "-" + event.params.key
    let keyValue = new KeyValue(keyValueId)
    keyValue.key = event.params.key
    keyValue.value = event.params.value
    keyValue.address = address.id
    keyValue.timestamp = event.block.timestamp
    keyValue.save()

    // Update specific fields if they match
    if (event.params.key == "tokenID") address.tokenID = event.params.value.toString()
    if (event.params.key == "chainID") address.chainID = event.params.value.toString()
    if (event.params.key == "tokenAddress") address.tokenAddress = event.params.value
    if (event.params.key == "nonEVMAddress") address.nonEVMAddress = event.params.value
    if (event.params.key == "coinTypeID") address.coinTypeID = event.params.value
    if (event.params.key == "chainVersion") address.chainVersion = event.params.value
    if (event.params.key == "deprecated") address.deprecated = event.params.value == "true" ? true : false
    if (event.params.key == "nonce") {
        let nonceValue = BigInt.fromString(event.params.value)
        address.nonce = nonceValue
    }

    address.save()
}

export function handleAddressCreated(event: AddressCreated): void {
    let address = new Address(event.params.addressID.toString())
    address.tokenID = event.params.tokenID.toString()
    address.chainID = event.params.chainID
    address.tokenAddress = event.params.tokenAddress
    address.nonEVMAddress = event.params.nonEVMAddress
    address.nonce = BigInt.fromI32(0)
    address.createdAt = event.block.timestamp
    address.updatedAt = event.block.timestamp
    address.save()
}
