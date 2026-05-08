
export interface Slide {
  titulo: string;
  visual?: string;
  texto_destaque?: string;
  subtexto?: string;
  dados_chave?: string[];
  pontos_fortes?: string[];
  metricas?: string[];
  investimento_original?: string;
  proposta_final?: string;
  lucro_na_entrada?: string;
  estrategias?: string[];
  chamada_para_acao?: string;
  rodape?: string;
}

export const SLIDES_DATA: Slide[] = [
  {
    titulo: "01. CAPA: O INVESTIMENTO DO ANO",
    visual: "Fundo Amarelo Vibrante (OJO) com Logotipo em Preto no centro.",
    texto_destaque: "Aquisição de Unidade Operacional Maturada em Porto Alegre.",
    subtexto: "A melhor oportunidade de negócio do varejo óptico no Sul do Brasil."
  },
  {
    titulo: "02. LOCALIZAÇÃO PREMIUM: BOURBON WALLIG",
    visual: "Mapa de calor do shopping e foto da fachada da loja.",
    dados_chave: [
      "📍 Localização estratégica: Ao lado do Hipermercado Zaffari.",
      "👥 Fluxo Massivo: 20.000 pessoas circulando diariamente.",
      "🛒 Público Qualificado: O 'efeito Zaffari' garante clientes com alto poder de compra e recorrência."
    ]
  },
  {
    titulo: "03. O PODER DA MARCA OJO",
    visual: "Imagens de óculos Ray-Ban e do sistema OJO Atelier.",
    pontos_fortes: [
      "🏆 Maior revendedor Ray-Ban do Mundo.",
      "🔧 Única loja com Assistência Técnica Ray-Ban à pronta-entrega.",
      "🕶️ Marca Própria: Design exclusivo com alta margem de lucro (20% das vendas).",
      "🔬 Tecnologia Atelier: Óculos sob medida via escaneamento facial."
    ]
  },
  {
    titulo: "04. DESIGN E INFRAESTRUTURA",
    visual: "Galeria de fotos da unidade Bourbon Wallig.",
    subtexto: "Um ambiente projetado para a máxima conversão e experiência do cliente.",
    pontos_fortes: [
      "Arquitetura Moderna e Funcional.",
      "Mobiliário Premium de Alta Durabilidade.",
      "Iluminação Projetada para Destaque de Produtos."
    ]
  },
  {
    titulo: "05. PLANO DE ACELERAÇÃO (PROJEÇÃO R$ 160K)",
    visual: "Infográfico com 4 ícones de crescimento.",
    estrategias: [
      "1. Foco em Lentes Premium (Aumento de Ticket Médio).",
      "2. Expansão da Marca Própria (Aumento de Margem Bruta).",
      "3. Marketing Digital Geolocalizado (Atração de clientes do entorno).",
      "4. Parcerias B2B com empresas e convênios locais."
    ]
  },
  {
    titulo: "06. BENCHMARKING: POTENCIAL DE MERCADO",
    visual: "Gráfico comparativo de faturamento mensal das unidades da rede.",
    subtexto: "O Bourbon Wallig segue a mesma trajetória de crescimento das unidades mais maturadas da franquia.",
    metricas: [
      "Bourbon Wallig (Unidade Atual): R$ 80.000",
      "Concorrentes Wallig: R$ 140.000",
      "Shopping Bourbon Ipiranga: R$ 180.000",
      "Shopping Barra: R$ 300.000",
      "Shopping Iguatemi: R$ 800.000",
      "Todas as unidades com +3 anos de mercado."
    ]
  },
  {
    titulo: "07. SAÚDE FINANCEIRA REAL",
    visual: "Gráfico de barras mostrando o faturamento crescente.",
    metricas: [
      "💰 Faturamento Pico (Jan/26): R$ 93.944,98",
      "📈 Faturamento Médio: ~R$ 79.931,04",
      "📉 Custos Fixos Totais: R$ 59.667,87",
      "📦 Diferencial de Estoque: 40% das lentes pagas apenas após a venda (Consignado)."
    ]
  },
  {
    titulo: "08. VALOR VS. PREÇO (O GANHO IMEDIATO)",
    visual: "Comparativo direto de valores em formato de barras.",
    investimento_original: "R$ 730.000,00 (Obra + Estoque + Imobilizado)",
    proposta_final: "R$ 600.000,00",
    lucro_na_entrada: "R$ 130.000,00 de desconto no patrimônio + R$ 60.000,00 de isenção na Taxa de Franquia."
  },
  {
    titulo: "09. PRÓXIMOS PASSOS",
    visual: "Fundo Branco com botões de contato destacados.",
    chamada_para_acao: "Agendar visita técnica no Bourbon Wallig.",
    rodape: "Analise o DRE completo e assuma a operação imediatamente."
  }
];
