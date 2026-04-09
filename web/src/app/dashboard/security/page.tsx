"use client";

import { Input } from "@/components/Input";
import { ShieldAlert, Smartphone, Monitor, Key } from "lucide-react";

export default function SecurityHubPage() {
  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-black mb-2">Security Hub</h1>
        <p className="text-secondary">Manage your password, 2FA, and trusted devices.</p>
      </header>

      <div className="space-y-8">
        {/* Two-Factor Authentication */}
        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-outline-variant/10 shadow-sm flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
          <div className="flex gap-4">
            <div className="bg-[#34A853]/10 p-4 rounded-2xl h-fit text-[#34A853]">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Two-Factor Auth Active</h3>
              <p className="text-secondary text-sm max-w-sm">Your account is heavily protected. We require a security code via authenticator app when signing in from an unrecognized device.</p>
            </div>
          </div>
          <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-bold py-3 px-6 rounded-xl transition-colors w-full md:w-auto min-h-[48px]">
            Manage 2FA
          </button>
        </div>

        {/* Change Password */}
        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-outline-variant/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Key size={20} className="text-primary" />
            Change Password
          </h3>
          <form className="max-w-md space-y-6" onSubmit={e => e.preventDefault()}>
            <Input label="Current Password" type="password" placeholder="••••••••" />
            <Input label="New Password" type="password" placeholder="••••••••" />
            <Input label="Confirm New Password" type="password" placeholder="••••••••" />
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 min-h-[48px]">
              Update Password
            </button>
          </form>
        </div>

        {/* Device History */}
        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-outline-variant/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Recent Devices</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-xl">
              <div className="flex gap-4 items-center">
                <Smartphone className="text-primary" size={24} />
                <div>
                  <p className="font-bold">iPhone 14 Pro</p>
                  <p className="text-xs text-secondary mt-0.5">Los Angeles, CA • Current Session</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#34A853] bg-[#34A853]/10 px-2 py-1 rounded">Active</span>
            </div>
            
            <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-xl">
              <div className="flex gap-4 items-center">
                <Monitor className="text-secondary" size={24} />
                <div>
                  <p className="font-bold">MacBook Pro 16</p>
                  <p className="text-xs text-secondary mt-0.5">San Francisco, CA • 2 days ago</p>
                </div>
              </div>
              <button className="text-primary text-xs font-bold hover:underline min-h-[44px] px-2 rounded-md hover:bg-primary/5">Revoke</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
