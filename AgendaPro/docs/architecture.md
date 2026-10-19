# AgendaPro — Arquitetura do Sistema

## 1. Visão Geral

O AgendaPro é uma plataforma de gestão de agendamentos desenvolvida para pequenos negócios e profissionais que precisam organizar clientes, serviços, horários e atendimentos.

O projeto será desenvolvido de forma incremental, começando por uma aplicação web com interface moderna e evoluindo para um sistema com persistência de dados, autenticação, API e possibilidade de comercialização como solução white label e SaaS.

A arquitetura deve priorizar:

- Separação de responsabilidades.
- Componentes reutilizáveis.
- Manutenibilidade e legibilidade do código.
- Segurança e integridade dos dados.
- Evolução gradual sem reconstruções desnecessárias.
- Possibilidade futura de atender múltiplos negócios.

## 2. Objetivos Arquiteturais

1. Reconstruir o front-end com uma arquitetura baseada em componentes React.
2. Estabelecer uma identidade visual consistente com Tailwind CSS e um design system.
3. Separar a interface, as regras de negócio e o acesso aos dados.
4. Preparar a aplicação para integração com um backend e banco de dados.
5. Evitar acoplamento desnecessário entre telas e serviços externos.
6. Planejar a evolução para white label e SaaS sem implementar antecipadamente toda essa complexidade.

## 3. Tecnologias

### 3.1. Tecnologias definidas para a Fase 2

| Tecnologia | Responsabilidade |
|---|---|
| React | Construção da interface por componentes |
| Vite | Ambiente de desenvolvimento e build |
| Tailwind CSS | Estilização e implementação do sistema visual |
| JavaScript | Linguagem inicial do front-end |
| Git | Controle de versão |
| GitHub | Hospedagem do repositório e colaboração |

O uso de TypeScript poderá ser avaliado futuramente, mas não faz parte das decisões obrigatórias desta fase.

### 3.2. Tecnologias previstas para etapas futuras

| Tecnologia ou recurso | Situação |
|---|---|
| PostgreSQL | Banco de dados relacional planejado |
| Backend/API | Tecnologia ainda a definir |
| Autenticação | Solução ainda a definir |
| Hospedagem do front-end | A definir durante a preparação para produção |
| Hospedagem do backend | A definir após a escolha da arquitetura |
| Serviço de e-mail e WhatsApp | Avaliação futura |
| Pagamentos e assinaturas | Avaliação para a fase SaaS |

Supabase poderá ser avaliado como solução gerenciada para banco de dados, autenticação e outros recursos. A escolha dependerá das necessidades técnicas e comerciais.

## 4. Visão da Arquitetura

A arquitetura evoluirá em etapas.

### Etapa A — Front-end reconstruído

React + Vite + Tailwind CSS.

Nesta etapa, a aplicação terá as páginas, componentes, navegação e estados visuais necessários para estabelecer a nova experiência de uso.

Os dados poderão ser simulados ou mantidos temporariamente no cliente quando necessário para desenvolver e demonstrar os fluxos. Isso não será considerado persistência definitiva.

### Etapa B — Aplicação integrada

Front-end React → API/backend → PostgreSQL.

O front-end será responsável pela apresentação e interação com o usuário. O backend será responsável por validar operações, aplicar regras de negócio, controlar permissões e acessar os dados.

O navegador não deverá acessar diretamente credenciais administrativas do banco de dados.

### Etapa C — Evolução comercial

A arquitetura poderá evoluir para suportar:

- Diferentes negócios e suas configurações.
- Identidade visual personalizada.
- Usuários, equipes e permissões.
- Planos e limites de utilização.
- Assinaturas e cobrança recorrente.
- Recursos adicionais de integração.

Esses recursos serão implementados conforme os requisitos forem definidos.

## 5. Organização do Front-end

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

Esta é uma estrutura inicial de referência, não uma exigência de que todas as pastas sejam criadas imediatamente. Pastas vazias ou abstrações sem necessidade não devem ser adicionadas antecipadamente.

### Responsabilidades dos diretórios

- `assets/`: imagens, logos e arquivos estáticos importados.
- `components/ui/`: componentes visuais reutilizáveis, como botões, campos e cards.
- `components/layout/`: estruturas compartilhadas, como sidebar e cabeçalho.
- `components/feedback/`: componentes para mensagens, carregamento e estados de retorno.
- `pages/`: páginas associadas às rotas.
- `routes/`: configuração e organização da navegação.
- `hooks/`: hooks personalizados, quando houver necessidade.
- `services/`: comunicação com API e serviços externos.
- `utils/`: funções auxiliares reutilizáveis.
- `data/`: dados de demonstração ou mocks temporários.
- `styles/`: estilos globais e configurações complementares.

## 6. Padrões de Desenvolvimento

### 6.1. Nomenclatura

| Elemento | Convenção | Exemplo |
|---|---|---|
| Componentes React | PascalCase | `AppointmentCard.jsx` |
| Variáveis e funções | camelCase | `selectedAppointment` |
| Constantes | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Classes CSS | kebab-case | `appointment-card` |
| Arquivos de componentes | PascalCase | `Dashboard.jsx` |

Os nomes devem expressar a responsabilidade do elemento, e não apenas sua aparência.

### 6.2. Componentização

Componentes devem ser reutilizados quando representarem elementos ou comportamentos compartilhados.

Exemplos:

- `Button`
- `Input`
- `Modal`
- `StatCard`
- `Sidebar`
- `PageHeader`
- `DataTable`
- `EmptyState`
- `LoadingState`

A abstração deve acompanhar uma necessidade real. Não é necessário criar componentes genéricos para elementos utilizados uma única vez quando isso aumentar a complexidade sem benefício.

### 6.3. Separação de responsabilidades

- Páginas organizam o conteúdo de cada tela.
- Componentes implementam partes reutilizáveis da interface.
- Serviços encapsulam comunicação com APIs.
- Utilitários concentram funções auxiliares independentes.
- Regras de negócio devem permanecer organizadas e não espalhadas indiscriminadamente pelos componentes visuais.

## 7. Design System

O novo front-end deverá utilizar um sistema visual consistente.

### Identidade visual de referência

| Token | Valor |
|---|---|
| Cor primária | `#3B82F6` |
| Cor primária em hover | `#2563EB` |
| Fundo principal | `#0F172A` |
| Fundo de cards | `#1E293B` |
| Texto principal | `#F8FAFC` |
| Texto secundário | `#94A3B8` |
| Tipografia | Inter |

Esses valores são a base visual existente. A Fase 2 deverá revisá-los durante o trabalho no Figma, antes de consolidar os tokens definitivos.

O design system deverá definir:

- Cores semânticas.
- Tipografia e hierarquia de títulos.
- Espaçamentos.
- Bordas e raios.
- Sombras.
- Estados de botões e campos.
- Componentes de navegação.
- Estados de carregamento, erro, sucesso e ausência de dados.
- Comportamento responsivo.

## 8. Modelo de Domínio

As principais entidades previstas são:

### User
Representa uma pessoa que acessa o sistema.

### Business
Representa o negócio que utiliza a plataforma.

### Client
Representa um cliente atendido pelo negócio.

### Service
Representa um serviço oferecido, com informações como nome, duração e preço.

### Appointment
Representa um agendamento, relacionando cliente, serviço, horário e situação.

### TeamMember
Representa um integrante da equipe, previsto para uma etapa futura.

As entidades ainda precisarão de atributos, relacionamentos, restrições e regras de integridade definidos na modelagem do banco de dados.

### Relacionamentos conceituais

- Um negócio poderá possuir vários clientes.
- Um negócio poderá cadastrar vários serviços.
- Um negócio poderá possuir vários agendamentos.
- Um agendamento deverá estar associado ao cliente e ao serviço correspondentes.
- A associação de profissionais aos agendamentos será detalhada quando a gestão de equipe for implementada.

O modelo definitivo será documentado junto à implementação do banco de dados.

## 9. Regras de Integridade e Agendamento

O backend deverá validar as operações que alterem dados persistidos.

Entre as regras previstas:

- Um agendamento deverá possuir data e horário válidos.
- Cliente e serviço deverão existir e estar acessíveis ao negócio responsável.
- A duração do serviço deverá ser considerada na análise de conflitos.
- Agendamentos incompatíveis com a disponibilidade definida não deverão ser aceitos.
- Alterações de status deverão respeitar as regras definidas para o ciclo de vida do agendamento.
- Os dados de um negócio não poderão ser acessados por outro negócio sem autorização explícita.

As regras exatas de disponibilidade, cancelamento, reagendamento e recorrência serão especificadas antes da implementação correspondente.

## 10. Segurança e Isolamento de Dados

A segurança deverá ser incorporada desde a integração com o backend.

Requisitos arquiteturais:

- Validar dados recebidos pelo servidor.
- Aplicar autorização no backend, e não somente na interface.
- Proteger rotas e operações privadas.
- Armazenar segredos em variáveis de ambiente apropriadas.
- Não expor credenciais administrativas no código do navegador.
- Restringir consultas e alterações aos dados autorizados.
- Registrar erros sem expor informações sensíveis.
- Planejar backups e recuperação de dados antes da produção.

Na evolução para white label e SaaS, o isolamento entre negócios será um requisito crítico. A estratégia de isolamento — lógica, por políticas de acesso ou por separação de bancos — deverá ser escolhida conforme a arquitetura final.

## 11. Estratégia de Testes

A cobertura de testes será ampliada conforme a aplicação ganhar funcionalidades.

- **Testes de componentes:** comportamento e estados da interface.
- **Testes unitários:** funções e regras de negócio isoladas.
- **Testes de integração:** comunicação entre módulos e API.
- **Testes de ponta a ponta:** fluxos essenciais do usuário.
- **Testes responsivos e de acessibilidade:** usabilidade em diferentes dispositivos e condições de interação.

A ferramenta de testes será definida quando o projeto React estiver configurado.

## 12. Estratégia de Evolução

A implementação seguirá esta sequência:

1. Planejar o novo design no Figma.
2. Configurar React, Vite e Tailwind CSS.
3. Construir os componentes compartilhados.
4. Reconstruir as páginas e validar a responsividade.
5. Implementar as regras de negócio e os fluxos interativos.
6. Modelar e configurar o banco de dados.
7. Definir e implementar o backend/API.
8. Integrar autenticação e persistência.
9. Preparar recursos de white label.
10. Avaliar a evolução para SaaS.
11. Implantar, monitorar e manter a aplicação.

## 13. Decisões Pendentes

As seguintes decisões não estão fechadas:

- Backend: tecnologia e framework.
- Estratégia de autenticação.
- Uso de Supabase ou de uma infraestrutura própria.
- Biblioteca de roteamento e demais dependências do front-end.
- Ferramentas de testes.
- Modelo de hospedagem.
- Estratégia de isolamento de dados por negócio.
- Provedor de pagamentos e assinaturas.
- Integrações externas.

Essas escolhas deverão ser documentadas quando houver informações suficientes para justificá-las.

## 14. Princípio Arquitetural

O AgendaPro será desenvolvido de maneira incremental: primeiro, uma base visual consistente e bem estruturada; depois, funcionalidades reais, persistência e segurança; por fim, recursos comerciais e expansão.

A arquitetura deve resolver as necessidades atuais sem impedir a evolução futura, evitando complexidade prematura.
