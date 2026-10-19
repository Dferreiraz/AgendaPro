# 📅 AgendaPro

<p align="center">
  <strong>Organize seus agendamentos de forma profissional.</strong>
</p>

<p align="center">
  Plataforma web de gestão de agendamentos para pequenos negócios e profissionais autônomos.
</p>

<p align="center">
  <em>React • Vite • Tailwind CSS • PostgreSQL (planejado)</em>
</p>

---

## 📌 Sobre o Projeto

O **AgendaPro** é um projeto de desenvolvimento de uma plataforma web para simplificar a gestão de agendamentos, clientes e serviços de pequenos negócios.

A proposta é reunir, em uma interface organizada e intuitiva, as ferramentas necessárias para acompanhar atendimentos, administrar informações e reduzir a complexidade da organização diária.

O projeto está sendo desenvolvido de forma incremental: a interface inicial foi construída com HTML, CSS e JavaScript, e a próxima etapa consiste em reconstruir o front-end utilizando React, Vite e Tailwind CSS, com uma nova proposta visual e uma arquitetura baseada em componentes reutilizáveis.

Além do desenvolvimento técnico, o AgendaPro é planejado para evoluir de uma aplicação de gestão para uma solução comercializável, com possibilidades de personalização white label e, futuramente, um modelo SaaS.

## 🎯 Problema que o AgendaPro busca resolver

Pequenos negócios frequentemente precisam administrar clientes, serviços, horários e atendimentos sem uma ferramenta centralizada. Isso pode dificultar a organização da agenda, a consulta de informações e o acompanhamento da rotina.

O AgendaPro pretende facilitar esse processo por meio de:

- Centralização das informações de clientes.
- Organização dos serviços oferecidos.
- Controle dos agendamentos e seus status.
- Visualização resumida da operação.
- Interface acessível em diferentes dispositivos.
- Uma base preparada para novas funcionalidades.

O objetivo é tornar a gestão cotidiana mais simples, organizada e profissional.

## 👥 Público-alvo

O AgendaPro foi pensado principalmente para pequenos negócios e profissionais que trabalham com horários marcados, como:

- Barbearias e salões de beleza.
- Clínicas de estética.
- Consultórios.
- Psicólogos e nutricionistas.
- Dentistas.
- Estúdios e profissionais autônomos.
- Outros negócios que dependem de agendamentos.

A adequação a cada segmento dependerá das funcionalidades e regras de negócio implementadas.

## 💡 Proposta de valor

**Uma agenda organizada, uma gestão mais simples e uma plataforma preparada para crescer.**

O AgendaPro busca combinar uma experiência visual moderna com funcionalidades práticas para a rotina de atendimento.

Seus princípios são:

- **Simplicidade:** tornar as operações frequentes fáceis de executar.
- **Organização:** centralizar informações e facilitar a consulta.
- **Eficiência:** reduzir tarefas repetitivas e inconsistências.
- **Confiabilidade:** preservar a integridade dos dados e dos horários.
- **Inovação:** evoluir a plataforma de acordo com as necessidades dos negócios.

## 🎨 Identidade visual

A identidade do AgendaPro foi concebida para transmitir profissionalismo, organização e tecnologia.

### Conceito da marca

O símbolo da marca combina três ideias:

- **A:** representa Agenda.
- **Check:** representa confirmação e organização.
- **PRO:** reforça a proposta de uma solução profissional.

### Paleta de cores de referência

| Elemento | Cor |
|---|---|
| Cor primária | `#3B82F6` |
| Cor primária em hover | `#2563EB` |
| Fundo principal | `#0F172A` |
| Fundo de cards | `#1E293B` |
| Texto principal | `#F8FAFC` |
| Texto secundário | `#94A3B8` |

**Tipografia:** Inter, com possibilidade de revisão durante a construção do novo design system.

A paleta atual servirá de referência para o trabalho no Figma. Os tokens definitivos serão consolidados durante a Fase 2.

## 🧩 Funcionalidades

As funcionalidades abaixo representam o escopo planejado. A presença de um item nesta lista não significa que ele já esteja totalmente implementado.

### Interface e navegação

- Landing page de apresentação.
- Tela de login.
- Dashboard.
- Gestão de clientes.
- Gestão de serviços.
- Gestão de agendamentos.
- Configurações.
- Layout responsivo.

### Gestão operacional

- Cadastro e edição de clientes.
- Cadastro e edição de serviços.
- Criação e acompanhamento de agendamentos.
- Pesquisa e filtros.
- Validação de formulários.
- Controle de status.
- Prevenção de conflitos de horários.
- Indicadores operacionais.

### Evoluções planejadas

- Persistência em banco de dados.
- Autenticação e controle de acesso.
- Gestão de equipe.
- Configurações avançadas do negócio.
- Personalização white label.
- Planos e assinaturas SaaS.
- Notificações e integrações externas.
- Relatórios e recursos administrativos.

## 🛠️ Tecnologias

### Stack definida para a nova interface

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface por componentes |
| Vite | Desenvolvimento local e build |
| Tailwind CSS | Estilização e design system |
| JavaScript | Lógica do front-end |
| Git | Controle de versão |
| GitHub | Repositório e colaboração |

### Tecnologias previstas para a evolução

| Tecnologia ou recurso | Situação |
|---|---|
| PostgreSQL | Banco de dados planejado |
| Backend/API | Tecnologia a definir |
| Autenticação | Solução a definir |
| Supabase | Alternativa a avaliar |
| Hospedagem | A definir na etapa de implantação |
| Integrações de comunicação e pagamento | Etapas futuras |

As tecnologias futuras serão escolhidas conforme os requisitos de segurança, persistência, manutenção e evolução comercial.

## 🏗️ Arquitetura do projeto

O AgendaPro será construído com uma arquitetura modular, separando a interface, os componentes compartilhados e a comunicação com serviços externos.

A estrutura inicial proposta é:

```text
agendapro/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── feedback/
│   ├── pages/
│   ├── routes/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   ├── architecture.md
│   ├── requirements.md
│   └── ROADMAP.md
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Essa é uma estrutura de referência para a reconstrução do front-end. Ela poderá ser ajustada durante a implementação, de acordo com as necessidades reais do projeto.

### Entidades principais previstas

- **User:** pessoa que acessa a aplicação.
- **Business:** negócio que utiliza a plataforma.
- **Client:** cliente atendido.
- **Service:** serviço oferecido pelo negócio.
- **Appointment:** agendamento de um atendimento.
- **TeamMember:** integrante da equipe, previsto para uma etapa futura.

Os relacionamentos, atributos e restrições dessas entidades serão detalhados durante a modelagem do banco de dados.

### Princípios técnicos

- Componentes reutilizáveis e coesos.
- Separação de responsabilidades.
- Nomenclatura consistente.
- Validação dos dados.
- Integridade dos agendamentos.
- Segurança aplicada no backend.
- Isolamento de dados entre negócios.
- Evolução incremental da arquitetura.

Para conhecer os detalhes técnicos, consulte [`docs/architecture.md`](docs/architecture.md).

## 📐 Design e experiência do usuário

O novo front-end será planejado no Figma antes da reconstrução das páginas.

O trabalho de design deverá contemplar:

1. Revisão da identidade visual.
2. Definição do design system.
3. Hierarquia visual e tipografia.
4. Componentes e padrões de interface.
5. Navegação e estrutura das páginas.
6. Responsividade.
7. Estados de carregamento, erro, sucesso e ausência de dados.

As referências visuais incluem produtos como Linear, Vercel, Stripe e Notion, utilizadas como inspiração para organização, consistência e clareza — sem intenção de reproduzir suas interfaces.

## 🗺️ Roadmap de desenvolvimento

O desenvolvimento está organizado em fases para permitir a evolução gradual da aplicação.

### Fase 1 — Front-end inicial

**Status:** interface inicial desenvolvida.

Foi construída uma primeira versão visual utilizando HTML, CSS e JavaScript. Ela serve como referência para a reconstrução, mas não deve ser confundida com um sistema completo com persistência e regras de negócio implementadas.

### Fase 2 — Refatoração e novo front-end

**Próxima etapa.**

- Planejar o novo design no Figma.
- Configurar React, Vite e Tailwind CSS.
- Criar componentes reutilizáveis.
- Reconstruir as páginas existentes.
- Revisar navegação e responsividade.
- Estabelecer padrões de organização do código.

### Fase 3 — Interatividade e regras de negócio

- Implementar operações de clientes e serviços.
- Criar e editar agendamentos.
- Adicionar pesquisa e filtros.
- Validar formulários.
- Implementar estados dos agendamentos.
- Tratar conflitos de horários.

### Fase 4 — Banco de dados

- Modelar as entidades.
- Definir relacionamentos e restrições.
- Configurar PostgreSQL.
- Implementar persistência.
- Preservar a integridade dos dados.

### Fase 5 — Backend e API

- Definir a tecnologia do servidor.
- Implementar regras de negócio no backend.
- Criar endpoints para as operações.
- Validar dados e permissões.
- Documentar e testar a API.

### Fase 6 — Integração e autenticação

- Integrar o front-end com a API.
- Implementar autenticação.
- Proteger páginas e operações privadas.
- Integrar a persistência.
- Validar os fluxos completos.

### Fase 7 — AgendaPro White Label

- Permitir personalização da marca.
- Configurar informações de cada negócio.
- Definir a estratégia de implantação.
- Garantir o isolamento dos dados.

### Fase 8 — AgendaPro SaaS

- Evoluir para uma plataforma com múltiplos negócios.
- Definir perfis e permissões.
- Criar planos e limites.
- Implementar assinaturas e cobrança.
- Desenvolver administração da plataforma.

### Fase 9 — Recursos avançados

- Confirmações por e-mail.
- Integração com WhatsApp.
- Histórico de atendimentos.
- Relatórios.
- Google Calendar.
- Pagamentos online.
- Auditoria e recuperação de dados.

### Fase 10 — Produção e manutenção

- Configurar ambientes de produção.
- Implantar front-end e backend.
- Configurar domínio e HTTPS.
- Proteger variáveis de ambiente.
- Testar segurança e desempenho.
- Monitorar erros e manter a aplicação.

O acompanhamento detalhado das tarefas deverá ser realizado em [`docs/ROADMAP.md`](docs/ROADMAP.md).

## 📚 Documentação

| Documento | Descrição |
|---|---|
| [`docs/architecture.md`](docs/architecture.md) | Arquitetura do sistema, tecnologias, organização do código e decisões técnicas |
| [`docs/requirements.md`](docs/requirements.md) | Requisitos funcionais, não funcionais, regras de negócio e critérios de aceitação |
| [`docs/branding.md`](docs/branding.md) | Identidade da marca, conceito da logo, paleta de cores, tipografia, posicionamento e diretrizes visuais |


## 🚀 Como executar

Os comandos abaixo se aplicam à nova versão do front-end, depois que o projeto React + Vite estiver configurado e as dependências estiverem registradas no `package.json`.

### Pré-requisitos

- Node.js em uma versão LTS compatível com a versão do Vite utilizada.
- npm.
- Git.

### Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd agendapro
npm install
npm run dev
```

Substitua `<URL_DO_REPOSITORIO>` pela URL real do repositório.

O comando `npm run dev` iniciará o servidor de desenvolvimento. A URL local será exibida no terminal.

**Observação:** esses comandos descrevem o fluxo esperado da nova estrutura. A execução dependerá da configuração efetiva do projeto e dos scripts presentes no `package.json`. O backend e o banco de dados não fazem parte de um ambiente funcional até que sejam implementados e configurados.

## 🔀 Estratégia de evolução do produto

O plano de longo prazo está dividido em três estágios.

### 1. AgendaPro Base

A primeira versão funcional, com foco na gestão de clientes, serviços e agendamentos.

### 2. AgendaPro White Label

Uma solução que poderá ser personalizada para atender a identidade e as necessidades de diferentes negócios.

### 3. AgendaPro SaaS

Uma plataforma com múltiplos negócios, gestão de planos, permissões e assinaturas.

A evolução entre esses estágios dependerá da validação do produto, dos requisitos técnicos e das necessidades dos usuários.

## 🔐 Segurança, privacidade e qualidade

A evolução do AgendaPro deverá considerar:

- Proteção de informações pessoais.
- Controle de acesso a operações privadas.
- Validação de dados no servidor.
- Isolamento dos dados de cada negócio.
- Armazenamento seguro de credenciais e segredos.
- Testes de funcionalidades críticas.
- Estratégia de backup e recuperação.
- Conformidade com a legislação aplicável, incluindo a LGPD quando pertinente.

Esses pontos deverão ser implementados e verificados antes da disponibilização de uma versão de produção.

## 🤝 Contribuição e padrões de código

Durante o desenvolvimento, deverão ser mantidos padrões consistentes de nomenclatura e organização.

| Elemento | Padrão | Exemplo |
|---|---|---|
| Componentes React | PascalCase | `AppointmentCard` |
| Variáveis e funções | camelCase | `selectedAppointment` |
| Constantes | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Classes CSS | kebab-case | `appointment-card` |

Os commits devem descrever de forma objetiva as alterações realizadas. Mudanças relevantes de arquitetura, requisitos ou comportamento devem ser refletidas na documentação correspondente.

## 🎯 Objetivo final

Construir uma plataforma profissional de gestão de agendamentos, começando com uma base simples e bem estruturada e evoluindo para uma solução confiável, personalizável e comercialmente sustentável.

O AgendaPro será desenvolvido com foco em aprendizado prático, qualidade de código, experiência do usuário e evolução progressiva de um produto real.

---

<p align="center">
  <strong>AgendaPro — Sua agenda, mais inteligente.</strong>
</p>
