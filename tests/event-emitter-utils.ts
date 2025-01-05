import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Add,
  Borrow,
  ClaimFees,
  Close,
  Deposit,
  Liquidation,
  PoolCreated,
  PoolUpdated,
  Remove,
  Repay,
  Swap,
  Withdraw
} from "../generated/EventEmitter/EventEmitter"

export function createAddEvent(
  adder: Address,
  baseToken: Address,
  memeToken: Address,
  to: Address,
  baseAmount: BigInt,
  memeAmount: BigInt
): Add {
  let addEvent = changetype<Add>(newMockEvent())

  addEvent.parameters = new Array()

  addEvent.parameters.push(
    new ethereum.EventParam("adder", ethereum.Value.fromAddress(adder))
  )
  addEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  addEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  addEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  addEvent.parameters.push(
    new ethereum.EventParam(
      "baseAmount",
      ethereum.Value.fromUnsignedBigInt(baseAmount)
    )
  )
  addEvent.parameters.push(
    new ethereum.EventParam(
      "memeAmount",
      ethereum.Value.fromUnsignedBigInt(memeAmount)
    )
  )

  return addEvent
}

export function createBorrowEvent(
  borrower: Address,
  baseToken: Address,
  memeToken: Address,
  positionId: BigInt,
  tokenIndex: i32,
  borrowAmount: BigInt,
  borrowRate: BigInt,
  baseCollateral: BigInt,
  baseDebtScaled: BigInt,
  memeCollateral: BigInt,
  memeDebtScaled: BigInt
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIndex",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndex))
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowRate",
      ethereum.Value.fromUnsignedBigInt(borrowRate)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "baseCollateral",
      ethereum.Value.fromUnsignedBigInt(baseCollateral)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "baseDebtScaled",
      ethereum.Value.fromUnsignedBigInt(baseDebtScaled)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "memeCollateral",
      ethereum.Value.fromUnsignedBigInt(memeCollateral)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "memeDebtScaled",
      ethereum.Value.fromUnsignedBigInt(memeDebtScaled)
    )
  )

  return borrowEvent
}

export function createClaimFeesEvent(
  pool: Address,
  scaledUnclaimedFee: BigInt,
  liquidityIndex: BigInt,
  unclaimedFee: BigInt
): ClaimFees {
  let claimFeesEvent = changetype<ClaimFees>(newMockEvent())

  claimFeesEvent.parameters = new Array()

  claimFeesEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  claimFeesEvent.parameters.push(
    new ethereum.EventParam(
      "scaledUnclaimedFee",
      ethereum.Value.fromUnsignedBigInt(scaledUnclaimedFee)
    )
  )
  claimFeesEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityIndex",
      ethereum.Value.fromUnsignedBigInt(liquidityIndex)
    )
  )
  claimFeesEvent.parameters.push(
    new ethereum.EventParam(
      "unclaimedFee",
      ethereum.Value.fromUnsignedBigInt(unclaimedFee)
    )
  )

  return claimFeesEvent
}

export function createCloseEvent(account: Address, positionId: BigInt): Close {
  let closeEvent = changetype<Close>(newMockEvent())

  closeEvent.parameters = new Array()

  closeEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )

  return closeEvent
}

export function createDepositEvent(
  depositor: Address,
  baseToken: Address,
  memeToken: Address,
  positionId: BigInt,
  depositAmount: BigInt,
  baseCollateral: BigInt,
  baseDebtScaled: BigInt,
  memeCollateral: BigInt,
  memeDebtScaled: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "depositAmount",
      ethereum.Value.fromUnsignedBigInt(depositAmount)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "baseCollateral",
      ethereum.Value.fromUnsignedBigInt(baseCollateral)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "baseDebtScaled",
      ethereum.Value.fromUnsignedBigInt(baseDebtScaled)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "memeCollateral",
      ethereum.Value.fromUnsignedBigInt(memeCollateral)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "memeDebtScaled",
      ethereum.Value.fromUnsignedBigInt(memeDebtScaled)
    )
  )

  return depositEvent
}

export function createLiquidationEvent(
  liquidator: Address,
  account: Address,
  positionId: BigInt,
  marginLevel: BigInt,
  marginLevelLiquidationThreshold: BigInt,
  totalCollateralUsd: BigInt,
  totalDebtUsd: BigInt,
  memePrice: BigInt
): Liquidation {
  let liquidationEvent = changetype<Liquidation>(newMockEvent())

  liquidationEvent.parameters = new Array()

  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "marginLevel",
      ethereum.Value.fromUnsignedBigInt(marginLevel)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "marginLevelLiquidationThreshold",
      ethereum.Value.fromUnsignedBigInt(marginLevelLiquidationThreshold)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "totalCollateralUsd",
      ethereum.Value.fromUnsignedBigInt(totalCollateralUsd)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "totalDebtUsd",
      ethereum.Value.fromUnsignedBigInt(totalDebtUsd)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "memePrice",
      ethereum.Value.fromUnsignedBigInt(memePrice)
    )
  )

  return liquidationEvent
}

export function createPoolCreatedEvent(
  baseToken: Address,
  memeToken: Address,
  source: Address,
  createdTimestamp: BigInt,
  baseDecimals: BigInt,
  memeDecimals: BigInt
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("source", ethereum.Value.fromAddress(source))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdTimestamp",
      ethereum.Value.fromUnsignedBigInt(createdTimestamp)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseDecimals",
      ethereum.Value.fromUnsignedBigInt(baseDecimals)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "memeDecimals",
      ethereum.Value.fromUnsignedBigInt(memeDecimals)
    )
  )

  return poolCreatedEvent
}

export function createPoolUpdatedEvent(
  pool: Address,
  liquidityRate: BigInt,
  borrowRate: BigInt,
  liquidityIndex: BigInt,
  borrowIndex: BigInt
): PoolUpdated {
  let poolUpdatedEvent = changetype<PoolUpdated>(newMockEvent())

  poolUpdatedEvent.parameters = new Array()

  poolUpdatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  poolUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityRate",
      ethereum.Value.fromUnsignedBigInt(liquidityRate)
    )
  )
  poolUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowRate",
      ethereum.Value.fromUnsignedBigInt(borrowRate)
    )
  )
  poolUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityIndex",
      ethereum.Value.fromUnsignedBigInt(liquidityIndex)
    )
  )
  poolUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )

  return poolUpdatedEvent
}

export function createRemoveEvent(
  remover: Address,
  baseToken: Address,
  memeToken: Address,
  liquidity: BigInt,
  to: Address,
  baseAmount: BigInt,
  memeAmount: BigInt
): Remove {
  let removeEvent = changetype<Remove>(newMockEvent())

  removeEvent.parameters = new Array()

  removeEvent.parameters.push(
    new ethereum.EventParam("remover", ethereum.Value.fromAddress(remover))
  )
  removeEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  removeEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  removeEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  removeEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  removeEvent.parameters.push(
    new ethereum.EventParam(
      "baseAmount",
      ethereum.Value.fromUnsignedBigInt(baseAmount)
    )
  )
  removeEvent.parameters.push(
    new ethereum.EventParam(
      "memeAmount",
      ethereum.Value.fromUnsignedBigInt(memeAmount)
    )
  )

  return removeEvent
}

export function createRepayEvent(
  repayer: Address,
  baseToken: Address,
  memeToken: Address,
  positionId: BigInt,
  tokenIndex: i32,
  repayAmount: BigInt,
  baseCollateral: BigInt,
  baseDebtScaled: BigInt,
  memeCollateral: BigInt,
  memeDebtScaled: BigInt
): Repay {
  let repayEvent = changetype<Repay>(newMockEvent())

  repayEvent.parameters = new Array()

  repayEvent.parameters.push(
    new ethereum.EventParam("repayer", ethereum.Value.fromAddress(repayer))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIndex",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndex))
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "baseCollateral",
      ethereum.Value.fromUnsignedBigInt(baseCollateral)
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "baseDebtScaled",
      ethereum.Value.fromUnsignedBigInt(baseDebtScaled)
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "memeCollateral",
      ethereum.Value.fromUnsignedBigInt(memeCollateral)
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "memeDebtScaled",
      ethereum.Value.fromUnsignedBigInt(memeDebtScaled)
    )
  )

  return repayEvent
}

export function createSwapEvent(
  account: Address,
  tokenIn: Address,
  tokenOut: Address,
  positionId: BigInt,
  amountIn: BigInt,
  amountOut: BigInt,
  fee: BigInt,
  baseCollateral: BigInt,
  baseDebtScaled: BigInt,
  memeCollateral: BigInt,
  memeDebtScaled: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "baseCollateral",
      ethereum.Value.fromUnsignedBigInt(baseCollateral)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "baseDebtScaled",
      ethereum.Value.fromUnsignedBigInt(baseDebtScaled)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "memeCollateral",
      ethereum.Value.fromUnsignedBigInt(memeCollateral)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "memeDebtScaled",
      ethereum.Value.fromUnsignedBigInt(memeDebtScaled)
    )
  )

  return swapEvent
}

export function createWithdrawEvent(
  withdrawer: Address,
  baseToken: Address,
  memeToken: Address,
  positionId: BigInt,
  withdrawAmount: BigInt,
  to: Address,
  baseCollateral: BigInt,
  baseDebtScaled: BigInt,
  memeCollateral: BigInt,
  memeDebtScaled: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawer",
      ethereum.Value.fromAddress(withdrawer)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("memeToken", ethereum.Value.fromAddress(memeToken))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAmount",
      ethereum.Value.fromUnsignedBigInt(withdrawAmount)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "baseCollateral",
      ethereum.Value.fromUnsignedBigInt(baseCollateral)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "baseDebtScaled",
      ethereum.Value.fromUnsignedBigInt(baseDebtScaled)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "memeCollateral",
      ethereum.Value.fromUnsignedBigInt(memeCollateral)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "memeDebtScaled",
      ethereum.Value.fromUnsignedBigInt(memeDebtScaled)
    )
  )

  return withdrawEvent
}
