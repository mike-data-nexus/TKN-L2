import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
    AdminChanged,
    ManagerChanged,
    ApprovalPowerChanged,
    ApprovalThresholdChanged,
    CrossChainAdapterChanged
} from "../generated/L2StorageManager/L2StorageManager"
import { Admin, Manager, ApprovalPower, ApprovalThreshold, User, CrossChainAdapter } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
    let adminID = event.params.account.toHexString()
    let admin = Admin.load(adminID)
    if (!admin) {
        admin = new Admin(adminID)
    }
    admin.address = event.params.account
    admin.isAdmin = event.params.isAdmin
    admin.save()

    // Update User entity if it exists
    let user = User.load(adminID)
    if (user) {
        user.save()
    }
}

export function handleManagerChanged(event: ManagerChanged): void {
    let managerID = event.params.account.toHexString()
    let manager = Manager.load(managerID)
    if (!manager) {
        manager = new Manager(managerID)
    }
    manager.address = event.params.account
    manager.isManager = event.params.isManager
    manager.save()

    // Update User entity if it exists
    let user = User.load(managerID)
    if (user) {
        user.save()
    }
}

export function handleApprovalPowerChanged(event: ApprovalPowerChanged): void {
    let approvalPowerID = event.params.account.toHexString()
    let approvalPower = ApprovalPower.load(approvalPowerID)
    if (!approvalPower) {
        approvalPower = new ApprovalPower(approvalPowerID)
    }
    approvalPower.address = event.params.account
    approvalPower.power = event.params.power
    approvalPower.save()
}

export function handleApprovalThresholdChanged(event: ApprovalThresholdChanged): void {
    let approvalThreshold = ApprovalThreshold.load("current")
    if (!approvalThreshold) {
        approvalThreshold = new ApprovalThreshold("current")
    }
    approvalThreshold.threshold = event.params.newThreshold
    approvalThreshold.save()
}

export function handleCrossChainAdapterChanged(event: CrossChainAdapterChanged): void {
    let crossChainAdapterID = event.params.newAdapter.toHexString()
    let crossChainAdapter = CrossChainAdapter.load(crossChainAdapterID)
    if (!crossChainAdapter) {
        crossChainAdapter = new CrossChainAdapter(crossChainAdapterID)
        crossChainAdapter.address = event.params.newAdapter
        crossChainAdapter.save()
    }
}