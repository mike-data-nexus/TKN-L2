import { BigInt } from "@graphprotocol/graph-ts"
import {
    ListCreated,
    ListUpdated,
    SublistCreated,
    SublistUpdated
} from "../generated/ListStorage/ListStorage"
import { List, Sublist, KeyValue } from "../generated/schema"

export function handleListCreated(event: ListCreated): void {
    let list = new List(event.params.listId.toString())
    list.handle = event.params.handle
    list.name = event.params.name
    list.hash = event.params.hash
    list.creator = event.params.creator
    list.nonce = BigInt.fromI32(0)
    list.isPrimaryListForToken = false // Default value
    list.save()
}

export function handleListUpdated(event: ListUpdated): void {
    let list = List.load(event.params.listId.toString())
    if (list) {
        list.nonce = event.params.nonce

        let key = event.params.key
        let value = event.params.value

        if (key == "handle") {
            list.handle = value
        } else if (key == "name") {
            list.name = value
        } else if (key == "hash") {
            list.hash = value
        } else if (key == "description") {
            list.description = value
        } else if (key == "isPrimaryListForToken") {
            list.isPrimaryListForToken = value.toLowerCase() == "true"
        } else if (key == "creator") {
            list.owner = value
        }

        list.save()

        // Create a KeyValue entity for this data change
        let keyValueId = list.id + "-" + key
        let keyValue = new KeyValue(keyValueId)
        keyValue.key = key
        keyValue.value = value
        keyValue.list = list.id
        keyValue.save()
    }
}

export function handleSublistCreated(event: SublistCreated): void {
    let sublist = new Sublist(event.params.sublistId.toString())
    sublist.name = event.params.name
    sublist.listHash = event.params.listHash
    sublist.owner = event.params.owner
    sublist.nonce = BigInt.fromI32(0)
    sublist.save()
}

export function handleSublistUpdated(event: SublistUpdated): void {
    let sublist = Sublist.load(event.params.sublistId.toString())
    if (sublist) {
        sublist.nonce = event.params.nonce

        let key = event.params.key
        let value = event.params.value

        if (key == "name") {
            sublist.name = value
        } else if (key == "description") {
            sublist.description = value
        } else if (key == "listHash") {
            sublist.description = value
        } else if (key == "owner") {
            sublist.description = value
        } else if (key == "description") {
            sublist.description = value
        }

        sublist.save()
    }
}
