import {
  Add as AddEvent,
  Borrow as BorrowEvent,
  ClaimFees as ClaimFeesEvent,
  Close as CloseEvent,
  Deposit as DepositEvent,
  Liquidation as LiquidationEvent,
  PoolCreated as PoolCreatedEvent,
  PoolUpdated as PoolUpdatedEvent,
  Position as PositionEvent,
  Remove as RemoveEvent,
  Repay as RepayEvent,
  Swap as SwapEvent,
  Withdraw as WithdrawEvent
} from "../generated/EventEmitter/EventEmitter"
import {
  Add,
  Borrow,
  ClaimFees,
  Close,
  Deposit,
  Liquidation,
  PoolCreated,
  PoolUpdated,
  Position,
  Remove,
  Repay,
  Swap,
  Withdraw
} from "../generated/schema"

export function handleAdd(event: AddEvent): void {
  let entity = new Add(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.adder = event.params.adder
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.to = event.params.to
  entity.baseAmount = event.params.baseAmount
  entity.memeAmount = event.params.memeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.positionId = event.params.positionId
  entity.tokenIndex = event.params.tokenIndex
  entity.borrowAmount = event.params.borrowAmount
  entity.borrowRate = event.params.borrowRate
  entity.baseCollateral = event.params.baseCollateral
  entity.baseDebtScaled = event.params.baseDebtScaled
  entity.memeCollateral = event.params.memeCollateral
  entity.memeDebtScaled = event.params.memeDebtScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimFees(event: ClaimFeesEvent): void {
  let entity = new ClaimFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
  entity.scaledUnclaimedFee = event.params.scaledUnclaimedFee
  entity.liquidityIndex = event.params.liquidityIndex
  entity.unclaimedFee = event.params.unclaimedFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClose(event: CloseEvent): void {
  let entity = new Close(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.positionId = event.params.positionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.positionId = event.params.positionId
  entity.depositAmount = event.params.depositAmount
  entity.baseCollateral = event.params.baseCollateral
  entity.baseDebtScaled = event.params.baseDebtScaled
  entity.memeCollateral = event.params.memeCollateral
  entity.memeDebtScaled = event.params.memeDebtScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidation(event: LiquidationEvent): void {
  let entity = new Liquidation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liquidator = event.params.liquidator
  entity.account = event.params.account
  entity.positionId = event.params.positionId
  entity.marginLevel = event.params.marginLevel
  entity.marginLevelLiquidationThreshold =
    event.params.marginLevelLiquidationThreshold
  entity.totalCollateralUsd = event.params.totalCollateralUsd
  entity.totalDebtUsd = event.params.totalDebtUsd
  entity.memePrice = event.params.memePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new PoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.source = event.params.source
  entity.createdTimestamp = event.params.createdTimestamp
  entity.baseDecimals = event.params.baseDecimals
  entity.memeDecimals = event.params.memeDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolUpdated(event: PoolUpdatedEvent): void {
  let entity = new PoolUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
  entity.liquidityRate = event.params.liquidityRate
  entity.borrowRate = event.params.borrowRate
  entity.liquidityIndex = event.params.liquidityIndex
  entity.borrowIndex = event.params.borrowIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePosition(event: PositionEvent): void {
  let entity = new Position(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.actionType = event.params.actionType
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.positionId = event.params.positionId
  entity.baseCollateral = event.params.baseCollateral
  entity.baseDebtScaled = event.params.baseDebtScaled
  entity.memeCollateral = event.params.memeCollateral
  entity.memeDebtScaled = event.params.memeDebtScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemove(event: RemoveEvent): void {
  let entity = new Remove(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.remover = event.params.remover
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.liquidity = event.params.liquidity
  entity.to = event.params.to
  entity.baseAmount = event.params.baseAmount
  entity.memeAmount = event.params.memeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.repayer = event.params.repayer
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.positionId = event.params.positionId
  entity.tokenIndex = event.params.tokenIndex
  entity.repayAmount = event.params.repayAmount
  entity.baseCollateral = event.params.baseCollateral
  entity.baseDebtScaled = event.params.baseDebtScaled
  entity.memeCollateral = event.params.memeCollateral
  entity.memeDebtScaled = event.params.memeDebtScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.positionId = event.params.positionId
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut
  entity.fee = event.params.fee
  entity.baseCollateral = event.params.baseCollateral
  entity.baseDebtScaled = event.params.baseDebtScaled
  entity.memeCollateral = event.params.memeCollateral
  entity.memeDebtScaled = event.params.memeDebtScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.withdrawer = event.params.withdrawer
  entity.baseToken = event.params.baseToken
  entity.memeToken = event.params.memeToken
  entity.positionId = event.params.positionId
  entity.withdrawAmount = event.params.withdrawAmount
  entity.to = event.params.to
  entity.baseCollateral = event.params.baseCollateral
  entity.baseDebtScaled = event.params.baseDebtScaled
  entity.memeCollateral = event.params.memeCollateral
  entity.memeDebtScaled = event.params.memeDebtScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
