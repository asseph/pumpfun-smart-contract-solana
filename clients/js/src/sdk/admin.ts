import { SPL_SYSTEM_PROGRAM_ID } from "@metaplex-foundation/mpl-toolbox";
import { none, OptionOrNullable, PublicKey, Umi } from "@metaplex-foundation/umi";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { SYSVAR_CLOCK_PUBKEY } from "@solana/web3.js";
import { GlobalSettingsInputArgs, ProgramStatus, withdrawFees } from "../generated";
import { setParams, SetParamsInstructionAccounts } from '../generated/instructions/setParams';
import { initialize, } from '../generated/instructions/initialize';
import { PumpFunSDK } from "./pump-Fun";

export type SetParamsInput = Partial<GlobalSettingsInputArgs> & Partial<Pick<SetParamsInstructionAccounts, "newWithdrawAuthority" | "newAuthority">>;

export class AdminSDK {
    PumpFun: PumpFunSDK;
    umi: Umi;

    constructor(sdk: PumpFunSDK) {
        this.PumpFun = sdk;
        this.umi = sdk.umi;
    }

    initialize(params: GlobalSettingsInputArgs) {
        const txBuilder = initialize(this.PumpFun.umi, {
            global: this.PumpFun.globalPda[0],
            authority: this.umi.identity,
            params,
            systemProgram: SPL_SYSTEM_PROGRAM_ID,
            ...this.PumpFun.evtAuthAccs,
        });
        return txBuilder;
    }

    withdrawFees(mint: PublicKey) {
        const txBuilder = withdrawFees(this.PumpFun.umi, {
            global: this.PumpFun.globalPda[0],
            authority: this.umi.identity,
            mint,
            clock: fromWeb3JsPublicKey(SYSVAR_CLOCK_PUBKEY),
            ...this.PumpFun.evtAuthAccs,
        });
        return txBuilder;
    }

    setParams(params: SetParamsInput) {
        const { newWithdrawAuthority, newAuthority, ...ixParams } = params;
        let status: OptionOrNullable<ProgramStatus>;
        if (ixParams.status !== undefined) {
            status = ixParams.status;
        } else {
            status = none();
        }
        const parsedParams: GlobalSettingsInputArgs = {
            status,
            feeRecipient: ixParams.feeRecipient,
        };
        const txBuilder = setParams(this.PumpFun.umi, {
            global: this.PumpFun.globalPda[0],
            authority: this.umi.identity,
            params: parsedParams,
            newWithdrawAuthority,
            newAuthority,
            ...this.PumpFun.evtAuthAccs,
        });
        return txBuilder;
    }
}
