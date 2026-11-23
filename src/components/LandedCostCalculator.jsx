import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingDown, DollarSign, ShieldCheck, Sparkles, CheckCircle2, Info } from 'lucide-react';

const PRESETS = [
  {
    name: 'Dual-Motor Standing Desk',
    category: 'Furniture & Interiors',
    hub: 'Foshan Hub',
    factoryRmb: 480, // ¥480 RMB
    hsCode: '9403.10.00',
    bcdPercent: 20, // 20% Basic Customs Duty
    igstPercent: 18, // 18% IGST
    typicalQty: 50,
    unitWeightKg: 28,
    indiaRetailInr: 38000,
    unitName: 'desks'
  },
  {
    name: 'Italian Leather Villa Sofa (1+2+3)',
    category: 'Furniture & Interiors',
    hub: 'Foshan Hub',
    factoryRmb: 6800, // ¥6,800 RMB
    hsCode: '9401.61.00',
    bcdPercent: 25,
    igstPercent: 18,
    typicalQty: 1,
    unitWeightKg: 160,
    indiaRetailInr: 280000,
    unitName: 'sets'
  },
  {
    name: 'Automotive LED Projector Headlights',
    category: 'EV & Automotive',
    hub: 'Guangzhou Hub',
    factoryRmb: 130, // ¥130 RMB per pair
    hsCode: '8512.20.10',
    bcdPercent: 15,
    igstPercent: 18,
    typicalQty: 200,
    unitWeightKg: 1.8,
    indiaRetailInr: 6500,
    unitName: 'pairs'
  },
  {
    name: 'Architectural Magnetic Track Light (Set)',
    category: 'Lighting',
    hub: 'Guzhen Hub',
    factoryRmb: 240, // ¥240 RMB
    hsCode: '9405.40.90',
    bcdPercent: 20,
    igstPercent: 18,
    typicalQty: 100,
    unitWeightKg: 3.5,
    indiaRetailInr: 12500,
    unitName: 'fixtures'
  },
  {
    name: 'Supermarket Heavy Duty Gondola Rack',
    category: 'Supermarket Goods',
    hub: 'Yiwu Hub',
    factoryRmb: 320, // ¥320 RMB
    hsCode: '9403.20.90',
    bcdPercent: 20,
    igstPercent: 18,
    typicalQty: 80,
    unitWeightKg: 35,
    indiaRetailInr: 16000,
    unitName: 'racks'
  },
  {
    name: '1000W Fiber Laser Cutting Machine',
    category: 'Machinery & Automation',
    hub: 'Jiangsu Hub',
    factoryRmb: 65000, // ¥65,000 RMB
    hsCode: '8456.11.00',
    bcdPercent: 7.5,
    igstPercent: 18,
    typicalQty: 1,
    unitWeightKg: 2800,
    indiaRetailInr: 2100000,
    unitName: 'machines'
  }
];

const RMB_TO_INR_RATE = 11.85; // Approx current exchange rate

export default function LandedCostCalculator() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const activePreset = PRESETS[selectedPresetIndex];

  const [quantity, setQuantity] = useState(activePreset.typicalQty);
  const [unitCostRmb, setUnitCostRmb] = useState(activePreset.factoryRmb);
  const [shippingMode, setShippingMode] = useState('sea'); // 'sea' or 'air'

  // Update quantity and unitCost when preset changes
  const handleSelectPreset = (idx) => {
    setSelectedPresetIndex(idx);
    setQuantity(PRESETS[idx].typicalQty);
    setUnitCostRmb(PRESETS[idx].factoryRmb);
  };

  // Calculations
  const calculations = useMemo(() => {
    // 1. Factory Cost in INR
    const unitFactoryInr = unitCostRmb * RMB_TO_INR_RATE;
    const totalFactoryInr = unitFactoryInr * quantity;

    // 2. Freight & Logistics Estimate (per unit)
    // Approximate freight based on weight and volume
    let unitFreightInr = 0;
    if (shippingMode === 'sea') {
      // Sea freight: approx ₹28 per kg equivalent volume
      unitFreightInr = Math.max(800, activePreset.unitWeightKg * 28);
    } else {
      // Air cargo: approx ₹320 per kg
      unitFreightInr = Math.max(1600, activePreset.unitWeightKg * 320);
    }
    const totalFreightInr = unitFreightInr * quantity;

    // Assessable Value for Indian Customs (CIF = Cost + Insurance + Freight)
    const assessableValuePerUnit = unitFactoryInr + unitFreightInr;

    // 3. Basic Customs Duty (BCD)
    const bcdAmount = assessableValuePerUnit * (activePreset.bcdPercent / 100);

    // 4. Social Welfare Surcharge (SWS = 10% of BCD)
    const swsAmount = bcdAmount * 0.10;

    // Value for IGST Calculation (Assessable Value + BCD + SWS)
    const valueForIgst = assessableValuePerUnit + bcdAmount + swsAmount;

    // 5. IGST (18%) - Fully claimable as Input Tax Credit (ITC)
    const igstAmount = valueForIgst * (activePreset.igstPercent / 100);

    // 6. Port Handling, Domestic Transit & De-stuffing
    const portDomesticPerUnit = Math.max(500, activePreset.unitWeightKg * 12);

    // 7. Total Landed Cost (including IGST)
    const totalLandedPerUnit = assessableValuePerUnit + bcdAmount + swsAmount + igstAmount + portDomesticPerUnit;
    const totalConsignmentInr = totalLandedPerUnit * quantity;

    // 8. Benchmark Comparison
    const indianRetailUnit = activePreset.indiaRetailInr;
    const totalIndianRetail = indianRetailUnit * quantity;
    const totalSavingsInr = Math.max(0, totalIndianRetail - totalConsignmentInr);
    const savingsPercent = totalIndianRetail > 0 ? Math.round((totalSavingsInr / totalIndianRetail) * 100) : 0;
    const unitSavingsInr = Math.max(0, indianRetailUnit - totalLandedPerUnit);

    return {
      unitFactoryInr: Math.round(unitFactoryInr),
      unitFreightInr: Math.round(unitFreightInr),
      bcdAmount: Math.round(bcdAmount),
      swsAmount: Math.round(swsAmount),
      igstAmount: Math.round(igstAmount),
      portDomesticPerUnit: Math.round(portDomesticPerUnit),
      totalLandedPerUnit: Math.round(totalLandedPerUnit),
      totalConsignmentInr: Math.round(totalConsignmentInr),
      totalSavingsInr: Math.round(totalSavingsInr),
      unitSavingsInr: Math.round(unitSavingsInr),
      savingsPercent,
      claimableItcTotal: Math.round(igstAmount * quantity)
    };
  }, [unitCostRmb, quantity, shippingMode, activePreset]);

  const handleApplyToQuote = () => {
    const msg = encodeURIComponent(
      `Hello ImportNow! I calculated import feasibility for:\n\n` +
      `• Product: ${activePreset.name}\n` +
      `• Quantity: ${quantity} ${activePreset.unitName}\n` +
      `• Target Factory RMB: ¥${unitCostRmb}\n` +
      `• Est. Landed Unit Cost: ₹${calculations.totalLandedPerUnit.toLocaleString('en-IN')}\n` +
      `• Shipping Mode: ${shippingMode === 'sea' ? 'Ocean Freight (FCL/LCL)' : 'Air Cargo Express'}\n\n` +
      `Please connect me with a sourcing director to review factory suppliers and confirm shipment timeline.`
    );
    window.open(`https://wa.me/919989724320?text=${msg}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-white relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>Interactive Duty & Cost Estimator</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Calculate your landed import cost.{' '}
            <span className="text-[#D32F2F]">To the exact Rupee.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            See the exact breakdown of Chinese factory prices, customs duties (BCD + SWS), claimable GST input credit, ocean freight, and your net commercial savings.
          </p>
        </div>

        {/* Preset Selectors */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3 text-center sm:text-left">
            Select a Benchmark Product Preset:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {PRESETS.map((p, idx) => {
              const isSelected = selectedPresetIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(idx)}
                  className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#111111] text-white border-[#111111] shadow-md scale-[1.02]'
                      : 'bg-[#F5F5F7] text-gray-800 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold block mb-1 ${
                    isSelected ? 'text-red-400' : 'text-[#D32F2F]'
                  }`}>
                    {p.hub}
                  </span>
                  <span className="leading-snug block line-clamp-2">{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Calculator Grid (Input Left, Dynamic Receipt Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Parameters (6 cols) */}
          <div className="lg:col-span-6 bg-[#F5F5F7] rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <h3 className="font-display font-extrabold text-xl text-[#111111]">
                  {activePreset.name}
                </h3>
                <span className="text-xs text-gray-500 font-mono">
                  HS Code: {activePreset.hsCode} · BCD: {activePreset.bcdPercent}% · IGST: {activePreset.igstPercent}%
                </span>
              </div>
              <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-gray-200">
                1 RMB ≈ ₹{RMB_TO_INR_RATE}
              </span>
            </div>

            {/* Slider / Input 1: Quantity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Order Quantity
                </label>
                <span className="font-display font-black text-lg text-gray-900">
                  {quantity} {activePreset.unitName}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={Math.max(100, activePreset.typicalQty * 4)}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full accent-[#D32F2F] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>1 unit (Sample)</span>
                <span>{activePreset.typicalQty} (Standard Batch)</span>
                <span>{activePreset.typicalQty * 4} (Container)</span>
              </div>
            </div>

            {/* Input 2: Factory Gate Price in RMB */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Factory Price in RMB (¥)
                </label>
                <span className="text-xs text-gray-500 font-medium">
                  ≈ ₹{Math.round(unitCostRmb * RMB_TO_INR_RATE).toLocaleString('en-IN')} / unit
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500 text-sm">
                  ¥
                </span>
                <input
                  type="number"
                  min="1"
                  value={unitCostRmb}
                  onChange={(e) => setUnitCostRmb(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm font-bold text-[#111111] focus:ring-2 focus:ring-[#D32F2F] outline-none"
                />
              </div>
            </div>

            {/* Option 3: Shipping Mode */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2">
                Freight Transit Corridor
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setShippingMode('sea')}
                  className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    shippingMode === 'sea'
                      ? 'bg-white border-[#D32F2F] text-gray-950 shadow-sm ring-1 ring-red-500/20'
                      : 'bg-white/60 border-gray-200 text-gray-600 hover:bg-white'
                  }`}
                >
                  <span className="block font-display font-extrabold text-sm mb-0.5">🚢 Ocean Freight</span>
                  <span className="text-[11px] text-gray-500 font-normal">25–35 Days · Best for Bulk & Heavy</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingMode('air')}
                  className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    shippingMode === 'air'
                      ? 'bg-white border-[#D32F2F] text-gray-950 shadow-sm ring-1 ring-red-500/20'
                      : 'bg-white/60 border-gray-200 text-gray-600 hover:bg-white'
                  }`}
                >
                  <span className="block font-display font-extrabold text-sm mb-0.5">✈️ Air Express Cargo</span>
                  <span className="text-[11px] text-gray-500 font-normal">7–9 Days · Fast High Value Transit</span>
                </button>
              </div>
            </div>

            {/* Trust callout */}
            <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-200/70 text-xs text-blue-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
              <span>
                <strong>100% Legal GST Input Credit:</strong> The ₹{calculations.igstAmount.toLocaleString('en-IN')} IGST calculated per unit is legally claimable as Input Tax Credit (ITC) on your GST portal.
              </span>
            </div>

          </div>

          {/* Right Column: Calculated Commercial Statement (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xl flex flex-col justify-between">
            
            <div>
              {/* Savings Highlight Banner */}
              <div className="bg-gradient-to-tr from-emerald-600 to-green-600 text-white p-5 rounded-2xl mb-6 shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100 block">
                    Total Estimated Savings
                  </span>
                  <span className="font-display font-black text-2xl sm:text-3xl tracking-tight">
                    ₹{calculations.totalSavingsInr.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-emerald-100 block mt-0.5">
                    Save ~₹{calculations.unitSavingsInr.toLocaleString('en-IN')} per unit ({calculations.savingsPercent}% lower than Indian retail)
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-6 h-6 text-white stroke-[2.5]" />
                </div>
              </div>

              {/* Itemized Line-by-Line Breakdown Table */}
              <div className="space-y-3 text-xs pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Factory Gate Cost (China):</span>
                  <span className="font-mono font-bold text-gray-900">
                    ₹{calculations.unitFactoryInr.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Freight & Port Logistics:</span>
                  <span className="font-mono font-bold text-gray-900">
                    ₹{calculations.unitFreightInr.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Basic Customs Duty ({activePreset.bcdPercent}% BCD):</span>
                  <span className="font-mono font-bold text-gray-900">
                    + ₹{calculations.bcdAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Social Welfare Surcharge (10% of BCD):</span>
                  <span className="font-mono font-bold text-gray-900">
                    + ₹{calculations.swsAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg">
                  <span className="font-medium">IGST (18% - Fully Claimable as ITC):</span>
                  <span className="font-mono font-bold">
                    + ₹{calculations.igstAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Port Clearance & Doorstep Transit:</span>
                  <span className="font-mono font-bold text-gray-900">
                    + ₹{calculations.portDomesticPerUnit.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Net Landed Unit Cost vs Indian Retail Benchmark */}
              <div className="pt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Total Landed Cost / Unit:</span>
                    <span className="font-display font-black text-2xl text-[#111111]">
                      ₹{calculations.totalLandedPerUnit.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-gray-500 font-medium block">Indian Retail Showroom Price:</span>
                    <span className="font-display font-bold text-xl text-gray-400 line-through">
                      ₹{activePreset.indiaRetailInr.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#F5F5F7] rounded-xl flex items-center justify-between text-xs">
                  <span className="text-gray-600">Total Consignment (x{quantity} units):</span>
                  <span className="font-display font-extrabold text-sm text-[#111111]">
                    ₹{calculations.totalConsignmentInr.toLocaleString('en-IN')} Landed
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Pre-fill Action Button */}
            <div className="pt-6">
              <button
                onClick={handleApplyToQuote}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#111111] hover:bg-black text-white text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Import this at ₹{calculations.totalLandedPerUnit.toLocaleString('en-IN')} Landed →</span>
                <ArrowRight className="w-4 h-4 text-[#D32F2F]" />
              </button>
              <span className="text-[11px] text-gray-400 text-center block mt-2">
                Transfers exact product specifications directly into WhatsApp inquiry
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
