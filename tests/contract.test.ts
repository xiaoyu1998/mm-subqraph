import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Add } from "../generated/schema"
import { Add as AddEvent } from "../generated/Contract/Contract"
import { handleAdd } from "../src/contract"
import { createAddEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let adder = Address.fromString("0x0000000000000000000000000000000000000001")
    let baseToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let memeToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let baseAmount = BigInt.fromI32(234)
    let memeAmount = BigInt.fromI32(234)
    let newAddEvent = createAddEvent(
      adder,
      baseToken,
      memeToken,
      to,
      baseAmount,
      memeAmount
    )
    handleAdd(newAddEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Add created and stored", () => {
    assert.entityCount("Add", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Add",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "adder",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Add",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "baseToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Add",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "memeToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Add",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Add",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "baseAmount",
      "234"
    )
    assert.fieldEquals(
      "Add",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "memeAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
