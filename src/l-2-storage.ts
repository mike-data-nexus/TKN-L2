import { Address, ethereum } from "@graphprotocol/graph-ts";
import {
  AddressDataChanged,
  TokenDataChanged,
} from "../generated/L2Storage/L2Storage";
import { GetOrCreateChain, GetOrCreateToken } from "./utils";
import { Token, TokenAddress, Chain } from "../generated/schema";

export function handleAddressDataChanged(event: AddressDataChanged): void {
  let tokenAddress = TokenAddress.load(event.params.addressId.toString());

  if (!tokenAddress) {
    tokenAddress = new TokenAddress(event.params.addressId.toString());
  }

  if (event.params.key.toString() == "nonEVMAddress")
    tokenAddress.nonEVMAddress = event.params.value;
  if (event.params.key.toString() == "coinTypeID")
    tokenAddress.coinTypeID = event.params.value;
  if (event.params.key.toString() == "tokenID")
    tokenAddress.tokenId = event.params.value;
  if (event.params.key.toString() == "address")
    tokenAddress.address = event.params.value;
  if (event.params.key.toString() == "chainID") {
    let chain = GetOrCreateChain(event.params.value, event.block);
    tokenAddress.chainID = chain.id;
  }
  if (event.params.key.toString() == "chainVersion")
    tokenAddress.chainVersion = event.params.value;

  tokenAddress.save();
}

export function handleTokenDataChanged(event: TokenDataChanged): void {
  let token = GetOrCreateToken(event.params.tokenId, event.block);

  let key = event.params.key.toString();
  if (event.params.key.toString() == "github")
    token.github = event.params.value;
  if (event.params.key.toString() == "version")
    token.version = event.params.value;
  if (event.params.key.toString() == "url") token.url = event.params.value;
  if (event.params.key.toString() == "description")
    token.description = event.params.value;
  if (event.params.key.toString() == "twitter")
    token.twitter = event.params.value;
  if (event.params.key.toString() == "github")
    token.github = event.params.value;
  if (event.params.key.toString() == "discord")
    token.discord = event.params.value;
  if (event.params.key.toString() == "avatar")
    token.avatar = event.params.value;
  if (event.params.key.toString() == "name") token.name = event.params.value;
  if (event.params.key.toString() == "symbol")
    token.symbol = event.params.value;
  if (event.params.key.toString() == "decimals")
    token.decimals = event.params.value;
  if (event.params.key.toString() == "globalNamespace")
    token.globalNamespace = event.params.value;
  if (event.params.key.toString() == "tokenSupply")
    token.tokenSupply = event.params.value;
  if (event.params.key.toString() == "circulatingSupply")
    token.circulatingSupply = event.params.value;
  if (event.params.key.toString() == "forum") token.forum = event.params.value;
  if (event.params.key.toString() == "governance")
    token.governance = event.params.value;
  if (event.params.key.toString() == "snapshot")
    token.snapshot = event.params.value;
  if (event.params.key.toString() == "abi") token.abi = event.params.value;
  if (event.params.key.toString() == "git") token.git = event.params.value;
  if (event.params.key.toString() == "farcaster")
    token.farcaster = event.params.value;
  if (event.params.key.toString() == "farcasterChannel")
    token.farcasterChannel = event.params.value;
  if (event.params.key.toString() == "governanceContract")
    token.governanceContract = event.params.value;
  if (event.params.key.toString() == "notice")
    token.notice = event.params.value;
  if (event.params.key.toString() == "dweb") token.git = event.params.value;
  if (event.params.key.toString() == "isChainWithChainID")
    token.isChainWithChainID = event.params.value;
  if (event.params.key.toString() == "isChainWithCoinType")
    token.isChainWithCoinType = event.params.value;

  token.timestamp = event.block.timestamp;

  token.save();
}
