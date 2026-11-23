import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, FileText, Download, Printer } from 'lucide-react';

export default function InspectionModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#111111] text-white">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-display font-bold text-sm sm:text-base">
              AQL 2.5 Factory Inspection & QC Report (Sample)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Report Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6 text-gray-900">
          
          {/* Header Metadata */}
          <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D32F2F]">
                Inspection Audit Ref: INSP-2026-FOS-9821
              </span>
              <h3 className="font-display font-extrabold text-xl text-gray-950 mt-0.5">
                Dual-Motor Height-Adjustable Desk Batch
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Audited by: <strong>Shanghai Shengqiao Chain Trading Co., Ltd. (QC Division)</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] text-gray-500 block uppercase font-mono">Final Decision:</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PASSED (AQL 2.5)
                </span>
              </div>
            </div>
          </div>

          {/* Audit Scope Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-gray-200">
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Factory Location</span>
              <span className="font-bold text-gray-900">Shunde, Foshan, CN</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200">
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Batch Size</span>
              <span className="font-bold text-gray-900">500 Sets (1x 40HQ)</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200">
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Sample Inspected</span>
              <span className="font-bold text-gray-900">125 Random Units</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200">
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Container Bolt Seal</span>
              <span className="font-bold text-gray-900">#SHA-CN-884920</span>
            </div>
          </div>

          {/* AQL Defect Analysis Table */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-700 mb-2">
              1. AQL 2.5 Defect Classification & Tolerance
            </h4>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F5F5F7] border-b border-gray-200 text-gray-600 font-semibold">
                  <tr>
                    <th className="p-3">Defect Category</th>
                    <th className="p-3">Allowed Max</th>
                    <th className="p-3">Found Count</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Inspector Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-semibold text-red-600">Critical Defects</td>
                    <td className="p-3">0</td>
                    <td className="p-3 font-bold">0</td>
                    <td className="p-3 text-emerald-600 font-bold">PASS</td>
                    <td className="p-3 text-gray-500">Zero safety/electrical short-circuit risks found.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-amber-600">Major Defects</td>
                    <td className="p-3">7</td>
                    <td className="p-3 font-bold">1</td>
                    <td className="p-3 text-emerald-600 font-bold">PASS</td>
                    <td className="p-3 text-gray-500">1 motor controller had a loose connector clip; factory replaced immediately.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-600">Minor Defects</td>
                    <td className="p-3">14</td>
                    <td className="p-3 font-bold">3</td>
                    <td className="p-3 text-emerald-600 font-bold">PASS</td>
                    <td className="p-3 text-gray-500">Subtle outer carton scuffing during pallet transit. Internal foam intact.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Physical Stress & Performance Tests */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-700 mb-2">
              2. On-Site Physical Stress & Functional Tests
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Motor Height Cycle Test (50 cycles):</strong>
                  <span className="text-gray-600">Smooth ascent/descent from 65cm to 125cm with 100kg load. Noise &lt; 48dB.</span>
                </div>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Anti-Collision Gyro Sensor Check:</strong>
                  <span className="text-gray-600">Desk automatically halted and reversed 2cm when obstructed. 100% pass.</span>
                </div>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Drop & Packaging Stress Test (ISTA 1A):</strong>
                  <span className="text-gray-600">Packaged carton dropped from 80cm on 6 sides and 1 corner. Zero internal panel damage.</span>
                </div>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Powder Coating Adhesion (Cross-Hatch):</strong>
                  <span className="text-gray-600">Cross-hatch tape test on steel frame rated ISO Class 0 (Zero flaking).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Red Seal / Chop Certification Footer */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              <span className="font-semibold text-gray-900 block font-display">
                Certified by Senior Inspector Chen Wei (陈伟)
              </span>
              <span>Chief Quality Auditor · Shanghai Shengqiao Chain Trading Co., Ltd.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Report</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-black cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
