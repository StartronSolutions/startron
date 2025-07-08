# Logo Placeholder

Para que o site funcione corretamente, você precisa colocar os arquivos de logo da empresa nesta pasta:

## Arquivos necessários:

### **logoST.svg** (obrigatório)
- **Uso**: Logo principal no header e footer
- **Formato**: SVG (vetorial - qualidade infinita)
- **Vantagens**: Escalável, leve, qualidade perfeita em qualquer tamanho

### **favicon.png** (recomendado)
- **Uso**: Ícone na aba do navegador
- **Tamanho**: 32x32px ou 16x16px
- **Formato**: PNG ou ICO

## Especificações do SVG:

- **Formato**: SVG otimizado
- **Cores**: Preferencialmente usando código de cores
- **Tamanho**: Arquivo leve (idealmente < 50KB)
- **Compatibilidade**: Moderno e responsivo

## Como substituir:

1. Coloque sua imagem de logo SVG nesta pasta
2. Renomeie para `logoST.svg` e coloque `favicon.png`
3. Se usar formatos diferentes, atualize os caminhos em:
   - `src/components/Header.jsx`
   - `src/components/Footer.jsx`
   - `index.html` (para favicon)

## Formatos alternativos:

- `logoST.png` - Backup em PNG se necessário
- `logoST-light.svg` - Versão clara para fundos escuros
- `logoST-dark.svg` - Versão escura para fundos claros
- `favicon.ico` - Formato tradicional de favicon

**Configuração atual:**
- Logo: `/images/logo/logoST.svg`
- Favicon: `/images/logo/favicon.png`

## Vantagens do SVG:
✅ Qualidade perfeita em qualquer tamanho
✅ Arquivo menor que PNG/JPG
✅ Escalável sem perda de qualidade
✅ Suporte a animações (se necessário)
✅ Editável com código
