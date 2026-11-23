import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Ship, ShieldCheck, Truck, PackageCheck, FileText, ArrowRight, Play, Pause } from 'lucide-react';

const TRACKING_STEPS = [
  {
    step: 1,
    title: 'Source Factory',
    dayRange: 'Day 0 – 5',
    days: 5,
    location: 'Yiwu & Foshan Industrial Hubs',
    status: 'Supplier Verified',
    icon: PackageCheck,
    summary: 'Supplier audit, quotation negotiation in RMB, and sample approval.',
    checklist: [
      'Factory business license & legal capacity check',
      'Raw material quality & sample dimensional audit',
      'Locking RMB unit pricing with direct contract',
      'Production schedule agreed with milestone dates'
    ],
    telemetry: {
      locationCoord: '29.3150° N, 120.0768° E',
      leadTime: '5 Days',
      docs: 'Signed Proforma Invoice (PI) & Quality Agreement'
    }
  },
  {
    step: 2,
    title: 'Inspect & QC',
    dayRange: 'Day 6 – 10',
    days: 10,
    location: 'Factory Floor (Shanghai / Guangdong)',
    status: 'Passed AQL 2.5',
    icon: ShieldCheck,
    summary: 'In-person inspection by our Shanghai staff before final factory payment.',
    checklist: [
      'Visual finish, drop test & stress testing',
      'Dimensional tolerance check vs technical specs',
      'Packaging durability and export barcode labels',
      'Client approval on 4K photo & video report'
    ],
    telemetry: {
      locationCoord: '31.2304° N, 121.4737° E',
      leadTime: '5 Days',
      docs: 'Official AQL 2.5 Inspection Certificate'
    }
  },
  {
    step: 3,
    title: 'Container Loading',
    dayRange: 'Day 11 – 14',
    days: 14,
    location: 'Shanghai / Ningbo Seaport Warehouse',
    status: 'Customs Sealed',
    icon: FileText,
    summary: 'Consolidation, container stuffing, weight scale, and Chinese export declaration.',
    checklist: [
      'Moisture-proof silica packing and pallet shrink-wrap',
      'Container floor weight balancing & ratchet strapping',
      'Chinese export customs clearance & port gate-in',
      'High-security tamper-evident customs bolt seal affixed'
    ],
    telemetry: {
      locationCoord: 'Shanghai Port (CNSHA) Terminal 4',
      leadTime: '4 Days',
      docs: 'Export Declaration Form & Verified Gross Mass (VGM)'
    }
  },
  {
    step: 4,
    title: 'Sea Transit',
    dayRange: 'Day 15 – 28',
    days: 28,
    location: 'Malacca Strait → Indian Ocean',
    status: 'In Ocean Transit',
    icon: Ship,
    summary: 'Direct express ocean shipping from Shanghai/Ningbo to Indian container port.',
    checklist: [
      'Vessel departure with Bill of Lading (B/L) issued',
      'Real-time AIS satellite vessel coordinate tracking',
      'Pre-filing of Import General Manifest (IGM) in India',
      'Transit via Singapore Strait with weather monitoring'
    ],
    telemetry: {
      locationCoord: 'Vessel: EVER GOODS · IMO 9811000',
      leadTime: '14 Days Sailing',
      docs: 'Original Master Bill of Lading & Commercial Invoice'
    }
  },
  {
    step: 5,
    title: 'Indian Customs Clearance',
    dayRange: 'Day 29 – 32',
    days: 32,
    location: 'Nhava Sheva (JNPT) / Chennai Port',
    status: 'Port Cleared',
    icon: ShieldCheck,
    summary: 'Customs duty appraisal, EDI filing, customs examination, and IGST payment.',
    checklist: [
      'Filing Bill of Entry in client name for 100% GST credit',
      'Customs tariff classification & duty assessment',
      'Faceless customs assessment and fast-track green gate',
      'Payment of duty & Out of Charge (OOC) order issued'
    ],
    telemetry: {
      locationCoord: 'JNPT Port (INNSA) / Chennai Port (INMAA)',
      leadTime: '3-4 Days',
      docs: 'Official Bill of Entry (Out of Charge Copy) + GST Challan'
    }
  },
  {
    step: 6,
    title: 'Doorstep Delivery',
    dayRange: 'Day 33 – 35',
    days: 35,
    location: 'Your Shop, Warehouse or Villa',
    status: 'Delivered & Handed Over',
    icon: Truck,
    summary: 'Dedicated container trailer transport directly to your final destination in India.',
    checklist: [
      'Container loading onto hydraulic air-suspension trailer',
      'E-Way bill generated with real-time GPS tracking link',
      'Direct arrival at your warehouse / retail store / villa',
      'De-stuffing assistance, final checklist, and POD signoff'
    ],
    telemetry: {
      locationCoord: 'Hyderabad / Mumbai / Bangalore / Delhi / Regional',
      leadTime: '2-3 Days Domestic',
      docs: 'E-Way Bill & Proof of Delivery (POD)'
    }
  }
];

export default function ShipmentTracker({ onOpenInspectionModal }) {
  const [activeStepIndex, setActiveStepIndex] = useState(3); // Default to Sea Transit
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % TRACKING_STEPS.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStep = TRACKING_STEPS[activeStepIndex];
  const progressPercent = ((activeStepIndex + 1) / TRACKING_STEPS.length) * 100;

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>How It Works</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Watch your order travel from China to India.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Click through our 6-step verified import pipeline to see how we de-risk the journey from Shanghai to your city in 35 days.
          </p>
        </div>

        {/* Live Simulator Header Card */}
        <div className="bg-[#111111] text-white rounded-2xl p-5 sm:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-white font-display">
                  Live shipment pipeline
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                  Tracking ID: IN-2026-SHA948
                </span>
              </div>
              <span className="text-xs text-gray-400 mt-0.5">
                Shanghai Port (CNSHA) → Chennai Port (INMAA) → Hyderabad Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Pause Auto-Play</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-green-400" />
                  <span>Auto-Play Journey</span>
                </>
              )}
            </button>

            <div className="text-right">
              <span className="text-[10px] text-gray-400 block uppercase font-mono">Current Status</span>
              <span className="text-sm font-bold text-[#D32F2F]">{activeStep.dayRange}</span>
            </div>
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="relative mb-10 px-2 sm:px-6">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#111111] via-[#D32F2F] to-[#25D366] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Interactive Step Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
            {TRACKING_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const isDone = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStepIndex(idx);
                  }}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#D32F2F] shadow-md ring-2 ring-red-500/20 -translate-y-1'
                      : isDone
                      ? 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                      : 'bg-[#F5F5F7] border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-red-100 text-[#D32F2F]' : isDone ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
                    }`}>
                      Stage {step.step}
                    </span>
                    {isDone && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                    {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-ping" />}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#111111] leading-tight">
                      {step.title}
                    </h4>
                    <span className="text-[11px] text-[#52525B] mt-0.5 block font-medium">
                      {step.dayRange}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-[#F5F5F7] rounded-3xl p-6 sm:p-10 border border-[#E5E7EB] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Stage Details & Checklist (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#E5E7EB] text-[#111111]">
                  Step {activeStep.step} of 6
                </span>
                <span className="text-xs font-semibold text-[#D32F2F] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {activeStep.dayRange}
                </span>
                <span className="text-xs font-medium text-gray-500 hidden sm:inline">
                  • {activeStep.location}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] tracking-tightest mb-3">
                {activeStep.title}
              </h3>

              <p className="text-base text-[#52525B] leading-relaxed mb-6">
                {activeStep.summary}
              </p>

              {/* Verified Checklist */}
              <div className="space-y-3 bg-white p-5 sm:p-6 rounded-2xl border border-[#E5E7EB]">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Ground Execution Protocols:
                </span>
                {activeStep.checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Telemetry Card & Next Step Navigator (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
                  Stage Documentation & Telemetry
                </span>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-0.5">Physical Hub / Vessel:</span>
                    <span className="font-semibold text-gray-900 font-mono text-xs sm:text-sm">
                      {activeStep.telemetry.locationCoord}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-0.5">Transit Window:</span>
                    <span className="font-semibold text-gray-900">
                      {activeStep.telemetry.leadTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-0.5">Verified Document Issued:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 text-gray-800 font-medium text-[11px] border border-gray-200">
                        <FileText className="w-3.5 h-3.5 text-[#D32F2F]" />
                        <span>{activeStep.telemetry.docs}</span>
                      </div>
                      {activeStep.step === 2 && onOpenInspectionModal && (
                        <button
                          type="button"
                          onClick={onOpenInspectionModal}
                          className="text-[11px] font-bold text-[#D32F2F] hover:underline cursor-pointer"
                        >
                          View Sample PDF →
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-500 block">Overall Import Target</span>
                    <span className="text-sm font-bold text-gray-900 font-display">Day 35 Doorstep</span>
                  </div>
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % TRACKING_STEPS.length)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-black transition-colors"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Support Callout */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h5 className="font-display font-bold text-xs sm:text-sm text-emerald-950">
                    Daily WhatsApp milestone video updates
                  </h5>
                  <p className="text-[11px] text-emerald-800">
                    Receive unedited factory videos and container loading photos directly on your phone.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
