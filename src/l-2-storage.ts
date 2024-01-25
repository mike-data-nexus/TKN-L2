import { Address, ethereum } from "@graphprotocol/graph-ts";
import {
  GraphAddressChanged,
  GraphTokenChanged,
} from "../generated/L2Storage/L2Storage";
import { GetOrCreateToken } from "./utils";
import { Token, TokenAddress } from "../generated/schema";

export function handleGraphAddressChanged(event: GraphAddressChanged): void {
  let tokenAddress = TokenAddress.load(event.params.tokenId.toString());

  if (!tokenAddress) {
    tokenAddress = new TokenAddress(event.params.tokenId.toString());

    tokenAddress.tokenId = event.params.tokenId.toHexString();
  }

  if (event.params.key == "chainID") tokenAddress.chainID = event.params.value;
  if (event.params.key == "address") tokenAddress.address = event.params.value;
  if (event.params.key == "chainVersion")
    tokenAddress.chainVersion = event.params.value;

  tokenAddress.save();
}

export function handleGraphTokenChanged(event: GraphTokenChanged): void {
  let token = GetOrCreateToken(event.params.tokenId, event.block);

  if (event.params.key == "github") token.github = event.params.value;
  if (event.params.key == "version") token.version = event.params.value;
  if (event.params.key == "url") token.url = event.params.value;
  if (event.params.key == "description") token.description = event.params.value;
  if (event.params.key == "twitter") token.twitter = event.params.value;
  if (event.params.key == "github") token.github = event.params.value;
  if (event.params.key == "discord") token.discord = event.params.value;
  if (event.params.key == "avatar") token.avatar = event.params.value;
  if (event.params.key == "name") token.name = event.params.value;
  if (event.params.key == "symbol") token.symbol = event.params.value;

  token.save();
}
