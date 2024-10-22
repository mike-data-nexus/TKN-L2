import { BigInt } from "@graphprotocol/graph-ts"
import { ValidationDataChanged } from "../generated/ValidationStorage/ValidationStorage"
import { Validation, KeyValue } from "../generated/schema"

export function handleValidationDataChanged(event: ValidationDataChanged): void {
    let validation = Validation.load(event.params.validationId.toString())
    if (!validation) {
        validation = new Validation(event.params.validationId.toString())
    }

    validation.nonce = event.params.nonce

    let key = event.params.key
    let value = event.params.value

    if (key == "datakey") validation.datakey = value
    if (key == "assertion") validation.assertion = value
    if (key == "data") validation.data = value
    if (key == "farcasterFID") validation.farcasterFID = value
    if (key == "farcasterReputationScoreV1") validation.farcasterReputationScoreV1 = value
    if (key == "farcasterCustodyAddress") validation.farcasterCustodyAddress = value
    if (key == "farcasterVerifiedAddress") validation.farcasterVerifiedAddress = value
    if (key == "rewardTransactionHash") validation.rewardTransactionHash = value

    validation.save()

    // Create a KeyValue entity for this data change
    let keyValueId = validation.id + "-" + key
    let keyValue = new KeyValue(keyValueId)
    keyValue.key = key
    keyValue.value = value
    keyValue.validation = validation.id
    keyValue.save()
}
