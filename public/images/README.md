# Organização das Imagens do Site

Esta pasta contém todas as imagens utilizadas no site da Startron.

## Estrutura de Pastas:

### `/logo`
- Logo da empresa em diferentes formatos e tamanhos
- Favicon
- Exemplos: `logo.png`, `logo.svg`, `favicon.ico`

### `/hero`
- Imagens principais da seção hero/banner
- Imagens de fundo
- Exemplos: `hero-bg.jpg`, `main-banner.png`

### `/services`
- Imagens relacionadas aos serviços oferecidos
- Fotos de equipamentos, ferramentas, trabalhos
- Exemplos: `alternador.jpg`, `motor-partida.jpg`, `ar-condicionado.jpg`

### `/gallery`
- Galeria de trabalhos realizados
- Fotos de antes e depois
- Imagens de projetos concluídos
- Exemplos: `projeto-01.jpg`, `trabalho-mineracao.jpg`

## Formatos Recomendados:

- **Logos**: SVG (vetorial) ou PNG com fundo transparente
- **Fotos**: JPG para fotos com muitas cores
- **Ícones/Ilustrações**: PNG ou SVG
- **Favicons**: ICO, PNG (16x16, 32x32, 192x192)

## Tamanhos Recomendados:

- **Hero/Banner**: 1920x1080px ou 1920x800px
- **Cards de Serviços**: 400x300px
- **Galeria**: 800x600px
- **Logo**: Múltiplos tamanhos (32px, 64px, 128px, 256px)

## Como Usar:

Para referenciar as imagens no código React, use:
```jsx
// Para imagens na pasta public
<img src="/images/logo/logo.png" alt="Logo Startron" />

// Ou para background em CSS
background-image: url('/images/hero/hero-bg.jpg');
```

## Otimização:

- Comprima as imagens antes de fazer upload
- Use formatos modernos como WebP quando possível
- Considere criar versões em diferentes tamanhos para responsividade
