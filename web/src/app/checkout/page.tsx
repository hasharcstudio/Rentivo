"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/Input";
import { ArrowRight, CreditCard, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [checkedAuth] = useState(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("rentivo_authenticated") === "true";
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!checkedAuth) {
      const returnPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
      router.push(`/sign-in?redirect=${encodeURIComponent(returnPath)}`);
    }
  }, [checkedAuth, router, pathname, searchParams]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else router.push("/checkout/success");
  };

  if (!checkedAuth) {
    return null;
  }

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Main Checkout Area */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-container -z-10 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container text-secondary'}`}>1</div>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${step >= 1 ? 'text-primary' : 'text-secondary'}`}>Driver Details</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border-2 border-surface-container text-secondary'}`}>2</div>
              <span className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${step >= 2 ? 'text-primary' : 'text-secondary'}`}>Insurance</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 3 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border-2 border-surface-container text-secondary'}`}>3</div>
              <span className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${step >= 3 ? 'text-primary' : 'text-secondary'}`}>Payment</span>
            </div>
          </div>

          <div className="bg-surface p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="text-3xl font-black mb-2">Driver Information</h2>
                <p className="text-secondary mb-8">Please confirm the primary driver details for this reservation.</p>
                
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); handleNext(); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input label="First Name" defaultValue="Marcus" required />
                    <Input label="Last Name" defaultValue="Thorne" required />
                  </div>
                  <Input label="Email Address" type="email" defaultValue="marcus.thorne@example.com" required />
                  <Input label="Phone Number" type="tel" defaultValue="+1 (310) 555-0199" required />
                  
                  <div className="pt-4 border-t border-surface-container">
                    <div className="bg-[#34A853]/10 text-[#34A853] p-4 rounded-xl flex items-center justify-between border border-[#34A853]/20">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={24} />
                        <div>
                          <p className="font-bold">Driver License Verified</p>
                          <p className="text-xs">Your license on file is valid for this rental.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg hover:bg-primary-container transition-colors mt-8 min-h-[56px] flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                    Continue to Insurance <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="text-3xl font-black mb-2">Insurance & Protection</h2>
                <p className="text-secondary mb-8">Select your level of coverage for complete peace of mind.</p>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-6 rounded-[1.5rem] border-2 border-primary bg-primary/5 cursor-pointer relative overflow-hidden transition-all">
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-lg">Recommended</div>
                    <input type="radio" name="insurance" className="mt-1 w-5 h-5 accent-primary" defaultChecked />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-lg">Kinetic Premium Protection</h4>
                        <span className="font-black text-primary">+$40/day</span>
                      </div>
                      <p className="text-secondary text-sm mb-4">Zero deductible. Covers all exterior and interior damage, plus 24/7 priority roadside dispatch.</p>
                      <ul className="text-sm font-medium space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Comprehensive Coverage</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> $0 Deductible</li>
                      </ul>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-6 rounded-[1.5rem] border border-outline-variant/30 bg-surface-container-low cursor-pointer hover:border-primary/50 transition-all">
                    <input type="radio" name="insurance" className="mt-1 w-5 h-5 accent-primary" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-lg">Basic Liability</h4>
                        <span className="font-black">Included</span>
                      </div>
                      <p className="text-secondary text-sm">State minimum requirements only. $2,500 physical damage deductible applies.</p>
                    </div>
                  </label>
                </div>

                <div className="flex gap-4 mt-12">
                  <button onClick={() => setStep(1)} className="px-6 py-4 rounded-xl font-bold text-secondary bg-surface-container hover:bg-surface-container-high transition-colors min-h-[56px]">Back</button>
                  <button onClick={handleNext} className="flex-1 bg-primary text-white py-4 rounded-xl font-black text-lg hover:bg-primary-container transition-colors min-h-[56px] flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                    Continue to Payment <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="text-3xl font-black mb-2">Secure Payment</h2>
                <p className="text-secondary mb-8">Enter your card details. We use bank-level 256-bit encryption.</p>
                
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); handleNext(); }}>
                  <div className="bg-surface-container-low p-6 rounded-[1.5rem] border border-outline-variant/20">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <CreditCard className="text-primary" size={20} /> Use Saved Card
                      </div>
                      <span className="w-4 h-4 rounded-full border-[5px] border-primary bg-white outline outline-1 outline-primary/20"></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-mono font-bold tracking-widest text-lg">•••• •••• •••• 4242</p>
                        <p className="text-xs text-secondary mt-1 uppercase font-bold tracking-widest">Marcus Thorne</p>
                      </div>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={40} height={25} className="opacity-80" />
                    </div>
                  </div>

                  <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-outline-variant/30"></div>
                    <span className="flex-shrink-0 mx-4 text-secondary text-[10px] uppercase tracking-widest font-bold">Or Add New Card</span>
                    <div className="flex-grow border-t border-outline-variant/30"></div>
                  </div>

                  <Input label="Cardholder Name" placeholder="John Doe" />
                  <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                  <div className="grid grid-cols-2 gap-6">
                    <Input label="Expiry Date" placeholder="MM/YY" />
                    <Input label="CVC" placeholder="123" />
                  </div>

                  <div className="flex gap-4 mt-8 pt-4">
                    <button type="button" onClick={() => setStep(2)} className="px-6 py-4 rounded-xl font-bold text-secondary bg-surface-container hover:bg-surface-container-high transition-colors min-h-[56px]">Back</button>
                    <button type="submit" className="flex-1 bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[56px] flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(188,0,10,0.3)]">
                      Authorize $1,470.00
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 shrink-0 order-1 lg:order-2">
          <div className="bg-surface p-6 rounded-[2rem] shadow-sm border border-outline-variant/10 lg:sticky lg:top-28">
            <h3 className="text-xl font-black mb-6">Reservation Summary</h3>
            
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-low mb-6">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZit5sMrZabyQ4MmnVi72cv34r46raIqp8SR1qAFnfdnnKkcrxCoIGwOmRmdvTOr7AfkpLdDlYyyC6BzP_Cz25reJHfpYuq9DGle-AncIWat8BCNPAgo9VkS_FmwwrcrV2YF1f9s8LM93thSZS5MX5zxh6Nj4_1f-UxCqJ0cKUh7pwoOF2HVA31M2EFl_rldxvpcWH75gF6BAl_kqpO_oEj0hlWEqGDfgdz-5tD3qN5CrlcgNQi1kWQqBQ2NnhaKVHFUXLvVvxc6Jt"
                alt="Model S Plaid"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mb-6 pb-6 border-b border-surface-container">
              <h4 className="text-lg font-bold">Tesla Model S Plaid</h4>
              <p className="text-secondary text-sm">Electric • Automatic • 5 Seats</p>
            </div>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-surface-container">
              <div className="flex justify-between items-start">
                <div className="text-sm">
                  <p className="text-secondary uppercase text-[10px] font-bold tracking-widest mb-1">Pick-up</p>
                  <p className="font-bold">Oct 24, 2024</p>
                  <p className="text-xs text-secondary mt-0.5">10:00 AM</p>
                </div>
                <div className="text-sm text-right">
                  <p className="text-secondary uppercase text-[10px] font-bold tracking-widest mb-1">Return</p>
                  <p className="font-bold">Oct 28, 2024</p>
                  <p className="text-xs text-secondary mt-0.5">10:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-secondary font-medium">Rental (4 days)</span>
                <span className="font-bold">$1,800.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-secondary font-medium">Premium Insurance</span>
                <span className="font-bold">$160.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-secondary font-medium">Taxes & Fees</span>
                <span className="font-bold">$85.00</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary/10">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary pb-1">Total Due</span>
                <span className="text-3xl font-black text-on-surface leading-none">$2,045.00</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
