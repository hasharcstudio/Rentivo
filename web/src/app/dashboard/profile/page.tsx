"use client";

import { Input } from "@/components/Input";
import { User, Mail, Phone, MapPin, CreditCard, Camera, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-black mb-2">My Profile</h1>
        <p className="text-secondary">Manage your personal information and membership details.</p>
      </header>

      <div className="bg-surface rounded-[2rem] p-6 md:p-8 border border-outline-variant/10 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-surface-container pb-8 mb-8">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden relative bg-surface-container-high border-4 border-surface shadow-md">
               <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQDqEzrgFlWMmOZ71YkfC4tUCZjKw06d0ElBoIIJkGAmyywz1YXU_ArqcO0qMr78pObZTcrlS9QKcFOnxRdNubZdRBh1VvbROpygpV3KS88-fht3XPuSB_QOvDc1qJzn7ZVflBSjHpjGVyMbOFSUIiStSWogPMuXlQJ_fTrj18QpqKca3lz1Tc9HiOffr-qyI020khbPf2GL_fCntE3jsygZnYXIadRggT9wCpp_u56GHpgq04wYBPwtgK2fGXjcLriZgClsafzo09" 
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
            <button aria-label="Update profile picture" className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:bg-primary-container min-h-[44px] min-w-[44px]">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Marcus Thorne</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">Kinetic Black Member</span>
              <span className="text-secondary text-sm font-medium">Joined Nov 2022</span>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <h3 className="text-lg font-bold mb-4">Personal Details</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input label="First Name" defaultValue="Marcus" Icon={User} />
            <Input label="Last Name" defaultValue="Thorne" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input label="Email Address" type="email" defaultValue="marcus.thorne@example.com" Icon={Mail} />
            <Input label="Phone Number" type="tel" defaultValue="+1 (310) 555-0199" Icon={Phone} />
          </div>
          
          <div className="mt-8 border-t border-surface-container pt-8">
            <h3 className="text-lg font-bold mb-4">Driver Verification</h3>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#34A853]/10 text-[#34A853] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">License Verified</h4>
                    <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                  </div>
                  <p className="text-secondary text-sm">Valid until Oct 2028 (California, USA)</p>
                </div>
              </div>
              <button className="text-primary font-bold text-sm bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors w-full sm:w-auto min-h-[44px]">Update Document</button>
            </div>
          </div>

          <div className="mt-8 border-t border-surface-container pt-8 flex flex-col-reverse sm:flex-row justify-between gap-4">
             <button 
              type="button"
              onClick={() => {
                sessionStorage.removeItem("rentivo_has_seen_splash");
                sessionStorage.removeItem("rentivo_authenticated");
                router.push('/sign-in');
              }}
              className="flex items-center justify-center gap-2 text-error font-bold hover:bg-error/10 px-6 py-3.5 rounded-xl transition-colors min-h-[48px] w-full sm:w-auto"
            >
              <LogOut size={20} />
              Sign Out
            </button>
            <button type="submit" className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[48px] w-full sm:w-auto">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
