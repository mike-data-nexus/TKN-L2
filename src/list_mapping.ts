import { BigInt } from "@graphprotocol/graph-ts"
import {
    ListCreated,
    ListUpdated,
    SublistCreated,
    SublistUpdated
  } from "../generated/ListStorage/ListStorage"
  import { List, Sublist, SublistData } from "../generated/schema"
  
  export function handleListCreated(event: ListCreated): void {
    let list = new List(event.params.listID.toString())
    list.handle = event.params.handle
    list.name = event.params.name
    list.hash = event.params.hash
    list.creator = event.params.creator
    list.nonce = BigInt.fromI32(0)
    list.isPrimaryListForToken = false
    list.autopublish = false
    list.tokenIDs = []
    list.save()
  }
  
  export function handleListUpdated(event: ListUpdated): void {
    let list = List.load(event.params.listID.toString())
    if (!list) return
  
    // Update list fields based on key
    if (event.params.key == "description") list.description = event.params.value
    if (event.params.key == "isPrimaryListForToken") list.isPrimaryListForToken = event.params.value == "true"
    list.nonce = event.params.nonce
    list.save()
  }
  
  export function handleSublistCreated(event: SublistCreated): void {
    let sublist = new Sublist(event.params.sublistID.toString())
    sublist.name = event.params.name
    sublist.listHash = event.params.listHash
    sublist.owner = event.params.owner
    sublist.nonce = BigInt.fromI32(0)
    sublist.save()
  }
  
  export function handleSublistUpdated(event: SublistUpdated): void {
    let sublist = Sublist.load(event.params.sublistID.toString())
    if (!sublist) return
  
    let sublistData = new SublistData(
      event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
    )
    sublistData.sublist = sublist.id
    sublistData.key = event.params.key
    sublistData.value = event.params.value
    sublistData.nonce = event.params.nonce
    sublistData.timestamp = event.block.timestamp
    sublistData.save()
  
    // Update sublist fields based on key
    if (event.params.key == "description") sublist.description = event.params.value
    sublist.nonce = event.params.nonce
    sublist.save()
  }