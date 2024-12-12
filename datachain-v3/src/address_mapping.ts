import { BigInt } from "@graphprotocol/graph-ts"
import { AddressDataChanged } from "../generated/AddressStorage/AddressStorage"
import { Address, KeyValue } from "../generated/schema"

export function handleAddressDataChanged(event: AddressDataChanged): void {
    let address = Address.load(event.params.addressId.toString())
    if (address == null) {
        address = new Address(event.params.addressId.toString())
        address.nonce = BigInt.fromI32(0)
    }

    address.nonce = event.params.nonce

    let keyValueId = address.id + "-" + event.params.key
    let keyValue = new KeyValue(keyValueId)
    keyValue.key = event.params.key
    keyValue.value = event.params.value
    keyValue.save()

    // Update specific fields if they match
    if (event.params.key == "tokenID") address.tokenID = event.params.value
    if (event.params.key == "symbol") address.symbol = event.params.value
    if (event.params.key == "chainID") address.chainID = event.params.value
    if (event.params.key == "address") address.tokenAddress = event.params.value
    if (event.params.key == "nonEVMAddress") address.nonEVMAddress = event.params.value
    if (event.params.key == "coinTypeID") address.coinTypeID = event.params.value
    if (event.params.key == "chainVersion") address.chainVersion = event.params.value
    if (event.params.key == "deprecated") address.deprecated = event.params.value == "true" ? true : false

    address.save()
}
