// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Add extends ethereum.Event {
  get params(): Add__Params {
    return new Add__Params(this);
  }
}

export class Add__Params {
  _event: Add;

  constructor(event: Add) {
    this._event = event;
  }

  get adder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get baseAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get memeAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Borrow extends ethereum.Event {
  get params(): Borrow__Params {
    return new Borrow__Params(this);
  }
}

export class Borrow__Params {
  _event: Borrow;

  constructor(event: Borrow) {
    this._event = event;
  }

  get borrower(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get positionId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokenIndex(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get borrowAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get borrowRate(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get baseCollateral(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }
}

export class ClaimFees extends ethereum.Event {
  get params(): ClaimFees__Params {
    return new ClaimFees__Params(this);
  }
}

export class ClaimFees__Params {
  _event: ClaimFees;

  constructor(event: ClaimFees) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get scaledUnclaimedFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get liquidityIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get unclaimedFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Close extends ethereum.Event {
  get params(): Close__Params {
    return new Close__Params(this);
  }
}

export class Close__Params {
  _event: Close;

  constructor(event: Close) {
    this._event = event;
  }

  get poolUsd(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountUsdStartClose(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amountUsdAfterRepayAndSellCollateral(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amountUsdAfterBuyCollateralAndRepay(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get depositor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get baseCollateral(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Liquidation extends ethereum.Event {
  get params(): Liquidation__Params {
    return new Liquidation__Params(this);
  }
}

export class Liquidation__Params {
  _event: Liquidation;

  constructor(event: Liquidation) {
    this._event = event;
  }

  get liquidator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get marginLevel(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get marginLevelLiquidationThreshold(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get totalCollateralUsd(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get totalDebtUsd(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get baseToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get source(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get createdTimestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get baseDecimals(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get memeDecimals(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PoolUpdated extends ethereum.Event {
  get params(): PoolUpdated__Params {
    return new PoolUpdated__Params(this);
  }
}

export class PoolUpdated__Params {
  _event: PoolUpdated;

  constructor(event: PoolUpdated) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get liquidityRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get borrowRate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get liquidityIndex(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get borrowIndex(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Remove extends ethereum.Event {
  get params(): Remove__Params {
    return new Remove__Params(this);
  }
}

export class Remove__Params {
  _event: Remove;

  constructor(event: Remove) {
    this._event = event;
  }

  get remover(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get baseAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get memeAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Repay extends ethereum.Event {
  get params(): Repay__Params {
    return new Repay__Params(this);
  }
}

export class Repay__Params {
  _event: Repay;

  constructor(event: Repay) {
    this._event = event;
  }

  get repayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get positionId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokenIndex(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get repayAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get baseCollateral(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenIn(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenOut(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amountIn(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amountOut(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get baseCollateral(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get withdrawer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get baseCollateral(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class EventEmitter extends ethereum.SmartContract {
  static bind(address: Address): EventEmitter {
    return new EventEmitter("EventEmitter", address);
  }

  roleStore(): Address {
    let result = super.call("roleStore", "roleStore():(address)", []);

    return result[0].toAddress();
  }

  try_roleStore(): ethereum.CallResult<Address> {
    let result = super.tryCall("roleStore", "roleStore():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _roleStore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class EmitAddCall extends ethereum.Call {
  get inputs(): EmitAddCall__Inputs {
    return new EmitAddCall__Inputs(this);
  }

  get outputs(): EmitAddCall__Outputs {
    return new EmitAddCall__Outputs(this);
  }
}

export class EmitAddCall__Inputs {
  _call: EmitAddCall;

  constructor(call: EmitAddCall) {
    this._call = call;
  }

  get supplier(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get baseAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get memeAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class EmitAddCall__Outputs {
  _call: EmitAddCall;

  constructor(call: EmitAddCall) {
    this._call = call;
  }
}

export class EmitBorrowCall extends ethereum.Call {
  get inputs(): EmitBorrowCall__Inputs {
    return new EmitBorrowCall__Inputs(this);
  }

  get outputs(): EmitBorrowCall__Outputs {
    return new EmitBorrowCall__Outputs(this);
  }
}

export class EmitBorrowCall__Inputs {
  _call: EmitBorrowCall;

  constructor(call: EmitBorrowCall) {
    this._call = call;
  }

  get borrower(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get positionId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get tokenIndex(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get borrowAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get borrowRate(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get liquidation(): EmitBorrowCallLiquidationStruct {
    return changetype<EmitBorrowCallLiquidationStruct>(
      this._call.inputValues[7].value.toTuple(),
    );
  }
}

export class EmitBorrowCall__Outputs {
  _call: EmitBorrowCall;

  constructor(call: EmitBorrowCall) {
    this._call = call;
  }
}

export class EmitBorrowCallLiquidationStruct extends ethereum.Tuple {
  get baseCollateral(): BigInt {
    return this[0].toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this[1].toBigInt();
  }

  get memeCollateral(): BigInt {
    return this[2].toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this[3].toBigInt();
  }
}

export class EmitClaimFeesCall extends ethereum.Call {
  get inputs(): EmitClaimFeesCall__Inputs {
    return new EmitClaimFeesCall__Inputs(this);
  }

  get outputs(): EmitClaimFeesCall__Outputs {
    return new EmitClaimFeesCall__Outputs(this);
  }
}

export class EmitClaimFeesCall__Inputs {
  _call: EmitClaimFeesCall;

  constructor(call: EmitClaimFeesCall) {
    this._call = call;
  }

  get underlyingAsset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get scaledUnclaimedFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get liquidityIndex(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get unclaimedFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class EmitClaimFeesCall__Outputs {
  _call: EmitClaimFeesCall;

  constructor(call: EmitClaimFeesCall) {
    this._call = call;
  }
}

export class EmitCloseCall extends ethereum.Call {
  get inputs(): EmitCloseCall__Inputs {
    return new EmitCloseCall__Inputs(this);
  }

  get outputs(): EmitCloseCall__Outputs {
    return new EmitCloseCall__Outputs(this);
  }
}

export class EmitCloseCall__Inputs {
  _call: EmitCloseCall;

  constructor(call: EmitCloseCall) {
    this._call = call;
  }

  get underlyingAssetUsd(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountUsdStartClose(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountUsdAfterRepayAndSellCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get amountUsdAfterBuyCollateralAndRepay(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class EmitCloseCall__Outputs {
  _call: EmitCloseCall;

  constructor(call: EmitCloseCall) {
    this._call = call;
  }
}

export class EmitDepositCall extends ethereum.Call {
  get inputs(): EmitDepositCall__Inputs {
    return new EmitDepositCall__Inputs(this);
  }

  get outputs(): EmitDepositCall__Outputs {
    return new EmitDepositCall__Outputs(this);
  }
}

export class EmitDepositCall__Inputs {
  _call: EmitDepositCall;

  constructor(call: EmitDepositCall) {
    this._call = call;
  }

  get depositor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get baseCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class EmitDepositCall__Outputs {
  _call: EmitDepositCall;

  constructor(call: EmitDepositCall) {
    this._call = call;
  }
}

export class EmitLiquidationCall extends ethereum.Call {
  get inputs(): EmitLiquidationCall__Inputs {
    return new EmitLiquidationCall__Inputs(this);
  }

  get outputs(): EmitLiquidationCall__Outputs {
    return new EmitLiquidationCall__Outputs(this);
  }
}

export class EmitLiquidationCall__Inputs {
  _call: EmitLiquidationCall;

  constructor(call: EmitLiquidationCall) {
    this._call = call;
  }

  get liquidator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get marginLevel(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get marginLevelLiquidationThreshold(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get totalCollateralUsd(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get totalDebtUsd(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class EmitLiquidationCall__Outputs {
  _call: EmitLiquidationCall;

  constructor(call: EmitLiquidationCall) {
    this._call = call;
  }
}

export class EmitPoolCreatedCall extends ethereum.Call {
  get inputs(): EmitPoolCreatedCall__Inputs {
    return new EmitPoolCreatedCall__Inputs(this);
  }

  get outputs(): EmitPoolCreatedCall__Outputs {
    return new EmitPoolCreatedCall__Outputs(this);
  }
}

export class EmitPoolCreatedCall__Inputs {
  _call: EmitPoolCreatedCall;

  constructor(call: EmitPoolCreatedCall) {
    this._call = call;
  }

  get baseToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get source(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get createdTimestamp(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get baseDecimals(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get memeDecimals(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class EmitPoolCreatedCall__Outputs {
  _call: EmitPoolCreatedCall;

  constructor(call: EmitPoolCreatedCall) {
    this._call = call;
  }
}

export class EmitPoolUpdatedCall extends ethereum.Call {
  get inputs(): EmitPoolUpdatedCall__Inputs {
    return new EmitPoolUpdatedCall__Inputs(this);
  }

  get outputs(): EmitPoolUpdatedCall__Outputs {
    return new EmitPoolUpdatedCall__Outputs(this);
  }
}

export class EmitPoolUpdatedCall__Inputs {
  _call: EmitPoolUpdatedCall;

  constructor(call: EmitPoolUpdatedCall) {
    this._call = call;
  }

  get underlyingAsset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get liquidityRate(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get borrowRate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get liquidityIndex(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get borrowIndex(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class EmitPoolUpdatedCall__Outputs {
  _call: EmitPoolUpdatedCall;

  constructor(call: EmitPoolUpdatedCall) {
    this._call = call;
  }
}

export class EmitRemoveCall extends ethereum.Call {
  get inputs(): EmitRemoveCall__Inputs {
    return new EmitRemoveCall__Inputs(this);
  }

  get outputs(): EmitRemoveCall__Outputs {
    return new EmitRemoveCall__Outputs(this);
  }
}

export class EmitRemoveCall__Inputs {
  _call: EmitRemoveCall;

  constructor(call: EmitRemoveCall) {
    this._call = call;
  }

  get remover(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get baseAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get memeAmount(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class EmitRemoveCall__Outputs {
  _call: EmitRemoveCall;

  constructor(call: EmitRemoveCall) {
    this._call = call;
  }
}

export class EmitRepayCall extends ethereum.Call {
  get inputs(): EmitRepayCall__Inputs {
    return new EmitRepayCall__Inputs(this);
  }

  get outputs(): EmitRepayCall__Outputs {
    return new EmitRepayCall__Outputs(this);
  }
}

export class EmitRepayCall__Inputs {
  _call: EmitRepayCall;

  constructor(call: EmitRepayCall) {
    this._call = call;
  }

  get repayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get positionId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get tokenIndex(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get repayAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get liquidation(): EmitRepayCallLiquidationStruct {
    return changetype<EmitRepayCallLiquidationStruct>(
      this._call.inputValues[6].value.toTuple(),
    );
  }
}

export class EmitRepayCall__Outputs {
  _call: EmitRepayCall;

  constructor(call: EmitRepayCall) {
    this._call = call;
  }
}

export class EmitRepayCallLiquidationStruct extends ethereum.Tuple {
  get baseCollateral(): BigInt {
    return this[0].toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this[1].toBigInt();
  }

  get memeCollateral(): BigInt {
    return this[2].toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this[3].toBigInt();
  }
}

export class EmitSwapCall extends ethereum.Call {
  get inputs(): EmitSwapCall__Inputs {
    return new EmitSwapCall__Inputs(this);
  }

  get outputs(): EmitSwapCall__Outputs {
    return new EmitSwapCall__Outputs(this);
  }
}

export class EmitSwapCall__Inputs {
  _call: EmitSwapCall;

  constructor(call: EmitSwapCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenIn(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenOut(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amountIn(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get amountOut(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get liquidation(): EmitSwapCallLiquidationStruct {
    return changetype<EmitSwapCallLiquidationStruct>(
      this._call.inputValues[6].value.toTuple(),
    );
  }
}

export class EmitSwapCall__Outputs {
  _call: EmitSwapCall;

  constructor(call: EmitSwapCall) {
    this._call = call;
  }
}

export class EmitSwapCallLiquidationStruct extends ethereum.Tuple {
  get baseCollateral(): BigInt {
    return this[0].toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this[1].toBigInt();
  }

  get memeCollateral(): BigInt {
    return this[2].toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this[3].toBigInt();
  }
}

export class EmitWithdrawCall extends ethereum.Call {
  get inputs(): EmitWithdrawCall__Inputs {
    return new EmitWithdrawCall__Inputs(this);
  }

  get outputs(): EmitWithdrawCall__Outputs {
    return new EmitWithdrawCall__Outputs(this);
  }
}

export class EmitWithdrawCall__Inputs {
  _call: EmitWithdrawCall;

  constructor(call: EmitWithdrawCall) {
    this._call = call;
  }

  get withdrawer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get memeToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get baseCollateral(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get baseDebtScaled(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get memeCollateral(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get memeDebtScaled(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class EmitWithdrawCall__Outputs {
  _call: EmitWithdrawCall;

  constructor(call: EmitWithdrawCall) {
    this._call = call;
  }
}
