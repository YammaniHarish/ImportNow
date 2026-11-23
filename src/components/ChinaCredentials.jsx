import React from 'react';
import { Building2, ShieldCheck, CheckCircle2, Globe, Stamp, Landmark, Languages, FileCheck } from 'lucide-react';

export default function ChinaCredentials() {
  return (
    <section id="china-presence" className="py-20 sm:py-24 bg-white relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>Officially In China</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Not just an agency.{' '}
            <span className="text-[#D32F2F]">We are a registered Chinese enterprise.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Most sourcing agents in India operate as unverified remote freelancers. ImportNow holds its own legal corporate incorporation and local banking in Shanghai.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Benefits & Trust Anchors (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-gray-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#D32F2F] shrink-0 shadow-2xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-lg text-[#111111]">
                      Shanghai Shengqiao Chain Trading Co., Ltd.
                    </h3>
                    <span className="text-xs bg-red-100 text-[#D32F2F] font-bold px-2 py-0.5 rounded">
                      上海盛桥链
                    </span>
                  </div>
                  <p className="text-sm text-[#52525B] mt-1.5 leading-relaxed">
                    Our own registered legal trading entity in Shanghai, China. We sign legal supplier contracts under Chinese commercial law, preventing manufacturers from vanishing with advance deposits.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-gray-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111111] shrink-0 shadow-2xs">
                  <Landmark className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#111111]">
                    Domestic Chinese Corporate Banking & RMB Settlement
                  </h3>
                  <p className="text-sm text-[#52525B] mt-1.5 leading-relaxed">
                    We maintain domestic commercial accounts at China Construction Bank & ICBC. We pay factories immediately in RMB, skipping 4-day international wire lags and giving you deeper direct supplier discounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-gray-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111111] shrink-0 shadow-2xs">
                  <Languages className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#111111]">
                    Founders Speak Telugu, Hindi & English
                  </h3>
                  <p className="text-sm text-[#52525B] mt-1.5 leading-relaxed">
                    Zero communication barrier. You discuss your requirements comfortably with our Indian founders in Hyderabad, while our in-house Mandarin speakers fiercely negotiate with the Chinese factory owners.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-gray-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111111] shrink-0 shadow-2xs">
                  <FileCheck className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#111111]">
                    Permanent Ground Inspection Team
                  </h3>
                  <p className="text-sm text-[#52525B] mt-1.5 leading-relaxed">
                    Full-time quality engineers deployed in Shanghai, Guangzhou, and Yiwu. They show up unannounced at factory loading docks with calibrated testing equipment before final container sealing.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Chinese Business Licence (营业执照) Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Top Floating Badge */}
            <div className="absolute -top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-semibold shadow-lg border border-gray-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Serving 500+ Importers across India</span>
            </div>

            {/* Business License Parchment/Gold-bordered Card */}
            <div className="relative bg-[#FFFDF5] rounded-3xl p-7 sm:p-9 border-2 border-[#D4AF37]/50 shadow-2xl overflow-hidden text-gray-900">
              
              {/* Subtle watermark background */}
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

              {/* National Emblem & Title Header */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-[#D4AF37]/40 relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#B22222] to-[#D32F2F] flex items-center justify-center text-yellow-300 shadow-md mb-2">
                  <span className="text-2xl font-serif">★</span>
                </div>
                <h4 className="font-display font-black text-2xl tracking-widest text-red-900">
                  营 业 执 照
                </h4>
                <span className="text-[11px] font-mono tracking-widest text-[#B22222] uppercase font-bold">
                  Business License · People's Republic of China
                </span>
                <span className="text-[10px] text-gray-500 font-mono mt-0.5">
                  (副本) 统一社会信用代码: 91310115MA1H7K890X
                </span>
              </div>

              {/* Official License Details Fields */}
              <div className="py-6 space-y-3.5 text-xs text-gray-800 relative">
                
                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-amber-200/50">
                  <span className="text-gray-500 font-medium">名 称 (Name):</span>
                  <span className="col-span-2 font-bold font-sans text-gray-950">
                    上海盛桥链商贸有限公司
                    <span className="block text-[11px] text-gray-600 font-normal">
                      Shanghai Shengqiao Chain Trading Co., Ltd.
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-amber-200/50">
                  <span className="text-gray-500 font-medium">类 型 (Type):</span>
                  <span className="col-span-2 font-semibold">有限责任公司 (LLC)</span>
                </div>

                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-amber-200/50">
                  <span className="text-gray-500 font-medium">注 册 地 (Location):</span>
                  <span className="col-span-2 font-semibold">
                    中国 (上海) 自由贸易试验区
                    <span className="block text-[11px] text-gray-600 font-normal">
                      Pudong Free Trade Pilot Zone, Shanghai, China
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-amber-200/50">
                  <span className="text-gray-500 font-medium">经营范围 (Scope):</span>
                  <span className="col-span-2 text-[11px] text-gray-700 leading-tight">
                    货物进出口、技术进出口、供应链管理服务、企业管理咨询、电子产品、日用百货及机械设备销售。
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-500 font-medium">登记机关 (Authority):</span>
                  <span className="col-span-2 font-semibold text-gray-900">
                    上海市市场监督管理局
                  </span>
                </div>
              </div>

              {/* Official Red Stamp Seal (印章) Aesthetic */}
              <div className="relative pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    Active & In Good Standing
                  </span>
                </div>

                {/* Styled Red Chop Seal */}
                <div className="relative w-24 h-24 rounded-full border-2 border-[#D32F2F] flex flex-col items-center justify-center text-[#D32F2F] p-1 rotate-[-12deg] shadow-xs select-none">
                  <span className="text-xs font-serif leading-none">★</span>
                  <span className="text-[8px] font-bold text-center leading-tight tracking-tighter mt-0.5">
                    上海盛桥链商贸
                    <br />
                    有限公司
                  </span>
                  <span className="text-[7px] font-mono tracking-widest mt-0.5">印 章</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
