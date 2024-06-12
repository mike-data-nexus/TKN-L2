// Import types and APIs from graph-ts
import { BigInt, Address, ethereum, log } from "@graphprotocol/graph-ts";
import {
  Token,
  TokenAddress,
  Chain,
  List,
  User,
  Validation,
} from "../generated/schema";

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

export function GetOrCreateChain(chainId: string): void {
  let chain = Chain.load(chainId);

  if (!chain) chain = new Chain(chainId);

  chain.save();
}

export function GetOrCreateList(listId: BigInt): List {
  let list = List.load(listId.toString());

  if (!list) list = new List(listId.toString());

  list.save();

  return list as List;
}

export function GetOrCreateUser(userId: BigInt): User {
  let user = User.load(userId.toString());

  if (!user) user = new User(userId.toString());

  user.save();

  return user as User;
}

export function GetOrCreateValidation(validationId: BigInt): Validation {
  let validation = Validation.load(validationId.toString());

  if (!validation) validation = new Validation(validationId.toString());

  validation.save();

  return validation as Validation;
}
