import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AddressDataChanged } from "../generated/schema"
import { AddressDataChanged as AddressDataChangedEvent } from "../generated/L2Storage/L2Storage"
import { handleAddressDataChanged } from "../src/l-2-storage"
import { createAddressDataChangedEvent } from "./l-2-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let addressId = BigInt.fromI32(234)
    let key = "Example string value"
    let value = "Example string value"
    let nonce = BigInt.fromI32(234)
    let newAddressDataChangedEvent = createAddressDataChangedEvent(
      addressId,
      key,
      value,
      nonce
    )
    handleAddressDataChanged(newAddressDataChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddressDataChanged created and stored", () => {
    assert.entityCount("AddressDataChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddressDataChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "addressId",
      "234"
    )
    assert.fieldEquals(
      "AddressDataChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "key",
      "Example string value"
    )
    assert.fieldEquals(
      "AddressDataChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "value",
      "Example string value"
    )
    assert.fieldEquals(
      "AddressDataChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nonce",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
