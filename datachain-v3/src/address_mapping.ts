import { BigInt } from "@graphprotocol/graph-ts"
import { AddressDataChanged, AddressCreated } from "../generated/AddressStorage/AddressStorage"
import { Address, Token, Chain } from "../generated/schema"

export function handleAddressCreated(event: AddressCreated): void {
    let address = new Address(event.params.addressID.toString())
    
    // Link to Token
    let token = Token.load(event.params.tokenID.toString())
    if (token) {
        address.tokenID = token.id
    }

    // Link to Chain
    let chain = Chain.load(event.params.chainID)
    if (!chain) {
        chain = new Chain(event.params.chainID)
        chain.timestamp = event.block.timestamp
        chain.save()
    }
    address.chainID = chain.id

    // Set initial values
    address.addressID = event.params.addressID
    address.tokenAddress = event.params.tokenAddress
    address.nonEVMAddress = event.params.nonEVMAddress
    address.nonce = BigInt.fromI32(0)
    address.createdAt = event.block.timestamp
    address.updatedAt = event.block.timestamp
    address.deprecated = false
    address.save()
}

export function handleAddressDataChanged(event: AddressDataChanged): void {
    let address = Address.load(event.params.addressID.toString())
    if (!address) {
        address = new Address(event.params.addressID.toString())
        address.nonce = BigInt.fromI32(0)
        address.createdAt = event.block.timestamp
        address.deprecated = false
    }
    
    address.updatedAt = event.block.timestamp
    address.nonce = event.params.nonce

    // Update fields based on the key
    if (event.params.key == "address") {
        address.tokenAddress = event.params.value
    } else if (event.params.key == "nonEVMAddress") {
        address.nonEVMAddress = event.params.value
    } else if (event.params.key == "tokenID") {
        let token = Token.load(event.params.value)
        if (token) {
            address.tokenID = token.id
        }
    } else if (event.params.key == "chainID") {
        let chain = Chain.load(event.params.value)
        if (!chain) {
            chain = new Chain(event.params.value)
            chain.timestamp = event.block.timestamp
            chain.save()
        }
        address.chainID = chain.id
    } else if (event.params.key == "coinTypeID") {
        address.coinTypeID = event.params.value
    } else if (event.params.key == "chainVersion") {
        address.chainVersion = event.params.value
    } else if (event.params.key == "deprecated") {
        address.deprecated = event.params.value == "true"
    }

    address.save()
}
