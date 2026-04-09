"use client";

import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";

export default function PreferencesPage() {
  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-black mb-2">Preferences</h1>
        <p className="text-secondary">Customize your notification settings and platform experience.</p>
      </header>

      <div className="bg-surface rounded-[2rem] p-6 md:p-8 border border-outline-variant/10 shadow-sm">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
          <Bell size={24} className="text-primary" />
          Notification Channels
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-surface-container pb-6">
            <div className="flex gap-4">
              <Mail className="text-secondary" />
              <div>
                <h4 className="font-bold">Email Notifications</h4>
                <p className="text-sm text-secondary">Receive booking confirmations, receipts, and important updates via email.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input aria-label="Toggle Email Notifications" type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between border-b border-surface-container pb-6">
            <div className="flex gap-4">
              <MessageSquare className="text-secondary" />
              <div>
                <h4 className="font-bold">SMS Alerts</h4>
                <p className="text-sm text-secondary">Get instant SMS texts for car delivery tracking and urgent roadside alerts.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input aria-label="Toggle SMS Alerts" type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between border-b border-surface-container pb-6">
            <div className="flex gap-4">
              <Smartphone className="text-secondary" />
              <div>
                <h4 className="font-bold">Push Notifications</h4>
                <p className="text-sm text-secondary">In-app alerts for unlock capabilities, nearby charging stations, and more.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input aria-label="Toggle Push Notifications" type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <div className="mt-8 pt-8">
          <h3 className="text-xl font-bold mb-6">Marketing</h3>
          <label className="flex items-start gap-4 cursor-pointer group">
            <input aria-label="Opt-in to exclusive offers" type="checkbox" className="mt-1 w-5 h-5 rounded border-outline-variant focus:ring-primary text-primary bg-surface-container group-hover:border-primary/50 transition-colors cursor-pointer" />
            <div>
              <p className="font-bold group-hover:text-primary transition-colors">Exclusive Offers & Kinetic Black Invites</p>
              <p className="text-sm text-secondary">Occasional invitations to test drive new fleet additions or join VIP networking events.</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
