import { BigInt } from "@graphprotocol/graph-ts"
import { UserDataChanged } from "../generated/UserStorage/UserStorage"
import { User, KeyValue } from "../generated/schema"

export function handleUserDataChanged(event: UserDataChanged): void {
    let user = User.load(event.params.userId.toString())
    if (!user) {
        user = new User(event.params.userId.toString())
    }

    user.nonce = event.params.nonce

    let key = event.params.key
    let value = event.params.value

    if (key == "name") user.name = value
    if (key == "address") user.address = value
    if (key == "email") user.email = value
    if (key == "discord") user.discord = value
    if (key == "twitter") user.twitter = value
    if (key == "telegram") user.telegram = value
    if (key == "github") user.github = value

    user.save()

    // Create a KeyValue entity for this data change
    let keyValueId = user.id + "-" + key
    let keyValue = new KeyValue(keyValueId)
    keyValue.key = key
    keyValue.value = value
    keyValue.user = user.id
    keyValue.save()
}
