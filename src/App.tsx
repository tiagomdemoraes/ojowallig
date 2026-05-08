/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Users, 
  ShoppingCart, 
  Award, 
  Wrench, 
  Glasses, 
  ScanFace,
  DollarSign,
  ArrowRight,
  TrendingDown,
  Package,
  Zap,
  Target,
  Handshake,
  MessageSquare
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LabelList
} from 'recharts';
import { SLIDES_DATA, type Slide } from './constants';
import { cn } from './lib/utils';

// --- DATA FOR CHARTS ---

const financialData = [
  { month: 'Out/25', value: 85455.00, color: '#FFDD00' },
  { month: 'Nov/25', value: 81271.30, color: '#FFDD00' },
  { month: 'Dez/25', value: 86617.03, color: '#FFDD00' },
  { month: 'Jan/26', value: 93944.98, color: '#FFDD00' },
  { month: 'Fev/26', value: 59079.00, color: '#FFDD00' },
  { month: 'Mar/26', value: 92326.00, color: '#FFDD00' },
  { month: 'Abr/26', value: 60824.00, color: '#FFDD00' },
  { month: 'Custo Fixo', value: 59667.87, color: '#EF4444' },
];

const valueVsPriceData = [
  { label: 'Investimento Original', value: 730000, color: '#333333' },
  { label: 'Proposta Final', value: 600000, color: '#FFD200' },
];

const benchmarkingData = [
  { unit: 'Bourbon Wallig (Unidade Atual)', value: 79931, color: '#FFD200' },
  { unit: 'Concorrentes (Wallig)', value: 140000, color: '#52525b' },
  { unit: 'Shopping Bourbon Ipiranga', value: 180000, color: '#FFDD00' },
  { unit: 'Shopping Barra', value: 300000, color: '#FFDD00' },
  { unit: 'Shopping Iguatemi', value: 800000, color: '#FFDD00' },
];

// --- COMPONENTS ---

const Slide01_Capa = ({ slide }: { slide: Slide }) => (
  <div className="flex flex-col lg:flex-row h-full">
    {/* Left Column - Branding */}
    <div className="w-full lg:w-1/3 bg-ojo-yellow text-ojo-black p-10 flex flex-col justify-between items-center text-center relative border-r border-ojo-black/10">
      <div className="space-y-6 pt-10">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Exclusividade</p>
        <div className="space-y-2">
          <h1 className="text-7xl font-black leading-[0.8] tracking-tighter italic font-display">
            OJO<br />BY MR.<br />RAY
          </h1>
          <div className="h-2 w-20 bg-ojo-black mx-auto mt-6" />
        </div>
      </div>

      <div className="space-y-8 w-full max-w-[280px]">
        <div className="bg-ojo-black text-white p-8 rounded-[2rem] shadow-xl border border-white/5">
          <div className="space-y-2">
            <p className="text-2xl font-black italic uppercase leading-none">Unidade Pronta & Lucrativa</p>
          </div>
          <div className="h-px bg-white/10 w-full my-6" />
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Status</p>
            <p className="text-xl font-black text-white uppercase tracking-tighter">Operação Maturada</p>
          </div>
        </div>
        <p className="text-sm font-bold leading-tight uppercase tracking-tight">
          {slide.subtexto}
        </p>
      </div>
    </div>

    {/* Right Column - Hero Statement */}
    <div className="flex-1 bg-zinc-950 p-12 lg:p-24 flex items-center justify-center">
      <div className="max-w-3xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 bg-ojo-yellow text-ojo-black text-xs font-black uppercase tracking-widest italic rounded-full mb-4">
            Hot Opportunity
          </span>
          <h2 className="text-6xl lg:text-8xl font-black font-display uppercase leading-none tracking-tighter italic">
            {slide.texto_destaque}
          </h2>
          <div className="flex items-center gap-6 pt-8">
            <div className="h-px flex-1 bg-zinc-800" />
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Porto Alegre • RS</p>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide02_Localizacao = ({ slide }: { slide: Slide }) => (
  <div className="flex h-full bg-zinc-950 p-10 flex-col lg:flex-row gap-8">
    <div className="lg:w-1/2 flex flex-col justify-center gap-8">
      <div className="space-y-4">
        <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">02. Localização</span>
        <h2 className="text-6xl font-black font-display uppercase leading-none tracking-tighter italic">BOURBON<br />WALLIG</h2>
      </div>

      <div className="grid gap-4">
        {slide.dados_chave?.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="bg-zinc-900 rounded-[2rem] p-6 border border-zinc-800 flex gap-4 items-start"
          >
             <div className="w-10 h-10 shrink-0 bg-ojo-yellow rounded-2xl flex items-center justify-center text-ojo-black">
               <MapPin className="w-5 h-5" />
             </div>
             <div className="space-y-1">
               <span className="block font-black text-white uppercase text-base tracking-tight">{item.split(': ')[0].replace('📍 ', '').replace('👥 ', '').replace('🛒 ', '')}</span>
               <span className="text-zinc-400 text-sm leading-relaxed">{item.split(': ')[1]}</span>
             </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="lg:w-1/2 h-full">
      <div className="h-full bg-zinc-900 rounded-[2.5rem] border border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ojo-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ojo-yellow opacity-60">High Traffic Zone</span>
            <div className="text-4xl font-black tracking-tighter uppercase italic">Fluxo<br />Estratégico</div>
          </div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 mt-8">
           <img 
            src="/src/assets/images/regenerated_image_1778167477258.png" 
            alt="Bourbon Wallig" 
            className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-3 h-3 bg-ojo-yellow rounded-full animate-ping" />
            <span className="text-xs font-black uppercase tracking-widest">Bourbon Shopping Wallig</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide03_Marca = ({ slide }: { slide: Slide }) => (
  <div className="h-full flex flex-col bg-zinc-950 overflow-hidden p-10">
    <div className="mb-10">
      <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">03. O Poder da Marca</span>
      <h2 className="text-6xl font-black font-display uppercase leading-none tracking-tighter italic">MARCA<br />LÍDER</h2>
    </div>

    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {slide.pontos_fortes?.map((ponto, idx) => {
        const icons = [<Award />, <Wrench />, <Glasses />, <ScanFace />];
        return (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col justify-between p-8 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 hover:border-ojo-yellow/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-ojo-yellow/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ojo-yellow text-ojo-black mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {React.cloneElement(icons[idx] as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="font-black text-xl mb-3 text-white leading-tight uppercase italic tracking-tight">
                {ponto.split(': ')[0].replace('🏆 ', '').replace('🔧 ', '').replace('🕶️ ', '').replace('🔬 ', '')}
              </h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                {ponto.split(': ')[1]}
              </p>
            </div>
            <div className="mt-6 text-[10px] font-black text-ojo-yellow uppercase opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {idx === 2 ? 'Exclusive Design' : 'Premium Standard'}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const Slide04_Design = ({ slide }: { slide: Slide }) => (
  <div className="h-full flex flex-col bg-zinc-950 p-10 font-sans">
    <div className="mb-8">
      <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">04. Design & Infraestrutura</span>
      <h2 className="text-6xl font-black font-display uppercase leading-none tracking-tighter italic text-white">AMBIENTE<br />PREMIUM</h2>
    </div>

    <div className="flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {[
          { 
            src: "/src/assets/images/regenerated_image_1778169802347.jpg", 
            label: "Fachada Principal",
            desc: slide.pontos_fortes?.[1]
          },
          { 
            src: "/src/assets/images/regenerated_image_1778169802999.jpg", 
            label: "Experiência de Área",
            desc: slide.pontos_fortes?.[0]
          },
          { 
            src: "/src/assets/images/regenerated_image_1778170080298.jpg", 
            label: "Design & Padronagem",
            desc: slide.pontos_fortes?.[2]
          }
        ].map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group space-y-6"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl transition-all duration-500 group-hover:border-ojo-yellow/40">
              <img 
                src={img.src} 
                alt={img.label}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-4 text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <div className="w-1.5 h-1.5 bg-ojo-yellow rounded-full" />
                <h4 className="text-white font-black uppercase text-sm italic tracking-tight">{img.label}</h4>
              </div>
              <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest leading-relaxed">
                {img.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Slide05_Aceleracao = ({ slide }: { slide: Slide }) => (
  <div className="flex flex-col h-full bg-zinc-950 p-10 lg:p-20">
    <div className="mb-12">
      <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">05. Aceleração</span>
      <h2 className="text-6xl font-black font-display uppercase leading-none tracking-tighter italic">PLANO DE<br />EXPANSÃO</h2>
    </div>

    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
      {slide.estrategias?.map((est, idx) => {
        const icons = [<Zap />, <Target />, <TrendingUp />, <Handshake />];
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="flex items-center gap-8 p-10 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 group hover:border-ojo-yellow/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ojo-yellow/5 rounded-full blur-2xl group-hover:bg-ojo-yellow/10 transition-colors" />
            <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-ojo-yellow text-ojo-black flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg">
              {React.cloneElement(icons[idx] as React.ReactElement, { className: "w-10 h-10" })}
            </div>
            <div className="space-y-2">
              <span className="text-ojo-yellow font-black text-xs uppercase tracking-[0.3em] opacity-40 italic">Estrutura 0{idx + 1}</span>
              <p className="text-2xl text-white font-black tracking-tight leading-none uppercase italic">
                {est.substring(2)}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const Slide06_Benchmarking = ({ slide }: { slide: Slide }) => (
  <div className="flex h-full bg-zinc-950 p-10 flex-col lg:flex-row gap-12">
    <div className="lg:w-2/5 flex flex-col justify-center gap-10">
      <div className="space-y-4">
        <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">06. Benchmarking</span>
        <h2 className="text-6xl font-black font-display uppercase leading-none tracking-tighter italic">POTENCIAL<br />PROVADO</h2>
      </div>

      <div className="space-y-6">
        <p className="text-zinc-400 text-lg font-medium leading-relaxed italic">
          "{slide.subtexto}"
        </p>
        <div className="grid gap-4">
          {slide.metricas?.map((metrica, idx) => (
             <motion.div 
               key={idx}
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: idx * 0.1 }}
               className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl"
             >
               <div className="w-2 h-2 bg-ojo-yellow rounded-full" />
               <span className="text-sm font-black uppercase tracking-widest text-white/80">{metrica}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </div>

    <div className="lg:w-3/5 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8">
        <div className="bg-ojo-yellow/10 border border-ojo-yellow/20 px-4 py-2 rounded-2xl">
          <TrendingUp className="text-ojo-yellow w-6 h-6 animate-pulse" />
        </div>
      </div>

      <div className="mb-8">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ojo-yellow opacity-60">Revenue Performance</span>
        <div className="text-3xl font-black uppercase italic tracking-tighter">Comparativo da Rede (Porto Alegre)</div>
      </div>

      <div className="flex-1 min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={benchmarkingData} 
            layout="vertical" 
            margin={{ top: 20, right: 80, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={true} vertical={false} />
            <XAxis type="number" hide domain={[0, 950000]} />
            <YAxis 
              dataKey="unit" 
              type="category" 
              axisLine={false} 
              tickLine={false}
              fontSize={10}
              width={180}
              tick={{ fill: '#a1a1aa', fontWeight: 900, textTransform: 'uppercase' }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255, 221, 0, 0.05)' }}
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '1.5rem', border: '1px solid #27272a' }}
              itemStyle={{ color: '#FFDD00', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px' }}
              formatter={(value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            />
            <Bar dataKey="value" radius={[0, 20, 20, 0]} barSize={40}>
              <LabelList 
                dataKey="value" 
                position="right" 
                formatter={(val: number) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                fill="#ffffff"
                style={{ fontWeight: 900, fontSize: '10px', fontFamily: 'monospace' }}
                offset={15}
              />
              {benchmarkingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-ojo-yellow/10 flex items-center justify-center">
            <Users className="text-ojo-yellow w-5 h-5" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
            Faturamento Médio Mensal • <span className="text-white">Unidades Maturadas</span>
          </p>
        </div>
        <div className="text-[10px] font-black text-ojo-yellow uppercase bg-ojo-yellow/10 px-3 py-1 rounded-full border border-ojo-yellow/20">Maturidade Progressiva</div>
      </div>
    </div>
  </div>
);

const Slide07_Financeiro = ({ slide }: { slide: Slide }) => (
  <div className="flex h-full bg-zinc-950 p-10 flex-col lg:flex-row gap-8">
    <div className="lg:w-2/5 flex flex-col justify-center gap-10">
      <div className="space-y-4">
        <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">07. Saúde Financeira</span>
        <h2 className="text-6xl font-black font-display uppercase leading-none tracking-tighter italic">NÚMEROS<br />REAIS</h2>
      </div>

      <div className="space-y-6">
        {slide.metricas?.slice(0, 2).map((metrica, idx) => {
          const valuePart = metrica.split(': ')[1];
          const value = parseFloat(valuePart?.replace(/[^0-9,]/g, '').replace(',', '.') || '0');
          const peak = 93944.98;
          const percentage = (value / peak) * 100;
          return (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">{(metrica.split(': ')[0] || '').replace(/[💰📈]\s/, '')}</span>
                <span className="text-ojo-yellow text-2xl font-black tracking-tight">{metrica.split(': ')[1]}</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-ojo-yellow rounded-full shadow-[0_0_15px_rgba(255,221,0,0.5)]"
                />
              </div>
            </div>
          );
        })}
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          {slide.metricas?.slice(2).map((metrica, idx) => (
            <div key={idx} className="bg-zinc-900 p-6 rounded-[2rem] border border-zinc-800">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest block mb-2">{(metrica.split(': ')[0] || '').replace(/[📉📦]\s/, '')}</span>
              <span className="text-white text-lg font-black leading-tight block">{metrica.split(': ')[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="lg:w-3/5 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 p-12 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ojo-yellow opacity-60">Performance Report</span>
          <div className="text-3xl font-black uppercase italic tracking-tighter">Histograma de Vendas</div>
        </div>
        <BarChart3 className="w-10 h-10 text-ojo-yellow opacity-40 italic" strokeWidth={3} />
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={financialData} margin={{ top: 0, right: 0, left: 0, bottom: 20 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              fontSize={10} 
              fontFamily="monospace"
              tick={{ fill: '#666', fontWeight: 900 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'rgba(255, 221, 0, 0.05)' }}
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '1.5rem', border: '1px solid #27272a' }}
              itemStyle={{ color: '#FFDD00', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px' }}
              formatter={(value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            />
            <Bar dataKey="value" radius={[24, 24, 0, 0]} barSize={40}>
              {financialData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color === '#FFDD00' ? '#FFDD00' : '#EF4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-12 flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-2xl bg-ojo-yellow/10 flex items-center justify-center">
            <Zap className="text-ojo-yellow w-6 h-6" />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-zinc-400">
            Estoque Consignado: <span className="text-ojo-yellow">40% alavancagem</span>
          </p>
        </div>
        <div className="text-[10px] font-black text-ojo-yellow uppercase italic opacity-40">Ver DRE Auditoria</div>
      </div>
    </div>
  </div>
);

const Slide08_ValorPreco = ({ slide }: { slide: Slide }) => (
  <div className="flex flex-col items-center justify-center h-full bg-zinc-950 p-10 lg:p-20 text-center">
    <div className="max-w-5xl w-full space-y-16">
      <div className="space-y-4">
        <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">08. Valor vs Preço</span>
        <h2 className="text-6xl lg:text-8xl font-black font-display uppercase tracking-tighter italic leading-none">GANHO<br />IMEDIATO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 rounded-[2.5rem] border border-zinc-800 p-10 space-y-8 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <span className="text-zinc-500 text-xs font-black uppercase tracking-widest block">Original Investment</span>
            <div className="text-5xl font-black text-white italic tracking-tighter">R$ 730.000,00</div>
          </div>
          <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-zinc-700 rounded-full" />
          </div>
          <p className="text-zinc-500 text-[10px] font-bold uppercase italic">{slide.investimento_original}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-ojo-yellow rounded-[2.5rem] p-10 space-y-8 shadow-[0_0_80px_rgba(255,221,0,0.2)] text-ojo-black border-4 border-white/20 relative"
        >
          <div className="absolute top-6 right-6">
            <div className="px-3 py-1 bg-ojo-black text-ojo-yellow text-[10px] font-black uppercase tracking-widest italic rounded-full">Oferta Única</div>
          </div>
          <div className="space-y-2 text-ojo-black">
            <span className="text-ojo-black/60 text-xs font-black uppercase tracking-widest block">Proposta Final</span>
            <div className="text-6xl font-black italic tracking-tighter uppercase leading-none">R$ 600.000,00</div>
          </div>
          <div className="h-4 w-full bg-ojo-black/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full bg-ojo-black/20 rounded-full" 
            />
          </div>
          <p className="text-ojo-black font-black uppercase text-xl italic tracking-tight">Ganho de Patrimônio: R$ 130.000,00</p>
        </motion.div>
      </div>

    </div>
  </div>
);

const Slide09_ProximosPassos = ({ slide }: { slide: Slide }) => (
  <div className="flex flex-col lg:flex-row h-full">
    {/* Left Column - Recap */}
    <div className="w-full lg:w-1/3 bg-ojo-yellow text-ojo-black p-10 flex flex-col justify-between items-center text-center relative">
      <div className="space-y-6 pt-10">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 italic">Ultima Chamada</p>
        <div className="space-y-2">
          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter italic font-display uppercase">
            FECHAR<br />NEGÓCIO
          </h1>
          <div className="h-2 w-20 bg-ojo-black mx-auto mt-6" />
        </div>
      </div>

      <div className="w-full h-8 opacity-20 bg-repeating-linear-ojo-yellow" />
    </div>

    {/* Right Column - Action */}
    <div className="flex-1 bg-zinc-950 p-12 lg:p-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full space-y-12"
      >
        <div className="space-y-4">
           <span className="text-ojo-yellow text-xs font-black uppercase tracking-widest block italic underline">09. Próximo Passo</span>
           <h2 className="text-5xl lg:text-7xl font-black font-display uppercase leading-tight tracking-tighter italic">AGENDAR VISITA TÉCNICA</h2>
        </div>

        <div className="space-y-6">
          <div className="w-full p-10 bg-ojo-yellow text-ojo-black rounded-[2.5rem] font-black shadow-[0_0_50px_rgba(255,221,0,0.2)]">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Consultor Responsável</span>
                <p className="text-4xl tracking-tighter uppercase italic leading-none">Tiago Moraes</p>
              </div>
              <div className="h-px bg-ojo-black/10 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">WhatsApp / Celular</span>
                  <p className="text-xl tracking-tight leading-none uppercase">51 99458-2696</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">E-mail Direto</span>
                  <p className="text-xl tracking-tight leading-none lowercase">equipe@tiagomoraes.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 text-center opacity-30">
          <p className="text-[10px] font-black uppercase tracking-[0.5em]">
            Investment Opportunity 2026 • OJO by Mr. Ray
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < SLIDES_DATA.length ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlideContent = (slide: Slide, index: number) => {
    switch (index) {
      case 0: return <Slide01_Capa slide={slide} />;
      case 1: return <Slide02_Localizacao slide={slide} />;
      case 2: return <Slide03_Marca slide={slide} />;
      case 3: return <Slide04_Design slide={slide} />;
      case 4: return <Slide05_Aceleracao slide={slide} />;
      case 5: return <Slide06_Benchmarking slide={slide} />;
      case 6: return <Slide07_Financeiro slide={slide} />;
      case 7: return <Slide08_ValorPreco slide={slide} />;
      case 8: return <Slide09_ProximosPassos slide={slide} />;
      default: return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-sans selection:bg-ojo-yellow selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-ojo-yellow rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-ojo-yellow rounded-full blur-[120px]" />
      </div>

      {/* Progress Top Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div 
          className="h-full bg-ojo-yellow" 
          animate={{ width: `${((currentSlide + 1) / SLIDES_DATA.length) * 100}%` }}
        />
      </div>

      {/* App Header (Logo) */}
      {currentSlide !== 0 && (
         <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="fixed top-8 left-8 z-50 flex items-center gap-2"
         >
           <div className="bg-ojo-yellow text-ojo-black px-3 py-1 font-black leading-none text-xl tracking-tighter">OJO</div>
           <div className="text-[10px] uppercase font-black tracking-widest text-white/40 hidden md:block">Investment Opportunity</div>
         </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex gap-4">
        {currentSlide > 0 && (
          <button 
            onClick={prevSlide}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white hover:bg-zinc-800 transition-all shadow-xl"
            title="Voltar Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {currentSlide < SLIDES_DATA.length - 1 && (
          <button 
            onClick={nextSlide}
            className="p-4 bg-ojo-yellow text-ojo-black rounded-2xl hover:scale-105 transition-all shadow-xl font-black"
            title="Próximo Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderSlideContent(SLIDES_DATA[currentSlide]!, currentSlide)}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
