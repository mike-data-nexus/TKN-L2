// Import types and APIs from graph-ts
import { BigInt, Address, ethereum } from "@graphprotocol/graph-ts";
import { Token, TokenAddress, Chain } from "../generated/schema";

export function GetOrCreateToken(
  tokenId: BigInt,
  block: ethereum.Block
): Token {
  let token = Token.load(tokenId.toString());

  if (!token) token = new Token(tokenId.toString());

  token.timestamp = block.timestamp;

  token.save();

  return token as Token;
}

export function GetOrCreateChain(
  chainId: string,
  block: ethereum.Block
): Chain {
  let chain = Chain.load(chainId);
  if (!chain) chain = new Chain(chainId);

  chain.timestamp = block.timestamp;

  chain.save();

  return chain as Chain;
}

//type TokenAddress @entity {
//   id: ID!
//   tokenId: Token!
//   address: String!
//   chainID: String
//   chainVersion: String
// }
