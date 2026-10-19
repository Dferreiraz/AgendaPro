# AgendaPro — Requisitos do Sistema

## 1. Objetivo

Este documento define os requisitos funcionais, não funcionais e as regras de negócio do AgendaPro.

O AgendaPro tem como objetivo facilitar o gerenciamento de agendamentos para pequenos negócios, centralizando informações de clientes, serviços e atendimentos em uma aplicação web.

Os requisitos serão implementados progressivamente. A presença de um requisito neste documento significa que ele está planejado ou especificado, não necessariamente que já esteja disponível na aplicação.

## 2. Escopo do Produto

### 2.1. Escopo inicial

A próxima etapa consiste na reconstrução do front-end com React, Vite e Tailwind CSS.

O trabalho deverá estabelecer:

- Uma nova experiência visual.
- Uma interface responsiva.
- Componentes reutilizáveis.
- Navegação consistente.
- Páginas organizadas.
- Estados visuais para carregamento, erros e ausência de dados.
- Uma estrutura preparada para futura integração com backend.

### 2.2. Escopo funcional do MVP

O MVP funcional deverá evoluir para permitir:

- Gerenciar clientes.
- Gerenciar serviços.
- Criar, consultar, editar e cancelar agendamentos.
- Visualizar os agendamentos de forma organizada.
- Pesquisar e filtrar registros.
- Validar informações.
- Impedir conflitos de horários conforme as regras de disponibilidade definidas.
- Persistir os dados.
- Autenticar usuários e restringir operações conforme suas permissões.

A implementação ocorrerá por etapas, conforme o roadmap.

### 2.3. Fora do escopo inicial

Os seguintes recursos não são obrigatórios para concluir a reconstrução visual nem o primeiro MVP:

- Cobrança recorrente.
- Gestão completa de assinaturas.
- Pagamentos online.
- Integração com Google Calendar.
- Integração automatizada com WhatsApp.
- Relatórios avançados.
- Aplicativo móvel nativo.
- Gestão avançada de equipe.
- Administração de múltiplos clientes SaaS.

Esses recursos poderão ser incorporados em versões posteriores.

## 3. Perfis de Usuário

### 3.1. Proprietário ou administrador do negócio

Deverá futuramente poder:

- Acessar o painel do negócio.
- Gerenciar clientes e serviços.
- Organizar os agendamentos.
- Consultar indicadores básicos.
- Configurar informações do negócio.
- Gerenciar acessos, quando houver suporte a equipe.

### 3.2. Integrante da equipe

Perfil previsto para evolução futura.

Poderá receber permissões específicas para visualizar ou gerenciar agendamentos e atendimentos, conforme as regras de acesso definidas pelo negócio.

### 3.3. Cliente final

O cliente é a pessoa que recebe o atendimento. Inicialmente, suas informações poderão ser cadastradas pelo responsável pelo negócio.

Um fluxo de agendamento online realizado diretamente pelo cliente poderá ser desenvolvido posteriormente, caso seja confirmado como requisito comercial.

## 4. Requisitos Funcionais

### RF-01 — Landing page

A aplicação deverá apresentar uma página pública que explique a proposta do AgendaPro.

A página deverá contemplar:

- Apresentação do produto.
- Benefícios e funcionalidades.
- Chamadas para ação.
- Navegação entre seções.
- Layout responsivo.

Links de cadastro e acesso deverão conduzir a fluxos reais quando estes estiverem implementados. Enquanto isso, a interface deverá indicar claramente quais ações ainda são demonstrativas.

### RF-02 — Acesso à aplicação

A aplicação deverá possuir uma interface de login.

Quando a autenticação for implementada, deverá permitir:

- Validar as credenciais.
- Informar erros de autenticação.
- Controlar o estado de carregamento.
- Restringir o acesso às páginas privadas.
- Encerrar a sessão de forma segura.

O cadastro de usuários e a recuperação de senha dependerão da definição do fluxo de autenticação.

### RF-03 — Dashboard

O painel deverá apresentar uma visão resumida da operação.

Indicadores previstos:

- Total de agendamentos em um período.
- Agendamentos do dia.
- Atendimentos concluídos.
- Agendamentos cancelados.
- Próximos atendimentos.

Os indicadores deverão refletir dados reais quando houver persistência. Antes disso, dados simulados deverão ser identificados como demonstração.

### RF-04 — Gestão de clientes

O sistema deverá permitir:

- Cadastrar clientes.
- Consultar os dados cadastrados.
- Editar informações.
- Excluir ou desativar registros conforme a política definida.
- Pesquisar clientes.
- Validar os campos obrigatórios.

Os campos iniciais previstos são nome, telefone e e-mail opcional. Outros dados dependerão de uma necessidade concreta.

A política de exclusão deverá considerar os agendamentos associados e a necessidade de preservar o histórico.

### RF-05 — Gestão de serviços

O sistema deverá permitir:

- Cadastrar serviços.
- Consultar serviços.
- Editar serviços.
- Ativar ou desativar serviços.
- Informar nome, descrição opcional, duração e preço.
- Validar dados obrigatórios.

A duração e o estado do serviço deverão ser considerados na criação de novos agendamentos.

A alteração ou desativação de um serviço não deverá modificar indevidamente os dados históricos dos atendimentos.

### RF-06 — Gestão de agendamentos

O sistema deverá permitir:

- Criar agendamentos.
- Consultar agendamentos.
- Editar data, horário, cliente ou serviço, conforme as regras.
- Cancelar agendamentos.
- Consultar o status do atendimento.
- Pesquisar e filtrar registros.

Um agendamento deverá relacionar um cliente, um serviço, uma data, um horário e um status.

Os status iniciais propostos são:

- Agendado.
- Confirmado.
- Concluído.
- Cancelado.

Outros estados, como ausência do cliente, poderão ser avaliados futuramente.

### RF-07 — Validação de conflitos

O sistema deverá verificar se um novo agendamento ou uma alteração conflita com outro compromisso incompatível.

A verificação deverá considerar:

- Data e horário.
- Duração do serviço.
- Agendamentos existentes que ocupem o mesmo intervalo.
- Situações que não devem bloquear horários, como cancelamentos.
- Disponibilidade do profissional, caso a gestão de equipe seja implementada.

A validação deverá ocorrer no backend quando houver integração com a API. A interface poderá oferecer validações antecipadas, mas não deverá ser a única responsável por garantir a integridade.

### RF-08 — Pesquisa e filtros

O sistema deverá permitir pesquisar e filtrar registros relevantes.

Os filtros de agendamentos poderão incluir:

- Período.
- Status.
- Cliente.
- Serviço.

A pesquisa deverá apresentar estados claros para resultados encontrados, lista vazia e erros de carregamento.

### RF-09 — Configurações

A aplicação deverá oferecer uma área de configurações para organizar as preferências do negócio.

As configurações iniciais poderão incluir:

- Nome do negócio.
- Informações de contato.
- Preferências básicas de exibição.

Horários de funcionamento, disponibilidade detalhada e personalização visual poderão ser implementados conforme a evolução do sistema.

### RF-10 — Gestão de equipe

A interface de gestão de equipe poderá ser preparada visualmente, mas sua implementação funcional está adiada.

Quando desenvolvida, deverá contemplar cadastro de integrantes, associação ao negócio e definição de permissões. A associação de profissionais a serviços e agendamentos dependerá das regras definidas para essa etapa.

### RF-11 — Persistência de dados

Após a integração com banco de dados, os registros deverão continuar disponíveis após atualizar a página, encerrar a sessão ou acessar a aplicação novamente, respeitando as permissões de acesso.

O banco de dados relacional previsto é PostgreSQL.

### RF-12 — Isolamento por negócio

Quando o sistema suportar múltiplos negócios, cada negócio deverá acessar apenas os dados que lhe pertencem ou aos quais tenha autorização explícita.

A verificação deverá ser aplicada no backend e, quando aplicável, reforçada por mecanismos de segurança do banco de dados.

### RF-13 — White label

Em uma etapa posterior, a solução deverá permitir personalizar elementos da identidade visual e as informações de cada negócio.

A extensão da personalização — logotipo, cores, domínio e outros elementos — será definida antes da implementação.

### RF-14 — SaaS e assinaturas

Na fase SaaS, o sistema poderá oferecer:

- Cadastro e gerenciamento de negócios.
- Planos e limites de utilização.
- Controle de assinaturas.
- Permissões por perfil.
- Painel administrativo.
- Cobrança recorrente.

Esse requisito depende da definição do modelo comercial e do provedor de pagamentos.

### RF-15 — Recursos avançados

São recursos candidatos a versões futuras:

- Confirmações por e-mail.
- Notificações por WhatsApp.
- Cancelamento e reagendamento por links.
- Histórico de atendimentos.
- Relatórios exportáveis em PDF.
- Registro de atividades.
- Backups e recuperação.
- Integração com Google Calendar.
- Pagamentos online.

Cada integração deverá possuir requisitos próprios antes de ser desenvolvida.

## 5. Requisitos Não Funcionais

### RNF-01 — Responsividade

A interface deverá funcionar em computadores, tablets e celulares, com navegação e conteúdo adaptados às diferentes larguras de tela.

### RNF-02 — Usabilidade

As ações principais deverão ser claras, consistentes e fáceis de localizar. Formulários deverão apresentar rótulos, validações e mensagens compreensíveis.

### RNF-03 — Acessibilidade

A aplicação deverá priorizar:

- HTML semântico.
- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- Rótulos associados aos campos.
- Mensagens de erro compreensíveis.
- Uso apropriado de atributos acessíveis.

### RNF-04 — Manutenibilidade

O código deverá seguir padrões consistentes de nomenclatura, organização de arquivos e separação de responsabilidades.

A lógica de negócio não deverá ficar desnecessariamente acoplada aos elementos visuais.

### RNF-05 — Desempenho

A aplicação deverá evitar carregamentos e renderizações desnecessários e manter uma experiência fluida nas operações comuns.

Métricas e metas quantitativas de desempenho deverão ser definidas antes da preparação para produção.

### RNF-06 — Segurança

A aplicação deverá proteger sessões, validar dados, aplicar autorização no servidor e evitar a exposição de segredos.

Dados pessoais deverão ser tratados com cuidado, com acesso restrito e coleta limitada ao necessário.

### RNF-07 — Integridade dos dados

O sistema deverá prevenir referências inválidas, inconsistências entre entidades e conflitos de agendamento.

Restrições do banco de dados deverão complementar as validações da aplicação.

### RNF-08 — Compatibilidade

A interface deverá ser testada nos navegadores modernos definidos como suportados para a versão.

### RNF-09 — Observabilidade

Quando o backend for implementado, erros relevantes deverão poder ser identificados sem registrar senhas, tokens ou outros dados sensíveis.

### RNF-10 — Recuperação

Antes da produção, deverão existir procedimentos definidos para backup, restauração e recuperação de falhas do banco de dados.

### RNF-11 — Privacidade e conformidade

O tratamento de dados pessoais deverá considerar a legislação aplicável, incluindo a LGPD, quando pertinente.

### RNF-12 — Versionamento

As alterações deverão ser registradas no Git, com commits descritivos e documentação atualizada quando decisões arquiteturais ou comportamentos relevantes forem modificados.

## 6. Regras de Negócio

### RN-01 — Dados obrigatórios

Não será permitido salvar registros sem os campos obrigatórios definidos para cada entidade.

### RN-02 — Validade dos horários

Os agendamentos deverão utilizar datas e horários válidos e obedecer às regras de disponibilidade que forem configuradas.

### RN-03 — Duração do serviço

A duração cadastrada para o serviço deverá ser considerada na ocupação do horário.

### RN-04 — Conflitos

Agendamentos incompatíveis não deverão ocupar o mesmo intervalo para o mesmo recurso de atendimento. A definição de quais recursos podem atender simultaneamente dependerá do modelo de negócio e da futura gestão de equipe.

### RN-05 — Cancelamentos

O cancelamento deverá atualizar o estado do agendamento e permitir que o horário volte a ser considerado disponível, quando aplicável.

### RN-06 — Histórico

Alterações de serviços ou clientes não deverão modificar indevidamente o histórico de agendamentos. A estratégia de exclusão e preservação será definida na modelagem de dados.

### RN-07 — Autorização

Nenhum usuário deverá executar operações para as quais não tenha permissão.

### RN-08 — Isolamento

Quando houver múltiplos negócios, as operações deverão respeitar o contexto e a autorização do negócio associado.

### RN-09 — Indicadores

Os indicadores do dashboard deverão ser calculados a partir de dados consistentes e de períodos claramente definidos.

## 7. Critérios de Aceitação da Fase 2

A reconstrução do front-end será considerada concluída quando:

- [ ] O projeto estiver configurado com React, Vite e Tailwind CSS.
- [ ] A estrutura de pastas e os padrões de nomenclatura estiverem definidos.
- [ ] O novo design tiver sido planejado no Figma.
- [ ] Os componentes compartilhados principais estiverem implementados.
- [ ] A landing page estiver reconstruída.
- [ ] A tela de login estiver reconstruída visualmente.
- [ ] O dashboard estiver reconstruído.
- [ ] As telas de clientes e serviços estiverem reconstruídas.
- [ ] A tela de agendamentos estiver reconstruída.
- [ ] A tela de configurações estiver reconstruída.
- [ ] A navegação entre as páginas estiver funcionando.
- [ ] Os layouts tiverem sido avaliados em telas de diferentes tamanhos.
- [ ] Os estados vazios, de carregamento e de erro relevantes estiverem representados.
- [ ] O projeto estiver versionado no Git.
- [ ] A documentação estiver alinhada à implementação.

A conclusão desta fase não significa que autenticação, banco de dados ou todas as operações de CRUD já estejam funcionais.

## 8. Critérios de Aceitação do MVP Funcional

O MVP funcional será considerado pronto quando:

- [ ] Clientes puderem ser cadastrados, consultados e editados.
- [ ] Serviços puderem ser cadastrados, consultados e editados.
- [ ] Agendamentos puderem ser criados, consultados, alterados e cancelados.
- [ ] Os dados forem persistidos no banco de dados.
- [ ] As validações obrigatórias forem aplicadas.
- [ ] Os conflitos de horários forem tratados conforme as regras definidas.
- [ ] A autenticação e as permissões essenciais estiverem implementadas.
- [ ] As operações estiverem protegidas no backend.
- [ ] Os fluxos principais tiverem sido testados.
- [ ] Os dados de um negócio estiverem protegidos contra acesso indevido.

## 9. Priorização

| Prioridade | Escopo |
|---|---|
| P0 — Essencial para a Fase 2 | Novo front-end, componentes, navegação e responsividade |
| P1 — Essencial para o MVP | CRUD, agendamentos, validações e persistência |
| P1 — Essencial para uso privado | Autenticação, autorização e integridade dos dados |
| P2 — Evolução do produto | Equipe, configurações avançadas e melhorias operacionais |
| P3 — Evolução comercial | White label, SaaS, assinaturas e integrações avançadas |

A prioridade indica a ordem geral de implementação. A sequência detalhada será acompanhada no `ROADMAP.md`.

## 10. Controle de Alterações

Este documento deverá ser atualizado quando:

- Um requisito for alterado, adicionado ou removido.
- Uma regra de negócio for definida com maior precisão.
- Uma decisão técnica alterar o comportamento do produto.
- Uma funcionalidade planejada for concluída ou retirada do escopo.

Os requisitos devem acompanhar a evolução real do AgendaPro e servir como referência para implementação, testes e validação.
