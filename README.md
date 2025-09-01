# 📱 AppVault – Download de Aplicativos (Android & iOS)

O **AppVault** é uma plataforma que permite baixar aplicativos para **Android (APK)** e **iOS (App Store)** de forma simples e segura.  
Com uma interface moderna, suporte a **tema claro/escuro** e **design responsivo**, o site organiza os apps em categorias, oferece sistema de busca e facilita o acesso rápido aos downloads.

---

## 🚀 Funcionalidades

- 🌗 **Tema Claro/Escuro** (controlado via `data-theme`)
- 📥 **Download de aplicativos** para **Android** e **iOS**
- 🔎 **Busca de aplicativos** integrada
- 🗂️ **Categorias organizadas** para melhor navegação
- 🎨 **Design system** baseado em variáveis CSS

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3** (custom properties / design system)
- **JavaScript** (tema e interações)

---

## 📂 Estrutura do Projeto

```
📦 appvault
 ┣ 📂 assets     
 ┃ ┗ 📂 image          # capturas de tela e previews
 ┣ 📂 css            # estilos (base.css, style.css, etc.)
 ┣ 📂 js             
 ┃ ┣ 📂 mobile       # scripts do menu mobile
 ┃ ┣ 📂 scroll       # scripts de scroll
 ┃ ┣ 📂 theme        # scripts do sistema de tema
 ┣ 📂 pages          # páginas (home, contact, detalhes do app)
 ┣ index.html        # página inicial
 ┗ README.md         # documentação do projeto
```

---

## ⚡ Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/appvault.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador.

---

## 🎨 Tema Claro/Escuro

O site utiliza um sistema baseado em variáveis CSS:

```html
<body data-theme="light"> <!-- ou "dark" -->
</body>
```

E alterna via JavaScript:

```js
document.body.setAttribute("data-theme", "dark")
```

---

## 📸 Preview

### 📱 Navegação Mobile  
Menu lateral responsivo com suporte a **tema claro/escuro** e **ícones sociais integrados**:  

![Menu Mobile](assets/img/menu-mobile.png)

---

*(Adicione aqui outras capturas de tela do site, como a tela inicial, busca de apps ou a página de categorias.)*

---

## 📄 Licença

Este projeto é **open source** sob a licença MIT.
