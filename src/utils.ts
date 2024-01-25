// Import types and APIs from graph-ts
import { BigInt, Address, ethereum } from "@graphprotocol/graph-ts";
import { Token, TokenAddress } from "../generated/schema";

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

//type TokenAddress @entity {
//   id: ID!
//   tokenId: Token!
//   address: String!
//   chainID: String
//   chainVersion: String
// }
