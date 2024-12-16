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
    let adminId = event.params.account.toHexString()
    let admin = Admin.load(adminId)
    if (!admin) {
        admin = new Admin(adminId)
    }
    admin.address = event.params.account
    admin.isAdmin = event.params.isAdmin
    admin.save()

    // Update User entity if it exists
    let user = User.load(adminId)
    if (user) {
        user.save()
    }
}

export function handleManagerChanged(event: ManagerChanged): void {
    let managerId = event.params.account.toHexString()
    let manager = Manager.load(managerId)
    if (!manager) {
        manager = new Manager(managerId)
    }
    manager.address = event.params.account
    manager.isManager = event.params.isManager
    manager.save()

    // Update User entity if it exists
    let user = User.load(managerId)
    if (user) {
        user.save()
    }
}

export function handleApprovalPowerChanged(event: ApprovalPowerChanged): void {
    let approvalPowerId = event.params.account.toHexString()
    let approvalPower = ApprovalPower.load(approvalPowerId)
    if (!approvalPower) {
        approvalPower = new ApprovalPower(approvalPowerId)
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
    let crossChainAdapterId = event.params.newAdapter.toHexString()
    let crossChainAdapter = CrossChainAdapter.load(crossChainAdapterId)
    if (!crossChainAdapter) {
        crossChainAdapter = new CrossChainAdapter(crossChainAdapterId)
        crossChainAdapter.address = event.params.newAdapter
        crossChainAdapter.save()
    }
}