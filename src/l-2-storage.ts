import { Address, ethereum } from "@graphprotocol/graph-ts";
import {
  AddressDataChanged,
  ListDataChanged,
  ListMembershipChanged,
  ListOwnershipChanged,
  TokenDataChanged,
  UserDataChanged,
  ValidationDataChanged,
} from "../generated/L2Storage/L2Storage";
import {
  GetOrCreateChain,
  GetOrCreateToken,
  GetOrCreateList,
  GetOrCreateUser,
  GetOrCreateValidation,
} from "./utils";
import {
  Token,
  TokenAddress,
  Chain,
  ListMembership,
  ListOwnership,
} from "../generated/schema";

export function handleAddressDataChanged(event: AddressDataChanged): void {
  let tokenAddress = TokenAddress.load(event.params.addressId.toString());

  if (!tokenAddress) {
    tokenAddress = new TokenAddress(event.params.addressId.toString());
  }
  let key = event.params.key.toString();
  if (event.params.key.toString() == "nonEVMAddress")
    tokenAddress.nonEVMAddress = event.params.value;
  if (event.params.key.toString() == "coinTypeID")
    tokenAddress.coinTypeID = event.params.value;
  if (event.params.key.toString() == "tokenID")
    tokenAddress.tokenId = event.params.value;
  if (event.params.key.toString() == "address")
    tokenAddress.address = event.params.value;
  if (event.params.key.toString() == "chainID") {
    tokenAddress.chainID = event.params.value;
    GetOrCreateChain(event.params.value);
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

export function handleListDataChanged(event: ListDataChanged): void {
  let list = GetOrCreateList(event.params.listId);

  let key = event.params.key.toString();
  if (event.params.key.toString() == "description")
    list.description = event.params.value;
  if (event.params.key.toString() == "name") list.name = event.params.value;
  if (event.params.key.toString() == "owner") list.owner = event.params.value;
  if (event.params.key.toString() == "listOwnership")
    list.listOwnership._id = event.params.value;
  if (event.params.key.toString() == "listMembership")
    list.listMembership._id = event.params.value;

  list.save();
}

export function handleUserDataChanged(event: UserDataChanged): void {
  let user = GetOrCreateUser(event.params.userId);

  let key = event.params.key.toString();
  if (event.params.key.toString() == "name") user.name = event.params.value;
  if (event.params.key.toString() == "address")
    user.address = event.params.value;
  if (event.params.key.toString() == "email") user.email = event.params.value;
  if (event.params.key.toString() == "discord")
    user.discord = event.params.value;
  if (event.params.key.toString() == "twitter")
    user.twitter = event.params.value;
  if (event.params.key.toString() == "telegram")
    user.telegram = event.params.value;
  if (event.params.key.toString() == "github") user.github = event.params.value;
  if (event.params.key.toString() == "email") user.email = event.params.value;
  if (event.params.key.toString() == "listOwnership")
    user.listOwnership._id = event.params.value;
  if (event.params.key.toString() == "listMembership")
    user.validation._id = event.params.value;

  user.save();
}

export function handleValidationDataChanged(
  event: ValidationDataChanged
): void {
  let validation = GetOrCreateValidation(event.params.validationId);

  let key = event.params.key.toString();
  if (event.params.key.toString() == "datakey")
    validation.datakey = event.params.value;
  if (event.params.key.toString() == "assertion")
    validation.assertion = event.params.value;
  if (event.params.key.toString() == "data")
    validation.data = event.params.value;
  if (event.params.key.toString() == "farcasterFID")
    validation.farcasterFID = event.params.value;
  if (event.params.key.toString() == "farcasterReputationScoreV1")
    validation.farcasterReputationScoreV1 = event.params.value;
  if (event.params.key.toString() == "farcasterCustodyAddress")
    validation.farcasterCustodyAddress = event.params.value;
  if (event.params.key.toString() == "farcasterVerifiedAddress")
    validation.farcasterVerifiedAddress = event.params.value;
  if (event.params.key.toString() == "rewardTransactionHash")
    validation.rewardTransactionHash = event.params.value;

  validation.save();
}

export function handleListMembershipChanged(
  event: ListMembershipChanged
): void {
  let listMembership = ListMembership.load(
    event.params.listMembershipId.toHexString()
  );
  if (!listMembership)
    listMembership = new ListMembership(
      event.params.listMembershipId.toHexString()
    );

  listMembership.save();
}

export function handleListOwnershipChanged(event: ListOwnershipChanged): void {
  let listOwnership = ListOwnership.load(
    event.params.listOwnershipId.toHexString()
  );
  if (!listOwnership)
    listOwnership = new ListOwnership(
      event.params.listOwnershipId.toHexString()
    );

  listOwnership.save();
}
