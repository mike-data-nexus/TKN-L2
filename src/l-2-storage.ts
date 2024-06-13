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
  if (key == "nonEVMAddress") tokenAddress.nonEVMAddress = event.params.value;
  if (key == "coinTypeID") tokenAddress.coinTypeID = event.params.value;
  if (key == "tokenID") tokenAddress.tokenId = event.params.value;
  if (key == "address") tokenAddress.address = event.params.value;
  if (key == "chainID") {
    tokenAddress.chainID = event.params.value;
    GetOrCreateChain(event.params.value);
  }
  if (key == "chainVersion") tokenAddress.chainVersion = event.params.value;

  tokenAddress.save();
}

export function handleTokenDataChanged(event: TokenDataChanged): void {
  let token = GetOrCreateToken(event.params.tokenId, event.block);

  let key = event.params.key.toString();
  if (key == "github") token.github = event.params.value;
  if (key == "version") token.version = event.params.value;
  if (key == "url") token.url = event.params.value;
  if (key == "description") token.description = event.params.value;
  if (key == "twitter") token.twitter = event.params.value;
  if (key == "github") token.github = event.params.value;
  if (key == "discord") token.discord = event.params.value;
  if (key == "avatar") token.avatar = event.params.value;
  if (key == "name") token.name = event.params.value;
  if (key == "symbol") token.symbol = event.params.value;
  if (key == "decimals") token.decimals = event.params.value;
  if (key == "globalNamespace") token.globalNamespace = event.params.value;
  if (key == "tokenSupply") token.tokenSupply = event.params.value;
  if (key == "circulatingSupply") token.circulatingSupply = event.params.value;
  if (key == "forum") token.forum = event.params.value;
  if (key == "governance") token.governance = event.params.value;
  if (key == "snapshot") token.snapshot = event.params.value;
  if (key == "abi") token.abi = event.params.value;
  if (key == "git") token.git = event.params.value;
  if (key == "farcaster") token.farcaster = event.params.value;
  if (key == "farcasterChannel") token.farcasterChannel = event.params.value;
  if (key == "governanceContract")
    token.governanceContract = event.params.value;
  if (key == "notice") token.notice = event.params.value;
  if (key == "dweb") token.git = event.params.value;
  if (key == "isChainWithChainID")
    token.isChainWithChainID = event.params.value;
  if (key == "isChainWithCoinType")
    token.isChainWithCoinType = event.params.value;

  token.timestamp = event.block.timestamp;

  token.save();
}

export function handleListDataChanged(event: ListDataChanged): void {
  let list = GetOrCreateList(event.params.listId);

  let key = event.params.key.toString();
  if (key == "description") list.description = event.params.value;
  if (key == "name") list.name = event.params.value;
  if (key == "owner") list.owner = event.params.value;
  if (key == "listOwnership") list.listOwnership._id = event.params.value;
  if (key == "listMembership") list.listMembership._id = event.params.value;

  list.save();
}

export function handleUserDataChanged(event: UserDataChanged): void {
  let user = GetOrCreateUser(event.params.userId);

  let key = event.params.key.toString();
  if (key == "name") user.name = event.params.value;
  if (key == "address") user.address = event.params.value;
  if (key == "email") user.email = event.params.value;
  if (key == "discord") user.discord = event.params.value;
  if (key == "twitter") user.twitter = event.params.value;
  if (key == "telegram") user.telegram = event.params.value;
  if (key == "github") user.github = event.params.value;
  if (key == "email") user.email = event.params.value;
  if (key == "listOwnership") user.listOwnership._id = event.params.value;
  if (key == "listMembership") user.validation._id = event.params.value;

  user.save();
}

export function handleValidationDataChanged(
  event: ValidationDataChanged
): void {
  let validation = GetOrCreateValidation(event.params.validationId);

  let key = event.params.key.toString();
  if (key == "datakey") validation.datakey = event.params.value;
  if (key == "assertion") validation.assertion = event.params.value;
  if (key == "data") validation.data = event.params.value;
  if (key == "farcasterFID") validation.farcasterFID = event.params.value;
  if (key == "farcasterReputationScoreV1")
    validation.farcasterReputationScoreV1 = event.params.value;
  if (key == "farcasterCustodyAddress")
    validation.farcasterCustodyAddress = event.params.value;
  if (key == "farcasterVerifiedAddress")
    validation.farcasterVerifiedAddress = event.params.value;
  if (key == "rewardTransactionHash")
    validation.rewardTransactionHash = event.params.value;

  validation.save();
}

export function handleListMembershipChanged(
  event: ListMembershipChanged
): void {
  let listMembership = ListMembership.load(
    event.params.listMembershipId.toString()
  );
  if (!listMembership)
    listMembership = new ListMembership(
      event.params.listMembershipId.toString()
    );

  listMembership.save();
}

export function handleListOwnershipChanged(event: ListOwnershipChanged): void {
  let listOwnership = ListOwnership.load(
    event.params.listOwnershipId.toString()
  );
  if (!listOwnership)
    listOwnership = new ListOwnership(event.params.listOwnershipId.toString());

  listOwnership.save();
}
