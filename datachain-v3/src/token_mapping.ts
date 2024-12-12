import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
    TokenDataChanged,
    UpdateProposed,
    UpdateApproved
} from "../generated/TokenStorage/TokenStorage"
import { Token, ProposedUpdate, KeyValue } from "../generated/schema"

export function handleTokenDataChanged(event: TokenDataChanged): void {
    let token = Token.load(event.params.tokenID.toString())
    if (!token) {
        token = new Token(event.params.tokenID.toString())
        token.nonce = BigInt.fromI32(0)
        token.timestamp = event.block.timestamp
    }

    token.nonce = event.params.nonce

    let key = event.params.key
    let value = event.params.value

    // Update core fields
    if (key == "name") token.name = value
    else if (key == "symbol") token.symbol = value
    else if (key == "decimals") token.decimals = value
    else if (key == "version") token.version = value
    else if (key == "url") token.url = value
    else if (key == "description") token.description = value
    else if (key == "twitter") token.twitter = value
    else if (key == "github") token.github = value
    else if (key == "discord") token.discord = value
    else if (key == "avatar") token.avatar = value
    else if (key == "globalNamespace") token.globalNamespace = value
    else if (key == "tokenSupply") token.tokenSupply = value
    else if (key == "circulatingSupply") token.circulatingSupply = value
    else if (key == "forum") token.forum = value
    else if (key == "governance") token.governance = value
    else if (key == "snapshot") token.snapshot = value
    else if (key == "abi") token.abi = value
    else if (key == "git") token.git = value
    else if (key == "farcaster") token.farcaster = value
    else if (key == "farcasterChannel") token.farcasterChannel = value
    else if (key == "governanceContract") token.governanceContract = value
    else if (key == "notice") token.notice = value
    else if (key == "dweb") token.dweb = value
    else if (key == "isChainWithChainID") token.isChainWithChainID = value
    else if (key == "isChainWithCoinType") token.isChainWithCoinType = value

    token.save()

    // Create or update KeyValue entity
    let keyValueId = token.id.toString() + "-" + key
    let keyValue = KeyValue.load(keyValueId)
    if (!keyValue) {
        keyValue = new KeyValue(keyValueId)
    }
    keyValue.key = key
    keyValue.value = value
    keyValue.token = token.id
    keyValue.save()
}

export function handleUpdateProposed(event: UpdateProposed): void {
    let proposedUpdateId = event.params.tokenID.toString() + "-" + event.params.updateId.toString()
    let proposedUpdate = ProposedUpdate.load(proposedUpdateId)

    if (!proposedUpdate) {
        proposedUpdate = new ProposedUpdate(proposedUpdateId)
        proposedUpdate.token = event.params.tokenID.toString()
        proposedUpdate.updateId = event.params.updateId
        proposedUpdate.approvalScore = BigInt.fromI32(0)
        proposedUpdate.isApplied = false
    }

    proposedUpdate.save()

    // Create KeyValue for the proposed update
    let keyValueId = proposedUpdateId + "-" + event.params.key + "-" + event.params.index.toString()
    let keyValue = new KeyValue(keyValueId)
    keyValue.key = event.params.key
    keyValue.value = event.params.value
    keyValue.proposedUpdate = proposedUpdateId
    keyValue.save()
}

export function handleUpdateApproved(event: UpdateApproved): void {
    let proposedUpdateId = event.params.tokenID.toString() + "-" + event.params.updateId.toString()
    let proposedUpdate = ProposedUpdate.load(proposedUpdateId)

    if (proposedUpdate) {
        proposedUpdate.isApplied = true
        proposedUpdate.save()
    }
}
