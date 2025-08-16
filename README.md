
# Checklist Interativo de Sala de Aula

## Visão Geral
Site interativo para avaliação da organização de salas de aula. Permite marcar respostas **Sim** ou **Não**, salvando automaticamente em um **Excel** com cores: verde para “Sim” e vermelho para “Não”.  

**Tecnologias:** HTML, CSS, JavaScript (frontend) e Python + Flask + openpyxl (backend).

---

## Funcionalidades
- Exibição dinâmica de perguntas via Flask/Jinja2.
- Registro de respostas no Excel com cores.
- Feedback visual imediato no frontend.
- Criação automática do Excel se não existir.

---

## Estrutura do Projeto
```
excel/
├─ app.py
├─ Checklist_Sala_de_Aula_Sim_Nao.xlsx
├─ templates/
│   └─ index.html
└─ static/
    ├─ style.css
    └─ script.js
```

---

## Instalação

1. Navegue até a pasta do projeto:
```bash
cd C:\pasta_do_arquivo
```

2. Instale as dependências:
```bash
pip install flask flask-cors openpyxl
```

---

## Como Executar

```bash
python app.py
```

Abra o navegador em `http://127.0.0.1:5000/`, preencha o checklist e veja as respostas refletidas no Excel.

---

## Personalizações
- Adicionar mais perguntas em `app.py`.
- Alterar cores no `style.css` ou via `PatternFill` no backend.
- Integrar gráficos com Chart.js.
- Implementar modo noturno via CSS/JS.
